import { useState, useEffect } from "react";

const useDeviceSize = (size: number) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth >= size
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobileView(window.innerWidth >= size);
    });
  }, [size]);

  return isMobileView;
};

export default useDeviceSize;
