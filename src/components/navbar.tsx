"use client"

import { User, GraduationCap, Wrench, Code, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Section } from "./portfolio"

interface NavbarProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const navItems = [
    { id: "about", label: "Sobre mí", icon: User },
    { id: "tools", label: "Habilidades", icon: Wrench },
    { id: "projects", label: "Projectos", icon: Code },
    { id: "contact", label: "Contacto", icon: Mail },
  ]

  return (
    <nav className="flex justify-center">
      <div className="bg-purple-900/80 backdrop-blur-sm border border-purple-500/30 rounded-full p-1 flex flex-wrap justify-center gap-1 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as Section)}
            className={cn(
              "flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300",
              activeSection === item.id
                ? "bg-purple-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                : "text-purple-200 hover:bg-purple-800 hover:text-white",
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
