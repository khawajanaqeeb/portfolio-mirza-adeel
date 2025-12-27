"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "ARENA MULTIMEDIA",
    year: "2008",
    degree: "AMSP with B TECH HND",
  },
  {
    school: "ALIGARH INSTITUTE OF TECHNOLOGY",
    year: "2005",
    degree: "DAE in Computer I.T",
  },
  {
    school: "FORMEN COLLEGE",
    year: "2002",
    degree: "Intermediate in Commerce",
  },
  {
    school: "DEHLI GOVT BOYS SEC SCHOOL",
    year: "2000",
    degree: "Matriculation in Computer Science",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Education
          </motion.h2>
          <motion.p
            className="mt-4 text-xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My academic journey and qualifications
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative border-l-2 border-blue-200 ml-4 md:ml-0 space-y-12"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            style={{ transformOrigin: "top" }}
          >
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3 + index * 0.15,
                  duration: 0.5
                }}
                whileHover={{
                  x: 10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative pl-8 md:pl-12"
              >
                <motion.span
                  className="absolute -left-[9px] top-1 h-5 w-5 rounded-full bg-blue-400 border-4 border-blue-100 shadow-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.3 }}
                  whileHover={{
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.8)",
                    transition: { duration: 0.2 }
                  }}
                />
                <motion.div
                  className="flex flex-col md:flex-row md:items-center justify-between bg-white/10 p-6 rounded-xl shadow-sm border border-white/20 backdrop-blur-sm"
                  whileHover={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(96, 165, 250, 0.5)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div>
                    <motion.h3
                      className="text-xl font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                    >
                      {item.school}
                    </motion.h3>
                    <motion.p
                      className="text-blue-200 font-medium mt-1"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                    >
                      {item.degree}
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex items-center mt-4 md:mt-0 text-gray-300 font-mono text-sm bg-white/10 px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.4 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <GraduationCap size={14} className="mr-2" />
                    {item.year}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
