"use client";

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = { src: string; alt?: string };
type Feature = { icon: ImageProps; heading: string; description: string; buttons: ButtonProps[] };
type Tab = { value: string; trigger: string; content: Feature };
type Props = { tagline: string; heading: string; description: string; tabs: Tab[]; defaultTabValue: string };

export const Layout505Defaults: Props = {
  tagline: "Our Services",
  heading: "Expert Visa Guidance for Every Journey",
  description:
    "Whether you're a student, skilled worker, or reuniting with family, our registered migration agents handle every detail.",
  defaultTabValue: "student",
  tabs: [
    {
      value: "student",
      trigger: "Student Visas",
      content: {
        icon: { src: "/icons/student.svg", alt: "Student icon" },
        heading: "Student Visas",
        description: "Full support for subclass 500, GTE requirements, and pathway to PR.",
        buttons: [
          {
            title: "Learn more",
            variant: "link",
            size: "link",
            iconRight: "icon-right-stub",
            className: "rounded-full",
          },
        ],
      },
    },
    {
      value: "skilled",
      trigger: "Skilled Migration",
      content: {
        icon: { src: "/icons/skilled.svg", alt: "Skilled migration icon" },
        heading: "Skilled Migration",
        description: "189, 190, 491 visas - points test optimisation and EOI lodgement.",
        buttons: [
          {
            title: "Learn more",
            variant: "link",
            size: "link",
            iconRight: "icon-right-stub",
            className: "rounded-full",
          },
        ],
      },
    },
    {
      value: "partner",
      trigger: "Partner Visas",
      content: {
        icon: { src: "/icons/partner.svg", alt: "Partner visa icon" },
        heading: "Partner Visas",
        description: "Onshore/offshore partner visas, evidence gathering, and interview prep.",
        buttons: [
          {
            title: "Learn more",
            variant: "link",
            size: "link",
            iconRight: "icon-right-stub",
            className: "rounded-full",
          },
        ],
      },
    },
    {
      value: "business",
      trigger: "Business Visas",
      content: {
        icon: { src: "/icons/business.svg", alt: "Business visa icon" },
        heading: "Business Visas",
        description: "188, 132, and innovation visas for entrepreneurs and investors.",
        buttons: [
          {
            title: "Learn more",
            variant: "link",
            size: "link",
            iconRight: "icon-right-stub",
            className: "rounded-full",
          },
        ],
      },
    },
    {
      value: "pr",
      trigger: "Permanent Residency",
      content: {
        icon: { src: "/icons/pr.svg", alt: "Permanent residency icon" },
        heading: "Permanent Residency",
        description: "Pathway planning, RSMS, ENS, and citizenship preparation.",
        buttons: [
          {
            title: "Learn more",
            variant: "link",
            size: "link",
            iconRight: "icon-right-stub",
            className: "rounded-full",
          },
        ],
      },
    },
  ],
};

export const Layout505 = (props: Partial<Props>) => {
  const { tagline, heading, description, tabs, defaultTabValue } = { ...Layout505Defaults, ...props };
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Tabs
          defaultValue={defaultTabValue}
          orientation="vertical"
          className="relative grid auto-cols-fr grid-cols-1 border border-border-primary rounded-3xl md:grid-cols-[1fr_1.5fr]"
        >
          <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 border-b border-border-primary md:border-b-0 md:border-r">
            {tabs.map((tab, idx) => (
              <TabsTrigger
                key={idx}
                value={tab.value}
                className="items-start justify-start border-0 border-b border-border-primary px-6 py-6 text-xl font-bold last-of-type:border-0 data-[state=active]:bg-background-primary rounded-none first:rounded-tl-3xl last:rounded-bl-3xl md:first:rounded-tl-3xl md:last:rounded-bl-3xl"
              >
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="data-[state=active]:animate-tabs">
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img src={tab.content.icon.src} className="size-12" alt={tab.content.icon.alt} />
                </div>
                <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">{tab.content.heading}</h2>
                <p>{tab.content.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {tab.content.buttons.map((btn, i) => (
                    <Button key={i} {...btn} className="rounded-full">
                      {btn.title}
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
