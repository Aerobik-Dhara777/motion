"use client";

import { useEffect, useRef, useState } from "react";

type LoaderStage = 0 | 1 | 2 | 3 | 4;

export default function Preloader() {
  const [stage, setStage] = useState<LoaderStage>(0);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(0);

  const animateProgress = (
    target: number,
    duration: number
  ) => {
    const startValue = progressRef.current;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;

      const t = Math.min(elapsed / duration, 1);

      // smooth cubic easing
      const eased = 1 - Math.pow(1 - t, 3);

      const value =
        startValue +
        (target - startValue) * eased;

      progressRef.current = value;
      setProgress(value);

      if (t < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    const runTimeline = async () => {
      await wait(700);

      setStage(1);
      animateProgress(27, 1800);

      await wait(2200);

      setStage(2);
      animateProgress(69, 1800);

      await wait(2200);

      setStage(3);
      animateProgress(100, 1800);

      await wait(1800);

      setStage(4);
    };

    runTimeline();
  }, []);

  const firstY =
    stage < 3
      ? 0
      : -180;

  const secondY =
    stage === 0
      ? 0
      : stage === 1
      ? -360
      : stage === 2
      ? -1080
      : -1800;

  const thirdY =
    stage === 0
      ? 0
      : stage === 1
      ? -1260
      : stage === 2
      ? -1620
      : -1800;

  return (
    <div
      className={`preloader ${
        stage === 4 ? "exit" : ""
      }`}
    >
      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{
          height: `${progress}%`,
        }}
      />

      {/* Numbers */}
      <div className="numbers">

        {/* First Digit */}
        <div className="digit-container">
          <div
            className="digit-track"
            style={{
              transform: `translateY(${firstY}px)`,
              transitionDelay: "120ms",
            }}
          >
            <span>0</span>
            <span>1</span>
          </div>
        </div>

        {/* Second Digit */}
        <div className="digit-container">
          <div
            className="digit-track"
            style={{
              transform: `translateY(${secondY}px)`,
              transitionDelay: "60ms",
            }}
          >
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
          </div>
        </div>

        {/* Third Digit */}
        <div className="digit-container">
          <div
            className="digit-track"
            style={{
              transform: `translateY(${thirdY}px)`,
              transitionDelay: "0ms",
            }}
          >
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
          </div>
        </div>

        <span className="percentage">%</span>

      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}