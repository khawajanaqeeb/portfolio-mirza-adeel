"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const awardImages = [
    "/awd1.jpeg",
    "/awd2.jpeg",
    "/awd3.jpeg",
    "/awd4.jpeg",
    "/awd5.jpeg",
    "/awd6.jpeg",
    "/cert1.jpeg",
    "/cert2.jpeg",
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            🏆 Achievements
          </motion.h2>
        </motion.div>

        <motion.div
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="half"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.4
            }}
          >
            <motion.div
              className="slideshow"
              style={{ height: '70vh' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {awardImages.map((src, index) => (
                <img key={index} src={src} alt={`Award ${index + 1}`} style={{ height: '70vh', width: '100%', objectFit: 'contain' }} />
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="half"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
              duration: 0.4
            }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Awards & Certifications
            </motion.h3>
            <motion.p
              className="text-gray-200 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Recognized for innovation, research excellence, and impactful technology
              solutions across AI, robotics, and automation domains.
            </motion.p>
            <motion.ul
              className="list-disc list-inside space-y-2 text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {["Global AI & Robotics Awards", "Certified Research Excellence", "Industry-Leading Innovation"].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}