"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function AboutSolutionSection() {
  const { solution } = content.about;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-mesh">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {solution.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            {solution.description}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="glass-card-solid p-8 sm:p-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Why This Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.points.map((point, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-gray-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
