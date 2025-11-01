'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon as QuoteIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechCorp Solutions",
    company: "TechCorp",
    rating: 5,
    text: "The AI automation solutions transformed our entire operation. We've seen a 60% increase in efficiency and our team can now focus on strategic initiatives instead of repetitive tasks.",
    avatar: "SJ",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, DataFlow Systems",
    company: "DataFlow",
    rating: 5,
    text: "Outstanding results! Their predictive analytics model helped us reduce operational costs by 45% while improving accuracy. The implementation was seamless and the support is exceptional.",
    avatar: "MC",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Operations Director, LogiTech",
    company: "LogiTech",
    rating: 5,
    text: "The supply chain optimization AI has revolutionized our logistics. Delivery times improved by 50% and customer satisfaction is at an all-time high. Truly game-changing technology.",
    avatar: "ER",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "David Park",
    position: "VP Engineering, FinanceFlow",
    company: "FinanceFlow",
    rating: 5,
    text: "Their fraud detection system is incredible. We've prevented millions in losses and the real-time analytics give us confidence in every transaction. Best investment we've made.",
    avatar: "DP",
    gradient: "from-red-500 to-orange-500"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Head of Innovation, RetailMax",
    company: "RetailMax",
    rating: 5,
    text: "The inventory management AI has been a complete game-changer. Stock accuracy improved to 99.8% and we've reduced waste by 40%. The ROI was evident within the first quarter.",
    avatar: "LT",
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Director of Operations, MedTech Pro",
    company: "MedTech",
    rating: 5,
    text: "The healthcare diagnostics AI has enhanced our capabilities tremendously. 96% accuracy in medical imaging analysis has improved patient outcomes and reduced diagnostic time significantly.",
    avatar: "JW",
    gradient: "from-indigo-500 to-blue-500"
  }
]

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(59, 130, 246, 0.05)' : 'rgba(16, 185, 129, 0.05)'} 0%, transparent 70%)`,
              left: `${10 + (i * 25)}%`,
              top: `${5 + (i * 20)}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary-500/30 mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-gray-300">Client Success</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            What Our Clients
            <span className="block">Are Saying</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the industry leaders who have 
            transformed their businesses with our AI automation solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="glass-effect rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-20"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <QuoteIcon className="w-8 h-8 text-primary-500" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <StarIcon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center font-bold text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-primary-400 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(59, 130, 246, 0.3)",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "98%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" },
            { number: "150+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
            { number: "50+", label: "Happy Clients", color: "from-purple-500 to-pink-500" },
            { number: "24/7", label: "Support Available", color: "from-yellow-500 to-orange-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect rounded-xl p-6 border border-white/10"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: index * 0.5 
              }}
            >
              <motion.div
                className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI automation solutions can transform your business operations.
          </p>
          <motion.button
            className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}