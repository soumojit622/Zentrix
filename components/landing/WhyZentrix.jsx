"use client";

import {
  Zap,
  Shield,
  Globe,
  Clock,
  Users,
  Smartphone,
  Award,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyZentrix() {
  const benefits = [
    {
      icon: Zap,
      title: "Enterprise Performance",
      description:
        "Lightning-fast calculations and real-time synchronization across all devices and platforms.",
      metric: "< 100ms response time",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description:
        "SOC 2 Type II certified with end-to-end encryption and zero-knowledge architecture.",
      metric: "99.99% security uptime",
    },
    {
      icon: Globe,
      title: "Global Currency Support",
      description:
        "Real-time exchange rates for 150+ currencies with automatic conversion and localization.",
      metric: "150+ currencies supported",
    },
    {
      icon: Clock,
      title: "Real-Time Synchronization",
      description:
        "Instant updates across all devices with conflict resolution and offline capability.",
      metric: "Sub-second sync speed",
    },
    {
      icon: Users,
      title: "Unlimited Scalability",
      description:
        "From personal use to enterprise deployment with advanced user management and permissions.",
      metric: "Unlimited groups & users",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Excellence",
      description:
        "Native apps for iOS, Android, and web with feature parity and seamless handoff.",
      metric: "100% feature parity",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgb(148 163 184) 20px, rgb(148 163 184) 21px)`,
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
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-800 text-sm font-medium">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built for professionals who
            <span className="block text-emerald-600">demand excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Zentrix combines enterprise-grade reliability with intuitive design,
            delivering the most advanced expense management platform available
            today.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Metric */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-semibold text-emerald-600">
                      {benefit.metric}
                    </span>
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
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to experience professional expense management?
            </h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Join thousands of professionals and organizations who trust
              Zentrix for their financial operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 text-lg"
              >
                Start Your Free Trial
              </motion.button>

              <div className="flex items-center space-x-2 text-slate-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium">Enterprise-ready</span>
                </div>
                <span className="text-slate-400">•</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium">SOC 2 certified</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
