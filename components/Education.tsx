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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Education</h2>
          <p className="mt-4 text-xl">My academic journey and qualifications</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-0 space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <span className="absolute -left-[9px] top-1 h-5 w-5 rounded-full bg-blue-400 border-4 border-blue-100 shadow-sm" />
                <div className="flex flex-col md:flex-row md:items-center justify-between bg-white/10 p-6 rounded-xl shadow-sm border border-white/20">
                  <div>
                    <h3 className="text-xl font-bold">{item.school}</h3>
                    <p className="text-blue-200 font-medium mt-1">{item.degree}</p>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0 text-gray-300 font-mono text-sm bg-white/10 px-3 py-1 rounded-full">
                    <GraduationCap size={14} className="mr-2" />
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
