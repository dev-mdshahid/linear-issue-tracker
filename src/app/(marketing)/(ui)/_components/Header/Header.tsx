import AnnouncementBar from "@/app/_shared/AnnouncementBar/AnnouncementBar";
import Button from "@/app/_shared/Button/Button";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Header() {
  return (
    <section className="max-width">
      <header className="mx-auto max-w-4xl pt-40 text-center">
        {/* New release announcement bar */}
        <AnnouncementBar
          text="Linear Release 2025.02"
          href="/"
          className="mb-14"
        />
        {/* Title & description */}
        <h1 className="mb-8 text-7xl font-black leading-tight text-white">
          The issue tracking <br /> tool you&apos;ll enjoy using.
        </h1>
        <p className="text-2xl leading-relaxed text-gray-400">
          Linear helps streamline software projects, sprints, tasks and bug
          tracking. <br /> It&apos;s built for high-performance teams.
        </p>

        <Button
          variant="primary"
          className="mt-12 rounded-md px-12 py-4 text-lg"
        >
          Sign up for free <IoArrowForwardSharp />
        </Button>
      </header>
    </section>
  );
}
