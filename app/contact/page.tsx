import React from "react";
import { KeplerStd } from "../fonts";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] w-full bg-white ">
      <div className="flex-1 pt-15 pb-7 pl-7 flex flex-col gap-2 justify-between bg-black">
        <h1 className="text-[6em] w-[50%] leading-[0.7em]">
          Contacta <span className={`${KeplerStd.className}`}>conmigo</span>
        </h1>
        <ContactForm />
      </div>
      <div className="flex-1 bg-purple pt-15 pb-10 px-7 flex flex-col justify-between text-black bg-four-corners">
        <p className="w-[50%]">
          ¿Tienes una pregunta, una idea o un proyecto con el que necesitas
          ayuda?
        </p>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <EnvelopeIcon className="w-5 h-5" />
            <p>info@tonimartin.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <PhoneIcon className="w-5 h-5" />
            <p>+34 671 678 023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
