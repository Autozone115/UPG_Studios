import { motion } from "motion/react";
import { Download, Mail, Phone, MapPin, Linkedin, Globe, Briefcase, GraduationCap, Award, Code } from "lucide-react";

export function Resume() {
  const experience = [
    {
      title: "VR/Game Developer",
      company: "Freelance",
      location: "Remote",
      period: "2025 - Present",
      responsibilities: [
        "Developed and published a VR training application on Meta Quest",
        "Built gameplay systems and interaction mechanics in Unreal Engine",
        "Developed VR systems with interactive controls and physics-based mechanics",
        "Created 3D assets and environments to support gameplay needs",
      ],
    },
    {
      title: "Game Developer & 3D Artist",
      company: "Personal Portfolio",
      location: "Remote",
      period: "2022 - Present",
      responsibilities: [
        "Built interactive simulations with gameplay systems and mechanics",
        "Developed control systems and player interaction mechanics",
        "Optimized performance for VR platforms and real-time rendering",
        "Created 3D assets including characters, vehicles, and environments",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science - Animation & Game Development",
      emphasis: "Extended Reality (XR) Specialization",
      school: "Utah Valley University",
      location: "Orem, UT",
      period: "2022 - 2026",
      details: "Specialized in VR/AR development, Unreal Engine programming, interactive gameplay mechanics, and immersive experience design",
    },
    {
      degree: "3D Art & Digital Media",
      emphasis: "Supporting Skillset for Game Development",
      school: "Utah Valley University",
      location: "Orem, UT",
      period: "2022 - 2026",
      details: "Focused on 3D modeling, texturing, lighting, and asset creation to support game development projects",
    },
    {
      degree: "Minor in Computer Science",
      emphasis: "Technical Programming Foundation",
      school: "Utah Valley University",
      location: "Orem, UT",
      period: "2025 - 2026",
      details: "Strengthened programming fundamentals, algorithms, and software development practices to enhance game development capabilities",
    },
  ];

  const skills = {
    "VR Development": ["Meta Quest", "Blueprint Visual Scripting", "Interactive Mechanics", "VR Optimization"],
    "Game Engines": ["Unreal Engine", "MetaHuman Creator"],
    "3D Software": ["Maya", "Blender", "ZBrush", "Substance Painter", "Substance Designer"],
    "Technical Skills": ["Gameplay Programming", "3D Modeling", "PBR Texturing", "Lighting", "Level Design"],
  };

  const achievements = [
    "Published a VR application on the Meta Quest platform",
    "Developed VR systems with interactive mechanics and user-driven interactions",
    "Built complete Unreal Engine projects from concept to deployment",
    "Designed and implemented gameplay systems using Unreal Engine Blueprints",
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cyan-500/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Resume
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-6">
              VR/Game Developer & 3D Artist
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>xytocstudios@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                
                
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Orem, UT</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://www.linkedin.com/in/anivalramos115"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg text-cyan-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 rounded-lg text-cyan-400 transition-all"
              >
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
            </div>

            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="Resume_Anival_Ramos.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-xl bg-slate-900/50 border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-100">Professional Summary</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">Game Developer with 4+ years of experience building gameplay systems, interactive mechanics, and 
            VR experiences in Unreal Engine. Published with Meta Quest devloper with strong expertise in Blueprint visual scripting. Experienced in 
            developing end-to-end projects from concept to deployment, with a focus on gameplay systems, player interaction, and real-time performance.</p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-xl bg-slate-900/50 border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-100">Experience</span>
            </h2>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-cyan-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                  
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mt-1">
                      <span className="text-cyan-400 font-semibold">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-xl bg-slate-900/50 border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-100">Education</span>
            </h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-cyan-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500" />
                  
                  <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                  {edu.emphasis && (
                    <p className="text-purple-400 text-sm font-semibold mt-1">{edu.emphasis}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mt-1">
                    <span className="text-cyan-400 font-semibold">{edu.school}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 rounded text-purple-400">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-400 mt-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-xl bg-slate-900/50 border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-100">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-xl bg-slate-900/50 border border-cyan-500/20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-100">Key Achievements</span>
            </h2>

            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-400">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}