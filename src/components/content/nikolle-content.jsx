export default function NikolleContent() {
  return (
    <div className="p-6 md:p-8 h-full overflow-auto">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Lado izquierdo */}
        <div className="w-full md:w-1/2 order-1 text-white flex flex-col items-center">
          {/* Imagen */}
          <div className="w-[calc(100%/3.2)] mb-6">
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-purple-500/50 hover:shadow-purple-400/80 transition-all duration-300 border-4 border-purple-400/30">
              <img
                src="https://i.pinimg.com/736x/c1/f4/5f/c1f45f1978fc7ad515497a5c64605d7f.jpg"
                alt="Nikolle Acuña"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Nombre */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-300 bg-gradient-to-r from-purple-500 to-purple-100 bg-clip-text text-transparent text-center break-words">
            Nikolle Acuña Javier
          </h1>

          {/* Perfil profesional */}
          <div className="bg-gray-800/40 p-5 rounded-xl backdrop-blur-sm border border-purple-500/20 mb-6 w-full">
            <h2 className="text-xl font-medium mb-2 text-purple-200 text-justify">
              Soy estudiante de Ingeniería de Software apasionada por el desarrollo web, Front-end, y Cloud Computing. Mi enfoque está en crear soluciones tecnológicas innovadoras, adaptándome rápidamente a nuevos desafíos y trabajando colaborativamente para alcanzar objetivos compartidos.
            </h2>
            <h2 className="text-xl font-medium mb-2 text-purple-200 text-justify">
              Soy una persona que ama a los animales, especialmente a los gatos y perros, y uno de mis sueños es poder adoptar uno en el futuro. También tengo muchas ganas de viajar y explorar nuevos lugares, para conocer diferentes culturas y enriquecerme con nuevas experiencias.
            </h2>
          </div>

          {/* Edad y distrito */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <div className="bg-purple-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-400/30">
              <span className="text-purple-200 font-medium">✨ 21 años</span>
            </div>
            <div className="bg-purple-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-400/30">
              <span className="text-purple-200 font-medium">📍 Rímac</span>
            </div>
            <div className="bg-purple-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-400/30">
              <span className="text-purple-200 font-medium break-words">🐈 Gatolover</span>
            </div>
            <div className="bg-purple-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-purple-400/30">
              <span className="text-purple-200 font-medium break-words">💜 방탄소년단</span>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="w-full md:w-1/2 order-2">
          {/* Hobbies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">Mis Hobbies</h2>
            <div className="bg-gray-800/30 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="hobby-card bg-gradient-to-br from-purple-800/40 to-purple-600/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-purple-500/20">
                  <div className="text-4xl mb-2">📺</div>
                  <div className="text-lg font-medium text-purple-200 break-words">Ver anime</div>
                </div>
                <div className="hobby-card bg-gradient-to-br from-purple-800/40 to-purple-600/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-purple-500/20">
                  <div className="text-4xl mb-2">🎧</div>
                  <div className="text-lg font-medium text-purple-200 break-words">Escuchar música</div>
                </div>
                <div className="hobby-card bg-gradient-to-br from-purple-800/40 to-purple-600/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-purple-500/20">
                  <div className="text-4xl mb-2">🛠</div>
                  <div className="text-lg font-medium text-purple-200 break-words">Proyectos</div>
                </div>
                <div className="hobby-card bg-gradient-to-br from-purple-800/40 to-purple-600/20 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-purple-500/20">
                  <div className="text-4xl mb-2">💃</div>
                  <div className="text-lg font-medium text-purple-200 break-words">Bailar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Gustos */}
<div>
  <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">Mis Gustos</h2>
  <div className="bg-gray-800/30 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/30">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        ['💜', 'BTS'],
        ['🎤', 'Kpop'],
        ['🍥', 'Anime'],
        ['📖', 'Manhwas'],
        ['🎬', 'Cine '],
        ['✈️', 'Viajar'],
      ].map(([emoji, text], idx) => (
        <div
          key={idx}
          className="taste-pill bg-purple-700/30 px-4 py-3 rounded-xl flex flex-wrap items-center gap-3 hover:bg-purple-600/40 transition-colors duration-300 border border-purple-500/20 min-w-0"
        >
          <span className="text-2xl">{emoji}</span>
          <span className="text-purple-100 font-medium break-words">{text}</span>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}