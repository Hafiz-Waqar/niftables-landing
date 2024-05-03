import React from "react";
import { accordianType } from "./data";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import clsx from "clsx";

interface Props {
  accordian: accordianType;
  isOpen: boolean;
  onAccordionClick: (id: number) => void;
  icon: React.ReactNode;
}

export const SingleAccordian: React.FC<Props> = ({
  accordian,
  isOpen,
  onAccordionClick,
  icon,
}) => {
  const toggleAccordion = () => {
    onAccordionClick(accordian.id);
  };

  return (
    <div className="border-b border-black-shade-1 py-[30px] last:border-b-0">
      <div className="flex items-center gap-[30px]">
        <div>{icon}</div>
        <div className="flex-grow">
          <div
            className="flex cursor-pointer justify-between gap-10"
            onClick={toggleAccordion}
          >
            <h5 className="font-satoshi_bold font-bold leading-[130%] text-white [font-size:_clamp(16px,2vw,22px)]">
              {accordian.question}
            </h5>
            {isOpen ? (
              <FaChevronUp className="size-5 shrink-0 cursor-pointer text-white" />
            ) : (
              <FaChevronDown className="size-5 shrink-0 cursor-pointer text-white" />
            )}
          </div>
          <div
            className={clsx(
              "mt-7 overflow-hidden",
              isOpen
                ? "max-h-[500px] duration-1000 ease-in-out"
                : "max-h-0 duration-500 ease-in-out",
            )}
          >
            <p className="leading-[130%] text-white [font-size:_clamp(14px,2vw,18px)]">
              {accordian.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
