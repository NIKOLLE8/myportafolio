export default function TecnologiaContent() {
    const frontendTechs = [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
    ]
  
    const backendTechs = [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 80 },
      { name: "SQL", level: 60 },
    ]
  
    const designTechs = [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 75 },
      { name: "Photoshop", level: 70 },
      { name: "Illustrator", level: 65 },
    ]
  
    const SkillBar = ({ name, level }) => (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-white">{name}</span>
          <span className="text-purple-300">{level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-purple-600 to-purple-400 h-2.5 rounded-full"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    )
  
    return (
      <div className="p-6 md:p-8 h-full overflow-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Tecnologías</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/80 rounded-xl p-5 border border-purple-900/30">
            <h2 className="text-xl font-semibold text-white mb-4">Frontend</h2>
            {frontendTechs.map((tech, index) => (
              <SkillBar key={index} name={tech.name} level={tech.level} />
            ))}
          </div>
  
          <div className="bg-gray-800/80 rounded-xl p-5 border border-purple-900/30">
            <h2 className="text-xl font-semibold text-white mb-4">Backend</h2>
            {backendTechs.map((tech, index) => (
              <SkillBar key={index} name={tech.name} level={tech.level} />
            ))}
          </div>
  
          <div className="bg-gray-800/80 rounded-xl p-5 border border-purple-900/30">
            <h2 className="text-xl font-semibold text-white mb-4">Diseño</h2>
            {designTechs.map((tech, index) => (
              <SkillBar key={index} name={tech.name} level={tech.level} />
            ))}
          </div>
        </div>
  
        <div className="mt-8 bg-gray-800/80 rounded-xl p-5 border border-purple-900/30">
          <h2 className="text-xl font-semibold text-white mb-4">Certificaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((cert, index) => (
              <div key={index} className="bg-gray-700/50 p-4 rounded-lg border border-purple-900/20">
                <h3 className="text-purple-300 font-medium mb-2">Certificación {index + 1}</h3>
                <p className="text-gray-300 text-sm">Descripción de la certificación y detalles adicionales.</p>
                <p className="text-purple-400 text-xs mt-2">Expedido: 2023</p>
                <p className="text-gray-300 text-sm">Descripción de la certificación y detalles adicionales.</p>
                <p className="text-purple-400 text-xs mt-2">Expedido: 2023</p>
                <p className="text-gray-300 text-sm">Descripción de la certificación y detalles adicionales.</p>
                <p className="text-purple-400 text-xs mt-2">Expedido: 2023</p>                <p className="text-gray-300 text-sm">Descripción de la certificación y detalles adicionales.</p>
                <p className="text-purple-400 text-xs mt-2">Expedido: 2023</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  