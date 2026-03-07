"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function IncludedSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-mesh">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Investment & Support
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-xl text-gray-500 mb-12"
        >
          Our programs are designed to be cost-effective and provide excellent
          return on investment through improved resident outcomes.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="glass-card-solid p-8 sm:p-10"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            What&apos;s Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {content.facilities.included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300 text-lg"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
