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
    <section className="bg-gradient-to-br from-primary-dark via-primary to-secondary px-[5%] py-16 text-white md:py-24 lg:py-28">
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
                  "block text-6xl font-bold md:text-9xl lg:text-10xl",
                  { "mb-5 md:mb-6": idx !== 0 },
                )}
              >
                {h}
              </motion.span>
            ))}
          </h1>
          <p className="mx-auto max-w-2xl text-base/relaxed text-white/90 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                {...btn}
                className={`rounded-full px-6 py-2.5 shadow-lg transition hover:-translate-y-0.5 ${idx === 0 ? "bg-accent text-primary-dark hover:bg-accent-light" : "border border-white/50 bg-white/10 text-white hover:bg-white/20"}`}
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
