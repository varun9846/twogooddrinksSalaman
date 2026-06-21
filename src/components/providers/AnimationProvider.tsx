"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AnimationProvider() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return null;
}
