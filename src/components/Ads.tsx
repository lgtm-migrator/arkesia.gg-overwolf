import type { OwAd } from "@overwolf/types/owads";
import { useEffect, useRef, useState } from "react";
import useWindowIsVisible from "../lib/useWindowIsVisible";
import styles from "./Ads.module.css";

declare global {
  interface Window {
    OwAd?: typeof OwAd;
  }
}

function Ads() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [owAd, setOwAd] = useState<OwAd>();
  const isDisplayedFirstTime = useRef(true);
  const windowIsVisible = useWindowIsVisible();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (owAd) {
      return;
    }

    function onOwAdReady() {
      if (typeof window.OwAd === "undefined" || containerRef.current === null) {
        return;
      }
      const ad = new window.OwAd(containerRef.current, {
        size: { width: 400, height: 300 },
      });
      ad.addEventListener("ow_internal_rendered", () => {
        setOwAd(ad);
      });

      ad.addEventListener("play", () => {
        setIsPlaying(true);
      });

      ad.addEventListener("complete", () => {
        setIsPlaying(false);
      });
      ad.addEventListener("error", () => {
        setIsPlaying(false);
      });
    }

    const script = document.createElement("script");
    script.src = "https://content.overwolf.com/libs/ads/latest/owads.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = onOwAdReady;

    return () => {
      document.body.removeChild(script);
    };
  }, [owAd]);

  useEffect(() => {
    if (!owAd) {
      return;
    }
    if (isDisplayedFirstTime.current) {
      isDisplayedFirstTime.current = false;
      return;
    }
    if (windowIsVisible) {
      owAd.refreshAd({});
    } else {
      owAd.removeAd();
      setIsPlaying(false);
    }
  }, [owAd, windowIsVisible]);

  return (
    <aside
      className={styles.container}
      style={{ display: isPlaying ? "block" : "none" }}
    >
      <div ref={containerRef} className={styles.ads} />
    </aside>
  );
}

export default Ads;
