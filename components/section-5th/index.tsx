import React from "react";
import { cardData } from "./data";
import Image from "next/image";

export const Section5th = () => {
  return (
    <div className="bg-black px-6 py-[156px]">
      <div className="mx-auto grid w-full max-w-[1440px] items-center justify-center gap-10 md:grid-cols-2 md:justify-start lg:grid-cols-3">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="col-span-1 grid h-full w-full max-w-[453px] grid-rows-3 gap-[30px] rounded-md bg-black-shade-1/60 py-[30px] pr-[30px]"
          >
            <div className="pl-[30px]">
              <h3 className="font-monument_extended uppercase leading-[120%] text-white [font-size:_clamp(18px,3vw,38px)]">
                {data.title}
              </h3>
              <p className="purple-gradient mt-[15px] w-fit font-satoshi_bold font-bold leading-[120%] [font-size:_clamp(16px,2vw,22px)]">
                {data.tagline}
              </p>
            </div>

            <div className="row-span-2">
              <Image
                src={data.image_url}
                alt={data.title}
                width={1000}
                height={233}
                className="h-[233px] w-full rounded-r-md object-cover"
              />
            </div>
            <div className="pl-[30px]">
              <p className="leading-[130%] text-white [font-size:_clamp(14px,2vw,18px)]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
