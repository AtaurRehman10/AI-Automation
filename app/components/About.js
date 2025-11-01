'use client'

import { motion } from 'framer-motion'
import { CheckIcon, SparklesIcon, TrophyIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { 
    icon: TrophyIcon, 
    number: "150+", 
    label: "Successful Projects", 
    color: "from-yellow-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.3)"
  },
  { 
    icon: UsersIcon, 
    number: "50+", 
    label: "Happy Clients", 
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)"
  },
  { 
    icon: SparklesIcon, 
    number: "5+", 
    label: "Years Experience", 
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.3)"
  },
  { 
    icon: CheckIcon, 
    number: "99%", 
    label: "Success Rate", 
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.3)"
  }
]

const features = [
  "Advanced Machine Learning Algorithms",
  "Real-time Data Processing",
  "Scalable Cloud Infrastructure",
  "24/7 Automated Monitoring",
  "Custom AI Model Training",
  "Enterprise-grade Security"
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 backdrop-blur-sm mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-blue-300">About Us</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Pioneering the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                of AI Automation
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We are a cutting-edge AI automation company dedicated to transforming businesses 
              through intelligent technology solutions. Our team of expert engineers and data 
              scientists work tirelessly to develop innovative AI systems that drive efficiency, 
              reduce costs, and unlock new possibilities for growth.
            </motion.p>

            <div className="space-y-3 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="relative flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center"
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckIcon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500 blur-md opacity-0 group-hover:opacity-50"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="relative inline-flex items-center px-8 py-4 rounded-full font-semibold text-white overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 40px rgba(16, 185, 129, 0.5)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(59, 130, 246, 0.5)",
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              />

              <span className="relative z-10">Learn More About Us</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Central AI Visualization */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Central rotating circle */}
              <motion.div
                className="relative w-40 h-40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Outer gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 p-1">
                  <div className="absolute inset-1 rounded-full bg-gray-950 flex items-center justify-center">
                    {/* Inner content */}
                    <motion.div
                      className="relative z-10"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        AI
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Outer glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-cyan-500 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Orbiting dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-green-400 shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      marginTop: '-6px',
                      marginLeft: '-6px',
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * Math.PI * 2) / 8) * 80,
                      y: Math.sin((i * Math.PI * 2) / 8) * 80,
                    }}
                    transition={{
                      rotate: {
                        duration: 10 + i,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      x: {
                        duration: 10 + i,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      y: {
                        duration: 10 + i,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  />
                ))}
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => {
                  const positions = [
                    { top: '5%', left: '0%' },
                    { top: '5%', right: '0%' },
                    { bottom: '5%', left: '0%' },
                    { bottom: '5%', right: '0%' },
                  ]

                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={positions[index]}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.15, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.1, y: -8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {/* Glow effect */}
                        <motion.div
                          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(135deg, ${stat.glowColor}, transparent)`
                          }}
                        />

                        <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl rounded-xl p-4 border border-gray-800 group-hover:border-gray-700 transition-colors duration-300 min-w-[160px]">
                          <div className="flex items-center gap-3">
                            {/* Icon */}
                            <motion.div
                              className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-2.5 shadow-lg relative`}
                              animate={{ 
                                rotate: [0, 5, -5, 0],
                              }}
                              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                            >
                              <stat.icon className="w-full h-full text-white" strokeWidth={1.5} />
                              
                              {/* Icon glow */}
                              <motion.div
                                className={`absolute inset-0 rounded-lg bg-gradient-to-br ${stat.color} blur-md opacity-0 group-hover:opacity-50`}
                                transition={{ duration: 0.3 }}
                              />
                            </motion.div>

                            {/* Stats */}
                            <div>
                              <motion.div
                                className="text-2xl font-bold text-white"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                              >
                                {stat.number}
                              </motion.div>
                              <div className="text-xs text-gray-400 whitespace-nowrap">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 rounded-3xl blur-3xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h3>
              
              <motion.p
                className="text-xl text-gray-300 leading-relaxed italic"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                "To democratize AI technology and make intelligent automation accessible to businesses 
                of all sizes, empowering them to achieve unprecedented levels of efficiency and innovation."
              </motion.p>

              {/* Decorative quotes */}
              <div className="absolute top-6 left-6 text-6xl text-blue-500/20 font-serif">"</div>
              <div className="absolute bottom-6 right-6 text-6xl text-green-500/20 font-serif rotate-180">"</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}