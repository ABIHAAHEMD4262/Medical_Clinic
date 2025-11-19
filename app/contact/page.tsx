"use client"
import React, { useState} from 'react';
import { motion} from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { 
 Phone,
 Mail,
 MapPin,
 CheckCircle
} from 'lucide-react';
import Button from '../components/ui/buttons';

interface PageProps {
    setPage: (page: string) => void;
  }


const ContactPage: React.FC<PageProps> =({ setPage }) => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormStatus('submitting');
      setTimeout(() => {
        setFormStatus('success');
    }, 1500);
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="pt-32 pb-20 min-h-screen bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionHeading title="Get in Touch" subtitle="Contact Us" center={false} />
              <p className="text-slate-600 mb-10 text-lg">
                Have questions or need to schedule an appointment? We're here to help. Reach out to us via phone, email, or the form.
              </p>
  
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-400 mt-1">Mon-Fri 8am - 8pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                    <p className="text-slate-600">care@luminamedical.com</p>
                  </div>
                </div>
  
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                    <p className="text-slate-600">123 Wellness Avenue, Suite 100<br />Health City, HC 90210</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setFormStatus('idle')}>
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">First Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-black" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Last Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-black" placeholder="Doe" />
                    </div>
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-black" placeholder="john@example.com" />
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-white">
                      <option>General Inquiry</option>
                      <option>Appointment Request</option>
                      <option>Insurance Question</option>
                    </select>
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
  
                  <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default ContactPage
  