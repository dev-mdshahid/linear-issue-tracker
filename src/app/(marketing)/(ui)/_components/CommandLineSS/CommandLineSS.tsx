import Image from "next/image";
import React from "react";
import { FaKaggle } from "react-icons/fa6";
import { FiCommand } from "react-icons/fi";

export default function CommandLineSS() {
  return (
    <section className="section-container mx-auto max-w-screen-xl">
      {/* Icons */}
      <div className="flex items-center justify-center gap-5">
        <div className="bg-dark-100 rounded-md p-5 text-3xl">
          <FiCommand />
        </div>
        <div className="bg-dark-100 rounded-md p-5 text-3xl">
          <FaKaggle />
        </div>
      </div>

      {/* Title & description */}
      <h2 className="section-title mt-10 text-center">
        Meet your command line
      </h2>
      <p className="section-description text-center">
        Any action can be accessed and completed in seconds with the command
        menu
      </p>

      {/* command line ss */}
      <div className="mt-16 rounded-xl bg-gradient-to-br from-primary-from via-pink-600 to-primary-to p-2 pt-6 sm:p-10 lg:p-32">
        <Image
          src={"/images/screenshots/command-line-ss.png"}
          alt="Linear command line ss"
          className="w-full"
          width={768}
          height={502}
        />
      </div>
    </section>
  );
}
