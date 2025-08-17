"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="section section-pad">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            AI-Powered Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Build faster with a{" "}
            <span className="text-sky-600">modern</span> startup stack
          </h1>
          <p className="text-slate-600 max-w-prose">
            Launch your product with a sleek, minimal landing page. Responsive by default, animated with Framer Motion, and optimized for performance.
          </p>
          <div className="flex gap-3">
            <a href="#features" className="btn-primary">Explore Features</a>
            <a href="#contact" className="btn-ghost">Contact Sales</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Placeholder illustration */}
          <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 aspect-[4/3] shadow-xl" />
        </motion.div>
      </div>
    </section>
  );
}
