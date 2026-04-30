"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type TimelineItemType = {
  heading: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  timelineItems: TimelineItemType[];
};

export const Timeline5Defaults: Props = {
  tagline: "Our Process",
  heading: "Simple Steps to Your Australian Visa",
  description:
    "A clear, transparent journey — from your first enquiry to visa grant and beyond.",
  buttons: [
    { title: "Start Your Journey", variant: "secondary", className: "rounded-full" },
  ],
  timelineItems: [
    {
      heading: "Step 01",
      title: "Free Initial Consultation",
      description:
        "Book a no-obligation consultation. We assess your situation and goals.",
      buttons: [],
    },
    {
      heading: "Step 02",
      title: "Document Preparation",
      description: "Our team prepares and verifies all required documents.",
      buttons: [],
    },
    {
      heading: "Step 03",
      title: "Application Lodgement",
      description: "We lodge your application and manage all follow-ups.",
      buttons: [],
    },
    {
      heading: "Step 04",
      title: "Visa Grant & Settlement",
      description: "Once granted, we provide settlement guidance in Australia.",
      buttons: [],
    },
  ],
};

export const Timeline5 = (props: Partial<Props>) => {
  const { tagline, heading, description, buttons, timelineItems } = {
    ...Timeline5Defaults,
    ...props,
  };
  return (
    <section
      id="process"
      className="bg-gradient-to-b from-white via-slate-50/70 to-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-3xl">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <p className="max-w-xl text-slate-600 md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((btn, i) => (
                <Button key={i} {...btn} className="rounded-full">
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center">
          <div className="relative left-0 flex h-full w-8 flex-col items-center md:left-auto">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-white to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-slate-800" />
            <div className="h-full w-[3px] bg-slate-200" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-white" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-white" />
          </div>
          <div className="grid auto-cols-fr grid-cols-1 gap-y-8 sm:gap-12 md:gap-16">
            {timelineItems.map((item, idx) => (
              <TimelineItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item }: { item: TimelineItemType }) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };

  return (
    <div className="relative">
      <div className="absolute -ml-8 flex h-full w-8 items-start justify-center">
        <motion.div
          ref={circleRef}
          style={backgroundColor}
          className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
        />
      </div>
      <div className="ml-4 mt-4 flex flex-col rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm md:ml-12 md:p-7">
        <h3 className="mb-2 text-2xl font-bold text-primary md:text-3xl">
          {item.heading}
        </h3>
        <h4 className="mb-3 text-xl font-bold text-slate-900 md:mb-4 md:text-2xl">{item.title}</h4>
        <p className="text-slate-600">{item.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {item.buttons.map((btn, i) => (
            <Button key={i} {...btn} className="rounded-full">
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
