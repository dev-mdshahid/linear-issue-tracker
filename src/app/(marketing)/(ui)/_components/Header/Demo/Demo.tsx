import Image from "next/image";
import React from "react";

export default function Demo() {
  return (
    <section className="mt-5 w-full bg-[url('/images/bg-gradient.png')] bg-cover bg-center bg-no-repeat pt-20">
      <div className="w-full bg-[url('/images/stage-lines.png')] bg-contain bg-no-repeat py-20">
        <Image
          src={"/images/demo.png"}
          alt="Linear issue tracker demo screenshot"
          className="mx-auto"
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
}
