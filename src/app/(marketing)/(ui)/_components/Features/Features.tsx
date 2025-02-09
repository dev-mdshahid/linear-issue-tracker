import { featuresData } from "@/app/(marketing)/(lib)/data/featuresData";
import FeatureCard from "./FeatureCard/FeatureCard";

export default function Features() {
  return (
    <section className="bg-dark-200 section-container">
      <div className="max-width">
        <h2 className="section-title text-center">
          An experience you&apos;d expect from a professional tool.
        </h2>

        <p className="section-description text-center">
          Opinionated and designed for daily use.
        </p>

        <div className="mt-20 grid grid-cols-3 gap-8">
          {featuresData.map(({ id, icon, title, description }) => (
            <FeatureCard
              key={id}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
