import React from "react";
import {
  Footer,
  Header,
  Section1st,
  Section2nd,
  Section3rd,
  Section5th,
} from "@/components";

export default function Home() {
  return (
    <main className="font-satoshi_regular">
      <div className="bg-layer relative h-[970px]">
        <video
          loop
          autoPlay={true}
          muted
          id="myVideo"
          className="absolute h-full w-full object-cover"
        >
          <source src={"/videos/main-background-video.mp4"} type="video/mp4" />
        </video>
        <Header />
        <Section1st />
      </div>
      <Section2nd />
      <Section3rd />
      <Section5th />
      <Footer />
    </main>
  );
}
