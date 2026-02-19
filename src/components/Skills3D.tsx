"use client";

import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Skill data with icon paths and proficiency
const skillItems = [
  { name: "Java 17", icon: "/icons/java.svg", category: "lang", proficiency: 92 },
  { name: "Spring Boot", icon: "/icons/spring-boot.svg", category: "lang", proficiency: 90 },
  { name: "PHP", icon: "/icons/php.svg", category: "lang", proficiency: 80 },
  { name: "Laravel", icon: "/icons/laravel.svg", category: "lang", proficiency: 78 },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "lang", proficiency: 90 },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "lang", proficiency: 90 },
  { name: "Express.js", icon: "/icons/express.svg", category: "lang", proficiency: 90 },
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "lang", proficiency: 75 },
  { name: "React.js", icon: "/icons/react.svg", category: "lang", proficiency: 78 },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "db", proficiency: 85 },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "db", proficiency: 80 },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "db", proficiency: 70 },
  { name: "MSSQL", icon: "/icons/mssql.svg", category: "db", proficiency: 65 },
  { name: "Redis", icon: "/icons/redis.svg", category: "db", proficiency: 75 },
  { name: "Apache Kafka", icon: "/icons/kafka.svg", category: "tool", proficiency: 80 },
  { name: "Docker", icon: "/icons/docker.svg", category: "tool", proficiency: 82 },
  { name: "Microsoft Azure", icon: "/icons/azure.svg", category: "tool", proficiency: 78 },
  { name: "Azure DevOps", icon: "/icons/azure-devops.svg", category: "tool", proficiency: 75 },
  { name: "CI/CD", icon: "/icons/cicd.svg", category: "tool", proficiency: 80 },
  { name: "Git", icon: "/icons/git.svg", category: "tool", proficiency: 90 },
  { name: "Maven", icon: "/icons/maven.svg", category: "tool", proficiency: 85 },
];

const categoryColors: Record<string, string> = {
  lang: "#f59e0b",
  db: "#10b981",
  tool: "#ef4444",
};

const categoryLabels: Record<string, string> = {
  lang: "Languages & Frameworks",
  db: "Databases",
  tool: "Tools",
};

const barColors: Record<string, string> = {
  lang: "from-amber-500 to-orange-400",
  db: "from-emerald-500 to-teal-400",
  tool: "from-red-500 to-orange-500",
};

// Fibonacci sphere distribution for even spacing
function fibonacciSphere(count: number, radius: number) {
  const points: [number, number, number][] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points.push([x, y, z]);
  }
  return points;
}

function SkillNode({
  skill,
  position,
}: {
  skill: (typeof skillItems)[0];
  position: [number, number, number];
}) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[skill.category];

  return (
    <group position={position}>
      <Html
        center
        distanceFactor={8}
        zIndexRange={[1, 0]}
        style={{ pointerEvents: "auto" }}
      >
        <div
          className={`flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 ${
            hovered ? "scale-125" : "scale-100"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div
            className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered
                ? `${color}22`
                : "var(--card)",
              border: `2px solid ${hovered ? color : "var(--card-border)"}`,
              boxShadow: hovered
                ? `0 0 20px ${color}44, 0 0 40px ${color}22`
                : "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <span
            className="text-[10px] sm:text-xs font-semibold whitespace-nowrap px-2 py-0.5 rounded-md transition-all duration-300"
            style={{
              color: hovered ? color : "var(--muted)",
              background: hovered ? `${color}15` : "transparent",
            }}
          >
            {skill.name}
          </span>
        </div>
      </Html>
    </group>
  );
}

function RotatingSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(
    () => fibonacciSphere(skillItems.length, 4.5),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {skillItems.map((skill, i) => (
        <SkillNode key={skill.name} skill={skill} position={positions[i]} />
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <RotatingSphere />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />
    </>
  );
}

// Proficiency bar component
function ProficiencyBar({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skillItems)[0];
  index: number;
  isInView: boolean;
}) {
  const color = categoryColors[skill.category];
  const gradientClass = barColors[skill.category];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.03 * index }}
      className="group flex items-center gap-3"
    >
      <div
        className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
        style={{
          background: `${color}18`,
          border: `1px solid ${color}30`,
        }}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={18}
          height={18}
          className="w-[18px] h-[18px]"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-foreground truncate">
            {skill.name}
          </span>
          <span
            className="text-[10px] font-bold ml-2 tabular-nums"
            style={{ color }}
          >
            {skill.proficiency}%
          </span>
        </div>
        <div className="h-1.5 w-full bg-card-border/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.proficiency}%` } : {}}
            transition={{
              duration: 0.8,
              delay: 0.05 * index,
              ease: "easeOut",
            }}
            className={`h-full rounded-full bg-gradient-to-r ${gradientClass}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>("lang");

  const grouped = useMemo(() => {
    const groups: Record<string, typeof skillItems> = {};
    for (const skill of skillItems) {
      if (!groups[skill.category]) groups[skill.category] = [];
      groups[skill.category].push(skill);
    }
    return groups;
  }, []);

  const tabs = Object.entries(categoryLabels);
  const activeItems = grouped[activeTab] || [];

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Tabs + Proficiency List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Tab buttons */}
            <div className="flex gap-1 p-1 bg-card border border-card-border rounded-xl mb-6">
              {tabs.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="relative flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300"
                  style={{
                    color:
                      activeTab === key
                        ? "#fff"
                        : "var(--muted)",
                    background:
                      activeTab === key
                        ? categoryColors[key]
                        : "transparent",
                    boxShadow:
                      activeTab === key
                        ? `0 2px 12px ${categoryColors[key]}44`
                        : "none",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background:
                        activeTab === key
                          ? "#fff"
                          : categoryColors[key],
                    }}
                  />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">
                    {label.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Active tab skills */}
            <div className="min-h-[340px]">
              <div className="space-y-3" key={activeTab}>
                {activeItems.map((skill, i) => (
                  <ProficiencyBar
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right: 3D Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[450px] lg:h-[550px] hidden md:block overflow-hidden"
            style={{ zIndex: 1 }}
          >
            <Canvas
              camera={{ position: [0, 0, 12], fov: 50 }}
              style={{ background: "transparent" }}
            >
              <Suspense
                fallback={
                  <Html center>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
                      <span className="text-xs text-muted font-medium">Loading 3D skills...</span>
                    </div>
                  </Html>
                }
              >
                <Scene />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
