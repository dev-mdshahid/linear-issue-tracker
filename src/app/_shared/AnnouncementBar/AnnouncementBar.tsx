import { cn } from "@/utilities/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

type TAnnouncementBar = {
  text: string;
  href: string;
  className?: string;
};

export default function AnnouncementBar({
  text,
  href,
  className,
}: TAnnouncementBar) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-fit flex-wrap items-center justify-center gap-1 rounded-md px-5 py-4 shadow-[0px_0px_30px] shadow-pink-900 transition hover:scale-105 sm:gap-5",
        className,
      )}
    >
      <Image
        src={"/images/linear-logo-red.png"}
        alt="Linear announcement logo"
        className="mr-2"
        height={24}
        width={24}
      />
      <p className="text-sm capitalize sm:text-base">{text}</p>
      <span className="hidden h-3 w-px bg-gray-600 sm:block"></span>
      <Link
        href={href ?? ""}
        className="items-center text-primary-from sm:flex"
      >
        <span className="hidden sm:block">See what&apos;s new</span>

        <IoArrowForwardSharp size={20} className="ml-2" />
      </Link>
    </div>
  );
}
