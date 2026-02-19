"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiAward } from "react-icons/fi";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-dark to-card-border" />

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 * (i + 1) }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft
                    ? "sm:flex-row sm:pr-[calc(50%+2rem)]"
                    : "sm:flex-row-reverse sm:pl-[calc(50%+2rem)]"
                } flex-row pl-12 sm:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-background shadow-[0_0_12px_rgba(245,158,11,0.4)]" />
                </div>

                {/* Year badge - hidden on mobile, shown on desktop on opposite side */}
                <div
                  className={`hidden sm:flex absolute top-0 ${
                    isLeft ? "left-[calc(50%+1.5rem)]" : "right-[calc(50%+1.5rem)]"
                  }`}
                >
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                {/* Content card */}
                <div className="group w-full bg-card border border-card-border rounded-xl p-5 sm:p-6 hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/5 relative">
                  {/* Arrow pointing to timeline */}
                  <div
                    className={`hidden sm:block absolute top-4 w-3 h-3 rotate-45 bg-card border-card-border ${
                      isLeft
                        ? "right-[-7px] border-r border-t"
                        : "left-[-7px] border-l border-b"
                    } group-hover:border-accent/30 transition-all`}
                  />

                  {/* Mobile year badge */}
                  <span className="sm:hidden inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 mb-3">
                    {edu.period}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-medium text-accent mt-1.5">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs text-muted">
                    <div className="flex items-center gap-1.5">
                      <FiMapPin size={12} />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiAward size={12} className="text-accent" />
                      <span className="text-foreground font-medium">{edu.scoreLabel}:</span>
                      <span className="font-bold text-accent">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
