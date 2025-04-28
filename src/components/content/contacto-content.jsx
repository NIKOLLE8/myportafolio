import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactoContent() {
  return (
    <div className="p-6 md:p-8 h-full overflow-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">Contacto</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/80 rounded-xl p-6 border border-purple-900/30">
          <h2 className="text-xl font-semibold text-white mb-4">Información de Contacto</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-white">nikolle.acuna@ejemplo.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <span className="text-white">+56 9 1234 5678</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span className="text-white">Santiago, Chile</span>
            </div>
          </div>

          <h3 className="text-lg font-medium text-white mt-6 mb-3">Redes Sociales</h3>

          <div className="flex gap-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-purple-900/50 transition-colors">
              <Linkedin className="h-5 w-5 text-purple-400" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-purple-900/50 transition-colors">
              <Github className="h-5 w-5 text-purple-400" />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-purple-900/50 transition-colors">
              <Twitter className="h-5 w-5 text-purple-400" />
            </a>
          </div>
        </div>

        <div className="bg-gray-800/80 rounded-xl p-6 border border-purple-900/30">
          <h2 className="text-xl font-semibold text-white mb-4">Envíame un Mensaje</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2.5 text-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2.5 text-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2.5 text-white focus:ring-purple-500 focus:border-purple-500"
                placeholder="Tu mensaje..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg py-2.5 px-5 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
