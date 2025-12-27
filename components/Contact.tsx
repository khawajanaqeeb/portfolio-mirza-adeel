"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Interested in real estate investment or need marketing consultation? 
              Reach out to me directly or connect via social media.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:mradeel_15@yahoo.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-medium text-lg">mradeel_15@yahoo.com</p>
                </div>
              </a>
              
              <a href="tel:+923353112441" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-medium text-lg">+92 335 3112441</p>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/mirza.a.baig.180" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Facebook className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Social Media</p>
                  <p className="font-medium text-lg">Facebook Profile</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-gray-900"
          >
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
