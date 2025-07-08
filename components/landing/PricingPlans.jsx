"use client"

import { Check, Star, Zap, Crown, Shield, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function PricingPlans() {
  const plans = [
    {
      name: "Professional",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Up to 5 groups",
        "Unlimited expenses",
        "Basic splitting algorithms",
        "Mobile app access",
        "Email support",
        "Export to CSV",
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline",
      popular: false,
      icon: Zap,
    },
    {
      name: "Business",
      price: "$12",
      period: "per user/month",
      description: "Advanced features for growing teams and organizations",
      features: [
        "Unlimited groups & users",
        "Advanced optimization algorithms",
        "Receipt scanning & OCR",
        "Multi-currency support",
        "Priority support",
        "Advanced reporting",
        "API access",
        "Offline synchronization",
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default",
      popular: true,
      icon: Crown,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade solution with dedicated support",
      features: [
        "Everything in Business",
        "SSO & SAML integration",
        "Advanced user management",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "On-premise deployment",
        "24/7 phone support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
      icon: Shield,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgb(148 163 184) 60deg, transparent 120deg)`,
            backgroundSize: "40px 40px",
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
            <Star className="w-4 h-4 text-emerald-600" />
            <span className="text-slate-700 text-sm font-medium">Flexible Pricing</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional pricing for
            <span className="block text-emerald-600">every organization</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that matches your needs. All plans include our core features with transparent pricing and no
            hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: plan.popular ? 1.02 : 1.05 }}
              className={`relative group ${plan.popular ? "md:scale-105 z-10" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </motion.div>
              )}

              <div
                className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 h-full ${
                  plan.popular
                    ? "border-emerald-400 shadow-xl shadow-emerald-500/10"
                    : "border-slate-200 hover:border-emerald-300 hover:shadow-lg"
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                    <plan.icon className="w-8 h-8 text-emerald-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-emerald-600">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-slate-600 ml-2">/{plan.period}</span>}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-6 h-6 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    className={`w-full py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-200 ${
                      plan.buttonVariant === "default"
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : "border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-white"
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                    {plan.name === "Business" && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </motion.div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Solutions</h3>
              <p className="text-slate-600">
                Need custom features, dedicated support, or on-premise deployment? Our enterprise team is ready to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-2">99.9%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Dedicated Support</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-2">SOC 2</div>
                <div className="text-sm text-slate-600">Type II Certified</div>
              </div>
            </div>

            <div className="text-center mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
              >
                Schedule Enterprise Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
