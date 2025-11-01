'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, EyeIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: "Smart Inventory Management",
    category: "E-commerce",
    description: "AI-powered inventory optimization system that reduced costs by 40% and improved stock accuracy to 99.8%.",
    image: "/api/placeholder/600/400",
    tags: ["Machine Learning", "Predictive Analytics", "Automation"],
    metrics: { efficiency: "+40%", accuracy: "99.8%", savings: "$2M+" },
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.4)"
  },
  {
    id: 2,
    title: "Automated Customer Support",
    category: "SaaS Platform",
    description: "Intelligent chatbot system handling 80% of customer queries with 95% satisfaction rate.",
    image: "/api/placeholder/600/400",
    tags: ["NLP", "Chatbot", "Customer Service"],
    metrics: { automation: "80%", satisfaction: "95%", response: "<30s" },
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.4)"
  },
  {
    id: 3,
    title: "Predictive Maintenance",
    category: "Manufacturing",
    description: "IoT-enabled predictive maintenance system preventing 95% of equipment failures before they occur.",
    image: "/api/placeholder/600/400",
    tags: ["IoT", "Predictive Analytics", "Industrial AI"],
    metrics: { prevention: "95%", downtime: "-60%", efficiency: "+30%" },
    gradient: "from-green-500 to-emerald-500",
    glowColor: "rgba(16, 185, 129, 0.4)"
  },
  {
    id: 4,
    title: "Financial Risk Assessment",
    category: "FinTech",
    description: "Advanced ML models for real-time fraud detection and risk assessment with 99.9% accuracy.",
    image: "/api/placeholder/600/400",
    tags: ["Risk Management", "Fraud Detection", "Real-time Analytics"],
    metrics: { accuracy: "99.9%", detection: "<1s", reduction: "85%" },
    gradient: "from-red-500 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.4)"
  },
  {
    id: 5,
    title: "Supply Chain Optimization",
    category: "Logistics",
    description: "End-to-end supply chain automation reducing delivery times by 50% and costs by 35%.",
    image: "/api/placeholder/600/400",
    tags: ["Optimization", "Logistics", "Route Planning"],
    metrics: { speed: "+50%", cost: "-35%", accuracy: "98%" },
    gradient: "from-yellow-500 to-amber-500",
    glowColor: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: 6,
    title: "Healthcare Diagnostics AI",
    category: "Healthcare",
    description: "Computer vision system for medical image analysis with 96% diagnostic accuracy.",
    image: "/api/placeholder/600/400",
    tags: ["Computer Vision", "Healthcare", "Diagnostics"],
    metrics: { accuracy: "96%", speed: "10x", lives: "1000+" },
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99, 102, 241, 0.4)"
  }
]

export default function Portfolio() {
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
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 100, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -100, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
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
            className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-sm mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-2 h-2 bg-purple-500 rounded-full mr-3"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-purple-300">Our Work</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Success Stories &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Transformations
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how we've helped businesses across industries leverage AI automation 
            to achieve remarkable results and drive unprecedented growth.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Outer Glow */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${project.glowColor}, transparent)`
                }}
              />

              {/* Card Container */}
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-gray-800 group-hover:border-gray-700 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  {/* Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.9, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                  
                  {/* Animated Mesh Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  
                  {/* Overlay Icons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2 z-10"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <EyeIcon className="w-5 h-5 text-white" strokeWidth={2} />
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" strokeWidth={2} />
                    </motion.button>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <span className="px-4 py-1.5 text-xs font-semibold bg-white/15 backdrop-blur-xl rounded-full text-white border border-white/20 shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Bottom Fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.8)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={key}
                        className="relative p-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/30 backdrop-blur-sm overflow-hidden group/metric"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: metricIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Hover Gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/metric:opacity-10 transition-opacity duration-300`}
                        />
                        
                        <motion.div
                          className={`text-base font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent relative z-10`}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: metricIndex * 0.5 }}
                        >
                          {value}
                        </motion.div>
                        <div className="text-xs text-gray-500 capitalize mt-0.5 relative z-10 font-medium">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
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
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h3>
          
          <motion.p
            className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join the ranks of successful companies that have revolutionized their operations with our AI solutions.
          </motion.p>
          
          <motion.button
            className="relative inline-flex items-center px-10 py-4 rounded-full font-semibold text-lg text-white overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
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
                  "0 0 20px rgba(168, 85, 247, 0.5)",
                  "0 0 40px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Shimmer */}
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

            <span className="relative z-10 flex items-center gap-2">
              <span>Start Your AI Journey</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}