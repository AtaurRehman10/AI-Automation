'use client'

import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  CogIcon, 
  ShieldCheckIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: CpuChipIcon,
    title: "Machine Learning Solutions",
    description: "Custom ML models that learn from your data to predict trends, automate decisions, and optimize operations.",
    features: ["Predictive Analytics", "Computer Vision", "Natural Language Processing"],
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)"
  },
  {
    icon: ChartBarIcon,
    title: "Process Automation",
    description: "Streamline repetitive tasks and workflows with intelligent automation that adapts to your business needs.",
    features: ["Workflow Optimization", "Document Processing", "Data Integration"],
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.5)"
  },
  {
    icon: CogIcon,
    title: "Intelligent Analytics",
    description: "Transform raw data into actionable insights with AI-powered analytics and real-time reporting.",
    features: ["Real-time Dashboards", "Trend Analysis", "Performance Metrics"],
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.5)"
  },
  {
    icon: ShieldCheckIcon,
    title: "AI Security & Compliance",
    description: "Protect your business with AI-driven security solutions that detect and prevent threats automatically.",
    features: ["Threat Detection", "Compliance Monitoring", "Risk Assessment"],
    color: "from-red-500 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.5)"
  },
  {
    icon: LightBulbIcon,
    title: "Innovation Consulting",
    description: "Strategic guidance to identify AI opportunities and implement cutting-edge solutions for competitive advantage.",
    features: ["Strategy Development", "Technology Assessment", "Implementation Planning"],
    color: "from-yellow-500 to-amber-500",
    glowColor: "rgba(245, 158, 11, 0.5)"
  },
  {
    icon: RocketLaunchIcon,
    title: "AI Integration & Deployment",
    description: "Seamless integration of AI solutions into your existing systems with minimal disruption.",
    features: ["System Integration", "Cloud Deployment", "Performance Optimization"],
    color: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99, 102, 241, 0.5)"
  }
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Multiple Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-sm mb-6"
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
            <span className="text-sm font-medium text-blue-300">Our Services</span>
            <SparklesIcon className="w-4 h-4 ml-2 text-blue-400" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              AI Solutions That
            </motion.span>
            <br />
            <motion.span 
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 0.5 }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Drive Results
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive AI automation services designed to transform your business operations 
            and accelerate growth through intelligent technology solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow Effect Container */}
              <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, ${service.glowColor}, transparent)`
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Card */}
              <motion.div
                className="relative h-full rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-gray-800 p-8 overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Animated Scan Line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                    WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                  }}
                />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <motion.div
                    className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3.5 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="w-full h-full text-white" strokeWidth={1.5} />
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <SparklesIcon className="w-3 h-3 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + featureIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          boxShadow: [
                            `0 0 0px ${service.glowColor}`,
                            `0 0 8px ${service.glowColor}`,
                            `0 0 0px ${service.glowColor}`
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: featureIndex * 0.5 
                        }}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top right, ${service.glowColor}, transparent 70%)`
                  }}
                />

                {/* Bottom Shine Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg text-white overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(236, 72, 153, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.5)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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

            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore All Services</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.p
            className="mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to transform your business with AI? Let's talk.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}