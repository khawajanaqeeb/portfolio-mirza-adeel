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
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">🏆 Achievements</h2>
        </motion.div>

        <div className="section">
          <div className="half">
            <div className="slideshow" style={{ height: '50vh' }}>
              {awardImages.map((src, index) => (
                <img key={index} src={src} alt={`Award ${index + 1}`} className="image-half-screen" />
              ))}
            </div>
          </div>
          <div className="half">
            <h3 className="text-2xl font-bold text-white mb-4">Awards & Certifications</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Recognized for innovation, research excellence, and impactful technology
              solutions across AI, robotics, and automation domains.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              <li>Global AI & Robotics Awards</li>
              <li>Certified Research Excellence</li>
              <li>Industry-Leading Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}