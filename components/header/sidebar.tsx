"use client";
import React, { useRef, useState } from "react";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import { IoMdClose } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

import { headerData } from "./data";

export const Sidebar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useOnClickOutside(ref, () => {
    if (sideBarOpen) {
      setSideBarOpen(false);
    }
  });

  return (
    <div>
      <TbMenuDeep
        className="size-10 cursor-pointer text-white"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      />
      <div
        ref={ref}
        className={clsx(
          "absolute top-0 z-[100] flex min-h-screen w-[208px] flex-col justify-between bg-black py-5 duration-500",
          sideBarOpen ? " right-0" : " -right-full",
        )}
      >
        <div>
          <div className="flex items-center justify-end gap-[15px] pr-[15px]">
            <button className="transs flex h-[38px] w-[110px] flex-shrink-0 items-center justify-center rounded-md border-2 border-white font-satoshi_bold text-lg font-bold text-white">
              Connect
            </button>
            <div
              onClick={() => setSideBarOpen(false)}
              className="flex size-[38px] cursor-pointer items-center justify-center rounded-md bg-[#3D8BFF]"
            >
              <IoMdClose className="size-6 text-white" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="mt-[30px] flex w-full max-w-[178px] flex-col justify-end">
              {headerData.map((data, index) => (
                <div
                  key={index}
                  className="flex w-full cursor-pointer gap-1 border-b border-black-shade-1 py-[15px] font-satoshi_bold text-lg font-bold text-white first:border-t"
                >
                  <p>{data.name}</p>
                  {data.soon && (
                    <div className="flex h-[14px] items-center justify-center rounded-full bg-black px-1 py-0.5">
                      <span className="text-[10px] text-purple-shade-1">
                        SOON
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center gap-2.5">
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
    </div>
  );
};

const icons =
  "flex size-[34px] items-center justify-center rounded-full border-2 border-white";
const innerIcons = "size-4 text-white";
