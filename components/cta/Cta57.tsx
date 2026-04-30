import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import clsx from "clsx";

type Props = { headers: string[]; description: string; buttons: ButtonProps[] };

export const Cta57Defaults: Props = {
  headers: ["Start Your", "Australian Journey"],
  description:
    "Book your free consultation today and speak with a registered migration agent who understands your goals and Australia's immigration landscape.",
  buttons: [
    { title: "Book Free Consultation", className: "rounded-full" },
    {
      title: "Learn More",
      variant: "secondary",
      className: "rounded-full",
    },
  ],
};

export const Cta57 = (props: Partial<Props>) => {
  const { headers, description, buttons } = { ...Cta57Defaults, ...props };
  return (
    <section className="bg-[#1c1e54] px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1>
            {headers.map((h, idx) => (
              <motion.span
                key={idx}
                initial={{ x: idx % 2 === 0 ? "-50%" : "50%" }}
                animate={{ x: "0%" }}
                transition={{ type: "spring", bounce: 0 }}
                className={clsx(
                  "block text-5xl font-[300] tracking-[-0.64px] md:text-8xl md:tracking-[-0.96px] lg:text-9xl",
                  { "mb-5 md:mb-6": idx !== 0 },
                )}
              >
                {h}
              </motion.span>
            ))}
          </h1>
          <p className="mx-auto max-w-2xl text-base/relaxed font-[300] text-white/75 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                {...btn}
                className={`rounded-[4px] px-4 py-2 shadow-[0_14px_21px_-14px_rgba(3,3,39,0.25),0_8px_17px_-8px_rgba(0,0,0,0.1)] transition ${idx === 0 ? "bg-[#533afd] text-white hover:bg-[#4434d4]" : "border border-[#b9b9f9] bg-transparent text-[#b9b9f9] hover:bg-white/5"}`}
              >
                {btn.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
