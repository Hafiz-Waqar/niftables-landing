import React, { Suspense } from "react";
import {
  Footer,
  Header,
  Section1st,
  Section2nd,
  Section3rd,
  Section4th,
  Section5th,
  Section6th,
} from "@/components";

export default function Home() {
  return (
    <Suspense>
      <main className="bg-black font-satoshi_regular">
        <div className="relative h-[50dvh] md:h-dvh">
          <video
            loop
            autoPlay={true}
            muted
            id="myVideo"
            className="absolute h-full w-full object-cover"
          >
            <source
              src={"/videos/main-background-video.mp4"}
              type="video/mp4"
            />
          </video>
          <Header />
          <Section1st />
        </div>
        <Section2nd />
        <Section3rd />
        <Section4th />
        <Section5th />
        <Section6th />
        <Footer />
      </main>
    </Suspense>
  );
}
