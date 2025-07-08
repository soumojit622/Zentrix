"use client";

import {
  ArrowRight,
  Users,
  Calculator,
  Star,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-1/4 w-2 h-2 bg-emerald-400 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-white border border-slate-200 rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-amber-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-slate-600 text-sm font-medium">
                Trusted by 50,000+ users
              </span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Split expenses{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  intelligently
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The most advanced expense splitting platform. Track shared costs,
              optimize settlements, and manage group finances with mathematical
              precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg px-8 py-4 text-lg font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { value: "50K+", label: "Active Users", icon: Users },
                {
                  value: "$2M+",
                  label: "Split Successfully",
                  icon: TrendingUp,
                },
                { value: "99.9%", label: "Uptime", icon: CheckCircle },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Weekend Trip
                  </h3>
                  <div className="flex -space-x-2">
                    {["bg-emerald-500", "bg-amber-500", "bg-rose-500"].map(
                      (bg, i) => (
                        <motion.div
                          key={i}
                          className={`w-8 h-8 ${bg} rounded-full border-2 border-white shadow-sm`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.1, zIndex: 10 }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Expenses */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Users,
                      title: "Hotel Booking",
                      payer: "Alex",
                      amount: "$480",
                      owe: "You owe $120",
                      delay: 0.6,
                    },
                    {
                      icon: Calculator,
                      title: "Dinner",
                      payer: "You",
                      amount: "$85",
                      owe: "Alex owes $28",
                      delay: 0.8,
                    },
                  ].map((expense, index) => (
                    <motion.div
                      key={expense.title}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-sm transition-all duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: expense.delay, duration: 0.5 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-200">
                          <expense.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            {expense.title}
                          </div>
                          <div className="text-sm text-slate-600">
                            Paid by {expense.payer}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">
                          {expense.amount}
                        </div>
                        <div className="text-sm text-emerald-600 font-medium">
                          {expense.owe}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Balance Summary */}
                <motion.div
                  className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-800 font-semibold">
                      Your Balance
                    </span>
                    <span className="text-2xl font-bold text-emerald-600">
                      -$92
                    </span>
                  </div>
                  <div className="text-sm text-emerald-700 mt-1">
                    You owe Alex $92 total
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
