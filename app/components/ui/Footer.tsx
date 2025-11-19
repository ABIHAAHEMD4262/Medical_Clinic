"use client";

import React from "react";
import Link from "next/link";
import { Activity, ArrowRight } from "lucide-react";
import { APP_NAME } from "@/types";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold">{APP_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing world-class medical care with a personal touch. Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-teal-400 transition-colors"
                >
                  Patient Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Cardiology</li>
              <li>Pediatrics</li>
              <li>Neurology</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs text-slate-400 mb-4">
              Subscribe to our newsletter for health tips.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-teal-500 w-full"
              />

              <button
                type="button"
                className="bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 {APP_NAME}. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
