import React, { useState, useEffect } from "react";

export default function useIsMobile(screenSize) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth < screenSize) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return isMobile;
}
