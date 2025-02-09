"use client";
import { navData } from "@/app/(marketing)/(lib)/data/navData";
import Button from "@/app/_shared/Button/Button";
import { cn } from "@/utilities/cn";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 /> : <CgMenuRightAlt />}
      </div>

      <ul
        className={cn(
          "fixed right-3 top-12 z-20 space-y-1.5 rounded-md border border-primary-from/40 bg-black p-5 text-sm font-semibold shadow shadow-primary-from",
          {
            "inline-block": isOpen,
            hidden: !isOpen,
          },
        )}
      >
        {navData.map(({ id, name, href }) => (
          <li key={id}>
            <Link href={href}>{name}</Link>
          </li>
        ))}

        <div className="h-px w-full bg-primary-from/50"></div>

        {/* buttons */}
        <Button variant="primary">Sign up</Button>
        <Button variant="secondary">Log in</Button>
      </ul>
    </>
  );
}
