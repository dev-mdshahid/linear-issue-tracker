import { BsMicrosoftTeams } from "react-icons/bs";
import {
  FaBoltLightning,
  FaKeyboard,
  FaMoon,
  FaPeopleGroup,
} from "react-icons/fa6";
import { IoCloudOffline } from "react-icons/io5";

export const featuresData = [
  {
    id: 1,
    icon: <FaBoltLightning />,
    title: "Built for speed",
    description:
      "Synchronized in real-time across all users. No spinners or waiting.",
  },
  {
    id: 2,
    icon: <FaKeyboard />,
    title: "Keyboard first design",
    description: "Optimized for efficiency with extensive keyboard shortcuts.",
  },
  {
    id: 3,
    icon: <FaPeopleGroup />,
    title: "For software teams",
    description: "Created by software people for software product teams.",
  },
  {
    id: 4,
    icon: <IoCloudOffline />,
    title: "Works offline",
    description: "Access and make changes with or without internet access.",
  },
  {
    id: 5,
    icon: <FaMoon />,
    title: "Light and dark UI",
    description: "We have multiple themes. Use light or dark, your choice.",
  },
  {
    id: 6,
    icon: <BsMicrosoftTeams />,
    title: "Multiple teams",
    description: "Have all your teams in one shared workspace.",
  },
];
