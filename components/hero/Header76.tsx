"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = { src: string; alt?: string };
type Props = {
  heading?: string;
  description?: string;
  buttons?: ButtonProps[];
  images?: ImageProps[];
};

export const Header76Defaults: Required<Props> = {
  heading: "Your Australian Dream Starts Here",
  description:
    "Blue Water Study guides students, professionals, and families through every step of Australia's immigration process — from visa applications to permanent residency. Based in Sydney, we know this country like a local.",
  buttons: [
    { title: "Book Free Consultation", className: "rounded-full" },
    {
      title: "Learn More",
      variant: "secondary",
      className: "rounded-full",
    },
  ],
  images: [
    { src: "/images/student-success.jpg", alt: "Student" },
    { src: "/images/family-immigration.jpg", alt: "Family" },
    { src: "/images/sydney-opera.jpg", alt: "Sydney" },
    { src: "/images/working-in-aus.jpg", alt: "Work" },
    { src: "/images/graduation.jpg", alt: "Grad" },
    { src: "/images/beach.jpg", alt: "Beach" },
  ],
};

export const Header76 = (props: Props) => {
  const {
    heading = Header76Defaults.heading,
    description = Header76Defaults.description,
    buttons = Header76Defaults.buttons,
    images = Header76Defaults.images,
  } = props;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-20 lg:py-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,36,125,0.12),_transparent_40%)]" />
      <div className="relative grid grid-cols-1 gap-y-14 md:grid-flow-row lg:grid-flow-col lg:grid-cols-2 lg:items-center">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary md:text-sm">
          Trusted Sydney Migration Experts
        </p>
        <h1 className="mb-5 text-5xl font-bold leading-tight text-slate-900 md:mb-6 md:text-8xl lg:text-9xl">
          {heading}
        </h1>
        <p className="max-w-2xl text-slate-600 md:text-lg">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {buttons.map((btn, idx) => (
            <Button key={idx} {...btn} className="rounded-full">
              {btn.title}
            </Button>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">10,000+ approvals</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>MARA-registered agents</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>Clients from 50+ countries</span>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.slice(0, 3).map((img, idx) => (
              <div key={idx} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/70 pt-[120%] shadow-xl shadow-slate-200">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.slice(3).map((img, idx) => (
              <div key={idx} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/70 pt-[120%] shadow-xl shadow-slate-200">
                  <img
                    className="absolute inset-0 size-full object-cover"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
