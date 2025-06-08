"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import logos from "@/data/logos.json";

export default function LogoScroller() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Blur */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/5 bg-gradient-to-r from-black via-black /60 to-transparent z-10" />
      {/* Right Blur */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-black via-black /60 to-transparent z-10" />

      <div>
        <Marquee gradient={false} speed={50}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 min-w-[120px]"
            >
              <div className="relative w-[120px] h-[40px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 100px, 120px"
                  className={`object-contain ${logo.filterClass}`}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
