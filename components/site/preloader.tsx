"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    const step = interval / duration;
    let value = 0;

    const timer = setInterval(() => {
      value += step * 100;
      if (value >= 100) {
        value = 100;
        clearInterval(timer);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => setVisible(false), 1200);
      }
      setProgress(Math.min(value, 100));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`preloader ${!visible ? "preloader-hidden" : ""}`}>
      <div className="preloader-counter">{Math.round(progress)}%</div>
      <div className="preloader-label">Loading content</div>
      <div className="preloader-bar">
        <div
          className="preloader-bar-fill"
          style={{ width: `${progress}%`, transition: "width 0.03s linear" }}
        />
      </div>
      {done && (
        <div className={`preloader-cta ${done ? "preloader-cta-visible" : ""}`}>
          <span className="text-sm font-medium tracking-[0.15em] text-white/60 uppercase">
            Ready to Explore
          </span>
        </div>
      )}
    </div>
  );
}
