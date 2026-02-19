"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiCreatereactapp,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiDocker,
  SiGit,
  SiApachemaven,
} from "react-icons/si";
import { FiDatabase, FiCloud, FiSettings, FiCoffee } from "react-icons/fi";
import { skillItems } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "Java 17": <FiCoffee />,
  "Spring Boot": <SiSpringboot />,
  "Spring Security": <SiSpringsecurity />,
  "Spring Data JPA": <SiSpringboot />,
  "Hibernate/JPA": <SiHibernate />,
  "React.js": <SiCreatereactapp />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  MSSQL: <FiDatabase />,
  Redis: <SiRedis />,
  "Apache Kafka": <SiApachekafka />,
  Docker: <SiDocker />,
  "Microsoft Azure": <FiCloud />,
  "Azure DevOps": <FiSettings />,
  "CI/CD": <FiSettings />,
  Git: <SiGit />,
  Maven: <SiApachemaven />,
};

const categoryColors: Record<string, string> = {
  "Languages & Frameworks": "from-amber-500 to-orange-500",
  Databases: "from-yellow-500 to-amber-500",
  Tools: "from-orange-500 to-red-500",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (catIdx + 1) }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`h-1 w-8 rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {category}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {items.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 * i + 0.1 * catIdx,
                    }}
                    className="group flex items-center gap-2.5 bg-card border border-card-border rounded-xl px-4 py-3 hover:border-accent/50 hover:bg-accent-glow transition-all hover:-translate-y-0.5 cursor-default"
                  >
                    <span className="text-lg text-muted group-hover:text-accent transition-colors">
                      {iconMap[skill] || <FiDatabase />}
                    </span>
                    <span className="text-sm font-medium text-foreground truncate">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
