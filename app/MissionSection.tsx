"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function MissionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          {content.mission.title}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mt-6 text-xl text-gray-500 leading-relaxed"
        >
          {content.mission.description}
        </motion.p>
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-primary-600 font-semibold border-2 border-primary-200 rounded-2xl hover:bg-primary-50 hover:border-primary-300 transition-all duration-300"
          >
            Read Our Story
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
