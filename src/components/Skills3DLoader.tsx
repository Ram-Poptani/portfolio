"use client";

import dynamic from "next/dynamic";

const Skills3D = dynamic(() => import("@/components/Skills3D"), {
  ssr: false,
  loading: () => (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="h-10 w-48 bg-card-border/30 rounded-lg mx-auto animate-pulse" />
          <div className="h-5 w-72 bg-card-border/20 rounded-lg mx-auto mt-3 animate-pulse" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-card-border/30 animate-pulse" />
                <div className="flex-1 h-6 bg-card-border/20 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-center h-[450px]">
            <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    </section>
  ),
});

export default function Skills3DLoader() {
  return <Skills3D />;
}
