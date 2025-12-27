"use client";

import { motion } from "framer-motion";

export default function Clients() {
  const clientImages = [
    "/client1.png",
    "/client2.png",
    "/client3.png",
    "/client4.png",
    "/client5.png",
    "/client6.jpg",
    "/client7.jpg",
  ];

  // Duplicate images for seamless scrolling
  const allImages = [...clientImages, ...clientImages];

  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">🤝 Clients & Projects</h2>
        </motion.div>

        <div className="section">
          <div className="half">
            <h3 className="text-2xl font-bold mb-4">Clients & Real-World Projects</h3>
            <p className="leading-relaxed mb-6">
              Delivered scalable solutions for enterprises, startups, and research labs
              worldwide—focused on reliability, performance, and innovation.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Enterprise AI Systems</li>
              <li>Robotics & Automation</li>
              <li>Custom Engineering Solutions</li>
            </ul>
          </div>
          <div className="half">
            <div className="marquee-container" style={{ height: '50vh' }}>
              <div className="marquee-content">
                {allImages.map((src, index) => (
                  <img key={index} src={src} alt={`Client ${index}`} className="image-half-screen-contain" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
