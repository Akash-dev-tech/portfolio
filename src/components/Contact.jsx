import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { contactLinks } from "../data/links";
import ContactForm from "./ContactForm";

// Manual SVG Components for Brand Icons (Ensures no library export errors)
const GithubSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const IconMap = {
  github: <GithubSVG />,
  linkedin: <LinkedinSVG />,
  mail: <Mail size={24} />,
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Intercept Email click to show modal instead of opening mail app
  const handleLinkClick = (e, linkName) => {
    if (linkName === "EMAIL") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <section id="contact" className="py-32 px-10 border-t border-zinc-900 bg-black font-mono relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm text-emerald-500 mb-12 tracking-[0.5em] uppercase text-left">
          // Initialize_Connection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800">
          {contactLinks.map((link) => (
            // Inside Contact.jsx, update the anchor tag classes:
            <a 
              key={link.id}
              href={link.url}
              onClick={(e) => handleLinkClick(e, link.name)}
              // Changed h-72 to h-96 and p-12 to p-16
              className="group p-16 border-zinc-800 md:border-r last:border-r-0 border-b md:border-b-0 hover:bg-white transition-all duration-500 flex flex-col justify-between h-96"
            >
              <div className="flex justify-between items-start">
                {/* Scaled icon size */}
                <div className="scale-125 text-zinc-500 group-hover:text-black transition-colors">
                  {IconMap[link.iconType]}
                </div>
                <ArrowUpRight size={28} className="text-zinc-800 group-hover:text-black transition-all group-hover:rotate-45" />
              </div>

              <div className="mt-8 text-left">
                <span className="text-xs block mb-4 text-zinc-500 group-hover:text-zinc-600 uppercase tracking-[0.3em]">
                  {link.label}
                </span>
                {/* Scaled text from 3xl to 5xl */}
                <span className="text-5xl font-black tracking-tighter uppercase text-white group-hover:text-black transition-colors duration-500">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Modal System Integration */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            {/* The ContactForm handles its own internal EmailJS logic and Thank You message */}
            <ContactForm close={() => setIsModalOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;