"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const items = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // detect active by section top
      const offsets = items.map((it) => {
        const el = document.getElementById(it.id);
        if (!el) return { id: it.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: it.id, top: Math.abs(rect.top) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0]?.id ?? "hero");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={clsx(
        "sticky top-0 z-50 transition backdrop-blur",
        scrolled ? "bg-white/70 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="section h-16 flex items-center justify-between">
        <div className="font-bold text-lg">Maxius</div>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className={clsx(
                "px-3 py-2 rounded-xl text-sm font-medium transition",
                active === it.id ? "bg-slate-100 text-slate-900" : "text-slate-600 hover:bg-slate-100"
              )}
            >
              {it.label}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="btn-ghost text-sm" onClick={() => go("contact")}>Get in touch</button>
        </div>
      </div>
    </motion.header>
  );
}
