"use client";

import {
  Zap,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Shield,
  Award,
  Clock,
  Building,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Footer() {
  const footerSections = {
    product: {
      title: "Enterprise Platform",
      links: [
        {
          name: "Core Features",
          href: "#features",
          desc: "Advanced expense management",
        },
        {
          name: "Enterprise Pricing",
          href: "#pricing",
          desc: "Scalable solutions",
        },
        {
          name: "Mobile Applications",
          href: "#mobile",
          desc: "iOS & Android apps",
        },
        {
          name: "API Documentation",
          href: "#api",
          desc: "Developer resources",
        },
        {
          name: "System Integrations",
          href: "#integrations",
          desc: "ERP & accounting",
        },
        {
          name: "Security Overview",
          href: "#security",
          desc: "Enterprise-grade protection",
        },
      ],
    },
    solutions: {
      title: "Industry Solutions",
      links: [
        {
          name: "Financial Services",
          href: "#financial",
          desc: "Banking & investment",
        },
        {
          name: "Technology Companies",
          href: "#tech",
          desc: "Startups to enterprise",
        },
        {
          name: "Professional Services",
          href: "#consulting",
          desc: "Consulting & legal",
        },
        {
          name: "Manufacturing",
          href: "#manufacturing",
          desc: "Global operations",
        },
        { name: "Healthcare", href: "#healthcare", desc: "Compliance-focused" },
        {
          name: "Government",
          href: "#government",
          desc: "Public sector solutions",
        },
      ],
    },
    resources: {
      title: "Enterprise Resources",
      links: [
        { name: "Knowledge Base", href: "#help", desc: "Comprehensive guides" },
        {
          name: "Implementation Guide",
          href: "#implementation",
          desc: "Best practices",
        },
        {
          name: "System Status",
          href: "#status",
          desc: "Real-time monitoring",
          external: true,
        },
        {
          name: "Developer Community",
          href: "#community",
          desc: "Technical discussions",
        },
        {
          name: "Training Center",
          href: "#training",
          desc: "Certification programs",
        },
        { name: "Webinar Series", href: "#webinars", desc: "Expert insights" },
      ],
    },
    company: {
      title: "Organization",
      links: [
        { name: "About Zentrix", href: "#about", desc: "Our mission & values" },
        {
          name: "Leadership Team",
          href: "#leadership",
          desc: "Executive profiles",
        },
        {
          name: "Career Opportunities",
          href: "#careers",
          desc: "Join our team",
        },
        { name: "Press & Media", href: "#press", desc: "Latest announcements" },
        {
          name: "Partner Program",
          href: "#partners",
          desc: "Strategic alliances",
        },
        {
          name: "Investor Relations",
          href: "#investors",
          desc: "Financial information",
        },
      ],
    },
  };

  const enterprisePartners = [
    { name: "Microsoft", logo: "MS" },
    { name: "Salesforce", logo: "SF" },
    { name: "SAP", logo: "SAP" },
    { name: "Oracle", logo: "ORC" },
    { name: "AWS", logo: "AWS" },
    { name: "Google Cloud", logo: "GCP" },
  ];

  const certifications = [
    {
      icon: Shield,
      name: "SOC 2 Type II",
      desc: "Security & Availability",
      status: "Certified",
    },
    {
      icon: Award,
      name: "ISO 27001",
      desc: "Information Security",
      status: "Compliant",
    },
    {
      icon: CheckCircle,
      name: "GDPR Ready",
      desc: "Data Protection",
      status: "Verified",
    },
    {
      icon: Clock,
      name: "99.9% SLA",
      desc: "Uptime Guarantee",
      status: "Active",
    },
  ];

  const socialPlatforms = [
    { icon: Linkedin, href: "#linkedin", name: "LinkedIn", followers: "25K+" },
    { icon: Twitter, href: "#twitter", name: "Twitter", followers: "18K+" },
    { icon: Github, href: "#github", name: "GitHub", followers: "12K+" },
    { icon: Globe, href: "#blog", name: "Blog", followers: "50K+" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR Compliance", href: "#gdpr" },
    { name: "Security Policy", href: "#security-policy" },
    { name: "Accessibility", href: "#accessibility" },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, white 15deg, transparent 30deg)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Enterprise Newsletter Section */}
      <div className="border-b border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-semibold">
                  Enterprise Insights
                </span>
              </div>
              <h3 className="text-4xl font-bold mb-6">
                Stay ahead with financial intelligence
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Get exclusive insights on expense management trends, regulatory
                updates, and best practices from our team of financial experts
                and industry leaders.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    text: "10,000+ CFOs subscribed",
                    desc: "Finance leadership community",
                  },
                  {
                    icon: Shield,
                    text: "GDPR compliant",
                    desc: "Privacy-first approach",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {feature.text}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {feature.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h4 className="text-2xl font-bold mb-6">
                Subscribe to Enterprise Updates
              </h4>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Professional email address"
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                />
                <Input
                  type="text"
                  placeholder="Company name"
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 h-12"
                />
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-12 font-semibold">
                  Subscribe to Enterprise Insights
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-slate-500 text-sm mt-4">
                Join finance leaders from Fortune 500 companies. Unsubscribe
                anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand & Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-xl">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold">Zentrix</span>
                <div className="text-emerald-400 text-sm font-semibold">
                  Enterprise Edition
                </div>
              </div>
            </div>

            <p className="text-slate-400 mb-8 leading-relaxed">
              The world's most advanced expense management platform, trusted by
              enterprise organizations for mission-critical financial operations
              across 150+ countries.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="text-white font-medium">
                    Global Headquarters
                  </div>
                  <div className="text-slate-400 text-sm">
                    San Francisco, CA • New York, NY • London, UK
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="text-white font-medium">Enterprise Sales</div>
                  <div className="text-slate-400 text-sm">
                    +1 (555) 123-4567 • Available 24/7
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="text-white font-medium">
                    Enterprise Support
                  </div>
                  <div className="text-slate-400 text-sm">
                    enterprise@zentrix.com
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Partners */}
            <div className="mb-8">
              <h4 className="font-semibold text-white text-sm mb-4">
                Enterprise Partners
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {enterprisePartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className="w-16 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 hover:border-emerald-500/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-slate-400 font-bold text-xs">
                      {partner.logo}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-white text-sm mb-4">
                Enterprise Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="flex items-center space-x-3 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <cert.icon className="w-4 h-4 text-emerald-500" />
                    <div className="flex-1">
                      <span className="text-white font-medium">
                        {cert.name}
                      </span>
                      <span className="text-slate-500 ml-2">{cert.desc}</span>
                    </div>
                    <div className="px-2 py-1 bg-emerald-500/20 rounded-full">
                      <span className="text-emerald-400 text-xs font-semibold">
                        {cert.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {Object.entries(footerSections).map(
            ([key, section], sectionIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="group flex items-start space-x-2 text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="font-medium group-hover:translate-x-1 transform duration-200 flex items-center">
                            {link.name}
                            {link.external && (
                              <ExternalLink className="w-3 h-3 ml-1" />
                            )}
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {link.desc}
                          </div>
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Advanced Bottom Footer */}
      <div className="border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 items-center"
          >
            {/* Copyright & Legal */}
            <div className="space-y-4">
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Zentrix Inc. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                {legalLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 text-sm font-semibold">
                  All Systems Operational
                </span>
                <div className="text-emerald-400 text-xs">99.9% Uptime</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-end space-x-4">
              {socialPlatforms.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="group relative"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all duration-200 border border-slate-700 hover:border-emerald-500/50">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.followers}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enterprise Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-slate-800"
          >
            <div className="inline-flex items-center space-x-3 text-slate-500 text-sm">
              <Building className="w-4 h-4" />
              <span>Enterprise-grade financial operations platform</span>
              <span>•</span>
              <span>Trusted by Fortune 500 companies</span>
              <span>•</span>
              <span>Made with ❤️ for finance professionals</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
