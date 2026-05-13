import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

const ContactForm = ({ close }) => {
  const formRef = useRef();
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SUCCESS, ERROR

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING");

    // Using Environment Variables for Security
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("SUCCESS");
      // Industrial delay: Let them see the 'Signal Received' message before closing
      setTimeout(() => {
        close();
        setStatus("IDLE");
      }, 3000);
    })
    .catch((err) => {
      console.error("SYSTEM_ERROR_LOG:", err);
      setStatus("ERROR");
      // Reset error after 5 seconds so they can try again
      setTimeout(() => setStatus("IDLE"), 5000);
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="bg-zinc-950 border border-zinc-800 w-full max-w-xl p-8 relative shadow-2xl font-mono"
    >
      {/* Background Noise/Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <button 
        onClick={close} 
        className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors z-10"
      >
        <X size={24} />
      </button>

      {status === "SUCCESS" ? (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="py-16 text-center space-y-4"
        >
          <CheckCircle size={64} className="text-emerald-500 mx-auto animate-pulse" />
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Signal Received</h3>
          <p className="text-zinc-400 text-[10px] tracking-[0.3em] uppercase">
            Data_Packets_Successfully_Transmitted
          </p>
          <p className="text-zinc-500 text-xs mt-4 italic">Closing connection...</p>
        </motion.div>
      ) : (
        <>
          <div className="text-center mb-10">
            <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-2 text-white">
              Get In Touch
            </h3>
            <div className="w-12 h-1 bg-emerald-500 mx-auto" />
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                // Sender_Identity
              </label>
              <input 
                name="from_name" // Matches dashboard {{from_name}}
                required 
                type="text" 
                placeholder="YOUR_NAME" 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500 transition-all font-mono" 
              />
            </div>

            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                // Return_Address
              </label>
              <input 
                name="reply_to" // Matches dashboard {{reply_to}}
                required 
                type="email" 
                placeholder="EMAIL_ADDRESS" 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500 transition-all font-mono" 
              />
            </div>

            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                // Encoded_Message
              </label>
              <textarea 
                name="message" // Matches dashboard {{message}}
                required 
                rows="4" 
                placeholder="INPUT_PROJECT_DETAILS..." 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white placeholder:text-zinc-700 outline-none focus:border-emerald-500 transition-all font-mono resize-none" 
              />
            </div>

            <button 
              disabled={status === "SENDING"}
              className="w-full bg-emerald-500 text-black font-black uppercase py-5 flex items-center justify-center gap-3 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status === "SENDING" ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> 
                  TRANSMITTING_SIGNAL...
                </>
              ) : (
                <>
                  <Send size={18} /> 
                  SEND MESSAGE
                </>
              )}
            </button>

            {status === "ERROR" && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 text-[10px] text-center uppercase tracking-widest mt-2"
              >
                Critical_Error: Transmission_Failed_Check_Console
              </motion.p>
            )}
          </form>
        </>
      )}
    </motion.div>
  );
};

export default ContactForm;