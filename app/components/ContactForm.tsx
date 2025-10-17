"use client";
import React, { useState } from "react";
import Input from "./Input";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import { texts } from "../texts";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import emailjs from "@emailjs/browser";
import Config from "../config";

// Contact Form.
const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sending, setSending] = React.useState(false);

  async function SendMail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      setSending(true);
      if (!executeRecaptcha) return;

      const token = await executeRecaptcha("contact_form");
      const response = await fetch("api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }
      //Send Mail
      await emailjs.sendForm(
        Config.emailjs.serviceId,
        Config.emailjs.templateId,
        form,
        Config.emailjs.publicKey
      );

      form.reset();
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setStatus({
        message: "Mensaje enviado correctamente!",
        type: "success",
      });
    } catch (err) {
      console.log(err);
      setStatus({
        message: "Error inesperado.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  }

  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  }>({
    message: "",
    type: "success",
  });

  return (
    <form className="flex flex-col gap-7 md:gap-4 w-[80%]" onSubmit={SendMail}>
      <div className="flex flex-col md:flex-row gap-7 md:gap-2">
        <Input
          className="flex-1"
          label={texts.contact.form.name.label}
          type="text"
          icon={<UserIcon className="w-5 h-5 text-white" />}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          placeholder={texts.contact.form.name.placeholder}
        />
        <Input
          className="flex-1"
          label={texts.contact.form.phone.label}
          type="phone"
          icon={<PhoneIcon className="w-5 h-5 text-white" />}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="phone"
          placeholder={texts.contact.form.phone.placeholder}
        />
      </div>

      <Input
        className="flex-1"
        label={texts.contact.form.email.label}
        type="email"
        icon={<EnvelopeIcon className="w-5 h-5 text-white" />}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name="email"
        placeholder={texts.contact.form.email.placeholder}
      />
      <Input
        className="flex-1"
        label={texts.contact.form.message.label}
        type="textArea"
        icon={<ChatBubbleLeftIcon className="w-5 h-5 text-white" />}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        name="message"
        placeholder={texts.contact.form.message.placeholder}
      />
      <p
        className={
          status.type === "success" ? "text-green-300" : "text-red-300"
        }
      >
        {status.message}
      </p>

      <Button
        text={texts.contact.form.submitLabel}
        disabled={sending}
        loading={sending}
        className="w-[30%] p-3 px-30 mb-10 md:mb-0 text-gray border-gray"
      />
    </form>
  );
};

export default ContactForm;
