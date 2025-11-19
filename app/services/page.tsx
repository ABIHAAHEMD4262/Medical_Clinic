"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SERVICES,
  ServiceData,
} from "@/types";

import SectionHeading from "../components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import Button from "../components/ui/buttons";

// -------- FIXED: Renamed to avoid Next.js conflict --------
interface ClinicPageProps {
  setPage: (page: string) => void;
}

const ServicesPage: React.FC<ClinicPageProps> = ({ setPage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 pb-20 min-h-screen bg-slate-50"
    >
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Medical Services"
          subtitle="Comprehensive Care"
          center={false}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SERVICES.map((service: ServiceData, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              {/* FIXED: Must call icon as a component */}
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-teal-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="flex items-center text-teal-600 font-medium hover:gap-2 transition-all group">
                Learn More{" "}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 bg-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to prioritize your health?
            </h2>

            <p className="text-teal-100 mb-8 max-w-xl mx-auto">
              Our team is ready to provide the best medical care. Schedule your appointment today.
            </p>

            <Button variant="white" onClick={() => setPage("contact")}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
