import React from "react";
import Input from "./Input";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 w-[80%]">
      <div className="flex gap-2">
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
      <button className="border border-white p-3 rounded-4xl bg-black w-[30%] text-center">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
