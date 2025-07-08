"use client"

import { Plus, Receipt, Calendar, Users, Camera, Zap, Upload } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ExpenseMockup() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 50%, rgb(148 163 184) 50%)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-700 text-sm font-medium">Lightning Fast</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Add expenses in
              <span className="block text-emerald-600">seconds, not minutes</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our intelligent interface streamlines expense entry with AI-powered categorization, receipt scanning, and
              smart splitting suggestions.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {[
                { icon: Camera, text: "AI-powered receipt scanning", desc: "Automatic data extraction" },
                { icon: Users, text: "Smart participant selection", desc: "Based on expense patterns" },
                { icon: Calendar, text: "Flexible splitting options", desc: "Equal, percentage, or custom amounts" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{feature.text}</div>
                    <div className="text-sm text-slate-600">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg px-8 py-4 text-lg font-semibold">
                Try Adding an Expense
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Add New Expense</h3>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-colors"
                >
                  <Plus className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                {/* Description Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="group"
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                  <div className="relative">
                    <div className="w-full h-14 bg-slate-50 rounded-xl border border-slate-200 group-hover:border-emerald-300 px-4 flex items-center transition-all duration-200 hover:shadow-sm">
                      <Receipt className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-slate-900 font-medium">Team Lunch at Bistro</span>
                    </div>
                  </div>
                </motion.div>

                {/* Amount Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="group"
                >
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Amount</label>
                  <div className="relative">
                    <div className="w-full h-14 bg-slate-50 rounded-xl border border-slate-200 group-hover:border-emerald-300 px-4 flex items-center transition-all duration-200 hover:shadow-sm">
                      <span className="text-3xl font-bold text-emerald-600">$127.50</span>
                    </div>
                  </div>
                </motion.div>

                {/* Participants */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Split Between</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "You", bg: "bg-emerald-500" },
                      { name: "Sarah", bg: "bg-slate-400" },
                      { name: "Mike", bg: "bg-slate-500" },
                    ].map((person, index) => (
                      <motion.div
                        key={person.name}
                        className="h-14 bg-slate-50 rounded-xl border border-slate-200 px-3 flex items-center hover:shadow-sm hover:border-emerald-300 transition-all duration-200 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div
                          className={`w-10 h-10 ${person.bg} rounded-xl mr-3 shadow-sm group-hover:shadow-md transition-shadow`}
                        ></div>
                        <span className="text-slate-900 font-semibold">{person.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Receipt Upload */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-emerald-300 transition-colors cursor-pointer group"
                >
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-emerald-500 transition-colors" />
                  <p className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                    Drop receipt here or click to upload
                  </p>
                </motion.div>
              </div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8"
              >
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg font-semibold shadow-lg">
                  Add Expense
                </Button>
              </motion.div>
            </div>

            {/* Floating Success Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              AI Powered
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
