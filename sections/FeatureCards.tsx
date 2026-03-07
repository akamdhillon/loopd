"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface Feature {
  title: string;
  description: string;
  cta?: string;
  href?: string;
  badge?: string;
}

interface FeatureCardsProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "glass" | "solid" | "outline";
}

export default function FeatureCards({
  title,
  subtitle,
  features,
  columns = 3,
  variant = "solid",
}: FeatureCardsProps) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  const cardClass = {
    glass: "glass-card p-8",
    solid: "glass-card-solid p-8 hover:shadow-2xl hover:shadow-primary-500/5",
    outline:
      "bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:border-primary-200 hover:shadow-xl",
  }[variant];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-mesh">
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
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-balance"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto"
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
          className={`grid grid-cols-1 ${colClass} gap-8`}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className={`${cardClass} group hover:-translate-y-1 transition-all duration-300 relative`}
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                  {feature.badge}
                </span>
              )}
              <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                {feature.description}
              </p>
              {feature.cta && feature.href && (
                <Link
                  href={feature.href}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-3 gap-2 transition-all duration-300"
                >
                  {feature.cta}
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
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
