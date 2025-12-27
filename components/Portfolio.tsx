"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const waterPurificationImages = ["/purit1.jpeg", "/purit2.jpeg"];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Portfolio Overview</h2>
          <p className="mt-4 text-xl text-gray-100">Explore my key sectors of expertise</p>
        </motion.div>

        {/* Water Purification Systems Section */}
        <div className="section">
          <div className="half">
            <div className="slideshow" style={{ height: '50vh' }}>
              {waterPurificationImages.map((src, index) => (
                <img key={index} src={src} alt={`Water Purification ${index + 1}`} className="image-half-screen" />
              ))}
            </div>
          </div>
          <div className="half">
            <h3 className="text-2xl font-bold text-white mb-4">💧 Smart Water Purification</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Intelligent water purification systems engineered for sustainability,
              efficiency, and real-time monitoring using smart control frameworks.
            </p>
          </div>
        </div>

        {/* Real Estate Solutions Section */}
        <div className="section">
          <div className="half">
            <h3 className="text-2xl font-bold text-white mb-4">🏢 AI-Driven Real Estate Automation</h3>
            <p className="text-gray-200 leading-relaxed mb-6">
              Smart real estate solutions for monitoring, analytics, and predictive
              maintenance—built for modern infrastructure.
            </p>
          </div>
          <div className="half">
            <img
              src="/pm1.jpg"
              alt="Real Estate Solution"
              className="image-half-screen rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}