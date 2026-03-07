"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function ComingSoonSection() {
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
              Coming Soon
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We&apos;re always expanding our program offerings based on
              community feedback and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.programs.comingSoon.map((program, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="glass-card-solid p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-500 mb-4">{program.description}</p>
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 text-xs font-semibold rounded-full">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-500 mb-4">
              Have an idea for a program? We&apos;d love to hear from you!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-primary-600 font-semibold border-2 border-primary-200 rounded-2xl hover:bg-primary-50 transition-all duration-300"
            >
              Suggest a Program
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
