"use client";

import { motion } from "framer-motion";

const features = [
  { title: "TypeScript-first", desc: "Strong typings for safer, scalable code." },
  { title: "Framer Motion", desc: "Smooth, tasteful animations out of the box." },
  { title: "Responsive", desc: "Looks great on desktop, tablet, and mobile." },
  { title: "SEO-ready", desc: "Next.js App Router metadata & best practices." },
  { title: "Reusable UI", desc: "Composable, modular components." },
  { title: "Performance", desc: "Code splitting & lazy loading friendly." },
];

export default function Features() {
  return (
    <section id="features" className="section section-pad">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
        <p className="text-slate-600 mt-2">
          Everything you need to ship quickly with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="text-lg font-semibold">{f.title}</div>
            <p className="text-slate-600 mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
