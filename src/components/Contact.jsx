import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, staggerContainer, textVariant, fadeIn } from "../utils/motion";
import { Mail, MessageCircle, Send, Phone } from "lucide-react";

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

const ContactCard = ({ icon: Icon, title, value, href, color, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn("up", "spring", delay, 0.75)}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    className="group relative flex items-center gap-4 p-5 bg-[#0f0f23] border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700/50"
  >
    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center shadow-lg flex-shrink-0`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-gray-500 text-xs uppercase tracking-wider">{title}</p>
      <p className="text-white font-medium text-sm mt-0.5">{value}</p>
    </div>
  </motion.a>
);

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

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={sectionStyles.section}
    >
      <motion.div variants={textVariant()} className="text-center">
        <p className={sectionStyles.sectionSubText}>Get in touch</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Contact<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base mb-10">
          Have a project in mind or want to collaborate? Reach out through the form below or contact me directly.
        </p>
      </motion.div>

      {/* Direct Contact Options */}
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
          delay={0.1}
        />
        <ContactCard
          icon={MessageCircle}
          title="WhatsApp"
          value="+91 6203534938"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          color="from-emerald-500 to-green-600"
          delay={0.2}
        />
        <ContactCard
          icon={Phone}
          title="Phone"
          value="+91 6203534938"
          href="tel:+916203534938"
          color="from-purple-500 to-pink-600"
          delay={0.3}
        />
      </motion.div>

      <div className="xl:mt-6 flex xl:flex-row flex-col-reverse gap-10">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={`${sectionStyles.card} flex-[0.75] relative overflow-hidden`}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/5 blur-xl opacity-50 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/5 blur-xl opacity-50 pointer-events-none" />

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="relative mb-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 px-4 py-3 rounded-xl text-sm text-center z-20"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message sent successfully! Redirecting to WhatsApp...
              </span>
            </motion.div>
          )}

          <h3 className="text-white font-semibold text-lg mb-1">Send me a message</h3>
          <p className="text-gray-500 text-sm mb-6">Fill out the form and I'll get back to you as soon as possible.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-[1]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col relative"
            >
              <label className="text-white font-medium mb-2 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                className={`${sectionStyles.inputField} ${
                  errors.name ? "border-red-400" : ""
                } focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]`}
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1">{errors.name}</span>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <label className="text-white font-medium mb-2 text-sm">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                maxLength={200}
                className={`${sectionStyles.inputField} ${
                  errors.email ? "border-red-400" : ""
                } focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1">{errors.email}</span>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <label className="text-white font-medium mb-2 text-sm">
                Your Message
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                className={`${sectionStyles.inputField} resize-none ${
                  errors.message ? "border-red-400" : ""
                } focus:shadow-[0_0_15px_rgba(34,211,238,0.1)]`}
                placeholder="Tell me about your project..."
              />
              <div className="flex justify-between mt-1">
                {errors.message && (
                  <span className="text-red-400 text-xs">{errors.message}</span>
                )}
                <span className="text-gray-500 text-xs ml-auto">
                  {form.message.length}/2000
                </span>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className={`${sectionStyles.buttonPrimary} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              whileHover={{ scale: loading ? 1 : 1.03 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
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
                <>
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </>
              )}
            </motion.button>
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
