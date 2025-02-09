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
        "relative mx-auto flex w-fit items-center gap-5 rounded-md px-5 py-4 shadow-[0px_0px_30px] shadow-pink-900 transition hover:scale-105",
        className,
      )}
    >
      <Image
        src={"/images/linear-logo-red.png"}
        alt="Linear announcement logo"
        height={24}
        width={24}
      />
      <p className="capitalize">{text}</p>
      <span className="h-3 w-px bg-gray-600"></span>
      <Link href={href ?? ""} className="flex items-center text-primary-from">
        See what&apos;s new
        <IoArrowForwardSharp />
      </Link>
    </div>
  );
}
