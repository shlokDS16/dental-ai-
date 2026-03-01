/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { ValueProps } from "@/src/components/ValueProps";
import { Proof } from "@/src/components/Proof";
import { ROIQuestionnaire } from "@/src/components/ROIQuestionnaire";
import { CTA } from "@/src/components/CTA";
import { Footer } from "@/src/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Proof />
        <ROIQuestionnaire />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
