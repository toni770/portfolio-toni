import React from "react";
import Input from "./Input";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-7 md:gap-4 w-[80%]">
      <div className="flex flex-col md:flex-row gap-7 md:gap-2">
        <Input
          className="flex-1"
          label="Nombre"
          type="text"
          icon={<UserIcon className="w-5 h-5 text-darkGray" />}
        />
        <Input
          className="flex-1"
          label="Telefono"
          type="phone"
          icon={<PhoneIcon className="w-5 h-5 text-darkGray" />}
        />
      </div>

      <Input
        className="flex-1"
        label="Correo electronico"
        type="email"
        icon={<EnvelopeIcon className="w-5 h-5 text-darkGray" />}
      />
      <Input
        className="flex-1"
        label="Mensaje"
        type="textArea"
        icon={<ChatBubbleLeftIcon className="w-5 h-5 text-darkGray" />}
      />
      <Button text="Enviar" className="w-[30%] p-3 px-30 border-white" />
    </form>
  );
};

export default ContactForm;
