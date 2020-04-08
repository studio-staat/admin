import { useState, useEffect } from "react";
import { throttle } from "lodash";

interface useWindowSizeTypes {
  throttleMs?: number;
}

export function useWindowSize({ throttleMs = 100 }: useWindowSizeTypes = {}) {
  const [winWidth, setWinWidth] = useState(0);
  const [winHeight, setWinHeight] = useState(0);
  const _resizeHandler = throttle(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w !== winWidth) {
      setWinWidth(w);
    }
    if (h !== winWidth) {
      setWinHeight(h);
    }
  }, throttleMs);
  useEffect(() => {
    window.addEventListener("resize", _resizeHandler, false);
    _resizeHandler();
    return () => {
      window.removeEventListener("resize", _resizeHandler);
    };
  }, []);
  return { winWidth, winHeight };
}
