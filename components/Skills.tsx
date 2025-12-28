"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Client Relationship Management",
    description: "Building and maintaining strong relationships with clients in real estate and water purification sectors.",
    color: "bg-blue-500",
  },
  {
    title: "Market Analysis & Strategy",
    description: "Expert in identifying market trends, competitive positioning, and growth opportunities for property sales and water solutions.",
    color: "bg-green-500",
  },
  {
    title: "Negotiation & Deal Closing",
    description: "Proven track record of successful negotiations and closing high-value real estate and water purification contracts.",
    color: "bg-purple-500",
  },
  {
    title: "Sales & Marketing Expertise",
    description: "Comprehensive experience in developing marketing campaigns and sales strategies for real estate and water purification products.",
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{
                scale: 1.03,
                x: index % 2 === 0 ? 5 : -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all border border-white/20 shadow-lg hover:shadow-2xl cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`w-2 h-16 rounded-full ${skill.color} flex-shrink-0`}
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  whileHover={{
                    width: 6,
                    transition: { duration: 0.3 },
                  }}
                />
                <div className="overflow-hidden">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {skill.title}
                  </h3>
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
