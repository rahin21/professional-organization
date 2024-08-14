import React from "react";
import heroImage from "/public/about/hero.png";
import clientImage from "/public/home/author.png";
import Image from "next/image";

function ClientInfo() {
  return (
    <div className=" -mt-[20rem]">
      <div className="bg-white/70 w-full lg:h-[70rem] h-full bg-cover bg-center relative flex flex-col items-center justify-center">
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover absolute -z-10"
        />
      <div className="container flex lg:flex-row flex-col justify-center items-center lg:items-start gap-20 z-10 relative mt-80 lg:mb-0 mb-20">
        <Image src={clientImage} alt="client" width={450} />
        <div className="flex flex-col gap-5 text-base lg:text-start text-center">
          <h1 className="text-5xl font-medium">Meet Gina Adair</h1>
          <p>
            First and foremost, Gina Adair is a proud wife and mother to four
            adult children! She is an avid animal lover and enjoys spending time
            cuddled up to her senior cat Sophia.
          </p>

          <p>
            Gina is a passionate Registered Nurse of 34 years and still enjoys
            her profession, which includes productivity management in the
            medical space. She’s always found that creating productive
            environments and organizing spaces a therapeutic and relaxing
            process. Both professions feed her desire to improve peoples life
            and aim to create healthy routines and reduce the stress of life.{" "}
          </p>

          <p>
            “Hi there! Welcome to my business, All Things In Place. I’m so proud
            to be considered for helping you create convenience and organization
            in your life. I look forward to honoring your space with hard work,
            reliability, and trustworthy services.{" "}
          </p>

          <p>
            I truly believe in the power of partnership and sometimes, these
            complicated projects require collaboration, motivation and
            assistance. Whether you know what you want and how you want it — or
            you just know you need a change — we can work side-by-side to create
            a life less frenzied! I’m looking forward to it.” — Gina Adair
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ClientInfo;
