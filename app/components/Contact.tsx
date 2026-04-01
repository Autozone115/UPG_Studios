import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock)
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ramosbusiness1818@gmail.com",
      href: "mailto:ramosbusiness1818@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Orem, UT",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anivalramos115" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Drop me a message and let's create something amazing!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-8 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-6 text-slate-100">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400 mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-slate-100 hover:text-cyan-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-slate-100">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-cyan-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-slate-100">
                    Follow Me
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-lg bg-slate-800/50 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 flex items-center justify-center border border-slate-700 hover:border-cyan-500/50 transition-all group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30">
                <h3 className="text-lg font-semibold mb-2 text-slate-100">
                  Open to Game Dev & VR Opportunities
                </h3>
                <p className="text-slate-400 text-sm">
                  I'm currently available for freelance projects and
                  collaborations. Let's discuss how we can work together to
                  bring your game ideas to life.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20"
              >
                <h2 className="text-2xl font-bold mb-6 text-slate-100">
                  Send a Message
                </h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}>
                    <button
                      type="submit"
                      className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}