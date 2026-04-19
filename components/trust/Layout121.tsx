"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type Feature = {
  icon: { src: string; alt: string };
  heading: string;
  description: string;
};
type Props = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
  features: Feature[];
};

export const Layout121Defaults: Props = {
  tagline: "Australia's #1 Student Migration Agency",
  heading: "10,000+ successful visa applications since 2010",
  buttons: [
    {
      title: "View Success Stories",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
      className: "rounded-full",
    },
  ],
  features: [
    {
      icon: { src: "/icons/graduate.svg", alt: "Graduate" },
      heading: "Registered Migration Agents",
      description:
        "MARA-registered professionals with deep expertise in Australian immigration law.",
    },
    {
      icon: { src: "/icons/check.svg", alt: "Check" },
      heading: "10,000+ Successful Apps",
      description: "Over a decade of experience across every visa category.",
    },
    {
      icon: { src: "/icons/global.svg", alt: "Global" },
      heading: "Sydney-Based, Globally Connected",
      description: "Working with clients from 50+ countries.",
    },
    {
      icon: { src: "/icons/support.svg", alt: "Support" },
      heading: "End-to-End Support",
      description: "From document prep to visa grant and settlement.",
    },
  ],
};

export const Layout121 = (props: Partial<Props>) => {
  const { tagline, heading, buttons, features } = { ...Layout121Defaults, ...props };
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary md:mb-4">
              {tagline}
            </p>
            <h2 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((btn, idx) => (
                <Button key={idx} {...btn} className="rounded-full">
                  {btn.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 md:p-5">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="mb-3 grid grid-cols-[max-content_1fr] gap-x-5 rounded-2xl bg-white px-4 py-6 shadow-sm last:mb-0 md:gap-x-6 md:px-6"
              >
                <div className="relative flex flex-col items-center justify-start">
                  <div className="relative z-10 rounded-full bg-primary/10 p-3">
                    <img src={feat.icon.src} alt={feat.icon.alt} className="size-12" />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-lg font-bold text-slate-900 md:text-xl">{feat.heading}</h6>
                  <p className="text-slate-600">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
