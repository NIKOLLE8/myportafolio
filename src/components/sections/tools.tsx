"use client"

import { useState, useRef, useEffect } from "react"
import { Wrench, Code, Server, Database, ChevronRight, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

type SkillCategory = "frontend" | "backend" | "database"

type Skill = {
  name: string
  icon: string
  color: string
  category: SkillCategory
  level: number // 1-5
}

export default function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleSkills, setVisibleSkills] = useState(8)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Update visible skills based on screen size
  useEffect(() => {
    const updateVisibleSkills = () => {
      if (window.innerWidth < 640) {
        setVisibleSkills(2) // Cambiar de 3 a 2 iconos en pantallas pequeñas
      } else if (window.innerWidth < 1024) {
        setVisibleSkills(4)
      } else {
        setVisibleSkills(4)
      }
    }

    updateVisibleSkills()
    window.addEventListener("resize", updateVisibleSkills)
    return () => window.removeEventListener("resize", updateVisibleSkills)
  }, [])

  const skills: Skill[] = [
    // Frontend
    { name: "HTML5", icon: "devicon-html5-plain", color: "#E34F26", category: "frontend", level: 2 },
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F7DF1E", category: "frontend", level: 2 },
    { name: "React", icon: "devicon-react-original", color: "#61DAFB", category: "frontend", level: 1 },
    { name: "Angular", icon: "devicon-angularjs-plain", color: "#DD0031", category: "frontend", level: 1 },
    { name: "CSS3", icon: "devicon-css3-plain", color: "#1572B6", category: "frontend", level: 2 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", color: "#38B2AC", category: "frontend", level: 2 },
    { name: "Next.js", icon: "devicon-nextjs-plain", color: "#000000", category: "frontend", level: 2 },


    // Backend
    { name: "Python", icon: "devicon-python-plain", color: "#3776AB", category: "backend", level: 2 },
    { name: "PHP", icon: "devicon-php-plain", color: "#777BB4", category: "backend", level: 2 },
    { name: "Java", icon: "devicon-java-plain", color: "#007396", category: "backend", level: 2 },
    { name: "Node.js", icon: "devicon-nodejs-plain", color: "#339933", category: "backend", level: 1 },

    // Database
    { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1", category: "database", level: 1 },
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", color: "#CC2927", category: "database", level: 1 },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory)

  const categoryIcons = {
    frontend: <Code className="w-5 h-5" />,
    backend: <Server className="w-5 h-5" />,
    database: <Database className="w-5 h-5" />,
  }

  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de Datos",
  }

  const getLevelName = (level: number) => {
    if (level >= 3) return "Avanzado"
    if (level >= 2) return "Intermedio"
    if (level >= 1) return "Básico"
    return "Principiante"
  }

  const handlePrevious = () => {
    const step = window.innerWidth >= 1024 ? 4 : window.innerWidth < 640 ? 2 : 3
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - step))
    }
  }

  const handleNext = () => {
    const step = window.innerWidth >= 1024 ? 4 : window.innerWidth < 640 ? 2 : 3
    if (currentIndex + visibleSkills < filteredSkills.length) {
      setCurrentIndex(currentIndex + step)
    }
  }

  // Generate hexagon points
  const getHexagonPoints = (size: number) => {
    const points = []
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3
      const x = size + size * Math.cos(angle)
      const y = size + size * Math.sin(angle)
      points.push(`${x},${y}`)
    }
    return points.join(" ")
  }

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

  return (
    <div className="space-y-10">

      {/* Category Tabs */}
      <div className="flex justify-center">
        <div className="bg-purple-900/60 p-1.5 rounded-xl grid grid-cols-3 gap-2">
          {(Object.keys(categoryNames) as SkillCategory[]).map((category) => (
            <Button
              key={category}
              variant="ghost"
              className={`rounded-lg flex items-center justify-center gap-2 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-transparent text-purple-300 hover:bg-purple-800/50"
              }`}
              onClick={() => {
                setActiveCategory(category)
                setHoveredSkill(null)
              }}
            >
              {categoryIcons[category]}
              <span className="hidden sm:inline">{categoryNames[category]}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Skills Showcase */}
      <div className="relative" ref={containerRef}>
        {/* Navigation buttons */}
        {filteredSkills.length > visibleSkills && (
          <>
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-purple-800/70 border-purple-500/50 text-purple-200 hover:bg-purple-700 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-purple-800/70 border-purple-500/50 text-purple-200 hover:bg-purple-700 ${
                currentIndex + visibleSkills >= filteredSkills.length ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={currentIndex + visibleSkills >= filteredSkills.length}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Skills Hexagon Grid */}
        <div className="py-8 px-8 pb-30">
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-24 justify-items-center`}
          >
            {filteredSkills.slice(currentIndex, currentIndex + visibleSkills).map((skill) => (
              <div key={skill.name} className="relative">
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Hexágono SVG */}
                  <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id={`grad-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: `${skill.color}30` }} />
                        <stop offset="100%" style={{ stopColor: `${skill.color}10` }} />
                      </linearGradient>
                    </defs>
                    <motion.polygon
                      points={getHexagonPoints(50)}
                      fill={`url(#grad-${skill.name})`}
                      stroke={skill.color}
                      strokeWidth="2"
                      initial={{ opacity: 0.7 }}
                      animate={{
                        opacity: hoveredSkill?.name === skill.name ? 1 : 0.7,
                        strokeWidth: hoveredSkill?.name === skill.name ? 3 : 2,
                      }}
                      whileHover={{ opacity: 1 }}
                    />
                  </svg>

                  {/* Icono */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.i
                      className={`${skill.icon} text-3xl`}
                      style={{ color: skill.color }}
                      initial={{ scale: 1 }}
                      animate={{
                        scale: hoveredSkill?.name === skill.name ? 1.2 : 1,
                        rotate: hoveredSkill?.name === skill.name ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    ></motion.i>
                  </div>

                  {/* Skill name and level (siempre visible) */}
                  <div className="absolute top-full mt-5 left-1/2 transform -translate-x-1/2 bg-purple-900/90 px-3 py-2 rounded-lg text-center whitespace-nowrap z-10 border border-purple-500/50 shadow-lg w-max">
                    <div className="text-purple-100 font-medium">{skill.name}</div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-purple-500/30 my-8" />

      {/* Development Environment Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Code Editor Card */}
          <motion.div
            className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)" }}
          >
            <div className="bg-gradient-to-r from-purple-700/30 to-purple-600/30 p-4 border-b border-purple-500/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                <i className="devicon-vscode-plain text-2xl text-blue-400"></i>
              </div>
              <h4 className="font-bold text-purple-100">Code Editor</h4>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700/20 transition-colors">
                  <i className="devicon-vscode-plain text-xl text-blue-400"></i>
                  <span className="text-purple-100">VS Code</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700/20 transition-colors">
                  <i className="devicon-apache-plain text-xl text-red-500"></i>
                  <span className="text-purple-100">Apache NetBeans</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700/20 transition-colors">
                  <i className="devicon-devicon-plain text-xl text-orange-400"></i>
                  <span className="text-purple-100">Sublime Text</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Version Control Card */}
          <motion.div
            className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)" }}
          >
            <div className="bg-gradient-to-r from-purple-700/30 to-purple-600/30 p-4 border-b border-purple-500/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                <i className="devicon-git-plain text-2xl text-orange-500"></i>
              </div>
              <h4 className="font-bold text-purple-100"> Version Control</h4>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700/20 transition-colors">
                  <i className="devicon-git-plain text-xl text-orange-500"></i>
                  <span className="text-purple-100">Git</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700/20 transition-colors">
                  <i className="devicon-github-original text-xl text-gray-300"></i>
                  <span className="text-purple-100">GitHub</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Plataforma de desarrollo Card */}
          <motion.div
            className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.3)" }}
          >
            <div className="bg-gradient-to-r from-purple-700/30 to-purple-600/30 p-4 border-b border-purple-500/30 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
                <i className="devicon-googlecloud-plain text-2xl text-blue-400"></i>
              </div>
              <h4 className="font-bold text-purple-100">Plataforma de desarrollo</h4>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700/20 transition-colors">
                  <i className="devicon-googlecloud-plain text-xl text-blue-400"></i>
                  <span className="text-purple-100">Google Cloud Platform</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
