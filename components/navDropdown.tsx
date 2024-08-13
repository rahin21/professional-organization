"use client";

import * as React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSettings4Fill } from "react-icons/ri";
import { FaExclamationCircle } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export function NavDropdown() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  function menuToggle() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex justify-center items-center text-base gap-1 py-2 px-4">
          Menu <IoMdArrowDropdown className="text-white text-base mt-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="text-base font-semibold ">
          <Link href={'/our-services'} className="flex">
            <RiSettings4Fill className="mt-1 me-2" /> Our Services
          </Link>{" "}
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base font-semibold ">
          <Link href={'/about'} className="flex">
            <FaExclamationCircle className="mt-1 me-2 text-lg" /> About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-base font-semibold">
          <Button className="uppercase text-sm py-2 px-4">Book A Consult</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
