"use client"

import { HelpCircle, Plus, MessageSquare, Phone, Mail, Clock, Shield, Award, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQs() {
  const faqs = [
    {
      question: "How does Zentrix ensure enterprise-grade security and compliance?",
      answer:
        "Zentrix employs bank-level AES-256 encryption, SOC 2 Type II certification, and zero-knowledge architecture. All data is encrypted in transit and at rest, with regular third-party security audits, penetration testing, and comprehensive compliance monitoring across GDPR, CCPA, and industry standards.",
      category: "Security & Compliance",
      priority: "high",
    },
    {
      question: "What makes Zentrix's optimization algorithms superior to competitors?",
      answer:
        "Our proprietary algorithms use advanced graph theory and mathematical optimization to reduce transaction complexity by up to 75%. The system analyzes debt relationships across multiple dimensions, considering currency conversion costs, payment preferences, and settlement timing to minimize both transaction count and total fees.",
      category: "Technology",
      priority: "high",
    },
    {
      question: "How does multi-currency support work for global enterprise operations?",
      answer:
        "Zentrix supports 150+ currencies with real-time exchange rates from multiple financial data providers. Our system automatically handles currency conversion, applies appropriate exchange rates at transaction time, provides historical rate tracking, and generates localized reports for different regions and subsidiaries.",
      category: "Global Operations",
      priority: "medium",
    },
    {
      question: "What enterprise integrations and API capabilities are available?",
      answer:
        "Our comprehensive REST API supports custom integrations with ERP systems, accounting software, and business intelligence tools. We offer pre-built connectors for SAP, Oracle, QuickBooks, and major HRIS platforms, plus SSO/SAML integration, webhook support, and dedicated sandbox environments for development.",
      category: "Integrations",
      priority: "medium",
    },
    {
      question: "What level of support and SLA do enterprise customers receive?",
      answer:
        "Enterprise customers receive 99.9% uptime SLA, dedicated customer success managers, 24/7 priority support with guaranteed response times, quarterly business reviews, custom training programs, and direct access to our engineering team for complex implementations and feature requests.",
      category: "Enterprise Support",
      priority: "high",
    },
    {
      question: "How does offline functionality and data synchronization work?",
      answer:
        "Our offline-first architecture caches all essential data locally using encrypted storage. Users can create, edit, and manage expenses without internet connectivity. Advanced conflict resolution algorithms handle simultaneous edits, and delta synchronization ensures minimal data transfer when connectivity is restored.",
      category: "Mobile & Offline",
      priority: "medium",
    },
  ]

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Enterprise Chat",
      description: "Priority support with dedicated agents",
      availability: "24/7 for Enterprise",
      responseTime: "< 2 minutes",
      action: "Start Priority Chat",
    },
    {
      icon: Phone,
      title: "Direct Phone Line",
      description: "Dedicated enterprise support hotline",
      availability: "Business hours + Emergency",
      responseTime: "Immediate",
      action: "Call Enterprise Line",
    },
    {
      icon: Mail,
      title: "Technical Support",
      description: "Detailed technical assistance and documentation",
      availability: "24/7 ticket system",
      responseTime: "< 1 hour",
      action: "Submit Technical Request",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(148 163 184) 2px, rgb(148 163 184) 3px)`,
            backgroundSize: "100% 40px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3 mb-8">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-semibold">Enterprise Knowledge Base</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Professional support for
            <span className="block text-emerald-600">mission-critical operations</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Comprehensive documentation, expert guidance, and dedicated support channels designed for enterprise-grade
            implementations and complex financial operations.
          </p>
        </motion.div>

        {/* Enhanced FAQ Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* FAQ Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-white border border-slate-200 rounded-2xl px-8 py-2 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-emerald-600 py-8 [&[data-state=open]>div>div>svg]:rotate-180">
                        <div className="flex items-start space-x-6 flex-1">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                              <span className="text-emerald-600 font-bold">{index + 1}</span>
                            </div>
                            <div
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                faq.priority === "high"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {faq.priority}
                            </div>
                          </div>
                          <div className="flex-1 pr-4">
                            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                            <div className="text-sm text-emerald-600 font-medium">{faq.category}</div>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                            <Plus className="w-6 h-6 text-emerald-600 transition-transform duration-200" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pt-2 pb-8 leading-relaxed">
                        <div className="pl-18">
                          <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                            <p className="text-lg leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Support Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="sticky top-8"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Enterprise Support Channels</h3>
                <div className="space-y-6">
                  {supportChannels.map((channel, index) => (
                    <motion.div
                      key={channel.title}
                      className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                          <channel.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-2">{channel.title}</h4>
                          <p className="text-sm text-slate-600 mb-3">{channel.description}</p>
                          <div className="space-y-1 text-xs text-slate-500 mb-4">
                            <div>Availability: {channel.availability}</div>
                            <div>Response: {channel.responseTime}</div>
                          </div>
                          <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors flex items-center space-x-1">
                            <span>{channel.action}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Professional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Need dedicated enterprise assistance?</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Our enterprise support team provides white-glove onboarding, custom training, and dedicated account
                management for complex implementations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, label: "Dedicated CSM", desc: "Personal success manager" },
                  { icon: Clock, label: "Priority SLA", desc: "Guaranteed response times" },
                  { icon: Award, label: "Custom Training", desc: "Tailored to your workflow" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <feature.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                    <div className="font-semibold mb-1">{feature.label}</div>
                    <div className="text-sm text-slate-400">{feature.desc}</div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 text-lg"
              >
                Schedule Enterprise Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
