import React, { useState } from "react";
import { motion } from "framer-motion";
import { sectionStyles } from "./Styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../utils/motion"; // Added fadeIn import

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Format message for WhatsApp
    const message =
      `New Contact From Portfolio:%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Message:* ${form.message}`;

    // Open WhatsApp with prefilled message
    window.open(`https://wa.me/916203534938?text=${message}`, "_blank");

    setForm({ name: "", email: "", message: "" });
    setLoading(false);
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
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          Contact.
        </h2>
      </motion.div>

      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10">
        {/* Form Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={`${sectionStyles.card} flex-[0.75]`}
        >
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <label className="text-white font-medium mb-2">Your Name*</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={sectionStyles.inputField}
                placeholder="Your name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <label className="text-white font-medium mb-2">Your Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={sectionStyles.inputField}
                placeholder="Your email"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <label className="text-white font-medium mb-2">
                Your Message*
              </label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className={sectionStyles.inputField}
                placeholder="Your message"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className={sectionStyles.buttonPrimary}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send via WhatsApp"
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
