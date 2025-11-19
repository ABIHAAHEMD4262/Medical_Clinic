"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X } from "lucide-react";
import Button from "./buttons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for sticky-glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/40 backdrop-blur-xl shadow-md py-4"
          : "bg-white/20 backdrop-blur-lg py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* ---- Logo ---- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-700/20">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Medi<span className="text-teal-600">Care+</span>
            </span>
          </Link>
        </motion.div>

        {/* ---- Desktop Menu ---- */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, color: "#14B8A6" }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-slate-700 font-medium tracking-wide hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <Button variant="primary" className="px-5 py-2.5 text-sm rounded-lg shadow-md">
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </motion.div>
        </div>

        {/* ---- Mobile Menu Toggle ---- */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-900"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---- Mobile Menu ---- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/40 backdrop-blur-lg border-t border-slate-200 overflow-hidden shadow-sm"
          >
            <div className="flex flex-col p-6 gap-5">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05, color: "#14B8A6" }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-800 font-medium hover:text-teal-600 transition-colors text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <Button className="w-full py-3 text-base rounded-lg">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
