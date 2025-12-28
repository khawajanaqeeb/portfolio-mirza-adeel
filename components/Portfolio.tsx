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
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
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
              className="slideshow slideshow-2"
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
              {waterPurificationImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Water Purification ${index + 1}`}
                  style={{ height: '70vh', width: '100%', objectFit: 'contain' }}
                />
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
              💧 Water Purification Solutions
            </motion.h3>
            <motion.p
              className="text-gray-200 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Delivering premium water purification systems for residential and commercial clients.
              Specialized in market development, product demonstrations, and customer education.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Real Estate Solutions Section */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
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
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              🏢 Real Estate Sales & Marketing Excellence
            </motion.h3>
            <motion.p
              className="text-gray-200 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Strategic marketing and sales solutions for residential and commercial properties.
              Expertise in market analysis, client relationship management, and deal closing.
            </motion.p>
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
            <motion.img
              src="/pm1.jpg"
              alt="Real Estate Solution"
              className="rounded-2xl shadow-lg"
              style={{ height: '70vh', width: '100%', objectFit: 'contain' }}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}