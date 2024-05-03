import {
  Active1st,
  Active2nd,
  Active3rd,
  Active4th,
  Disable1st,
  Disable2nd,
  Disable3rd,
  Disable4th,
} from "@/assets";
import React from "react";

export interface IconProps {
  className?: string;
}

export type accordianType = {
  id: number;
  question: string;
  answer: string;
  iconActive: React.FC<IconProps>;
  iconInactive: React.FC<IconProps>;
};

export const accordianData: accordianType[] = [
  {
    id: 1,
    question: "Profitability and Growth",
    answer:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    iconActive: Active1st,
    iconInactive: Disable1st,
  },
  {
    id: 2,
    question: "Transparent & Fair Decentralized Earnings",
    answer:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    iconActive: Active2nd,
    iconInactive: Disable2nd,
  },
  {
    id: 3,
    question: "Launching the future",
    answer:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    iconActive: Active3rd,
    iconInactive: Disable3rd,
  },
  {
    id: 4,
    question: "Limitless Possibilities of AI & Crypto",
    answer:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
    iconActive: Active4th,
    iconInactive: Disable4th,
  },
];
