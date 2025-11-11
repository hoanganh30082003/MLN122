import { useEffect, useState } from "react";

export default function useInViewOnce(targetRef, options = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = targetRef?.current;
    if (!el || inView) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { root: null, threshold: 0.2, rootMargin: "0px 0px -8%", ...options }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [targetRef, options.root, options.threshold, options.rootMargin, inView]);

  return inView;
}
