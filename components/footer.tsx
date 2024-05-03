import { Niftables } from "@/assets";
import React from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex h-[84px] w-full items-center bg-black px-6">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-20">
          <p className="leading-[130%] text-white [font-size:_clamp(14px,5vw,16px)]">
            © Creon 2023. All rights reserved.
          </p>
          <div className="mx-auto hidden items-center gap-2.5 lg:flex">
            <div className={icons}>
              <FaTelegramPlane className={innerIcons} />
            </div>
            <div className={icons}>
              <FaDiscord className={innerIcons} />
            </div>
            <div className={icons}>
              <FaTwitter className={innerIcons} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <p className="leading-[130%] text-white [font-size:_clamp(14px,5vw,16px)]">
            Powered by
          </p>
          <Niftables />
        </div>
      </div>
    </div>
  );
};

const icons =
  "flex size-[34px] items-center justify-center rounded-full border-2 border-white";
const innerIcons = "size-4 text-white";
