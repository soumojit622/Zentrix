"use client"

import { Home, Plane, Building, Coffee, Car, Gift, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function UseCases() {
  const useCases = [
    {
      icon: Home,
      title: "Roommates & Shared Living",
      description: "Manage rent, utilities, groceries, and household expenses with automated splitting and tracking.",
      stats: "Avg. $1,200/month managed",
      users: "25K+ households",
    },
    {
      icon: Plane,
      title: "Travel & Group Trips",
      description: "Track flights, hotels, meals, and activities with multi-currency support and real-time splitting.",
      stats: "Avg. $850/trip managed",
      users: "15K+ trips organized",
    },
    {
      icon: Building,
      title: "Corporate & Teams",
      description:
        "Handle team expenses, client dinners, and project costs with advanced reporting and approval workflows.",
      stats: "Avg. $5,000/month managed",
      users: "500+ companies",
    },
    {
      icon: Coffee,
      title: "Social Groups",
      description: "Split dinner bills, event costs, and group activities with friends and social circles.",
      stats: "Avg. $180/week managed",
      users: "40K+ friend groups",
    },
    {
      icon: Car,
      title: "Transportation & Rides",
      description: "Manage carpools, ride shares, gas money, and parking fees with automatic calculations.",
      stats: "Avg. $45/ride managed",
      users: "10K+ ride groups",
    },
    {
      icon: Gift,
      title: "Events & Celebrations",
      description: "Organize group gifts, party expenses, and special occasion costs with transparent tracking.",
      stats: "Avg. $120/event managed",
      users: "8K+ events organized",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgb(148 163 184) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
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
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium">Versatile Solutions</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Perfect for Every Situation</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From personal expenses to enterprise-level financial management, Zentrix adapts to your specific needs with
            professional-grade tools.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                    <useCase.icon className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-500">{useCase.users}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">{useCase.description}</p>

                {/* Stats */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Popular Choice</span>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">{useCase.stats}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
          className="text-center mt-20"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Find Your Perfect Use Case</h3>
            <p className="text-slate-600 mb-6">
              No matter what brings your group together, Zentrix provides the professional tools you need to manage
              expenses efficiently and transparently.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
            >
              Start Your First Group
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
