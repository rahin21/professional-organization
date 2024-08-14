import Image from "next/image";
import React from "react";
import heroImage from "/public/questionnaire/heroImage.png";
import { Button } from "../ui/button";
import Link from "next/link";
import QuestionnaireForm from "./questionnaireForm";

function QuestionnaireHero() {
  return (
    <div className=" -mt-[20rem]">
      <div className="bg-gradient-to-b from-white/70 from-2% via-black/5 to-70% to-black/5 w-full bg-cover bg-center relative flex flex-col items-center justify-start">
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover absolute -z-10"
        />
        <div className="container mb-20">
          <div className="text-center">
            <h1 className="md:text-6xl text-4xl font-medium relative mt-[25rem]">
              Complete the Questionnaire
            </h1>
            <p className="my-10 text-xl">
              Get ahead on our work together by completing our Home Organization
              Questionnaire. This information will guide our consultation and
              plans for your project.
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-center my-20">
            <Link href={"/contact"}>
              <Button className="lg:px-28 lg:py-12 md:mb-0 mb-10">
                {" "}
                Book A Consult{" "}
              </Button>
            </Link>
          </div>
          <QuestionnaireForm />
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireHero;
