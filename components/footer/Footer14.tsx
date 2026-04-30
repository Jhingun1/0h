"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Props = {
  logo: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerImages: ImageProps[];
};

export const Footer14Defaults: Props = {
  logo: { url: "#", src: "/images/logo-white.svg", alt: "Blue Water Study" },
  heading: "Start Your Australian Journey Today",
  description:
    "Book your free consultation and speak with a registered migration agent who understands your goals.",
  buttons: [
    { title: "Book Free Consultation", className: "rounded-full" },
    { title: "Learn More", variant: "secondary", className: "rounded-full" },
  ],
  columnLinks: [
    {
      title: "Services",
      links: [
        { title: "Student Visas", url: "#" },
        { title: "Skilled Migration", url: "#" },
        { title: "Partner Visas", url: "#" },
        { title: "Business Visas", url: "#" },
        { title: "Permanent Residency", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", url: "#" },
        { title: "FAQs", url: "#" },
        { title: "Visa Updates", url: "#" },
        { title: "Success Stories", url: "#" },
        { title: "Glossary", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", url: "#" },
        { title: "Why Choose Us", url: "#" },
        { title: "Meet the Team", url: "#" },
        { title: "Careers", url: "#" },
        { title: "Contact", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", url: "#" },
        { title: "Terms of Service", url: "#" },
        { title: "MARA Registration", url: "#" },
        { title: "Complaints", url: "#" },
        { title: "Disclaimer", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Help Center", url: "#" },
        { title: "Live Chat", url: "#" },
        { title: "Email Support", url: "#" },
        { title: "Call Us", url: "#" },
        { title: "Book a Meeting", url: "#" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { title: "Facebook", url: "#" },
        { title: "Instagram", url: "#" },
        { title: "Twitter", url: "#" },
        { title: "LinkedIn", url: "#" },
        { title: "YouTube", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: BiLogoFacebookCircle },
    { url: "#", icon: BiLogoInstagram },
    { url: "#", icon: FaXTwitter },
    { url: "#", icon: BiLogoLinkedinSquare },
    { url: "#", icon: BiLogoYoutube },
  ],
  footerText: "© 2025 Blue Water Study. All rights reserved.",
  footerImages: [
    { src: "/images/partner1.svg", alt: "Partner logo" },
    { src: "/images/partner2.svg", alt: "Partner logo" },
    { src: "/images/partner3.svg", alt: "Partner logo" },
    { src: "/images/partner4.svg", alt: "Partner logo" },
    { src: "/images/partner5.svg", alt: "Partner logo" },
  ],
};

export const Footer14 = (props: Partial<Props>) => {
  const {
    logo,
    heading,
    description,
    buttons,
    footerImages,
    columnLinks,
    socialMediaLinks,
    footerText,
  } = { ...Footer14Defaults, ...props };

  return (
    <footer
      id="relume"
      className="bg-[#1c1e54] px-[5%] py-12 text-white md:py-18 lg:py-20"
    >
      <div className="container">
        <div className="lg:flex lg:items-start lg:justify-between">
          <div className="rb-6 max-w-xl">
            <h1 className="mb-5 text-4xl font-light leading-[1.1] tracking-[-0.64px] md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h1>
            <p className="max-w-lg text-white/85">{description}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 lg:mt-0">
            {buttons.map((button, index) => (
              <Button key={index} {...button} className="rounded-full">
                {button.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="py-10 md:py-14 lg:py-16">
          <div className="h-px w-full bg-white/30" />
        </div>
        <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
          {columnLinks.map((column, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-start"
            >
              <h2 className="mb-2 text-sm font-normal text-white">{column.title}</h2>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="py-2 text-sm">
                    <a href={link.url} className="text-white/75 transition hover:text-white hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rb-6 col-span-1 flex flex-col items-start justify-between pb-6 sm:flex-row sm:items-center md:pb-8 lg:col-span-2">
          <a href={logo.url}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="mb-6 inline-block h-8 sm:mb-0"
            />
          </a>
          <div className="ml-3 flex">
            {footerImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="-ml-3 size-12 min-h-12 min-w-12 rounded-full border-2 border-white/50 bg-white object-cover"
              />
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-white/30" />
        <div className="flex flex-col-reverse items-start gap-4 pb-4 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between md:pb-0 md:pt-8">
          <div>
            <p>{footerText}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            {socialMediaLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={index} href={link.url} className="hover:opacity-80">
                  <Icon className="size-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
