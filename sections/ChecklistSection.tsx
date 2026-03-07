"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface ChecklistSectionProps {
  title: string;
  subtitle?: string;
  items: string[];
  dark?: boolean;
}

export default function ChecklistSection({
  title,
  subtitle,
  items,
  dark = false,
}: ChecklistSectionProps) {
  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 ${
        dark
          ? "bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white"
          : "gradient-mesh"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`mt-4 text-xl ${
                dark ? "text-blue-100/70" : "text-gray-500"
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-8 sm:p-10 ${
            dark
              ? "bg-white/10 backdrop-blur-lg border border-white/10"
              : "glass-card-solid"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center ${
                    dark ? "bg-primary-400/20" : "bg-primary-100"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 ${
                      dark ? "text-primary-300" : "text-primary-600"
                    }`}
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
                <span
                  className={`leading-relaxed ${
                    dark ? "text-blue-100/80" : "text-gray-600"
                  }`}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
