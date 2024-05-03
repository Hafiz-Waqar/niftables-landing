import React from "react";

export const Section2nd = () => {
  return (
    <div className="bg-black px-6 py-20">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-center font-monument_extended uppercase leading-[110%] text-white [font-size:_clamp(34px,5vw,68px)] lg:text-start">
            creon pass nft
          </h1>
          <hr className="border-black-shade-1" />
          <p className="purple-gradient mx-auto w-fit text-center font-satoshi_bold text-[22px] font-bold leading-[28.6px] lg:mx-0 lg:text-start">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools{" "}
          </p>
          <div className="mt-2.5 flex flex-col items-center gap-2.5 lg:items-start">
            <p className={pCLass}>
              Pre-launch investment opportunities for upcoming AI projects
            </p>
            <p className={pCLass}>
              Free and early access to Creon built AI projects
            </p>
            <p className={pCLass}>
              Higher allocation limits on the Creon AI Launchpad
            </p>
            <p className={pCLass}>
              Revenue share distribution from Creon built AI projects
            </p>
          </div>
          <div className="mx-auto mt-8 w-full max-w-[453px] lg:mx-0">
            <button className="button-gradient flex h-[54px] w-full items-center justify-center rounded-md font-satoshi_bold text-lg font-bold text-white">
              Buy Creon Pass
            </button>
          </div>
        </div>
        <div>
          <video
            loop
            autoPlay={true}
            muted
            id="myVideo"
            className="h-full w-full object-cover"
          >
            <source src={"/videos/nft-video.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

const pCLass =
  "rounded-md border border-black-shade-1 px-[18px] py-[14px] text-lg leading-[23.4px] text-white w-fit";
