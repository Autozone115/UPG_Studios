import React from "react";
import { motion } from "motion/react";
import { Box, Code, Zap } from "lucide-react";

import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { models as modelData } from "../data/models";

export function Models() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [activeTab, setActiveTab] = useState<"models" | "functions">("models");

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const categories = ["All", "Project Assets", "Characters", "Environments", "Vehicles"];

  const models = modelData;

  const functions = [
    {
      title: "Soda Machine Interaction",
      category: "Interaction",
      description:
        "Physics-based soda machine with interactive buttons, coin insertion, and realistic can dispensing with pouring liquid simulation.",
      complexity: "Advanced",
      language: "Blueprint + C++",
      status: "Complete",
      features: ["Physics Simulation", "UI Interaction", "Sound Design", "Particle Effects"],
    },
    {
      title: "Jumpscare System",
      category: "Horror Mechanics",
      description:
        "Dynamic jumpscare trigger system with proximity detection, audio cues, and cinematic camera movements for horror experiences.",
      complexity: "Intermediate",
      language: "Blueprint",
      status: "Complete",
      features: ["Trigger Volumes", "Audio Management", "Camera Animation", "Player Detection"],
    },
    {
      title: "VR Grab & Throw",
      category: "VR Interaction",
      description:
        "Realistic VR object grabbing system with physics-based throwing mechanics, weight simulation, and haptic feedback integration.",
      complexity: "Advanced",
      language: "C++",
      status: "Complete",
      features: ["Motion Controllers", "Physics Constraints", "Haptic Feedback", "Collision Handling"],
    },
    {
      title: "Teleportation System",
      category: "VR Locomotion",
      description:
        "Smooth VR teleportation with arc trajectory visualization, valid location detection, and customizable navigation markers.",
      complexity: "Intermediate",
      language: "Blueprint",
      status: "Complete",
      features: ["Arc Projection", "Nav Mesh Validation", "Material Effects", "Comfort Settings"],
    },
    {
      title: "Interactive Door System",
      category: "Interaction",
      description:
        "Modular door system supporting various types: sliding, rotating, and automatic doors with key card access and lock mechanisms.",
      complexity: "Intermediate",
      language: "Blueprint",
      status: "Complete",
      features: ["Animation System", "Access Control", "Sound Integration", "State Machine"],
    },
    {
      title: "Flashlight System",
      category: "Tools",
      description:
        "Dynamic flashlight with battery management, flickering effects, and realistic light cone adjustments for atmospheric lighting.",
      complexity: "Basic",
      language: "Blueprint",
      status: "Complete",
      features: ["Battery System", "Light Animation", "Shadow Quality", "Power Management"],
    },
  ];

  const filteredModels =
    selectedCategory === "All"
      ? models
      : models.filter((model) => model.category === selectedCategory);

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Box className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">3D Portfolio</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Game Development Assets
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              3D models, Unreal Engine functions, and interactive systems for immersive game experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => setActiveTab("models")}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${
                activeTab === "models"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-900/50 text-slate-300 border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
              }`}
            >
              <Box className="w-5 h-5" />
              3D Models
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("functions")}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${
                activeTab === "functions"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-900/50 text-slate-300 border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
              }`}
            >
              <Code className="w-5 h-5" />
              Functions & Systems
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 3D Models Section */}
      {activeTab === "models" && (
        <>
          {/* Category Filter */}
          <section className="pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSearchParams({ category });
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                        : "bg-slate-900/50 text-slate-300 border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Models Grid */}
          <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredModels.map((model, index) => (
                  <Link key={index} to={`/assets/${model.id}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.2 } }}
                    className="group relative rounded-xl overflow-hidden bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden bg-slate-900">
                      <ImageWithFallback
                        src={model.image}
                        alt={model.title}
                        className="w-full h-full group-hover:scale-110 transition-transform duration-700"
                        style={{
                          objectFit: (model.thumbnailFit as React.CSSProperties["objectFit"]) ?? "cover",
                          objectPosition: model.thumbnailPosition ?? "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

                      {/* Overlay Info on Hover */}
                      <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 flex items-center gap-2 mx-auto">
                            View Gallery
                          </span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 backdrop-blur-sm">
                          {model.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {model.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {model.description}
                      </p>

                      {/* Software Tags */}
                      <div className="flex flex-wrap gap-2">
                        {model.software.map((soft, softIndex) => (
                          <span
                            key={softIndex}
                            className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  </Link>
                ))}
              </div>

              {/* Empty State / Coming Soon */}
              {filteredModels.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-32"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                    <Box className="w-9 h-9 text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-200 mb-3">Coming Soon</h3>
                  <p className="text-slate-500 text-lg">Check back soon for new character models.</p>
                </motion.div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Functions Section */}
      {activeTab === "functions" && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                <Zap className="w-9 h-9 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-200 mb-3">Tutorials Coming Soon</h3>
              <p className="text-slate-500 text-lg">Check back soon for Unreal Engine tutorials and breakdowns.</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Need Custom 3D Models?
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                I'm available for commissioned work and custom asset creation
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}