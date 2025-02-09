import { integrateToolsData } from "@/app/(marketing)/(lib)/data/integrateToolsData";
import React from "react";
import SingleIntegrateToolsCard from "./SingleIntegrateToolCard/SingleIntegrateToolsCard";

export default function IntegrateTools() {
  return (
    <section className="max-width section-container text-center lg:text-left">
      <h2 className="section-title"> Integrated with your tools</h2>
      <p className="section-description max-w-screen-lg">
        Linear keeps everyone aligned and working more efficiently. Engineers,
        designers, and peers - all collaborating in one tool.
      </p>

      <div className="mt-10 grid gap-5 md:gap-8">
        {integrateToolsData.map(({ id, title, description, logos, ss }) => (
          <SingleIntegrateToolsCard
            key={id}
            title={title}
            description={description}
            logos={logos}
            ss={ss}
          />
        ))}
      </div>
    </section>
  );
}
