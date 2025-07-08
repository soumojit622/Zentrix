"use client"

import { Star, Quote, Building, User, Award, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Financial Officer",
      company: "TechCorp International",
      content:
        "Zentrix has revolutionized our global expense management. The optimization algorithms alone save us 40+ hours monthly in reconciliation, while the multi-currency support seamlessly handles our 15-country operations.",
      rating: 5,
      avatar: "SC",
      industry: "Technology",
      companySize: "5000+ employees",
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations",
      company: "Global Ventures Ltd",
      content:
        "The enterprise-grade security and SOC 2 compliance were crucial for our financial operations. Real-time synchronization across our distributed teams has improved efficiency by 60%.",
      rating: 5,
      avatar: "MR",
      industry: "Investment",
      companySize: "1000+ employees",
    },
    {
      name: "Emily Watson",
      role: "Finance Director",
      company: "Innovation Labs",
      content:
        "Professional-grade features with an intuitive interface. Our finance team adopted it immediately without training. The API integration with our ERP system was seamless.",
      rating: 5,
      avatar: "EW",
      industry: "Research",
      companySize: "500+ employees",
    },
    {
      name: "David Park",
      role: "Senior Project Manager",
      company: "Design Studio Pro",
      content:
        "The mobile app is exceptional for our field teams. Offline functionality and receipt scanning have streamlined our project expense tracking across multiple client engagements.",
      rating: 5,
      avatar: "DP",
      industry: "Creative",
      companySize: "200+ employees",
    },
    {
      name: "Lisa Thompson",
      role: "VP Finance & Operations",
      company: "Enterprise Solutions Inc",
      content:
        "Security and compliance features exceed our enterprise requirements. The dedicated customer success manager and priority support have been invaluable for our complex implementation.",
      rating: 5,
      avatar: "LT",
      industry: "Enterprise Software",
      companySize: "2000+ employees",
    },
    {
      name: "Alex Kumar",
      role: "Technical Lead",
      company: "Innovation Hub",
      content:
        "Zentrix scales beautifully from small teams to enterprise deployments. The API capabilities and webhook integrations have enabled custom workflows that perfectly match our processes.",
      rating: 5,
      avatar: "AK",
      industry: "Technology",
      companySize: "800+ employees",
    },
    {
      name: "Jennifer Martinez",
      role: "Controller",
      company: "Manufacturing Corp",
      content:
        "The reporting and analytics capabilities provide insights we never had before. Multi-location expense tracking and approval workflows have transformed our financial operations.",
      rating: 5,
      avatar: "JM",
      industry: "Manufacturing",
      companySize: "3000+ employees",
    },
    {
      name: "Robert Kim",
      role: "Finance Manager",
      company: "Consulting Group",
      content:
        "Client expense allocation and project-based tracking features are game-changers. The optimization algorithms have reduced our settlement complexity by 75%.",
      rating: 5,
      avatar: "RK",
      industry: "Consulting",
      companySize: "400+ employees",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgb(148 163 184) 20px, rgb(148 163 184) 22px)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-semibold">Enterprise Testimonials</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-emerald-500 fill-current" />
              ))}
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Trusted by finance leaders
            <span className="block text-emerald-600">at enterprise organizations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            See how CFOs, finance directors, and operations leaders have transformed their organizations with Zentrix's
            enterprise-grade expense management platform.
          </p>
        </motion.div>

        {/* Animated Testimonials Carousel */}
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -2400] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[480px] group relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 h-full">
                  {/* Professional Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                      <Quote className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-emerald-500 fill-current" />
                        ))}
                      </div>
                      <div className="text-xs text-slate-500">{testimonial.industry}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-slate-700 leading-relaxed mb-8 font-medium text-lg">{testimonial.content}</p>

                  {/* Professional Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-emerald-600 font-semibold text-sm">{testimonial.role}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Building className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-600 text-sm">{testimonial.company}</span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">{testimonial.companySize}</div>
                    </div>
                  </div>

                  {/* Professional Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                      <span className="text-emerald-700 text-xs font-semibold">Verified</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Professional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { value: "4.9/5", label: "Enterprise Rating", icon: Star, desc: "Based on 500+ reviews" },
            { value: "50K+", label: "Active Users", icon: User, desc: "Finance professionals" },
            { value: "500+", label: "Enterprise Clients", icon: Building, desc: "Global organizations" },
            { value: "99.9%", label: "Uptime SLA", icon: Shield, desc: "Enterprise reliability" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors shadow-lg">
                <stat.icon className="w-10 h-10 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-slate-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-slate-600">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Join our enterprise community</h3>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Become part of hundreds of enterprise organizations who trust Zentrix for their mission-critical financial
              operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 text-lg"
              >
                Start Enterprise Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-10 py-4 rounded-xl font-semibold transition-all duration-200 text-lg"
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
