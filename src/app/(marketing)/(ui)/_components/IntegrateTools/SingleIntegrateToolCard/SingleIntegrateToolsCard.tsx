import Image from "next/image";
import React from "react";

export type TSingleIntegrateToolsCard = {
  title: string;
  description: string;
  logos: string[];
  ss: string;
};

export default function SingleIntegrateToolsCard({
  title,
  description,
  logos,
  ss,
}: TSingleIntegrateToolsCard) {
  return (
    <div className="bg-dark-200 grid gap-5 overflow-hidden rounded-lg lg:grid-cols-2">
      <div className="my-auto space-y-4 p-10 lg:p-20">
        <div className="mb-10 flex items-center justify-center gap-10 lg:justify-start">
          {logos.map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={"Tool logo"}
              height={50}
              width={50}
            />
          ))}
        </div>

        <h4 className="text-2xl font-bold leading-snug lg:text-3xl">{title}</h4>

        <p className="mx-auto max-w-lg text-center text-[#A7A9BE] lg:text-left">
          {description}
        </p>
      </div>
      <Image
        className="w-full"
        src={ss}
        alt={title + " Screenshot"}
        height={400}
        width={550}
      />
    </div>
  );
}
