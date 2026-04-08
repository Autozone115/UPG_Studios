import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Code, Gamepad2, Sparkles, Award, MapPin, GraduationCap, Rocket, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const stats = [
    {
      icon: Award,
      number: "1+",
      label: "Published VR App",
      description: "Meta Quest Store",
    },
    {
      icon: Code,
      number: "7+",
      label: "Projects Completed",
      description: "VR & Game Development",
    },
    {
      icon: Gamepad2,
      number: "3+",
      label: "Years Experience",
      description: "In Game Development",
    },
  ];

  const expertise = [
    {
      icon: Sparkles,
      title: "VR Development First",
      description: "I build immersive VR training simulations and interactive experiences with Unreal Engine and Meta Quest. Published developer with real-world applications.",
    },
    {
      icon: Code,
      title: "Blueprint Master",
      description: "Expert in creating complex gameplay mechanics, AI systems, and interactive controls using Unreal Engine's Blueprint visual scripting.",
    },
    {
      icon: Gamepad2,
      title: "3D Art as Support",
      description: "I create 3D assets, characters, and environments to support my game development work. My art serves the gameplay, not the other way around.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1559818447-969ea3aa2fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWUiUyMGhlYWRzZXQlMjBuZW9uJTIwY3liZXJwdW5rfGVufDF8fHx8MTc3NDY2NjI4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="VR Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-3"
            >
              <span className="text-slate-300 text-xl font-medium">Hey there, I'm</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Anival Ramos
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-10 font-mono">
              Game Developer&nbsp;&nbsp;|&nbsp;&nbsp;VR&nbsp;&nbsp;|&nbsp;&nbsp;Interactive Systems
            </h2>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-6 max-w-3xl leading-relaxed">
              I build <span className="text-cyan-400">game systems</span>, <span className="text-cyan-400">interactive mechanics</span>, and <span className="text-cyan-400">immersive VR experiences</span> using <span className="text-purple-400">Unreal Engine</span>.
            </p>

            {/* Location and School */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span className="text-lg">Senior at Utah Valley University — Expected Graduation May 2026</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-lg">Orem, UT</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
              <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg font-mono text-slate-950 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all overflow-hidden"
                >
                  <span className="relative z-10">See My Projects</span>
                  <ArrowRight className="relative z-10 w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                <Link
                  to="/contact"
                  className="px-10 py-5 border-2 border-cyan-500/50 rounded-lg font-bold text-lg font-mono text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 mx-auto rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-100 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-400">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  A Developer Who Codes First
                </span>
              </h2>
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  I'm not your typical game developer. While I can create 3D assets and environments,
                  <span className="text-cyan-400 font-semibold"> my real passion is programming interactive systems</span> and
                  building gameplay mechanics that make gameplay and VR experiences come alive.
                </p>
                <p>I'm a game developer focused on building gameplay systems, interactive mechanics, and immersive VR experiences in Unreal Engine. I'm currently finishing my senior year at <span className="text-purple-400 font-semibold">Utah Valley University</span>, and I've already published a VR training application on the Meta Quest store.</p>
                <p className="text-slate-400 text-base italic">
                  3D art is my tool, not my identity. I create assets to serve the games I build, because at the end of the day,
                  I'm a <span className="text-cyan-400">developer</span> who happens to know 3D.
                </p>
              </div>
            </motion.div>

            {/* Photos */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/10 aspect-[3/4]">
                <img src="/images/me-1.jpg" alt="Anival using VR headset" className="w-full h-full object-cover" style={{objectPosition: "50% 20%"}} />
              </div>
              <div className="rounded-xl overflow-hidden border border-purple-500/20 shadow-lg shadow-purple-500/10 aspect-[3/4] mt-8">
                <img src="/images/me-2.jpg" alt="Anival at graduation" className="w-full h-full object-cover" style={{objectPosition: "50% 15%"}} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                What I Bring to the Table
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              My unique combination of development and artistic skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-semibold">Let's Build Something Amazing</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ready to Collaborate?
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need gameplay systems, interactive mechanics, a VR training simulation, or someone who can 
                build the whole experience from scratch—I'm your developer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
                >
                  <Play className="w-5 h-5" />
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}