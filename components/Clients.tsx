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
            🤝 Clients & Projects
          </motion.h2>
        </motion.div>

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
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Clients & Real-World Projects
            </motion.h3>
            <motion.p
              className="leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Successfully partnered with property developers, homeowners, and businesses
              to deliver exceptional real estate services and water purification solutions.
            </motion.p>
            <motion.ul
              className="list-disc list-inside space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {["Residential & Commercial Real Estate", "Water Purification Systems", "Property Marketing & Sales"].map((item, index) => (
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
            <motion.div
              className="marquee-container"
              style={{ height: '50vh' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="marquee-content">
                {allImages.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Client ${index}`}
                    className="image-half-screen-contain"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
