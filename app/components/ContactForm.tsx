"use client";
import React from "react";
import Input from "./Input";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import { texts } from "../texts";

// Contact Form.
const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function SendMail() {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  }
  return (
    <form className="flex flex-col gap-7 md:gap-4 w-[80%]">
      <div className="flex flex-col md:flex-row gap-7 md:gap-2">
        <Input
          className="flex-1"
          label={texts.contact.form.nameLabel}
          type="text"
          icon={<UserIcon className="w-5 h-5 text-darkGray" />}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          className="flex-1"
          label={texts.contact.form.phoneLabel}
          type="phone"
          icon={<PhoneIcon className="w-5 h-5 text-darkGray" />}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
      </div>

      <Input
        className="flex-1"
        label={texts.contact.form.emailLabel}
        type="email"
        icon={<EnvelopeIcon className="w-5 h-5 text-darkGray" />}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        className="flex-1"
        label={texts.contact.form.messageLabel}
        type="textArea"
        icon={<ChatBubbleLeftIcon className="w-5 h-5 text-darkGray" />}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button
        text={texts.contact.form.submitLabel}
        className="w-[30%] p-3 px-30 border-white mb-10 md:mb-0"
        onClick={SendMail}
      />
    </form>
  );
};

export default ContactForm;
