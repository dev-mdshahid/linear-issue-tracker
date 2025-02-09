import { cn } from "@/utilities/cn";
import React, { ReactNode } from "react";

type TButton = {
  children: ReactNode;
  className?: string;
  variant: "primary" | "secondary";
};

export default function Button({ children, className, variant }: TButton) {
  return (
    <button
      className={cn(
        "mx-auto flex w-fit items-center gap-2 rounded px-5 py-1.5 capitalize",
        className,
        {
          "bg-gradient-to-r from-primary-from to-primary-to transition hover:scale-105":
            variant === "primary",
          "font-bold text-primary-from hover:bg-primary-to/30":
            variant === "secondary",
        },
      )}
    >
      {children}
    </button>
  );
}
