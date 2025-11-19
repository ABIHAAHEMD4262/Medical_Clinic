"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DOCTORS, TESTIMONIALS, FEATURES } from '@/types';
import SectionHeading from './components/ui/SectionHeading';
import { Activity, Calendar } from 'lucide-react';
import Button from './components/ui/buttons';

const HomePage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full"
  >
    {/* --- Hero Section --- */}
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 rounded-bl-[100px] hidden lg:block" />
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-teal-700 font-medium mb-6 text-sm border border-teal-100">
              ✨ Accepting New Patients
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Healthcare <br />
              <span className="text-teal-600">Reimagined.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Experience a new standard of medical care. We combine advanced technology with compassionate expertise to put your health first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Book Appointment */}
              <Link href="/contact" className="w-max">
                <Button>
                  Book Appointment <Calendar className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* View Services */}
              <Link href="/services" className="w-max">
                <Button variant="secondary">View Services</Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden"
                  >
                    <img
                      src={`/icons/${i}.png`}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-slate-900">2,000+ Patients</p>
                <p className="text-sm text-slate-500">Trust us with their health</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/5 lg:aspect-square">
              <img
                src="/images/hero.png"
                alt="Modern Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-100 rounded-full text-teal-600">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Top Rated Clinic</p>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* --- Features Section --- */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* --- Doctors Section --- */}
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Meet Our Specialists" subtitle="Our Team" />
        <div className="grid md:grid-cols-3 gap-8">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="h-100 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{doc.role}</p>
                <p className="text-slate-600 text-sm">{doc.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* --- Testimonials Section --- */}
    <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Patient Stories" subtitle="Testimonials" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-teal-800/50 p-8 rounded-2xl border border-teal-700 backdrop-blur-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-teal-50 mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-bold">{t.author}</p>
                <p className="text-teal-300 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

export default HomePage;
