"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiCalendar } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Side projects that showcase my interests and skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * (i + 1) }}
              className="group bg-card border border-card-border rounded-2xl p-6 hover:border-accent/40 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs font-medium text-accent bg-accent-glow px-2 py-0.5 rounded-md">
                      {project.language}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <FiCalendar size={11} />
                      {project.date}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted hover:text-accent rounded-lg hover:bg-accent-glow transition-colors"
                    aria-label={`${project.title} GitHub repo`}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {project.description.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-section-alt text-muted border border-card-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
