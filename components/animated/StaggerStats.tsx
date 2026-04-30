"use client";

import { motion } from "framer-motion";

type Props = {
  heading?: string;
  description?: string;
  stats?: { value: string; label: string }[];
};

const defaultProps: Required<Props> = {
  heading: "Performance that keeps applications moving",
  description:
    "A process built for clarity, speed, and confidence with measurable outcomes at every step.",
  stats: [
    { value: "10,000+", label: "visa applications supported" },
    { value: "50+", label: "countries served" },
    { value: "97%", label: "document completeness before lodgement" },
    { value: "24h", label: "average first-response window" },
  ],
};

export const StaggerStats = (props: Props) => {
  const { heading, description, stats } = { ...defaultProps, ...props };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-[13px] font-normal uppercase tracking-[0.08em] text-[#273951]">
            Operational clarity
          </p>
          <h2 className="mb-5 text-4xl font-light tracking-[-0.64px] text-[#061b31] md:text-6xl">
            {heading}
          </h2>
          <p className="text-base font-light text-[#64748d] md:text-lg">{description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((stat, idx) => (
            <motion.div
              key={`${stat.value}-${idx}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
              className="rounded-md border border-[#e5edf5] bg-white p-6 shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]"
            >
              <p className="mb-2 text-4xl font-light tracking-[-0.64px] text-[#061b31] md:text-5xl">
                {stat.value}
              </p>
              <p className="text-sm font-normal text-[#64748d]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
