import { 
    Stethoscope, 
    Heart, 
    Activity, 
    Clock, 
    ShieldCheck, 
    User,
    LucideIcon 
  } from 'lucide-react';
  
  // --- Interfaces ---
  
  export interface ServiceData {
    title: string;
    description: string;
    icon: LucideIcon; // Changed from React.ReactNode to LucideIcon
  }
  
  export interface DoctorData {
    name: string;
    role: string;
    image: string;
    bio: string;
  }
  
  export interface TestimonialData {
    text: string;
    author: string;
    role: string;
  }
  
  export interface FeatureData {
    icon: LucideIcon;
    title: string;
    desc: string;
  }
  
  // --- Constants ---
  
  export const APP_NAME = "Lumina Medical";
  
  export const SERVICES: ServiceData[] = [
    {
      title: "Cardiology",
      description: "Comprehensive heart care using advanced diagnostic technology and personalized treatment plans.",
      icon: Heart, // Passing the component directly, not <Heart />
    },
    {
      title: "General Practice",
      description: "Routine check-ups, vaccinations, and preventative care for the whole family.",
      icon: Stethoscope,
    },
    {
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents in a warm, friendly environment.",
      icon: User,
    },
    {
      title: "Neurology",
      description: "Expert diagnosis and treatment for disorders of the nervous system.",
      icon: Activity,
    },
    {
      title: "Diagnostics",
      description: "State-of-the-art laboratory and imaging services for accurate results.",
      icon: ShieldCheck,
    },
    {
      title: "Emergency Care",
      description: "24/7 urgent care services for critical medical situations.",
      icon: Clock,
    },
  ];
  
  export const DOCTORS: DoctorData[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Cardiologist",
      image: "/images/sarah.png",
      bio: "Over 15 years of experience in interventional cardiology."
    },
    {
      name: "Dr. James Wilson",
      role: "Senior Pediatrician",
      image: "/images/james.png",
      bio: "Dedicated to child wellness and preventative medicine."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Neurologist",
      image: "/images/elena.png",
      bio: "Specializing in cognitive disorders and headache management."
    },
  ];
  
  export const TESTIMONIALS: TestimonialData[] = [
    {
      text: "The level of care at Lumina is unmatched. The staff made me feel completely at ease during my procedure.",
      author: "Michael T.",
      role: "Patient"
    },
    {
      text: "Dr. Wilson is amazing with my kids. They actually look forward to going to the doctor now!",
      author: "Amanda B.",
      role: "Parent"
    },
    {
      text: "Efficient, clean, and incredibly professional. Best medical experience I've had in years.",
      author: "Robert L.",
      role: "Patient"
    }
  ];
  
  export const FEATURES: FeatureData[] = [
    { icon: Clock, title: "24/7 Support", desc: "Always here when you need us most." },
    { icon: User, title: "Expert Doctors", desc: "Board-certified medical professionals." },
    { icon: ShieldCheck, title: "Advanced Care", desc: "Latest medical technology & facilities." }
  ];