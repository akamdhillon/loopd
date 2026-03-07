"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface Service {
  title: string;
  description: string;
}

interface ServicesGridProps {
  title: string;
  subtitle?: string;
  services: Service[];
  columns?: 2 | 3;
  dark?: boolean;
}

export default function ServicesGrid({
  title,
  subtitle,
  services,
  columns = 3,
  dark = false,
}: ServicesGridProps) {
  const colClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 ${
        dark
          ? "bg-gradient-to-br from-gray-900 via-primary-900 to-secondary-900 text-white"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className={`text-3xl sm:text-4xl font-bold text-balance ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className={`mt-4 text-xl max-w-3xl mx-auto ${
                dark ? "text-blue-100/70" : "text-gray-500"
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className={`grid grid-cols-1 ${colClass} gap-6`}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? "bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/15 hover:border-white/20"
                  : "glass-card-solid hover:shadow-2xl hover:shadow-primary-500/5"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                  dark
                    ? "bg-white/10"
                    : "bg-gradient-to-br from-primary-100 to-primary-50"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-lg ${
                    dark
                      ? "bg-primary-400"
                      : "bg-gradient-to-br from-primary-500 to-primary-600"
                  }`}
                />
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  dark ? "text-blue-100/70" : "text-gray-500"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
