"use client";

import { Navbar1 } from "@/components/navbar/Navbar1";
import { Header76 } from "@/components/hero/Header76";
import { Layout121 as Trust } from "@/components/trust/Layout121";
import { Layout505 as Services } from "@/components/services/Layout505";
import { Layout121 as WhyUs } from "@/components/trust/Layout121";
import { Timeline5 as Process } from "@/components/process/Timeline5";
import { Cta57 as FinalCTA } from "@/components/cta/Cta57";
import { Faq3 as FAQ } from "@/components/faq/Faq3";
import { Footer14 } from "@/components/footer/Footer14";

export default function Home() {
  return (
    <main>
      <Navbar1 />
      <Header76 />
      <Trust />
      <Services />
      <WhyUs
        tagline="Why Choose Us"
        heading="We Know Australia Inside Out"
        buttons={[]}
        features={[
          {
            icon: { src: "/icons/agents.svg", alt: "Agents" },
            heading: "Registered Migration Agents",
            description:
              "All our agents are MARA-registered professionals.",
          },
          {
            icon: { src: "/icons/success.svg", alt: "Success" },
            heading: "10,000+ Successful Applications",
            description: "Over a decade of experience.",
          },
          {
            icon: { src: "/icons/sydney.svg", alt: "Sydney" },
            heading: "Sydney-Based, Globally Connected",
            description: "Local knowledge, global reach.",
          },
          {
            icon: { src: "/icons/support.svg", alt: "Support" },
            heading: "End-to-End Support",
            description: "We walk with you at every stage.",
          },
        ]}
      />
      <Process />
      <FinalCTA />
      <FAQ />
      <Footer14 />
    </main>
  );
}
