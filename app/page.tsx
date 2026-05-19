import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import CosaFaccio from "@/components/CosaFaccio";
import ValueProp from "@/components/ValueProp";
import ComeUsoAI from "@/components/ComeUsoAi";
import LaMiaStoria from "@/components/LaMiaStoria";
import Target from "@/components/Target";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Marquee from "@/components/effects/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Problem />
      <CosaFaccio />
      <ValueProp />
      <ComeUsoAI />
      <LaMiaStoria />
      <Marquee />
      <Target />
      <Process />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
