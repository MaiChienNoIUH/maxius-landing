"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section section-pad">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About Maxius
        </motion.h2>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-slate-600"
        >
          We focus on a clean, minimal experience. This landing template emphasizes reusable components, TypeScript safety, and delightful motion.
        </motion.p>
      </div>
    </section>
  );
}
