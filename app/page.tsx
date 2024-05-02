import React from "react";
import { Header } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="h-[970px] bg-[url(/videos/main-background-video.mp4)] bg-cover bg-center">
        <Header />
      </div>
    </main>
  );
}
