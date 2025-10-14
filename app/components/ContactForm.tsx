"use client";
import React, { useRef, useState } from "react";
import Input from "./Input";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import { texts } from "../texts";
import ReCAPTCHA from "react-google-recaptcha";

// Contact Form.
const ContactForm = () => {
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
      if (!recaptchaRef.current) return;

      const token = await recaptchaRef.current.executeAsync();

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          captchaToken: token,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

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
      setStatus({
        message: err.message,
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

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <form className="flex flex-col gap-7 md:gap-4 w-[80%]" onSubmit={SendMail}>
      <div className="flex flex-col md:flex-row gap-7 md:gap-2">
        <Input
          className="flex-1"
          label={texts.contact.form.nameLabel}
          type="text"
          icon={<UserIcon className="w-5 h-5 text-darkGray" />}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
        />
        <Input
          className="flex-1"
          label={texts.contact.form.phoneLabel}
          type="phone"
          icon={<PhoneIcon className="w-5 h-5 text-darkGray" />}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="phone"
        />
      </div>

      <Input
        className="flex-1"
        label={texts.contact.form.emailLabel}
        type="email"
        icon={<EnvelopeIcon className="w-5 h-5 text-darkGray" />}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name="email"
      />
      <Input
        className="flex-1"
        label={texts.contact.form.messageLabel}
        type="textArea"
        icon={<ChatBubbleLeftIcon className="w-5 h-5 text-darkGray" />}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        name="message"
      />
      <p
        className={
          status.type === "success" ? "text-green-300" : "text-red-300"
        }
      >
        {status.message}
      </p>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        size="invisible"
        badge="bottomright"
      />

      <Button
        text={texts.contact.form.submitLabel}
        disabled={sending}
        className="w-[30%] p-3 px-30 border-white mb-10 md:mb-0"
      />
    </form>
  );
};

export default ContactForm;
