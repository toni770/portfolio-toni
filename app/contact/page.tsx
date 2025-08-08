import React from "react";
import { KeplerStd } from "../fonts";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white ">
      <div className="md:flex-1 h-[calc(100vh-4rem)] md:h-auto pt-15 pb-7 md:pl-7 flex flex-col gap-2 justify-center items-center md:items-start bg-black order-2 md:order-1">
        <h1 className="hidden md:block text-8xl w-1/2 leading-[0.7em] pb-10">
          Contacta <span className={`${KeplerStd.className}`}>conmigo</span>
        </h1>
        <ContactForm />
      </div>
      <div className="md:flex-1 bg-purple md:h-auto pt-15 pb-10 px-7 flex flex-col  h-[100vh] justify-between text-black bg-[url('/bgGradient.png')] order-1 md:order-2">
        <h1 className="block md:hidden text-9xl w-1/2 leading-[0.7em] pb-10">
          Contacta <span className={`${KeplerStd.className}`}>conmigo</span>
        </h1>
        <p className="w-[100%] md:w-[50%]">
          ¿Tienes una pregunta, una idea o un proyecto con el que necesitas
          ayuda?
        </p>
        <Button
          text="Escríbeme"
          className="w-[50%] border-black mt-7 md:hidden"
        />
        <div className="flex flex-col lg:flex-row justify-between">
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
