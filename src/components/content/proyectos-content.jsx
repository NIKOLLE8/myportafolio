import { ExternalLink, Github } from "lucide-react"

export default function ProyectosContent() {
  const proyectos = [
    {
      title: "Portfolio Personal",
      description: "Diseño y desarrollo de mi sitio web personal con Next.js y TailwindCSS.",
      technologies: ["Next.js", "TailwindCSS", "React"],
      year: "2023",
    },
    {
      title: "E-commerce Dashboard",
      description: "Panel de administración para tienda online con análisis de datos y gestión de inventario.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      year: "2022",
    },
    {
      title: "App de Gestión de Tareas",
      description: "Aplicación para gestionar tareas y proyectos con funcionalidades colaborativas.",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      year: "2022",
    },
    {
      title: "Blog Tecnológico",
      description: "Plataforma de blog con sistema de gestión de contenidos personalizado.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      year: "2021",
    },
    {
      title: "Aplicación de Finanzas Personales",
      description: "Herramienta para seguimiento y análisis de gastos e ingresos personales.",
      technologies: ["React Native", "Redux", "Firebase"],
      year: "2021",
    },
  ]

  return (
    <div className="p-6 md:p-8 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Proyectos</h1>

      <div className="space-y-6">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-gray-700/40 rounded-xl p-5 border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-white">{proyecto.title}</h2>
              <span className="text-purple-300 text-sm">{proyecto.year}</span>
            </div>

            <p className="text-gray-300 my-3">{proyecto.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proyecto.technologies.map((tech, i) => (
                <span key={i} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <button className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                <Github className="h-4 w-4" /> Ver código
              </button>
              <button className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                <ExternalLink className="h-4 w-4" /> Ver demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
