"use client";

import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

type ImageProps = { url?: string; src: string; alt?: string };
type NavLink = { url: string; title: string; subMenuLinks?: NavLink[] };
type Props = { logo: ImageProps; navLinks: NavLink[]; buttons: ButtonProps[] };

export const Navbar1Defaults: Props = {
  logo: { url: "#", src: "/images/logo.svg", alt: "Blue Water Study" },
  navLinks: [
    { title: "Services", url: "#services" },
    { title: "Why Us", url: "#why-us" },
    { title: "Process", url: "#process" },
    { title: "FAQ", url: "#faq" },
  ],
  buttons: [
    {
      title: "Book Consultation",
      size: "sm",
      variant: "primary",
      className: "rounded-[4px]",
    },
  ],
};

const topLineVariants = {
  open: { translateY: 8, transition: { delay: 0.1 } },
  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};

const middleLineVariants = {
  open: { width: 0, transition: { duration: 0.1 } },
  closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
};

const bottomLineVariants = {
  open: { translateY: -8, transition: { delay: 0.1 } },
  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};

export const Navbar1 = (props?: Partial<Props>) => {
  const { logo, navLinks, buttons } = { ...Navbar1Defaults, ...props };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  return (
    <section className="sticky top-0 z-[999] flex w-full items-center border-b border-[#e5edf5] bg-white/90 backdrop-blur-[12px] lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} className="h-8" />
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[#061b31]"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[#061b31]"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-[#061b31]"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: 0 } }}
          initial="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="block py-3 text-[14px] font-normal text-[#061b31] first:pt-7 transition-colors hover:text-[#533afd] lg:px-4 lg:py-2 first:lg:pt-2"
              onClick={() => {
                if (isMobile) {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {link.title}
            </a>
          ))}
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row">
            {buttons.map((btn, idx) => (
              <Button key={idx} {...btn} className="rounded-[4px]">
                {btn.title}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
