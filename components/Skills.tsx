"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Proven Leadership",
    description: "Ability to inspire teams toward shared goals in diverse environments.",
    color: "bg-blue-500",
  },
  {
    title: "Excellent Communication",
    description: "Skilled at conveying complex ideas clearly and effectively across multiple channels.",
    color: "bg-green-500",
  },
  {
    title: "Strategic Thinking",
    description: "Focused on developing actionable plans and initiatives for long-term success.",
    color: "bg-purple-500",
  },
  {
    title: "Strong Analytical Skills",
    description: "Expertise in data analysis to drive performance improvements and informed decisions.",
    color: "bg-orange-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Key Skills</h2>
          <p className="mt-4 text-xl text-gray-100">Core competencies that drive my professional success</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all border border-white/20 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className={`w-2 h-16 rounded-full ${skill.color} flex-shrink-0`} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-200">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
