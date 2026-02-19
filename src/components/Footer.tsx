"use client";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <a href="#" className="text-xl font-bold gradient-text">
              Ram Poptani
            </a>
            <p className="text-xs text-muted mt-1">
              Full Stack Java Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent hover:bg-accent-glow rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-accent hover:bg-accent-glow rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-muted hover:text-accent hover:bg-accent-glow rounded-lg transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-card-border text-center">
          <p className="text-xs text-muted flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Ram Poptani. Built with
            <FiHeart size={12} className="text-rose-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
