import { breakpoints } from "@/theme/breakpoints";
import { useEffect, useState } from "react";

export default function useBreakpoints() {
  const [screen, setScreen] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > breakpoints.desktop) {
          setScreen("desktop");
          return;
        }

        if (window.innerWidth > breakpoints.tablet) {
          setScreen("tablet");
          return;
        }

        setScreen("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screen,
  };
}
