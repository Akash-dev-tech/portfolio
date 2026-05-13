const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black p-6 font-mono">
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-zinc-500">
        <div className="flex gap-4">
          <span>[ STATUS: ACTIVE ]</span>
          <span>[ LOCATION: 9.9312° N, 76.2673° E ]</span>
        </div>
        <div className="mt-4 md:mt-0">
          © {new Date().getFullYear()} AKASH K MURALI // SYSTEMS ENGINEER
        </div>
        <div className="hidden md:block">
          NIAT_SEM_02_BUILD_V1.0
        </div>
      </div>
    </footer>
  );
}
export default Footer;