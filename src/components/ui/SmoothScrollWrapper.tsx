"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cast to any to avoid type mismatch with library types
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#smooth-scroll")!,
      smooth: true,
      multiplier: 1.2,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    } as any);

    return () => scroll.destroy();
  }, []);

  return <div id="smooth-scroll" data-scroll-container>{children}</div>;
}
