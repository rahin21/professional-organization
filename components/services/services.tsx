import React from "react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { services } from "@/constants/servicesData";
import Link from "next/link";

function Services() {
  return (
    <div className="bg-black/5 p-10 flex flex-col items-center">
      <div className=" flex flex-wrap gap-5 justify-center w-full items-start mt-10">
        {services.map((service, i) => (
          <Card key={i} className="w-[18rem] text-center rounded-none">
            <CardHeader>
              <Image
                src={service.image}
                alt=""
                width={300}
                height={300}
                className="rounded-full"
              />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <Link href="/our-pricing">
        <Button className="uppercase my-10">Our Pricing</Button>
      </Link>
    </div>
  );
}

export default Services;
