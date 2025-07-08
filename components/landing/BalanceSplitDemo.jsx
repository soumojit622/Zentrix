"use client";

import { ArrowRight, TrendingDown, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function BalanceSplitDemo() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgb(148 163 184) 90deg, transparent 180deg)`,
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
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium">
              Mathematical Optimization
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Smart Balance Optimization
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our advanced algorithm analyzes all debts and credits to minimize
            the number of transactions needed, reducing complexity and saving
            time for everyone involved.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-slate-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Without Optimization
              </h3>
              <div className="space-y-4">
                {[
                  { from: "Alex", to: "Sarah", amount: "$45" },
                  { from: "Alex", to: "Mike", amount: "$30" },
                  { from: "Sarah", to: "Mike", amount: "$25" },
                  { from: "Mike", to: "Alex", amount: "$15" },
                ].map((transaction, index) => (
                  <motion.div
                    key={`${transaction.from}-${transaction.to}`}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-slate-700 font-medium">
                      {transaction.from} → {transaction.to}
                    </span>
                    <span className="font-bold text-slate-900">
                      {transaction.amount}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-slate-700 font-semibold text-sm">
                    4 transactions needed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <ArrowRight className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white border border-emerald-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-emerald-600 mb-6 text-center">
                With Zentrix Optimization
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm text-emerald-800 font-medium">
                    Alex → Mike
                  </span>
                  <span className="font-bold text-emerald-600">$55</span>
                </motion.div>

                {[1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 opacity-30"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.3 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm text-slate-400">
                      No additional payments
                    </span>
                    <span className="font-medium text-slate-400">$0</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-700 font-semibold text-sm">
                    1 transaction needed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
            <motion.div
              className="inline-flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-emerald-600">75%</div>
                <div className="text-slate-700 font-medium">
                  fewer transactions
                </div>
              </div>
            </motion.div>
            <p className="text-slate-600 text-sm mt-4">
              Average reduction across all groups
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
