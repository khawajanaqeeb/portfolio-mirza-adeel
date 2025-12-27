"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BackgroundImage from "./BackgroundImage";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden text-white"
      id="hero"
    >
      <BackgroundImage src="/addo.png" alt="Hero Background" priority={true} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div> {/* Gradient Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-right">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 text-left" // Align left
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Mirza Adeel <span className="text-blue-400">Baig</span>
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-medium">
              Sales & Marketing Professional
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-lg">
              Expertise in Driving Results. With over 10 years of experience, I
              have successfully led sales teams and marketing initiatives,
              delivering significant growth and customer satisfaction.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-white/20 hover:bg-white/30 md:text-lg transition-all shadow-sm hover:shadow-md"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
