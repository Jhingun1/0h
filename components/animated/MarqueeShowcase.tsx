"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  cards: { title: string; text: string }[];
  buttons: ButtonProps[];
};

const defaultProps: Props = {
  heading: "Powerful migration support, moving fast",
  description:
    "From first consultation to final grant, every stage is handled by specialists who know the system deeply.",
  cards: [
    { title: "MARA Experts", text: "Registered professionals handling your case with legal precision." },
    { title: "Fast Turnaround", text: "Structured workflows to keep your application moving." },
    { title: "Document Review", text: "Detailed checks before lodgement to reduce risk." },
    { title: "Outcome Tracking", text: "Transparent updates and next-step guidance throughout." },
    { title: "Pathway Planning", text: "Clear strategy from student/work visa to permanent residency." },
    { title: "Settlement Help", text: "Practical support once your visa is approved." },
  ],
  buttons: [
    { title: "Start your case", variant: "primary" },
    { title: "See success stories", variant: "secondary" },
  ],
};

export const MarqueeShowcase = (props: Partial<Props>) => {
  const { heading, description, cards, buttons } = { ...defaultProps, ...props };
  const topRow = cards.slice(0, 3);
  const bottomRow = cards.slice(3);

  return (
    <section className="overflow-hidden bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mb-10 md:mb-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 text-4xl font-light tracking-[-0.64px] text-heading-solid md:mb-6 md:text-6xl lg:text-7xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl font-light text-body-muted md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={`${button.title}-${index}`} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="mb-4 flex w-max animate-marquee-horizontally gap-4 pr-4">
          {[...topRow, ...topRow, ...topRow].map((card, index) => (
            <div
              key={`top-${card.title}-${index}`}
              className="w-[20rem] rounded-md border border-border-subtle bg-white p-6 shadow-stripe-elevated"
            >
              <h3 className="mb-2 text-[1.38rem] font-light tracking-[-0.22px] text-heading-solid">{card.title}</h3>
              <p className="font-light text-body-muted">{card.text}</p>
            </div>
          ))}
        </div>
        <div className="flex w-max animate-marquee-right gap-4 pl-4">
          {[...bottomRow, ...bottomRow, ...bottomRow].map((card, index) => (
            <div
              key={`bottom-${card.title}-${index}`}
              className="w-[20rem] rounded-md border border-border-subtle bg-white p-6 shadow-stripe-elevated"
            >
              <h3 className="mb-2 text-[1.38rem] font-light tracking-[-0.22px] text-heading-solid">{card.title}</h3>
              <p className="font-light text-body-muted">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
