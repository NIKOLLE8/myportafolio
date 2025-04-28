export default function NikolleContent() {
    return (
      <div className="p-6 md:p-8 h-full overflow-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/3">
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-purple-500/30">
              <img
                src="https://i.pinimg.com/736x/c1/f4/5f/c1f45f1978fc7ad515497a5c64605d7f.jpg"
                alt="Nikolle Acuña"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-400">Nikolle Acuña</h1>
            <p className="text-lg mb-4">
              Desarrolladora web y diseñadora creativa con pasión por crear experiencias digitales únicas.
            </p>
            <p className="mb-4">
              Con experiencia en desarrollo frontend y diseño UX/UI, me especializo en crear interfaces atractivas y
              funcionales que combinan estética y usabilidad.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-700/50 p-4 rounded-xl">
                <h3 className="text-purple-300 font-semibold mb-2">Experiencia</h3>
                <p>+5 años en desarrollo web</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-xl">
                <h3 className="text-purple-300 font-semibold mb-2">Educación</h3>
                <p>Ingeniería en Informática</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  