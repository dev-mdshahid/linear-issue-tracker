import { TSingleFeatureSection } from "../../(ui)/_components/FeatureSections/SingleFeatureSection/SingleFeatureSection";

type TFeatureSectionsData = TSingleFeatureSection & { id: number };

export const featureSectionsData: TFeatureSectionsData[] = [
  {
    id: 1,
    sectionTitle: "Interface, streamlined",
    sectionFeatures: [
      "Robust. Fast to navigate. Create issues in seconds. Add priorities, labels and estimates.",
      "List and board. See your issues in either a list or board view. ",
    ],
    img: "/images/screenshots/interface-ss.png",
    imgPosition: "right",
    bg: "lighter",
  },
  {
    id: 2,
    sectionTitle: "Build team momentum with Cycles",
    sectionFeatures: [
      "Velocity and estimates. Track your team's workload and velocity.",
      "Automated. Cycles run on an automated schedule, so you can focus on your work.",
    ],
    img: "/images/screenshots/cycles-ss.png",
    imgPosition: "left",
    bg: "darker",
  },
  {
    id: 3,
    sectionTitle: "Set direction with Roadmap",
    sectionFeatures: [
      "Focus on the big picture. Set milestones to tie projects to larger company goals and motivate your team. View all company projects in one streamlined view and easily identify what needs your attention.",
    ],
    img: "/images/screenshots/roadmap-ss.png",
    imgPosition: "right",
    bg: "lighter",
  },
];
