import { companiesData } from "@/app/(marketing)/(lib)/data/companiesData";
import Image from "next/image";
import React from "react";

export default function Companies() {
  return (
    <section className="max-width bg-black px-5 py-16 text-center">
      <h3 className="mb-16 uppercase leading-relaxed text-primary-to">
        Powering the next generation of the companies
      </h3>

      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 sm:gap-12">
        {/* companies logo */}
        {companiesData.map(({ id, name, logo }) => (
          <Image
            key={id}
            src={logo}
            alt={name + " logo"}
            className="h-fit"
            height={30}
            width={120}
          />
        ))}
      </div>
    </section>
  );
}
