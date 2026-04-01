import { useParams, Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Layers, Box, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { models } from "../data/models";

export function ModelDetail() {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const model = models.find((m) => m.id === modelId);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!model) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-100 mb-4">Model Not Found</h1>
          <Link to="/assets" className="text-cyan-400 hover:underline">Back to Assets</Link>
        </div>
      </div>
    );
  }

  const images = model.images.length > 0 ? model.images : [];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : 0));

  return (
    <div className="pt-16 min-h-screen">
      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Assets
          </motion.button>
        </div>
      </div>

      {/* Header */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
          >
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-3 inline-block">
                {model.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {model.title}
                </span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl">{model.description}</p>
            </div>

            {/* Specs */}
            <div className="flex gap-3 shrink-0">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 rounded-xl border border-cyan-500/20">
                <Layers className="w-4 h-4 text-cyan-400" />
                <div>
                  <div className="text-xs text-slate-500">Polycount</div>
                  <div className="text-sm font-semibold text-slate-300">{model.polycount}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 rounded-xl border border-cyan-500/20">
                <Box className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-xs text-slate-500">Textures</div>
                  <div className="text-sm font-semibold text-slate-300">{model.textures}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Software tags + external link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            {model.software.map((s, i) => (
              <span key={i} className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20">
                {s}
              </span>
            ))}
            {model.link && (
              <a
                href={model.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-cyan-400 rounded-lg border border-cyan-500/30 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 transition-all text-sm font-semibold ml-auto"
              >
                <ExternalLink className="w-4 h-4" />
                View on Sketchfab
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-cyan-500/20 hover:border-cyan-500/50 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
                >
                  <img
                    src={src}
                    alt={`${model.title} — view ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-wide">
                      Click to expand
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <Box className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">No images available for this model yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 p-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ChevronLeft className="w-9 h-9" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={images[lightboxIndex]}
              alt={`${model.title} — view ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 p-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ChevronRight className="w-9 h-9" />
              </button>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
