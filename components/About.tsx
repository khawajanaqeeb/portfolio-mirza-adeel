"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target } from "lucide-react";

const features = [
  {
    name: "Driving Growth",
    description: "Successfully led marketing campaigns that enhance brand recognition and drive sales.",
    icon: TrendingUp,
  },
  {
    name: "Leadership",
    description: "Led sales teams to achieve outstanding achievements and deliver significant customer satisfaction.",
    icon: Users,
  },
  {
    name: "Strategy",
    description: "Innovative strategies and effective communication leveraging analytics to optimize growth opportunities.",
    icon: Target,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-100 max-w-3xl mx-auto"
          >
            A dedicated professional with over 10 years of experience in Sales and Marketing.
            I specialize in transforming business potential into tangible results.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:shadow-lg transition-all duration-300 border border-white/20"
            >
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-6 text-blue-200">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.name}</h3>
              <p className="text-gray-200 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
