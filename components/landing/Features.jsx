"use client"

import { Calculator, Users, Smartphone, CreditCard, BarChart3, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: Calculator,
      title: "Smart Calculations",
      description: "Advanced algorithms automatically optimize debt settlements and minimize transactions.",
      stats: "75% fewer payments",
    },
    {
      icon: Users,
      title: "Group Management",
      description: "Create unlimited groups with granular permissions and role-based access control.",
      stats: "Unlimited groups",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Native iOS and Android apps with offline sync and real-time notifications.",
      stats: "Works offline",
    },
    {
      icon: CreditCard,
      title: "Multi-Currency",
      description: "Support for 150+ currencies with real-time exchange rates and automatic conversion.",
      stats: "150+ currencies",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed insights, spending patterns, and exportable reports for better financial planning.",
      stats: "Deep insights",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and zero-knowledge architecture.",
      stats: "Bank-level security",
    },
  ]

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium">Powerful Features</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything you need to manage
            <span className="block text-emerald-600">shared expenses</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional-grade tools designed for individuals, teams, and organizations who demand precision in
            financial management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>

                {/* Stats */}
                <div className="inline-flex items-center space-x-2 bg-slate-50 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">{feature.stats}</span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to experience these features?</h3>
            <p className="text-slate-600 mb-6">
              Start your free trial and see how Zentrix can transform your expense management.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
