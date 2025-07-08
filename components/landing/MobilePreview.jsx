"use client"

import { Smartphone, Download, Apple, Play, QrCode, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function MobilePreview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
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
              <Smartphone className="w-4 h-4 text-emerald-600" />
              <span className="text-slate-700 text-sm font-medium">Take Zentrix everywhere you go</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Professional mobile experience
              <span className="block text-emerald-600">in your pocket</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Native iOS and Android applications deliver the full power of Zentrix with offline capabilities, push
              notifications, and seamless synchronization.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {[
                { icon: Zap, text: "Instant expense capture", desc: "Add expenses in under 10 seconds" },
                { icon: QrCode, text: "Receipt scanning technology", desc: "AI-powered data extraction" },
                { icon: Download, text: "Offline-first architecture", desc: "Works without internet connection" },
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

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg px-6 py-3">
                  <Apple className="mr-2 w-5 h-5" />
                  Download for iOS
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-white shadow-sm px-6 py-3"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Get on Android
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-slate-50 h-12 flex items-center justify-between px-6 text-sm">
                    <span className="font-medium text-slate-900">9:41</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                      </div>
                      <div className="w-6 h-3 border border-slate-400 rounded-sm">
                        <div className="w-4 h-full bg-emerald-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-emerald-500 px-6 py-6 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Team Expenses</h3>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold">5</span>
                      </div>
                    </div>
                    <div className="text-emerald-100 text-sm mt-2">Total managed: $2,847.50</div>
                  </div>

                  {/* Expense List */}
                  <div className="p-6 space-y-4">
                    {[
                      {
                        title: "Office Supplies",
                        payer: "Sarah",
                        amount: "$245",
                        status: "You owe $61",
                        delay: 0.5,
                      },
                      {
                        title: "Team Lunch",
                        payer: "You",
                        amount: "$180",
                        status: "Mike owes $45",
                        delay: 0.7,
                      },
                      {
                        title: "Conference Room",
                        payer: "Alex",
                        amount: "$320",
                        status: "You owe $80",
                        delay: 0.9,
                      },
                    ].map((expense, index) => (
                      <motion.div
                        key={expense.title}
                        className="bg-slate-50 rounded-xl p-4 flex items-center justify-between border border-slate-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: expense.delay }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                            <div className="w-6 h-6 bg-emerald-500 rounded-lg"></div>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">{expense.title}</div>
                            <div className="text-xs text-slate-600">Paid by {expense.payer}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900 text-sm">{expense.amount}</div>
                          <div className="text-xs text-emerald-600 font-medium">{expense.status}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Balance Summary */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      className="bg-emerald-50 rounded-xl p-4 border border-emerald-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-800 font-semibold text-sm">Your Balance</span>
                        <span className="text-xl font-bold text-emerald-600">-$141</span>
                      </div>
                      <div className="text-xs text-emerald-700 mt-1">You owe $141 total</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Add Button */}
              <motion.div
                className="absolute bottom-12 right-12 w-16 h-16 bg-emerald-500 rounded-full shadow-xl flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-0.5 bg-emerald-500"></div>
                  <div className="w-0.5 h-4 bg-emerald-500 absolute"></div>
                </div>
              </motion.div>

              {/* Professional Badge */}
              <motion.div
                className="absolute -top-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, type: "spring" }}
              >
                Enterprise Ready
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
