"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Question = { title: string; answer: string };
type Props = {
  heading: string;
  description: string;
  button: ButtonProps;
  questions: Question[];
};

export const Faq3Defaults: Props = {
  heading: "Common Questions",
  description: "Have questions about Australian immigration? We have answers.",
  button: {
    title: "Still have questions? Contact us",
    variant: "secondary",
    className: "rounded-full",
  },
  questions: [
    {
      title: "How long does a student visa take?",
      answer:
        "Processing times vary, but typically 4–8 weeks. We'll guide you through priority processing options.",
    },
    {
      title: "Can I apply for PR after studying?",
      answer:
        "Yes – many courses offer pathways to 485 (Graduate Visa) and then to 189/190 PR.",
    },
    {
      title: "Do you offer refunds if visa is refused?",
      answer:
        "We provide full document review and merit checks before lodgement to minimise risk. Refund policy is outlined in our service agreement.",
    },
    {
      title: "Are you MARA registered?",
      answer:
        "All our agents hold current MARA registration – you can verify our credentials on the official register.",
    },
  ],
};

export const Faq3 = (props: Partial<Props>) => {
  const { heading, description, button, questions } = {
    ...Faq3Defaults,
    ...props,
  };

  return (
    <section id="faq" className="bg-slate-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-5xl font-bold text-primary-dark md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-slate-700 md:text-md">{description}</p>
          <div className="mt-6 md:mt-8">
            <Button {...button} className="rounded-full">
              {button.title}
            </Button>
          </div>
        </div>
        <Accordion type="multiple" className="rounded-2xl">
          {questions.map((q, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="mb-4 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <AccordionTrigger className="px-4 font-semibold text-primary-dark md:py-5 md:text-md">
                {q.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-slate-700 md:pb-6">
                {q.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
