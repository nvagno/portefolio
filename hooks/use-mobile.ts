import { useState, useEffect } from "react";

export function useMobile(breakpoint = 768, delay = 250) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIfMobile, delay);
    };

    checkIfMobile();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint, delay]);

  return isMobile;
}
