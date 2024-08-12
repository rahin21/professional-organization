import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import authorImage from "/public/home/author.png";
function About() {
  return (
    <div className="container relative lg:flex gap-16 my-20 ">
      <div className="flex flex-col gap-5 lg:text-start text-center text-sm">
        <h1 className="text-4xl font-medium py-5 ">
          Professional <br />
          Home Organizer & <br /> Personal Assistant{" "}
        </h1>
        <p>
          With years of experience in creating fresh spaces and redesigning home
          functionality, Gina Adair founded All Things In Place to bring
          specialized organization and assistance to the DFW-metroplex. lorem100{" "}
        </p>

        <p>
          Our team looks forward to the opportunity for a partnership that
          guides you to a more organized environment and a life less frenzied.{" "}
        </p>
        <div className="">
          <Button className="uppercase md:px-16 md:py-8">About Gina</Button>
        </div>
      </div>
      <div className="aspect-square lg:w-[50%] overflow-hidden inline-block lg:mt-0 mt-10">
        <Image
          src={authorImage}
          alt="Author"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default About;
