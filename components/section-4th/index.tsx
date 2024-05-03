"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SingleAccordian } from "./single-accordian";
import { accordianData } from "./data";

export const Section4th = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div className="bg-black px-6 pb-9 pt-[115px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-10 lg:flex-row">
        <div className="flex flex-grow flex-col items-center lg:items-start">
          <div className="w-full max-w-[699px]">
            <h2 className="text-center font-monument_extended uppercase leading-[120%] text-white [font-size:_clamp(18px,3vw,38px)] lg:text-start">
              Our vision is to support the innovation of AI blockchain projects{" "}
              <span className="purple-gradient">
                while prioritizing communities and democratizing profits
              </span>
            </h2>
            <Image
              src="/images/section-4th.png"
              alt="creon"
              width={699}
              height={233}
              className="mt-[30px] rounded-md object-cover"
            />
          </div>
        </div>
        <div className="mx-auto flex h-auto w-full max-w-[552px] flex-shrink-0 flex-col gap-[30px] lg:mx-0">
          {accordianData.map((accordian, index) => (
            <SingleAccordian
              key={index}
              accordian={accordian}
              isOpen={accordian.id === activeAccordion}
              icon={
                accordian.id === activeAccordion ? (
                  <accordian.iconActive />
                ) : (
                  <accordian.iconInactive />
                )
              }
              onAccordionClick={handleAccordionClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
