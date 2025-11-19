"use client"
import { motion} from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    center?: boolean;
  }
  
  const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = true }) => (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-teal-600 font-semibold tracking-wider uppercase text-sm"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 mt-2"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`h-1 bg-teal-500 mt-4 rounded-full ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
  export default SectionHeading