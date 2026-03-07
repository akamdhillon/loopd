"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import content from "@/content/content.json";

export default function ConnectSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-mesh">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Connect with Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="glass-card-solid p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Location
            </h3>
            <p className="text-gray-500 mb-4">
              We serve communities throughout the greater metropolitan area.
              Contact us to learn about programs in your specific location.
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>Service Area:</strong> {content.brand.serviceArea}
              </p>
              <p>
                <strong>Main Office:</strong> Contact us for address
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="glass-card-solid p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Follow Our Journey
            </h3>
            <p className="text-gray-500 mb-4">
              Stay updated with our latest programs, success stories, and
              community events.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">f</span>
                </div>
                Facebook — {content.brand.social.facebook}
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">ig</span>
                </div>
                Instagram — {content.brand.social.instagram}
              </div>
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm">in</span>
                </div>
                LinkedIn — {content.brand.social.linkedin}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
