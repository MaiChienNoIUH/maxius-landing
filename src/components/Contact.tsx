"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section-pad">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="text-slate-600 mt-2">
            Questions, partnerships, or just want to say hi? Drop us a message.
          </p>
          <ul className="mt-6 space-y-2 text-slate-600">
            <li>📍 Remote-first</li>
            <li>✉️ nomai6789@gmail.com</li>
            <li>🕒 Mon–Fri, 8am–5pm</li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-4">
            <input
              placeholder="Your name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-400"
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-400"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none resize-y focus:border-sky-400"
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            />
            <button
              disabled={status === "sending"}
              className="btn-primary"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent ✓"}
              {status === "error" && "Try Again"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
