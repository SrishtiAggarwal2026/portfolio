"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scrolls to `#hash` targets on first load. The target can arrive inside a hidden streaming
 * boundary (behind `loading.tsx`), so wait until it is actually laid out before scrolling.
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    let tries = 0;
    let settleTimer: number | undefined;
    const timer = window.setInterval(() => {
      const el = document.getElementById(id);
      if (el && el.getClientRects().length > 0) {
        window.clearInterval(timer);
        el.scrollIntoView({ block: "start", behavior: "instant" });
        // Late layout shifts (images, fonts) above the target can push it out of place.
        settleTimer = window.setTimeout(
          () => el.scrollIntoView({ block: "start", behavior: "instant" }),
          500
        );
      } else if (++tries > 50) {
        window.clearInterval(timer);
      }
    }, 100);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(settleTimer);
    };
  }, [pathname]);

  return null;
}
