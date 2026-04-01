import { motion } from "motion/react";
import { ExternalLink, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
const imgDamControl = "/images/dam-room-thumbnail.jpg";
const imgMetahuman = "/images/metahuman-sim-thumbnail.png";
const imgMetahumanAsset = "/images/metahuman.jpg";
const imgHorrorHouse = "/images/horror-house-thumbnail.png";
const imgMilesRoom = "/images/miles-room.jpg";
const imgVRTraining = "/images/procomm-thumbnail.png";
const imgARPoster = "/images/ar-poster.png";
const imgEMS = "/images/ems-thumbnail.png";

export function Projects() {
  const projects = [
    {
      title: "Professional Communication VR Training",
      category: "Published Meta App",
      description:
        "Solo developed VR training application for Meta Quest designed to teach executives professional communication skills with employees. Features interactive scenarios and real-time feedback systems.",
      image: imgVRTraining,
      tags: ["Meta Quest", "VR", "Training", "Solo Dev"],
      link: "https://www.meta.com/experiences/professional-communication-vr-training/25530522356556137/",
      linkType: "app",
      status: "Published",
    },
    {
      title: "EMS Training Triage | Bus Accident",
      category: "Interactive Training",
      description:
        "Interactive EMS triage training simulation built to teach emergency medical responders how to properly assess and prioritize patients in a mass casualty scenario.",
      image: imgEMS,
      tags: ["Unreal Engine", "VR", "Training", "Simulation"],
      link: "https://www.youtube.com/watch?v=4TagoulXjkM",
      linkType: "video",
    },
    {
      title: "VR Dam Control Room | Interactive Simulation (Unreal Engine)",
      category: "Interactive Simulation",
      description:
        "Built a VR dam control system in Unreal Engine with interactive dials, real-time monitoring displays, switch-based dam control, adjustable lighting, and an emergency shutdown system using Blueprints.",
      image: imgDamControl,
      tags: ["Unreal Engine", "VR", "Blueprint"],
      link: "https://www.youtube.com/watch?v=VmfCLCS47so",
      linkType: "video",
    },
    {
      title: "Metahuman Simulator | Blueprint Logic Demo",
      category: "Blueprint Logic Demo",
      description:
        "Developed AI-driven Metahuman behaviour and gameplay systems using Unreal Engine Blueprints, showcasing dynamic character interaction.",
      image: imgMetahuman,
      tags: ["Unreal Engine", "Metahuman", "AI", "Blueprint"],
      link: "https://www.youtube.com/watch?v=6CG6VwPmiJM",
      linkType: "video",
    },
    {
      title: "Miles Morales' Room",
      category: "3D Environment Recreation",
      description:
        "Detailed 3D recreation of Miles Morales' iconic bedroom from Spider-Man. This environment showcase demonstrates advanced modeling, texturing, and lighting techniques to capture the authentic atmosphere of the character's personal space.",
      image: imgMilesRoom,
      tags: ["3D Modeling", "Environment Art", "Lighting", "Texturing"],
      link: "#",
      linkType: "gallery",
    },
    {
      title: "Metahuman of Myself | From Blender to Unreal Engine",
      category: "Character Creation",
      description:
        "Custom Metahuman character created from Blender to Unreal Engine. Photorealistic digital human with full facial rigging and realistic skin shading for use in VR and game projects.",
      image: imgMetahumanAsset,
      tags: ["Unreal Engine", "Metahuman", "Blender", "Character Design"],
      link: "#",
      linkType: "gallery",
    },
    {
      title: "Horror House | Blueprint Driven Gameplay",
      category: "Blueprint Driven Gameplay",
      description:
        "Designed and implemented puzzle-based gameplay systems in a horror enviornment using Blueprints",
      image: imgHorrorHouse,
      tags: ["Unreal Engine", "Blueprint", "Horror", "Puzzle"],
      link: "https://www.youtube.com/watch?v=AnBRBeOg9R0",
      linkType: "video",
    },
    {
      title: "AR Experience | Nightmare on Elm Street Interactive Poster",
      category: "Augmented Reality",
      description:
        "Developed an AR experience that brings a 3D model to life through mobile interaction.",
      image: imgARPoster,
      tags: ["AR", "3D Modeling", "User Interaction"],
      link: "https://www.youtube.com/watch?v=AnBRBeOg9R0",
      linkType: "video",
    },
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
                My Projects
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Gameplay systems, interactive experiences and VR applications built with Unreal Engine, showcasing
              gameplay mechanics, AI systems, and published applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <h2 className="text-3xl font-bold text-slate-100">Completed Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,184,219,0.3)] to-transparent" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden bg-[rgba(15,23,43,0.5)] border border-cyan-500/20 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover ${project.title === "Metahuman of Myself" ? "object-top" : "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172b] via-[rgba(15,23,43,0.5)] to-transparent" />
                  
                  {/* Category Badge */}
                  {project.category && (
                    <div className="absolute top-6 left-6">
                      <span className="text-cyan-400 text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Published Badge */}
                  {project.status === "Published" && (
                    <div className="absolute top-6 right-6">
                      <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                        Published
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {project.link && project.link !== "#" && (
                    <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold"
                      >
                        {project.linkType === "video" ? (
                          <>
                            <Play className="w-4 h-4" />
                            Watch Demo
                          </>
                        ) : project.linkType === "app" ? (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            View App
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            View Project
                          </>
                        )}
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}