"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: "gradient" | "light";
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "gradient",
}: CTASectionProps) {
  const isGradient = variant === "gradient";

  return (
    <section
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isGradient
          ? "bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white"
          : "bg-white"
      }`}
    >
      {isGradient && (
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-400/10 rounded-full blur-3xl" />
        </div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-balance ${
            isGradient ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className={`mt-6 text-xl max-w-2xl mx-auto ${
            isGradient ? "text-blue-100/80" : "text-gray-500"
          }`}
        >
          {description}
        </motion.p>

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl transition-all duration-300 text-lg hover:-translate-y-0.5 ${
                  isGradient
                    ? "bg-white text-primary-700 hover:shadow-xl hover:shadow-white/10"
                    : "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:shadow-primary-500/25"
                }`}
              >
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 text-lg hover:-translate-y-0.5 ${
                  isGradient
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-gray-300 text-gray-700 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {secondaryCTA.text}
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
