"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const panels = [
  {
    title: "Decision-grade eligibility review",
    text: "Detailed migration assessment before lodgement, aligned to current policy signals and pathway sequencing.",
  },
  {
    title: "Evidence architecture, not paperwork",
    text: "Structured document strategy with clear priority scoring to reduce weak links in your case narrative.",
  },
  {
    title: "Real-time progress intelligence",
    text: "Milestone tracking with proactive next actions so your case moves with confidence and speed.",
  },
];

export const ParallaxPanels = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yA = useTransform(scrollYProgress, [0, 1], [50, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yC = useTransform(scrollYProgress, [0, 1], [70, -20]);

  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <img
        src="/stripe/wave-bg.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-sm font-normal uppercase tracking-[0.08em] text-[#273951]">
            Precision workflow
          </p>
          <h2 className="mb-4 text-4xl font-light tracking-[-0.64px] text-[#061b31] md:text-6xl">
            Engineered steps with visible momentum
          </h2>
          <p className="text-base font-light text-[#64748d] md:text-lg">
            A Stripe-style operating rhythm: clear inputs, structured execution, and measurable progression at every stage.
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-6 md:grid-cols-3"
        >
          <motion.div
            style={{ y: yA }}
            className="rounded-lg border border-[#e5edf5] bg-white p-6 shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]"
          >
            <div className="mb-4 inline-flex rounded-md bg-[#f3f0ff] px-2 py-1 text-xs text-[#533afd]">
              01
            </div>
            <h3 className="mb-2 text-[1.35rem] font-light tracking-[-0.22px] text-[#061b31]">
              {panels[0].title}
            </h3>
            <p className="text-[#64748d]">{panels[0].text}</p>
          </motion.div>

          <motion.div
            style={{ y: yB }}
            className="rounded-lg border border-[#e5edf5] bg-white p-6 shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]"
          >
            <div className="mb-4 inline-flex rounded-md bg-[#f3f0ff] px-2 py-1 text-xs text-[#533afd]">
              02
            </div>
            <h3 className="mb-2 text-[1.35rem] font-light tracking-[-0.22px] text-[#061b31]">
              {panels[1].title}
            </h3>
            <p className="text-[#64748d]">{panels[1].text}</p>
          </motion.div>

          <motion.div
            style={{ y: yC }}
            className="rounded-lg border border-[#e5edf5] bg-white p-6 shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]"
          >
            <div className="mb-4 inline-flex rounded-md bg-[#f3f0ff] px-2 py-1 text-xs text-[#533afd]">
              03
            </div>
            <h3 className="mb-2 text-[1.35rem] font-light tracking-[-0.22px] text-[#061b31]">
              {panels[2].title}
            </h3>
            <p className="text-[#64748d]">{panels[2].text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
