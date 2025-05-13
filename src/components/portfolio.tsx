"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import AboutSection from "./sections/about";
import EducationSection from "./sections/education";
import ToolsSection from "./sections/tools";
import ProjectsSection from "./sections/projects";
import ContactSection from "./sections/contact";

export type Section = "about" | "education" | "tools" | "projects" | "contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h2 className="font-bold text-center text-purple-300 mb-6 font-gaming text-2xl">
          <span className="text-purple-400 mb-6">Software</span> Engineering Student
        </h2>

        <div className="flex justify-center">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </header>

      <main className="relative">
        <div className="bg-purple-900 backdrop-blur-sm border-2 border-purple-500/50 rounded-xl p-6 pt-10 min-h-[500px] ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeSection === "about" && <AboutSection />}
              {activeSection === "education" && <EducationSection />}
              {activeSection === "tools" && <ToolsSection />}
              {activeSection === "projects" && <ProjectsSection />}
              {activeSection === "contact" && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
