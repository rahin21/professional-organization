import Image from "next/image";
import React from "react";
import serviceImage from "/public/home/service.png";
import { services } from "@/constants/homeServiceData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Service() {
  return (
    <div className="lg:mx-16 mx-8">
      <div className="bg-white/80 w-full lg:h-[50rem] h-full bg-cover bg-center relative flex flex-col items-center justify-center">
          <Image
            src={serviceImage}
            alt="hero image"
            className="w-full h-full object-cover absolute -z-10"
          />
        <div className="z-10 md:flex justify-center gap-5 md:p-5 lg:p-20">
          {services.map((service, index) => (
            <div
              key={service.image}
              className="flex flex-col items-center gap-10 w-full md:w-[30%] "
            >
              <Image
                src={service.image}
                width={250}
                height={250}
                alt="icon 1"
              />
              <h1 className="uppercase text-xl font-semibold text-center">
                {service.title}
              </h1>
              <p className="text-center text-sm px-5 w-full lg:w-[80%] lg:px-0">
                <strong>
                  Step {index === 0 ? "One" : index === 1 ? "Two" : "Three"}:
                </strong>{" "}
                {service.description}{" "}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:pb-10 pb-0 md:py-0 py-10">
          <Button className="md:px-20 md:py-10" >
            <Link href="/our-services">Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Service;
