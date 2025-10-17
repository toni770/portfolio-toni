"use client";
import React, { useRef } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import Config from "../config";
import { texts } from "../texts";
import { highlightText } from "../utils";

// Contact Page.
const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row w-full ">
      <div
        ref={formRef}
        className=" md:flex-1 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] md:h-auto pt-15 md:pt-0 md:pb-10 md:pl-7 flex flex-col gap-2 justify-center items-center md:items-start order-2 md:order-1"
      >
        <h1 className="hidden md:block text-8xl w-1/2 leading-[0.7em] pb-10 pt-5">
          {highlightText(texts.contact.title)}
        </h1>
        <ContactForm />
      </div>
      <div className="md:flex-1 bg-purple md:h-auto pt-15 pb-10 px-7 flex flex-col  h-[100vh] justify-between text-black bg-[url('/bgGradient.png')] bg-cover order-1 md:order-2">
        <div>
          <h1 className="block md:hidden text-8xl w-1/2 leading-[0.7em] pb-10 pt-5">
            {highlightText(texts.contact.title)}
          </h1>
          <p className="w-[100%] md:w-[50%]">{texts.contact.subtitle}</p>
          <Button
            text="Escríbeme"
            className="w-[50%] border-black mt-7 md:hidden text-black"
            onClick={handleScroll}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex gap-2 items-center">
            <EnvelopeIcon className="w-5 h-5" />
            <p>{Config.contact.email}</p>
          </div>
          <div className="flex gap-2 items-center">
            <PhoneIcon className="w-5 h-5" />
            <p>{Config.contact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
