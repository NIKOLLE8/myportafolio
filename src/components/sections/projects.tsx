"use client"

import { useState, useRef, useEffect } from "react"
import { Code, ExternalLink, Github, ChevronRight, ChevronLeft, Briefcase, FolderGit2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
}

export default function ProjectsSection() {
  // Sample projects data
  const projects: Project[] = [
    {
      title: "FamilyVets",
      description:
        "FamilyVets es una plataforma web que permite a los usuarios gestionar sus citas veterinarias, hacer reclamos y explorar servicios. Los administradores pueden clasificar citas, contactar a usuarios por WhatsApp y gestionar consultas.",
      image: "/img/Projects/FamilyVets.PNG",
      tags: ["HTML", "JavaScript", "CSS", "PHP"],
      demoUrl: "https://family-vets.netlify.app/",
      repoUrl: "https://github.com/Gufi2205/FamilyVets",
    },
    {
      title: "Inka Chess",
      description: "Inka Chess es un juego de ajedrez temático inspirado en el Imperio Inca, con un tablero 4x4 y piezas personalizadas. Los jugadores controlan las piezas mediante comandos de voz, guiados por un sistema de indicaciones por speaker.",
      image: "/img/Projects/InkaChess.PNG",
      tags: ["Html", "CSS", "javaScript"],
      demoUrl: "https://inkachess.netlify.app/",
      repoUrl: "https://github.com/NIKOLLE8/INKA_CHESS",
    },
    {
      title: "De la selva su encanto",
      description: "Un juego de 3 niveles donde el objetivo es derrotar enemigos y esquivar sus ataques. Con cada nivel, los enemigos se vuelven más rápidos y sus ataques más poderosos, poniendo a prueba tus reflejos y habilidades.",
      image: "/img/Projects/selva.jpeg",
      tags: ["Godot"],
      demoUrl: "",
      repoUrl: "",
    },
    {
      title: "Whale Studio",
      description: "Es una plataforma web que optimiza la gestión de reservas para salas de espejo, mostrando disponibilidad en tiempo real y permitiendo reservas personalizadas. Incluye un dashboard para administradores y soporte multilingüe mediante i18n.",
      image: "/img/Projects/WhaleStudio.PNG",
      tags: ["Java", "Html", "CSS", "Javascript", "MySQL", "Java Servlet", "GlassFish"],
      demoUrl: "",
      repoUrl: "https://github.com/NIKOLLE8/Whale_Studio",
    },
    {
      title: "MythoLabs",
      description: "Es una plataforma de cursos en línea con suscripciones mensuales y anuales, los usuarios pueden acceder a una variedad de contenidos educativos, gestionar su perfil y personalizar su experiencia de aprendizaje.",
      image: "/img/Projects/MythoLabs.PNG",
      tags: ["Html", "CSS", "MySQL", "PHP", "JavaScript"],
      demoUrl: "#",
      repoUrl: "#",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Personal Projects Section */}
      <div className="">
        <div className="flex items-center">
        </div>

        <ResponsiveProjectCarousel projects={projects} />
      </div>
    </div>
  )
}

interface ResponsiveProjectCarouselProps {
  projects: Project[]
}

function ResponsiveProjectCarousel({ projects }: ResponsiveProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [maxIndex, setMaxIndex] = useState(0)

  // Update slides per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        // Small mobile
        setSlidesPerView(1)
      } else if (width < 1024) {
        // Tablet
        setSlidesPerView(2)
      } else {
        // Desktop
        setSlidesPerView(3)
      }
    }

    // Initial call
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update max index when slidesPerView changes
  useEffect(() => {
    setMaxIndex(Math.max(0, projects.length - slidesPerView))
  }, [projects.length, slidesPerView])

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // Calculate the percentage width for each slide
  const slideWidth = 100 / slidesPerView

  return (
    <div className="relative">

      {/* Previous Button */}
      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"   
          className={`rounded-full bg-purple-800/70 border-purple-500/50 text-purple-200 hover:bg-purple-700 hover:text-white ${
            currentIndex === 0? "opacity-50 cursor-not-allowed" : ""
          } `}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" /> 
        </Button>
      </div>

      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-purple-800/70 border-purple-500/50 text-purple-200 hover:bg-purple-700 hover:text-white ${
            currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="overflow-hidden px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="px-3" style={{ width: `${slideWidth}%`, flexShrink: 0 }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index ? "bg-purple-500 w-5" : "bg-purple-700/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden group hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Header */}
      <div className="bg-purple-700/30 p-4 flex justify-between items-center border-b border-purple-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-600/50 flex items-center justify-center">
            <Code className="w-6 h-6 text-purple-200" />
          </div>
          <div>
            <h4 className="font-bold text-purple-100">{project.title}</h4>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4 flex-grow">
          <p className="text-purple-100 text-justify px-2">{project.description}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-purple-300 mb-2 flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-purple-400" /> Tecnologias
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-purple-700/20 text-purple-200 border-purple-500/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-3 border-t border-purple-500/20">
            <Button
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
              asChild
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" /> Demo
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-black text-white border-black hover: border-gray-900 hover:bg-gray-900 hover:text-white flex items-center justify-center gap-2"
              asChild
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 text-white" /> Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
