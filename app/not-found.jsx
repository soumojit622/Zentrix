"use client";

import { Home, ArrowLeft, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="text-8xl lg:text-9xl font-bold text-emerald-500 mb-4">
            404
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Search className="w-12 h-12 text-emerald-600" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page not found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            The page you're looking for seems to have gone on a trip without
            splitting the bill. Let's get you back to splitting expenses!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <Home className="mr-2 w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </motion.div>

        {/* Brand Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center space-x-2 text-gray-500"
        >
          <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium">Zentrix</span>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-200 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-amber-200 rounded-full opacity-60"
          animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-rose-200 rounded-full opacity-60"
          animate={{ y: [0, -10, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </div>
  );
}
