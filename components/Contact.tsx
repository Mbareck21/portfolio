"use client";

import { motion } from "framer-motion";
import { 
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            I am currently open to new opportunities and would welcome the chance to discuss how I can contribute to your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800"
          >
            <h3 className="text-2xl font-bold text-neutral-100 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center text-neutral-300">
                <EnvelopeIcon className="h-5 w-5 text-primary-500 mr-3" />
                <a href="mailto:mlemine.mbareck@gmail.com" className="hover:text-primary-400 transition-colors">
                  mlemine.mbareck@gmail.com
                </a>
              </div>
              
              <div className="flex items-center text-neutral-300">
                <PhoneIcon className="h-5 w-5 text-primary-500 mr-3" />
                <a href="tel:+14793878109" className="hover:text-primary-400 transition-colors">
                  (479) 387-8109
                </a>
              </div>
              
              <div className="flex items-center text-neutral-300">
                <GlobeAltIcon className="h-5 w-5 text-primary-500 mr-3" />
                <span>Fayetteville, AR</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-neutral-100 mb-4">Professional Profile</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="https://github.com/Mbareck21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 rounded-2xl p-8 backdrop-blur-sm border border-neutral-800"
          >
            <h3 className="text-2xl font-bold text-neutral-100 mb-6">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}