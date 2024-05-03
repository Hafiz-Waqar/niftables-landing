import React from "react";
import Image from "next/image";
import { headerData } from "./data";
import { Sidebar } from "./sidebar";

export const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between gap-5 px-6 py-5 backdrop-blur-[8px] xl:px-8">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={1000}
        height={100}
        className="h-10 w-[140px] cursor-pointer"
      />
      <div className="hidden items-center gap-10 lg:flex">
        {headerData.map((data, index) => (
          <div
            key={index}
            className="flex w-fit cursor-pointer gap-1 font-satoshi_bold text-lg font-bold text-white"
          >
            <p>{data.name}</p>
            {data.soon && (
              <div className="flex h-[14px] items-center justify-center rounded-full bg-black px-1 py-0.5">
                <span className="text-[10px] text-purple-shade-1">SOON</span>
              </div>
            )}
          </div>
        ))}
        <button className="transs flex h-11 w-[144px] flex-shrink-0 items-center justify-center rounded-md border-2 border-white font-satoshi_bold text-lg font-bold text-white">
          Connect
        </button>
      </div>
      <div className="flex lg:hidden">
        <Sidebar />
      </div>
    </div>
  );
};
