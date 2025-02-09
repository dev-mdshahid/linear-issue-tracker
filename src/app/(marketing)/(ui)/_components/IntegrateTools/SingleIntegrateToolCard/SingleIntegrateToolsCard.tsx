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
    <div className="bg-dark-200 grid grid-cols-2 gap-5 overflow-hidden rounded-lg">
      <div className="my-auto space-y-4 p-20">
        <div className="mb-10 flex items-center gap-10">
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

        <h4 className="text-3xl font-bold leading-snug">{title}</h4>

        <p className="max-w-lg text-[#A7A9BE]">{description}</p>
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
