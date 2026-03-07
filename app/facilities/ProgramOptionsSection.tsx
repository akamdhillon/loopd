"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function ProgramOptionsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Flexible Program Options
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Choose the implementation model that works best for your facility
              and residents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.facilities.programOptions.map((option, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-solid p-8 text-center hover:-translate-y-1 transition-all duration-300 relative"
              >
                {option.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    {option.badge}
                  </span>
                )}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
