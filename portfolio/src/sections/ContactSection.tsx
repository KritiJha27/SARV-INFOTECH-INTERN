import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import SectionWrapper from "../components/SectionWrapper";
import RevealText from "../components/RevealText";
import { personalInfo } from "../data/info";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) errs.email = "Invalid email";
    if (!formState.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const inputClasses = (field: string) =>
    `w-full px-5 py-3.5 rounded-xl bg-bg-primary/60 border ${
      errors[field] ? "border-red-500/50" : "border-border"
    } text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm`;

  const contactLinks = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: "Connect on LinkedIn", href: personalInfo.linkedin },
    { icon: GithubIcon, label: "GitHub", value: "View Projects", href: personalInfo.github },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <RevealText>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-accent to-accent-warm" />
            <span className="text-accent text-sm font-mono font-medium tracking-wider uppercase">Contact</span>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12">
            Let&apos;s{" "}
            <span className="text-gradient-premium">connect</span>
          </h2>
        </RevealText>

        <div className="grid md:grid-cols-2 gap-10">
          <RevealText delay={0.2}>
            <div className="space-y-6">
              <p className="text-text-secondary leading-[1.8]">
                Have a question, want to collaborate, or just want to say hello? Feel free to reach out. I&apos;m always happy to connect with fellow developers and creators.
              </p>

              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    whileHover={{ x: 4 }}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-bg-card/60 backdrop-blur-sm hover:border-accent/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.05)] transition-all duration-400 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                      <link.icon size={18} className="text-accent-light" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wider">{link.label}</p>
                      <p className="text-text-primary font-medium text-sm group-hover:text-accent-light transition-colors duration-300">{link.value}</p>
                    </div>
                    <ArrowRight size={14} className="text-text-muted group-hover:text-accent-light transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                  </motion.a>
                ))}
              </div>
            </div>
          </RevealText>

          <RevealText delay={0.3}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] rounded-2xl border border-success/15 bg-success/5 text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={52} className="text-success mb-5" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                    className="mt-6 text-sm text-accent-light hover:text-accent font-medium transition-colors"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={inputClasses("name")}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={inputClasses("email")}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`${inputClasses("message")} resize-none`}
                      placeholder="Your message..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-warm text-white font-semibold text-sm shadow-[0_0_30px_rgba(124,58,237,0.25)] hover:shadow-[0_0_50px_rgba(124,58,237,0.4)] transition-shadow duration-300"
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </RevealText>
        </div>
      </div>
    </SectionWrapper>
  );
}
