import React from "react";
import { TLayout } from "../(lib)/types/type";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";

export default function MarketingLayout({ children }: TLayout) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="h-full flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
