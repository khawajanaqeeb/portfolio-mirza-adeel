"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: { scale: 0.95 },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const name = "Mirza Adeel";
  const lastName = "Baig";
  const title = "Sales & Marketing Professional";
  const titleWords = title.split(" ");

  return (
    <section
      className="py-20 text-white min-h-screen flex items-center"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 text-left"
          >
            {/* Animated Name with Letter-by-Letter Effect */}
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-1">
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.05 }}
                className="inline-flex"
              >
                {name.split("").map((char, index) => (
                  <motion.span
                    key={`name-${index}`}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ display: char === " " ? "inline" : "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
              <span> </span>
              <motion.span
                className="inline-flex bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent relative"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.05, delayChildren: 0.6 }}
              >
                {lastName.split("").map((char, index) => (
                  <motion.span
                    key={`lastname-${index}`}
                    variants={letterVariants}
                    className="inline-block"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(96, 165, 250, 0.5)",
                        "0 0 20px rgba(96, 165, 250, 0.8)",
                        "0 0 10px rgba(96, 165, 250, 0.5)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: 1.5 + index * 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </div>

            {/* Animated Subtitle with Word-by-Word Reveal */}
            <div className="mt-6 relative inline-block">
              <motion.div
                className="text-2xl md:text-3xl font-medium"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.15, delayChildren: 1.2 }}
              >
                {titleWords.map((word, index) => (
                  <motion.span
                    key={`word-${index}`}
                    variants={wordVariants}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              {/* Animated Underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-transparent rounded-full mt-2"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Animated Paragraph with Fade-In */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
              className="mt-8 text-lg leading-relaxed max-w-lg"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="font-semibold text-blue-300"
              >
                Expertise in Driving Results.
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.6 }}
              >
                With over 10 years of experience, I have successfully led sales
                teams and marketing initiatives, delivering significant growth and
                customer satisfaction.
              </motion.span>
            </motion.p>

            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
              className="mt-10 flex gap-4 flex-wrap"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(37, 99, 235, 0.5)",
                    "0 0 30px rgba(37, 99, 235, 0.8)",
                    "0 0 20px rgba(37, 99, 235, 0.5)",
                  ],
                }}
                transition={{
                  boxShadow: {
                    repeat: Infinity,
                    duration: 2,
                    delay: 3,
                  },
                }}
                className="inline-block rounded-md"
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">Contact Me</span>
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white bg-white/20 hover:bg-white/30 md:text-lg transition-all shadow-sm hover:shadow-md backdrop-blur-sm"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
