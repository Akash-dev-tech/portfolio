import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 relative overflow-hidden">
      {/* Large Background Numbers from Video */}
      <span className="absolute right-0 bottom-10 text-[30vw] font-black text-zinc-900 leading-none select-none">
        02
      </span>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <span className="text-emerald-500 text-xs tracking-[0.5em] mb-4 block uppercase">
          Logic // Intelligence // Architecture
        </span>
        
        <h1 className="text-[12vw] font-black leading-[0.85] uppercase italic tracking-tighter mb-8">
          Systems <br /> Engineer
        </h1>

        <p className="max-w-xl text-zinc-400 text-lg md:text-xl leading-relaxed border-l border-zinc-800 pl-8 mb-10">
          Bridging the gap between <span className="text-white">Modern Web Architecture</span> and 
          <span className="text-white"> Intelligent Systems</span>. Specialized in DSA-optimized 
          logic and LLM-driven applications.
        </p>

        <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest border border-white/20 px-10 py-5 hover:bg-white hover:text-black transition-all">
          Initialize Contact
          <span className="group-hover:translate-x-2 transition-transform">-</span>
        </button>
      </motion.div>
    </section>
  );
}; 

export default Hero;