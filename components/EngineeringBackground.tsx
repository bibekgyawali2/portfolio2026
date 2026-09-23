"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function EngineeringBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
        hasMoved = true;
      }

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      // Smooth interpolation for spotlight feel
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      container.style.setProperty("--mouse-x", `${currentX.toFixed(1)}px`);
      container.style.setProperty("--mouse-y", `${currentY.toFixed(1)}px`);
      container.style.setProperty("--mouse-opacity", "1");

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(updatePosition);
      } else {
        rafId = null;
      }
    };

    const onMouseLeave = () => {
      container.style.setProperty("--mouse-opacity", "0");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none print:hidden"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "20%",
          "--mouse-opacity": "0",
        } as React.CSSProperties
      }
    >
      {/* 1. Ambient Top Atmospheric Lighting Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[90rem] h-[34rem] opacity-70 dark:opacity-85 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 50% -10%, color-mix(in srgb, var(--accent) 14%, transparent) 0%, color-mix(in srgb, var(--accent) 3%, transparent) 55%, transparent 80%)",
        }}
      />

      {/* 2. Interactive Spotlight Flashlight Glow (Follows cursor smoothly on desktop) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: "var(--mouse-opacity, 0)",
          background:
            "radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 20%), color-mix(in srgb, var(--accent) 6.5%, transparent) 0%, transparent 75%)",
        }}
      />

      {/* 3. Precision Engineering Micro-Grid & Crosshairs */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-75"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 25%, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 25%, transparent 88%)",
        }}
      >
        <defs>
          {/* 32px x 32px Micro Dot Pattern */}
          <pattern
            id="eng-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="16"
              cy="16"
              r="0.8"
              className="fill-ink/15 dark:fill-ink/20"
            />
          </pattern>

          {/* 128px x 128px Alignment Reticle / Crosshair Pattern */}
          <pattern
            id="eng-crosshairs"
            width="128"
            height="128"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal tick */}
            <line
              x1="61"
              y1="64"
              x2="67"
              y2="64"
              strokeWidth="0.8"
              className="stroke-ink/25 dark:stroke-ink/35"
            />
            {/* Vertical tick */}
            <line
              x1="64"
              y1="61"
              x2="64"
              y2="67"
              strokeWidth="0.8"
              className="stroke-ink/25 dark:stroke-ink/35"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#eng-grid)" />
        <rect width="100%" height="100%" fill="url(#eng-crosshairs)" />
      </svg>

      {/* 4. Peripheral Hardware Telemetry & Signals (Visible on larger displays outside the 48rem text measure) */}
      {isMounted && (
        <>
          {/* Left Gutter: Coordinate & Telemetry Node */}
          <motion.div
            className="hidden xl:flex fixed left-8 2xl:left-14 top-40 flex-col gap-2 p-2.5 rounded border border-rule/50 bg-paper/40 backdrop-blur-xs font-mono text-[0.6875rem] text-ink-faint/70 shadow-2xs pointer-events-auto hover:text-ink-soft hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: shouldReduceMotion ? 0 : [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              x: { duration: 0.6, delay: 0.2 },
              y: {
                repeat: Infinity,
                duration: 7.5,
                ease: "easeInOut",
              },
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              <span className="font-semibold tracking-wider text-[0.625rem] text-ink-soft uppercase">
                SYS.LOC // GPS
              </span>
            </div>
            <div className="text-[0.625rem] text-ink-faint leading-tight tabular-nums">
              27.7172° N, 85.3240° E
              <br />
              Kathmandu · 1,400m
            </div>
          </motion.div>

          {/* Left Gutter: Biomedical / Sensor Waveform Signal */}
          <motion.div
            className="hidden xl:flex fixed left-8 2xl:left-14 top-80 flex-col gap-1.5 p-2.5 rounded border border-rule/50 bg-paper/40 backdrop-blur-xs font-mono text-[0.6875rem] text-ink-faint/70 shadow-2xs pointer-events-auto hover:text-ink-soft hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: shouldReduceMotion ? 0 : [0, 7, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              x: { duration: 0.6, delay: 0.4 },
              y: {
                repeat: Infinity,
                duration: 9.2,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <div className="flex items-center justify-between gap-3 text-[0.625rem] text-ink-soft">
              <span className="font-semibold uppercase tracking-wider">ΔP SIGNAL // PID</span>
              <span className="text-accent text-[0.5625rem]">100 Hz</span>
            </div>
            {/* Clean SVG respiratory pressure trace */}
            <svg
              className="w-28 h-6 overflow-visible text-accent stroke-current"
              viewBox="0 0 112 24"
              fill="none"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M 0 16 L 20 16 Q 30 16 35 6 Q 42 2 48 6 L 55 16 L 75 16 Q 85 16 90 6 Q 97 2 103 6 L 112 16"
                className="opacity-70"
              />
              <circle cx="48" cy="6" r="1.5" className="fill-accent" />
              <circle cx="103" cy="6" r="1.5" className="fill-accent" />
            </svg>
            <div className="text-[0.5625rem] text-ink-faint/80 flex justify-between">
              <span>AIRWAY_PRESS</span>
              <span className="tabular-nums">P_aw: 18 cmH₂O</span>
            </div>
          </motion.div>

          {/* Right Gutter: Embedded Architecture Node */}
          <motion.div
            className="hidden xl:flex fixed right-8 2xl:right-14 top-48 flex-col gap-2 p-2.5 rounded border border-rule/50 bg-paper/40 backdrop-blur-xs font-mono text-[0.6875rem] text-ink-faint/70 shadow-2xs pointer-events-auto hover:text-ink-soft hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: shouldReduceMotion ? 0 : [0, -7, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              x: { duration: 0.6, delay: 0.3 },
              y: {
                repeat: Infinity,
                duration: 8.4,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold tracking-wider text-[0.625rem] text-ink-soft uppercase">
                EMBEDDED // MCU
              </span>
              <span className="text-emerald-500 font-mono text-[0.5625rem]">ACTIVE</span>
            </div>
            <div className="text-[0.625rem] text-ink-faint leading-tight">
              ARM Cortex-M / AVR
              <br />
              FreeRTOS · I²C / SPI / ADC
            </div>
          </motion.div>

          {/* Right Gutter: Technical Reticle / Spec */}
          <motion.div
            className="hidden xl:flex fixed right-8 2xl:right-14 top-96 flex-col gap-1.5 p-2.5 rounded border border-rule/50 bg-paper/40 backdrop-blur-xs font-mono text-[0.6875rem] text-ink-faint/70 shadow-2xs pointer-events-auto hover:text-ink-soft hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: 1,
              x: 0,
              y: shouldReduceMotion ? 0 : [0, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              x: { duration: 0.6, delay: 0.5 },
              y: {
                repeat: Infinity,
                duration: 9.8,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
          >
            <div className="flex items-center gap-1.5 text-[0.625rem] text-ink-soft font-semibold uppercase">
              <span className="text-accent">+</span>
              <span>CALIBRATION</span>
            </div>
            <div className="text-[0.5625rem] text-ink-faint/80 leading-snug">
              CLOSED-LOOP PID
              <br />
              <span className="tabular-nums">Kp=1.42 Ki=0.18 Kd=0.04</span>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
