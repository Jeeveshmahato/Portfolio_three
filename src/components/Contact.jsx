import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionStyles } from "./Styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, staggerContainer, textVariant, fadeIn } from "../utils/motion";
import { Mail, Send, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Copy } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

const WHATSAPP_NUMBER = "916203534938";
const EMAIL_ADDRESS = "jeeveshmaaht@gmail.com";

const sanitizeInput = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
};

const isValidEmail = (email) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(email);
};

const ContactCard = ({ icon: Icon, title, value, href, color, hoverBg, delay, isReactIcon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", delay, 0.75)}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group relative flex items-center gap-4 p-5 bg-[#0a0a1a] border border-gray-800/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-lg ${hoverBg}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        {isReactIcon ? (
          <Icon className="text-white" size={20} />
        ) : (
          <Icon className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-500 text-[11px] uppercase tracking-widest font-medium">{title}</p>
        <p className="text-white font-medium text-sm mt-0.5 truncate">{value}</p>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          title="Copy"
        >
          {copied ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-gray-400" />
          )}
        </button>
        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-0.5 transition-transform duration-200" />
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const cleanName = sanitizeInput(form.name);
    const cleanEmail = sanitizeInput(form.email);
    const cleanMessage = sanitizeInput(form.message);

    if (!cleanName || cleanName.length < 2) {
      newErrors.name = "Please enter a valid name (min 2 characters)";
    }
    if (cleanName.length > 100) {
      newErrors.name = "Name is too long (max 100 characters)";
    }
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!cleanMessage || cleanMessage.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    if (cleanMessage.length > 2000) {
      newErrors.message = "Message is too long (max 2000 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      setErrors({ message: "Please wait before submitting again." });
      return;
    }
    if (!validate()) return;
    setLastSubmitTime(now);

    setLoading(true);

    const cleanName = sanitizeInput(form.name);
    const cleanEmail = sanitizeInput(form.email);
    const cleanMessage = sanitizeInput(form.message);

    const text = encodeURIComponent(
      `New Contact From Portfolio:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nMessage: ${cleanMessage}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");

    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);

    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const focusedField = useRef(null);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={sectionStyles.section}
    >
      {/* Header */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={sectionStyles.sectionSubText}>Get in touch</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Contact<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed mb-4">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          <br className="hidden sm:block" />
          Reach out directly or fill the form below.
        </p>
        {/* Availability indicator */}
        <motion.div
          variants={fadeIn("up", "tween", 0.15, 0.5)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-emerald-300 text-xs font-medium tracking-wide">Available for new projects</span>
        </motion.div>
      </motion.div>

      {/* Direct Contact Cards */}
      <motion.div
        variants={fadeIn("up", "tween", 0.1, 0.6)}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
      >
        <ContactCard
          icon={Mail}
          title="Email"
          value={EMAIL_ADDRESS}
          href={`mailto:${EMAIL_ADDRESS}`}
          color="from-cyan-500 to-blue-600"
          hoverBg="hover:shadow-cyan-500/10"
          delay={0.1}
        />
        <ContactCard
          icon={FaWhatsapp}
          title="WhatsApp"
          value="+91 6203534938"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          color="from-[#25D366] to-[#128C7E]"
          hoverBg="hover:shadow-green-500/10"
          delay={0.2}
          isReactIcon
        />
        <ContactCard
          icon={Phone}
          title="Phone"
          value="+91 6203534938"
          href="tel:+916203534938"
          color="from-violet-500 to-purple-600"
          hoverBg="hover:shadow-violet-500/10"
          delay={0.3}
        />
      </motion.div>

      {/* Quick connect social row */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.5)}
        className="flex items-center justify-center gap-3 mb-10"
      >
        <span className="text-gray-600 text-xs uppercase tracking-widest">Also on</span>
        <div className="flex gap-2">
          <a
            href="https://github.com/Jeeveshmahato"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeeveshmahato/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </motion.div>

      <div className="xl:mt-2 flex xl:flex-row flex-col-reverse gap-10">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={`${sectionStyles.card} flex-[0.75] relative overflow-hidden`}
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/5 blur-2xl opacity-40 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-blue-500/5 blur-2xl opacity-40 pointer-events-none" />

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="relative mb-5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 px-5 py-4 rounded-xl text-sm z-20"
              >
                <span className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-300">Message sent!</p>
                    <p className="text-emerald-400/70 text-xs mt-0.5">Redirecting to WhatsApp...</p>
                  </div>
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
              <Send className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg leading-tight">Send a message</h3>
              <p className="text-gray-500 text-xs mt-0.5">I typically respond within 24 hours</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-[1]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col relative"
            >
              <label className="text-gray-300 font-medium mb-2 text-sm flex items-center gap-1.5">
                Name
                <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => (focusedField.current = "name")}
                onBlur={() => (focusedField.current = null)}
                maxLength={100}
                className={`${sectionStyles.inputField} ${
                  errors.name ? "border-red-400/60 bg-red-500/5" : ""
                } focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] focus:border-cyan-400/50`}
                placeholder="Your full name"
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </span>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <label className="text-gray-300 font-medium mb-2 text-sm flex items-center gap-1.5">
                Email
                <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                maxLength={200}
                className={`${sectionStyles.inputField} ${
                  errors.email ? "border-red-400/60 bg-red-500/5" : ""
                } focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] focus:border-cyan-400/50`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </span>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <label className="text-gray-300 font-medium mb-2 text-sm flex items-center gap-1.5">
                Message
                <span className="text-cyan-400">*</span>
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                className={`${sectionStyles.inputField} resize-none ${
                  errors.message ? "border-red-400/60 bg-red-500/5" : ""
                } focus:shadow-[0_0_20px_rgba(34,211,238,0.08)] focus:border-cyan-400/50`}
                placeholder="Tell me about your project, timeline, and budget..."
              />
              <div className="flex justify-between mt-1.5">
                {errors.message ? (
                  <span className="text-red-400 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message}
                  </span>
                ) : (
                  <span />
                )}
                <span className={`text-xs transition-colors ${
                  form.message.length > 1800 ? "text-amber-400" : "text-gray-600"
                }`}>
                  {form.message.length}/2000
                </span>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 px-8 rounded-xl text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 overflow-hidden"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              disabled={loading}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {loading ? (
                <span className="relative flex items-center justify-center gap-2.5">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="relative flex items-center gap-2.5">
                  <FaWhatsapp size={18} />
                  Send via WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              )}
            </motion.button>

            <p className="text-gray-600 text-[11px] text-center mt-1">
              Your message will open WhatsApp with a pre-filled text. No data is stored.
            </p>
          </form>
        </motion.div>

        {/* EarthCanvas Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Contact, "contact");
