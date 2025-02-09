import AnnouncementBar from "@/app/_shared/AnnouncementBar/AnnouncementBar";
import Button from "@/app/_shared/Button/Button";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Header() {
  return (
    <section className="max-width px-4">
      <header className="mx-auto max-w-4xl pt-28 text-center sm:pt-40">
        {/* New release announcement bar */}
        <AnnouncementBar
          text="Linear Release 2025.02"
          href="/"
          className="mb-14"
        />
        {/* Title & description */}
        <h1 className="mb-8 text-4xl font-black leading-snug text-white sm:text-5xl lg:text-7xl lg:leading-tight">
          The issue tracking <br /> tool you&apos;ll enjoy using.
        </h1>
        <p className="text-lg text-gray-400 sm:text-xl sm:leading-relaxed lg:text-2xl lg:leading-relaxed">
          Linear helps streamline software projects, sprints, tasks and bug
          tracking. <br /> It&apos;s built for high-performance teams.
        </p>

        <Button
          variant="primary"
          className="mt-12 rounded-md px-8 py-2 text-lg sm:px-12 sm:py-4"
        >
          Sign up for free <IoArrowForwardSharp />
        </Button>
      </header>
    </section>
  );
}
