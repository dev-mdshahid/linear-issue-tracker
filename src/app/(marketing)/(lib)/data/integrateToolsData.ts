import { TSingleIntegrateToolsCard } from "../../(ui)/_components/IntegrateTools/SingleIntegrateToolCard/SingleIntegrateToolsCard";

type TIntegrateToolsData = TSingleIntegrateToolsCard & {
  id: number;
};

export const integrateToolsData: TIntegrateToolsData[] = [
  {
    id: 1,
    title: "Automate tracking with GitHub, GitLab and Sentry",
    description: "Linear integrates with your pull requests and Sentry issues.",
    logos: [
      "/images/single-icon-logos/github.png",
      "/images/single-icon-logos/gitlab.png",
      "/images/single-icon-logos/sentry.png",
    ],
    ss: "/images/screenshots/feature-ss-1.png",
  },
  {
    id: 2,
    title: "Preview and embed full Figma designs in Linear.",
    description: "Add Figma links to any issue as you work on your designs.",
    logos: ["/images/single-icon-logos/figma.png"],
    ss: "/images/screenshots/feature-ss-2.png",
  },
  {
    id: 3,
    title: "Get updates and create issues with Slack",
    description:
      "Receive updates directly in your Slack channels and create issues from discussions.",
    logos: ["/images/single-icon-logos/slack.png"],
    ss: "/images/screenshots/feature-ss-3.png",
  },
];
