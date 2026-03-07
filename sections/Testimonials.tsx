"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface TestimonialsProps {
  title: string;
  subtitle?: string;
  placeholder?: string;
}

export default function Testimonials({
  title,
  subtitle,
  placeholder = "Join our community and become part of the stories we'll share here.",
}: TestimonialsProps) {
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
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-4 text-xl text-gray-500"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mt-12 glass-card-solid p-12 sm:p-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-lg text-gray-500 italic leading-relaxed">
            &ldquo;{placeholder}&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
