import React from "react";
import { cardData6th } from "./data";
import Image from "next/image";

export const Section6th = () => {
  return (
    <div className="relative">
      <video
        loop
        autoPlay={true}
        muted
        id="myVideo"
        className="absolute z-10 h-full w-full object-cover"
      >
        <source src={"/videos/roadmap-video.mp4"} type="video/mp4" />
      </video>
      <div className="relative bg-black px-6 py-20">
        <div className="relative z-50 mx-auto grid w-full max-w-[1440px] grid-rows-3 gap-5">
          {cardData6th.map((data, index) => (
            <div
              key={index}
              className="flex h-auto w-full flex-col-reverse items-center gap-5 rounded-md bg-black-shade-1/60 lg:flex-row lg:gap-10 lg:pl-10"
            >
              <div className="flex flex-grow flex-col gap-4 px-6 py-6 lg:px-0">
                <h3 className="font-monument_extended uppercase leading-[120%] text-white [font-size:_clamp(18px,3vw,38px)]">
                  {data.title}
                </h3>
                <p className="leading-[130%] text-white [font-size:_clamp(14px,2vw,18px)]">
                  {data.description}
                </p>
              </div>
              <Image
                src={data.image_url}
                alt={data.title}
                width={1000}
                height={302}
                className="flex h-[302px] w-full flex-shrink-0 rounded-t-md object-cover lg:h-full lg:w-[400px] lg:rounded-r-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
