"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function VolunteerHoursSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-400/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Perfect for High School Requirements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.youth.volunteerHours.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-blue-100/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
