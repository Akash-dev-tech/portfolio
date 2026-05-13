// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen font-mono">
      {/* The Animated Scanline Hook */}
      <div className="scanline-effect" />
      
      {/* Background Noise for that Cinematic look */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;