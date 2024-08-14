import Image from "next/image";
import React from "react";
import heroImage from "/public/contact/heroImage.png";
import { Button } from "../ui/button";
import ContactForm from "./contactForm";
import Link from "next/link";

function ContactHero() {
  return (
    <div className=" -mt-[20rem]">
      <div className="bg-gradient-to-b from-white/70 from-2% via-black/5 to-70% to-black/5  w-full h-[100rem] bg-cover bg-center relative flex flex-col items-center justify-start">
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover absolute -z-10"
        />
        <div className="container">
          <div className="text-center">
            <h1 className="md:text-6xl text-5xl font-medium relative mt-[25rem]">
              Book A Consult
            </h1>
            <p className="my-10 text-xl">
              It all starts here! Schedule a 15-minute consult to discuss your
              project, goals, and how to get started.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between my-20">
            <Link href={"/questionnaire"}>
              <Button className="lg:px-28 lg:py-12 md:mb-0 mb-10">
                {" "}
                Complete Questionnaire{" "}
              </Button>
            </Link>
            <Button className="lg:px-28 lg:py-12">
              {" "}
              Download PDF Questionnaire{" "}
            </Button>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
