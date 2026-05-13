const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[70] border-b border-white/10 bg-black/80 backdrop-blur-xl px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-3 h-3 bg-emerald-500 animate-pulse rounded-full" />
        <a href="/" className="text-sm font-black uppercase tracking-[0.3em]">Akash_K_Murali // V1.0</a>
      </div>
      
      <ul className="hidden md:flex space-x-12 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
        <li>
          <a href="#projects" className="hover:text-white transition-colors cursor-pointer">[ 01. Projects ]</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">[ 02. Contact ]</a>
        </li>
      </ul>
    </nav>
  );
}; 

export default Navbar ;