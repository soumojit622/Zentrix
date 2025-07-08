"use client"

import { ArrowRight, Sparkles, Star, Shield, Clock, CheckCircle, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CallToAction() {
  const enterpriseFeatures = [
    { icon: Shield, text: "SOC 2 Type II Certified", desc: "Enterprise security standards" },
    { icon: Clock, text: "99.9% Uptime SLA", desc: "Mission-critical reliability" },
    { icon: Award, text: "ISO 27001 Compliant", desc: "International security certification" },
    { icon: Users, text: "Dedicated Support", desc: "Enterprise customer success team" },
  ]

  const stats = [
    { value: "50K+", label: "Enterprise Users", desc: "Trusted by professionals worldwide" },
    { value: "99.9%", label: "System Uptime", desc: "Enterprise-grade reliability" },
    { value: "$50M+", label: "Expenses Managed", desc: "Total value processed securely" },
    { value: "150+", label: "Countries", desc: "Global multi-currency support" },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, white 30deg, transparent 60deg)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Sophisticated Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-white/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-white/7 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Professional Badge */}
          <motion.div
            className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 mb-12"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-white font-bold text-lg">Enterprise-Grade Solution</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-white fill-current" />
              ))}
            </div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </motion.div>

          {/* Professional Heading */}
          <motion.h2
            className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform your organization's
            <span className="block">
              financial operations{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">today</span>
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-2 bg-white/80 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-emerald-100 mb-12 max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join thousands of finance professionals and enterprise organizations who have revolutionized their expense
            management with Zentrix's advanced platform. Experience enterprise-grade security, optimization algorithms,
            and dedicated support designed for mission-critical operations.
          </motion.p>

          {/* Professional CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-12 py-6 text-xl font-bold shadow-2xl rounded-2xl"
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="flex items-center"
                >
                  Start Enterprise Trial
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white hover:bg-white/10 hover:border-white bg-transparent backdrop-blur-sm px-12 py-6 text-xl font-bold rounded-2xl"
              >
                <Users className="mr-3 w-6 h-6" />
                Schedule Enterprise Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Enterprise Features */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.text}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <feature.icon className="w-8 h-8 text-white mb-4 mx-auto" />
                <div className="text-white font-semibold text-sm mb-2">{feature.text}</div>
                <div className="text-emerald-100 text-xs">{feature.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-100 font-semibold mb-1">{stat.label}</div>
                <div className="text-emerald-200 text-sm">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enterprise CTA Card */}
          <motion.div
            className="bg-white/15 backdrop-blur-xl rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Ready for enterprise deployment?</h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Get dedicated onboarding, custom training, and enterprise-grade support for your organization.
                </p>
                <div className="flex items-center space-x-4 text-emerald-100 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>30-day trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 text-lg w-full"
                >
                  Start Enterprise Journey
                </motion.button>
                <p className="text-emerald-200 text-sm mt-3">Trusted by 500+ enterprise customers</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Floating Particles - Fixed positions to avoid hydration errors */}
        {[
          { top: 20, left: 15 },
          { top: 35, left: 85 },
          { top: 60, left: 25 },
          { top: 80, left: 70 },
          { top: 15, left: 60 },
          { top: 45, left: 10 },
          { top: 70, left: 90 },
          { top: 25, left: 40 },
          { top: 55, left: 75 },
          { top: 85, left: 30 },
          { top: 10, left: 80 },
          { top: 40, left: 5 },
          { top: 65, left: 55 },
          { top: 90, left: 20 },
          { top: 30, left: 95 },
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
            }}
            animate={{
              y: [0, -40 - (i % 5) * 10, 0],
              x: [0, i % 2 ? 20 : -20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </section>
  )
}
