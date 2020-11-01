import { useEffect } from "react";

type UsePageResize = (callback: () => void) => void;

// hook that runs callback whenever the page first renders
// or whenever the user resizes the page.
export const usePageResize: UsePageResize = (callback) => {
  useEffect(() => {
    callback();
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []);
}
