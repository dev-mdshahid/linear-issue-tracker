import { ReactNode } from "react";

type TFeatureCard = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: TFeatureCard) {
  return (
    <div className="bg-dark-100 flex flex-col gap-4 rounded-xl p-8 md:p-12">
      <span className="text-3xl text-primary-from">{icon}</span>

      <h4 className="text-lg font-bold sm:text-xl">{title}</h4>

      <p className="text-base text-[#A7A9BE] sm:text-lg">{description}</p>
    </div>
  );
}
