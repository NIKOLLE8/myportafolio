import { Code, Zap, Palette } from "lucide-react"

export default function SoftwareContent() {
  const software = [
    {
      title: "Desarrollo Web",
      icon: <Code className="h-8 w-8 text-purple-400" />,
      description: "Creación de sitios web y aplicaciones web modernas con las últimas tecnologías.",
      technologies: ["React", "Next.js", "TailwindCSS", "Node.js"],
      image: "https://placeholder.svg?height=150&width=300",
    },
    {
      title: "Optimización de Rendimiento",
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      description: "Mejora del rendimiento y velocidad de carga de aplicaciones web existentes.",
      technologies: ["Webpack", "Lighthouse", "Core Web Vitals", "CDN"],
      image: "https://placeholder.svg?height=150&width=300",
    },
    {
      title: "Diseño UI/UX",
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      description: "Diseño de interfaces de usuario atractivas y experiencias de usuario intuitivas.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      image: "https://placeholder.svg?height=150&width=300",
    },
  ]

  return (
    <div className="p-6 md:p-8 h-full overflow-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Software</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {software.map((item, index) => (
          <div
            key={index}
            className="bg-gray-700/40 rounded-xl p-5 border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              {item.icon}
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            </div>

            <div className="mb-4 rounded-lg overflow-hidden">
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-auto" />
            </div>

            <p className="text-gray-300 mb-4">{item.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.technologies.map((tech, i) => (
                <span key={i} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
