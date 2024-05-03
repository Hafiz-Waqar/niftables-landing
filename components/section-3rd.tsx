import React from "react";

export const Section3rd = () => {
  return (
    <div className="bg-black px-6 py-[120px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-20 flex flex-col gap-5">
          <h1 className="text-center font-monument_extended uppercase leading-[110%] text-white [font-size:_clamp(34px,5vw,68px)] lg:text-start">
            Profiting Through
          </h1>
          <div className="flex w-full justify-end">
            <p className="purple-gradient mx-auto w-fit text-center font-monument_extended font-bold leading-[120%] [font-size:_clamp(18px,3vw,38px)] lg:mx-0 lg:text-start">
              AI Innovation & Decentralization
            </p>
          </div>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-3">
          <div className="col-span-2">
            <video
              loop
              autoPlay={true}
              muted
              id="myVideo"
              className="h-full w-full object-cover"
            >
              <source src={"/videos/creon-logo.mp4"} type="video/mp4" />
            </video>
          </div>
          <div className="col-span-2 flex h-full items-center border-l border-r border-black-shade-1 px-[30px] lg:col-span-1">
            <div className="flex flex-col gap-7">
              <h4 className="font-satoshi_bold font-bold leading-[130%] text-white [font-size:_clamp(22px,2vw,18px)]">
                The dynamic community driven business model of the future.
              </h4>
              <p className="leading-[130%] text-white [font-size:_clamp(18px,2vw,14px)]">
                At Creon, we blend the power of AI tools with the dynamic crypto
                and NFT markets, utilizing an innovative business model to drive
                profitability. This approach empowers our community, as our NFT
                and token holders directly benefit from the growth and
                prosperity of the Creon network, creating a win-win scenario for
                both our community and for the projects we launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
