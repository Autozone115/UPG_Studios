import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <div className="relative inline-block mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            404
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
          Level Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Looks like you've ventured into uncharted territory. This page doesn't
          exist in our game world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-slate-950 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
          >
            <Search className="w-5 h-5" />
            Browse Projects
          </Link>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-lg blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-lg blur-xl"
        />
      </motion.div>
    </div>
  );
}
