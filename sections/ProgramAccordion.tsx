"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface CurriculumItem {
  week: number;
  title: string;
  content: string;
}

interface ProgramAccordionProps {
  title: string;
  description?: string;
  items: CurriculumItem[];
}

export default function ProgramAccordion({
  title,
  description,
  items,
}: ProgramAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (week: number) => {
    setOpenItems((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-mesh">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {items.map((item) => {
            const isOpen = openItems.includes(item.week);

            return (
              <div
                key={item.week}
                className="glass-card-solid overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(item.week)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center font-semibold text-sm">
                      {item.week}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5">
                        <div className="border-t border-gray-100 pt-4 pl-14">
                          <p className="text-gray-500 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
