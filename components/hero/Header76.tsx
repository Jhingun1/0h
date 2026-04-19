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
    <section className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {buttons.map((btn, idx) => (
            <Button key={idx} {...btn} className="rounded-full">
              {btn.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {images.slice(0, 3).map((img, idx) => (
              <div key={idx} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-2xl object-cover"
                    src={img.src}
                    alt={img.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {images.slice(3).map((img, idx) => (
              <div key={idx} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <img
                    className="absolute inset-0 size-full rounded-2xl object-cover"
                    src={img.src}
                    alt={img.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
