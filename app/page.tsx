import React from "react";
import { Header } from "@/components";

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
      </div>
    </main>
  );
}
