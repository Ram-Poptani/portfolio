"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiBriefcase, FiCode } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <FiBriefcase />, label: "Years Experience", value: "2.5+" },
    { icon: <FiCode />, label: "Tech Stack", value: "15+" },
    { icon: <FiMapPin />, label: "Based in", value: "Mumbai" },
  ];

  return (
    <section id="about" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A passionate developer focused on building robust backend systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="bg-card border border-card-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-glow text-accent rounded-xl mb-4 text-xl">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 bg-card border border-card-border rounded-2xl p-6 sm:p-8"
        >
          <p className="text-muted leading-relaxed text-sm sm:text-base mb-4">
            I enjoy solving complex problems and turning them into clean, efficient backend systems. My day-to-day involves designing microservices, writing well-tested APIs, and making sure data flows smoothly — whether it&apos;s through Kafka event streams, cached Redis layers, or optimized SQL queries.
          </p>
          <p className="text-muted leading-relaxed text-sm sm:text-base">
            Outside of work, I like building side projects that push my limits — from real-time crypto pipelines to socket-based chat systems. I&apos;m always exploring new patterns, and I believe the best code is the kind you don&apos;t have to explain twice.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
