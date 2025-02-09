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
    <div className="bg-dark-100 flex flex-col gap-4 rounded-md p-12">
      <span className="text-3xl text-primary-from">{icon}</span>

      <h4 className="text-xl font-bold">{title}</h4>

      <p className="text-lg text-[#A7A9BE]">{description}</p>
    </div>
  );
}
