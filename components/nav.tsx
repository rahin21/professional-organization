"use client"
import React, { useState } from "react";
import mainLogo from "/public/main-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { NavDropdown } from "./navDropdown";
import { usePathname } from "next/navigation";
import { Darker_Grotesque } from "next/font/google";

const grotesque = Darker_Grotesque({subsets: ["latin"]})

function Nav() {
 const currentPath = usePathname();
 
  return (
    <nav className={`${grotesque.className} z-10 lg:px-12 md:px-8 px-0 relative`}>
      <ul className="flex justify-between items-center py-6">
        <div className="hidden lg:flex gap-10 ">
          <li>
            <Link href={"/our-services"} className={` text-xl font-medium`}>
              Our Services
              <div className={`${currentPath==="/our-services"? "pt-[1px] bg-black" : "py-0"}`}></div>
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-xl font-medium">
              {" "}
              About{" "}
              <div className={`${currentPath==="/about"? "pt-[1px] bg-black" : "py-0"}`}></div>
            </Link>
          </li>
        </div>
        <li>
          <Link href={"/"} className="aspect-square overflow-hidden inline-block md:w-full w-[50%] md:ms-0 ms-5">
            <Image src={mainLogo} width={250} alt="main logo" className="w-full h-full object-cover" />
          </Link>
        </li>
        <li className="hidden lg:block">
          <Button className="uppercase">Book A Consult</Button>
        </li>
        <li  className="block lg:hidden p-5">
          <NavDropdown/>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
