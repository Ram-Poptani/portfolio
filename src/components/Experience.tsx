"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Where I&apos;ve contributed and grown as a developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-card-border" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 bg-accent rounded-full ring-4 ring-background" />

                <div className="bg-card border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-all hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                      {exp.subtitle && (
                        <p className="text-xs text-muted mt-0.5">
                          {exp.subtitle}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <FiBriefcase className="text-accent" size={14} />
                        <span className="text-sm font-medium text-accent">
                          {exp.role}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        <FiCalendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted">
                        <FiMapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
