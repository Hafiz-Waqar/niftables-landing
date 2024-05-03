import React from "react";

export const Section1st = () => {
  return (
    <div className="relative flex h-[calc(100%-64px)] w-full flex-col justify-center px-6 pb-[102px] md:justify-end">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
        <h1 className="text-center font-monument_extended uppercase leading-[110%] text-white [font-size:_clamp(34px,5vw,68px)] lg:text-start">
          The world&apos;s first platform for Tokenizing AI blockchain projects
        </h1>
        <p className="purple-gradient mx-auto w-fit text-center font-satoshi_bold text-[22px] font-bold leading-[28.6px] lg:mx-0 lg:text-start">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </p>
      </div>
    </div>
  );
};
