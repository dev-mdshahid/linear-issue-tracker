import { cn } from "@/utilities/cn";
import Image from "next/image";
import React from "react";

export type TSingleFeatureSection = {
  sectionTitle: string;
  sectionFeatures: string[];
  img: string;
  imgPosition: "left" | "right";
  bg: "lighter" | "darker";
};

export default function SingleFeatureSection({
  img,
  sectionFeatures,
  sectionTitle,
  imgPosition,
  bg,
}: TSingleFeatureSection) {
  return (
    <div
      className={cn({
        "bg-black": bg === "darker",
        "bg-dark-200": bg === "lighter",
      })}
    >
      <section className="section-container max-width flex flex-col items-center justify-between gap-20 md:flex-row">
        <div className="max-w-md">
          <h1 className="section-title">{sectionTitle}</h1>
          <div className="grid gap-8">
            {sectionFeatures.map((feature, index) => (
              <p key={index} className="text-lg text-[#A7A9BE]">
                {/* Making the first sentence bold */}
                <strong className="font-extrabold text-white">
                  {feature.split(".")[0]}.
                </strong>
                {feature.split(".").slice(1).toString()}
              </p>
            ))}
          </div>
        </div>

        <Image
          src={img}
          height={600}
          width={700}
          className={cn("col-span-2 w-full flex-grow", {
            "order-first": imgPosition === "left",
          })}
          alt={sectionTitle + " Screenshot"}
        />
      </section>
    </div>
  );
}
