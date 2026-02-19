"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";

class Skills3DErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Tech <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto mb-8">
              Technologies and tools I work with
            </p>
            <div className="bg-card border border-card-border rounded-2xl p-8">
              <p className="text-muted text-sm">
                3D visualization couldn&apos;t load. Please try a different browser or device.
              </p>
            </div>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

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
  return (
    <Skills3DErrorBoundary>
      <Skills3D />
    </Skills3DErrorBoundary>
  );
}
