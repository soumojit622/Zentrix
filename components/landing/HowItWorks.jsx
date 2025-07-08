"use client"

import { UserPlus, Receipt, CheckCircle, ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Create & Invite",
      description: "Set up your group and invite members via email, phone, or shareable link.",
      details: "Advanced permission controls and role management",
    },
    {
      icon: Receipt,
      title: "Track & Split",
      description: "Add expenses with smart categorization and flexible splitting options.",
      details: "AI-powered receipt scanning and automatic categorization",
    },
    {
      icon: CheckCircle,
      title: "Optimize & Settle",
      description: "Our algorithm minimizes transactions and simplifies debt settlement.",
      details: "Mathematical optimization reduces payments by up to 75%",
    },
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgb(148 163 184) 40%, rgb(148 163 184) 60%, transparent 60%)`,
            backgroundSize: "20px 20px",
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
          <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-slate-700 text-sm font-medium">Simple Process</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">How Zentrix Works</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to transform how you manage shared expenses with enterprise-grade precision.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-slate-200 rounded-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="relative mb-8">
                  <motion.div
                    className="w-16 h-16 bg-white border-4 border-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
                  </motion.div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 ml-8"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                    <step.icon className="w-7 h-7 text-emerald-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>

                  {/* Details */}
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">{step.details}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to get started?</h3>
            <p className="text-slate-600 mb-6">
              Join thousands of users who have streamlined their expense management with Zentrix.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Create Your First Group
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
