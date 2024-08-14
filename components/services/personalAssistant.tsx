import React from "react";
import personalAssistantImage from "/public/services/personal-assistance.png";
import Image from "next/image";
import { Button } from "../ui/button";

function PersonalAssistant() {
  return (
    <div className="container flex lg:flex-row flex-col justify-between items-center gap-20 mt-20">
      <Image
        src={personalAssistantImage}
        width={600}
        alt="personal assistant"
        className="rounded-md lg:w-[40%]"
      />
      <div className="text-center lg:text-start">
        <h1 className="text-4xl font-medium mb-20">Personal Assistant</h1>
        <div className="flex flex-col gap-8">
          <p>
            All Things In Place aims to facilitate a LIFE less frenzied and
            sometimes, maintaining a clean routine requires managing your to-do
            list.
          </p>

          <p>
            We offer personal assistance services to support your day-to-day
            task list! This includes local errands to the post office,
            laundromat, or shops/boutiques. Gina can also assist with personal
            and family calendar organization.{" "}
          </p>

          <p>
            *These services do not include child transportation or heavy
            cleaning.{" "}
          </p>
        </div>
        <Button className="uppercase mt-20">Book a consult</Button>
      </div>
    </div>
  );
}

export default PersonalAssistant;
