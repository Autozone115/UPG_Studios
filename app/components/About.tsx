import React from "react";
import { motion } from "motion/react";
import { Box, Layers, Monitor, Users, Sparkles, Lightbulb, Zap } from "lucide-react";
import { Link } from "react-router";
const imgProfile = "/images/profile.png";
import svgPaths from "../../imports/svg-rxkrcajxj7";

export function About() {
  const stats = [
    {
      icon: "briefcase",
      value: "4+",
      label: "Years Experience",
    },
    {
      icon: "package",
      value: "7+",
      label: "Completed Projects | Multiple Systems & Prototypes",
    },
    {
      icon: "target",
      value: "1",
      label: "Published App",
    },
  ];

  const coreExpertise = [
    {
      title: "VR Development",
      description:
        "Building immersive VR training simulations and interactive experiences in Unreal Engine, optimized for Meta Quest devices.",
      icon: "package",
    },
    {
      title: "Blueprint Systems",
      description:
        "Creating complex gameplay mechanics and interaction systems using Unreal Engine's Blueprint visual scripting for rapid prototyping and iteration.",
      icon: "palette",
    },
    {
      title: "Training Simulations",
      description:
        "Designing simulation-based training environments that help prevent real-world mistakes through safe, repeatable practice scenarios.",
      icon: "lightbulb",
    },
    {
      title: "Problem Solving",
      description:
        "Solving complex interaction challenges and turning ideas into fully functional, user-focused VR systems with strong emphasis on usability.",
      icon: "users",
    },
  ];

  const technicalSkills = [
    { name: "Unreal Engine", level: 92 },
    { name: "Blueprint Visual Scripting", level: 95 },
    { name: "VR Development (Meta Quest)", level: 90 },
    { name: "MetaHuman Integration", level: 85 },
    { name: "3D Modeling (Blender/Maya)", level: 88 },
    { name: "Real-time AI Systems", level: 80 },
  ];

  const timeline = [
    {
      year: "2025",
      title: "XR Developer & VR Training Specialist",
      company: "Freelance / Client Work",
      description:
        "Solo developed and published VR training application on Meta Quest store. Created immersive training simulations focused on professional communication and real-world skill development.",
    },
    {
      year: "2022 - Present",
      title: "Animation & Game Development Student",
      company: "Utah Valley University — B.S. Animation & Game Development",
      description:
        "Studying Animation & Game Development with emphasis in Extended Reality (XR). Building VR experiences, simulation training environments, and interactive storytelling projects.",
    },
    {
      year: "2022",
      title: "Started XR Development Journey",
      company: "Self-Learning & Game Development",
      description:
        "Began exploring VR development and game systems, discovering a passion for creating immersive experiences that solve real-world problems through simulation and training.",
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactElement> = {
      briefcase: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d={svgPaths.p462d500} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 10V16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2b645f80} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      package: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d={svgPaths.p35061900} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.3 7L12 12L20.7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      users: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d={svgPaths.p1d820380} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13e20900} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      target: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M14.622 17.897L3.942 14.984" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e885180} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p309880} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      palette: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M14.622 17.897L3.942 14.984" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2e885180} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p309880} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      lightbulb: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d={svgPaths.p1ea91d80} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 22H14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
    };
    return icons[iconName] || <Box className="w-6 h-6" />;
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">About Me</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Game Developer
                </span>
                <br />
                <span className="text-slate-100">
                  Building
                  <br />
                  Gameplay Systems &
                  <br />
                  Immersive VR Experiences
                </span>
              </h1>

              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                I'm Anival Ramos, a game devloper specializing in Unreal Engine, with a focus on VR and interactive systems. 
                Graduate of Utah Valley University with a B.S. in Animation & Game Development, emphasis in XR.
              </p>

              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                My work focuses on building gameplay systems and interactive experiences in Unreal Engine using Blueprints, 
                MetaHumans, and real-time AI integration. I'm especially interested in creating systems that support both
                immersive gameplay and training simulationgs, turning ideas into fully functional, user-focused experiences.
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">
                {["Unreal Engine", "Blueprint", "Meta Quest", "MetaHuman", "VR Training"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 font-semibold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img src={imgProfile} alt="Profile" className="w-full h-auto object-cover" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(150.173deg, rgba(15, 23, 43, 0.5) 0%, rgba(29, 41, 61, 0.3) 100%)",
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-cyan-500/20 inset-0 pointer-events-none rounded-2xl"
                />

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(0, 184, 219, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)",
                  }}
                >
                  <div className="text-cyan-400">{getIcon(stat.icon)}</div>
                </div>

                {/* Value */}
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>

                {/* Label */}
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Core Expertise
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Specialized skills that power immersive VR experiences</p>
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreExpertise.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                className="relative p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-900/70 transition-all cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-cyan-500/20 inset-0 pointer-events-none rounded-2xl"
                />

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(0, 184, 219, 0.2) 0%, rgba(173, 70, 255, 0.2) 100%)",
                  }}
                >
                  <div className="text-cyan-400">{getIcon(skill.icon)}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-3">{skill.title}</h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Proficiency Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technical Proficiency
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Software mastery enabling efficient and high-quality production
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-cyan-500/20"
              >
                {/* Skill Name & Percentage */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-slate-100 text-lg">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold text-lg">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Career milestones and educational achievements</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 border-4 border-slate-950">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/50 blur-md" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-xl bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
                        {item.year}
                      </span>
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{item.company}</p>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-2xl text-center overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(0, 184, 219, 0.1) 0%, rgba(173, 70, 255, 0.1) 100%)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute border border-cyan-500/30 inset-0 pointer-events-none rounded-2xl"
            />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
                Let's Collaborate
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Ready to bring your VR training or interactive experience to life
              </p>
              <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}