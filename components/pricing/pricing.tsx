import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { pricings } from "@/constants/pricingData";
import Link from "next/link";
import { Button } from "../ui/button";

function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="lg:m-10 md:m-0 m-5 flex md:flex-row flex-col md:items-start items-center justify-center">
        {pricings.map((pricing, i) => (
          <Card
            key={i}
            className="text-center md:w-[30%] border-none shadow-none"
          >
            <CardHeader className="flex flex-col items-center">
              <Image
                src={pricing.image}
                alt={"pricing image"}
                width={400}
                height={400}
                className="rounded-full"
              />
              <CardDescription className="text-lg w-full ">
                {pricing.title}
              </CardDescription>
              <CardTitle className="py-3 text-3xl">{pricing.price}</CardTitle>
              <CardDescription className="text-base w-full ">
                {pricing.subTitle}{" "}
              </CardDescription>
              <CardContent className="lg:p-6 md:p-0">
                {pricing.descriptions.map((description, i) => (
                  <CardDescription key={i} className="py-3 w-full ">
                    {description}
                  </CardDescription>
                ))}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
        <Link href={"/contact"} className="md:mt-20 ">
          <Button className="uppercase px-16 py-8"> Book a consult </Button>
        </Link>
    </div>
  );
}

export default Pricing;
