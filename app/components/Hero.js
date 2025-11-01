"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDownIcon,
  PlayIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Particle Background */}
      <div className="absolute inset-0">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0px 0px", "48px 48px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Interactive Mouse-Following Gradient */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl bg-gradient-to-r from-primary-500 to-accent-500"
          style={{
            left: `${mousePosition.x - 25}%`,
            top: `${mousePosition.y - 25}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Multiple Rotating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-primary-500/20 to-accent-500/20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-accent-500/20 to-primary-500/20"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-r from-primary-500/15 to-accent-500/15"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              boxShadow: `0 0 ${
                Math.random() * 15 + 8
              }px rgba(59, 130, 246, 0.6)`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Radial Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute top-1/2 left-1/2 w-1 h-64 origin-bottom bg-gradient-to-t from-transparent via-primary-500/30 to-transparent"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Premium Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex mt-20 items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              <span className="text-base font-semibold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                Leading AI Automation Pioneer
              </span>
              <motion.div
                className="w-2.5 h-2.5 rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-accent-500"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Dynamic Main Heading */}
          <motion.h1 variants={itemVariants} className="font-bold leading-none">
            <motion.div className="relative inline-block">
              <motion.span
                className="block text-5xl md:text-7xl lg:text-[7rem] bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  backgroundSize: "200% 200%",
                  filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                AI Automation
              </motion.span>

              {/* Glowing Underline */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full shadow-lg bg-gradient-to-r from-primary-500 to-accent-500"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>

            <motion.span
              className="block text-3xl md:text-4xl lg:text-7xl text-white mt-4 font-light tracking-wide"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              style={{
                textShadow:
                  "0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)",
              }}
            >
              Beyond Tomorrow
            </motion.span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Revolutionizing industries with{" "}
              <span className="font-semibold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                intelligent automation
              </span>{" "}
              that transforms businesses into future-ready powerhouses.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              Experience unprecedented growth, efficiency, and innovation in the
              age of AI.
            </motion.p>
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="group relative text-white px-12 py-5 rounded-full font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />

              <span className="relative z-10 flex items-center space-x-3">
                <RocketLaunchIcon className="w-6 h-6" />
                <span>Launch Your Future</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              className="group relative flex items-center space-x-3 text-white border-2 border-white/30 backdrop-blur-sm px-10 py-5 rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Hover Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <PlayIcon className="w-6 h-6" />
                <motion.div
                  className="absolute inset-0 border-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="relative z-10">Experience Demo</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Animated Elements */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border-2 rounded-lg transform rotate-45 bg-gradient-to-r from-primary-500 to-accent-500">
          <motion.div
            className="w-full h-full border rounded-lg bg-gradient-to-r from-primary-500/50 to-accent-500/50"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 w-20 h-20 opacity-20"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full border-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500">
          <motion.div
            className="w-full h-full rounded-full blur-sm bg-gradient-to-r from-primary-500/30 to-accent-500/30"
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
