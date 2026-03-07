"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface Step {
  step: number;
  title: string;
  description: string;
}

interface StepsSectionProps {
  title: string;
  steps: Step[];
}

export default function StepsSection({ title, steps }: StepsSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
          >
            {title}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className={`grid grid-cols-1 ${
              steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
            } gap-8`}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="text-center relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-200 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-primary-100 rounded-2xl rotate-6" />
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
