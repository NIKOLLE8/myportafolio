import { Code, GraduationCap, Briefcase, Check, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

export default function EnhancedSoftwareContent() {
  const [activeTab, setActiveTab] = useState("experience")

  const education = [
    {
      level: "Universidad",
      institution: "Universidad Nacional de Ingeniería",
      degree: "Ingeniería de Sistemas",
      period: "2016 - 2021",
      description: "Formación en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      level: "Secundaria",
      institution: "Colegio Santa María",
      degree: "Educación Secundaria",
      period: "2011 - 2015",
      description: "Formación académica con énfasis en ciencias y matemáticas, participación en clubes de tecnología.",
      icon: <Code className="h-5 w-5" />
    }
  ]

  const experience = [
    {
      position: "Desarrolladora Frontend Senior",
      company: "TechSolutions Inc.",
      period: "2022 - Presente",
      responsibilities: [
        "Desarrollo de interfaces de usuario con React y Next.js",
        "Implementación de diseños responsivos con TailwindCSS",
        "Optimización de rendimiento en aplicaciones web",
      ]
    },
    {
      position: "Diseñadora UX/UI",
      company: "CreativeStudio",
      period: "2020 - 2022",
      responsibilities: [
        "Creación de prototipos y wireframes para aplicaciones web y móviles",
        "Investigación de usuarios y pruebas de usabilidad",
        "Colaboración con equipos de desarrollo para implementar diseños",
      ]
    },
    {
      position: "Desarrolladora Web",
      company: "WebTech Agency",
      period: "2018 - 2020",
      responsibilities: [
        "Desarrollo de sitios web con HTML, CSS y JavaScript",
        "Creación de componentes reutilizables con React",
        "Integración con APIs y servicios externos",
      ]
    }
  ]

  return (
    <div className="p-4 md:p-6 h-full overflow-auto">
      {/* Tabs más compactos */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-800/50 p-1 rounded-lg border border-purple-900/30">
          <button 
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
              activeTab === "experience" 
                ? "bg-purple-900/30 text-purple-300" 
                : "text-gray-300 hover:text-purple-300"
            }`}
          >
            <Briefcase className="h-4 w-4" />
            Experiencia
          </button>
          <button 
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm ${
              activeTab === "education" 
                ? "bg-purple-900/30 text-purple-300" 
                : "text-gray-300 hover:text-purple-300"
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            Educación
          </button>
        </div>
      </div>

      {/* Contenido ajustado */}
      <div className="mx-auto">
        {activeTab === "experience" && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5 text-purple-400" />
              <h2 className="text-lg font-bold text-purple-400">Experiencia Laboral</h2>
            </div>

            <div className="space-y-4">
              {experience.map((job, index) => (
                <div key={index} className="mb-4">
                  <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-400 before:to-purple-700/30">
                    <div className="absolute left-0 top-1 w-1.5 h-1.5 rounded-full bg-purple-400 -translate-x-0.5"></div>
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-900/30 hover:border-purple-500/30">
                      <div className="flex flex-col justify-between mb-3">
                        <div>
                          <h3 className="text-base font-semibold text-white">{job.position}</h3>
                          <p className="text-purple-300 text-sm flex items-center gap-1 mt-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.company}
                          </p>
                        </div>
                        <span className="text-xs text-gray-400 mt-2 bg-purple-900/20 px-2 py-1 rounded-md">
                          <Calendar className="h-3.5 w-3.5 inline mr-1" />
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Check className="h-3.5 w-3.5 mt-0.5 text-purple-400" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-purple-400" />
              <h2 className="text-lg font-bold text-purple-400">Educación</h2>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 rounded-lg p-4 border border-purple-900/30 hover:border-purple-500/30 flex flex-col gap-4"
                >
                  <div>
                    <div className="bg-purple-900/20 inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-sm mb-2">
                      {item.icon}
                      {item.level}
                    </div>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{item.institution}</h3>
                    <p className="text-purple-300 text-sm mb-2">{item.degree}</p>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}