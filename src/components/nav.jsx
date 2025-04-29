"use client";
import React from "react";
import { Code, FolderKanban, Cpu, Wrench, Sparkle } from "lucide-react";

export default function Botoncito({ activeItem, setActiveItem }) {
  const navItems = [
    {
      name: "Nikolle Acuña",
      imgSrc: "https://i.pinimg.com/736x/c1/f4/5f/c1f45f1978fc7ad515497a5c64605d7f.jpg",
      isImage: true,
    },
    {
      name: "Estudios",
      icon: <Code className="h-7 w-7 md:h-9 md:w-9 text-purple-600" />,
    },
    {
      name: "Proyectos",
      icon: <FolderKanban className="h-7 w-7 md:h-9 md:w-9 text-purple-600" />,
    },
    {
      name: "Tecnología",
      icon: <Cpu className="h-7 w-7 md:h-9 md:w-9 text-purple-600" />,
    },
    {
      name: "Contacto",
      icon: <Wrench className="h-7 w-7 md:h-9 md:w-9 text-purple-600" />,
    },
  ]

  return (
    <nav className="flex flex-row md:flex-col bg-gray-800 border border-purple-900/50 shadow-lg rounded-[30px] backdrop-blur-lg w-full md:w-auto h-auto md:h-full p-2 md:p-4">
      <div className="flex flex-row md:flex-col w-full justify-between md:justify-between items-center h-full">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <a
              href="#"
              className={`flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl p-2 md:p-3 transition-all duration-300 ease-in-out ${
                activeItem === index ? "scale-100 bg-purple-500/10" : "group-hover:scale-100 md:group-hover:scale-110"
              }`}
              onClick={() => setActiveItem(index)}
            >
              <span
                className={`transition-all duration-300 ${
                  activeItem === index
                    ? "scale-110 md:scale-120"
                    : "scale-100 group-hover:scale-130 md:group-hover:scale-125"
                }`}
              >
                {item.isImage ? (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg shadow-purple-500/50">
                    <img
                      src={item.imgSrc || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  item.icon
                )}
              </span>

              {/* Efecto de brillos cuando está activo o en hover */}
              <div
                className={`absolute inset-0 rounded-xl ${
                  activeItem === index ? "bg-purple-500/10" : "group-hover:bg-purple-500/10"
                } transition-all duration-500`}
              ></div>

              {/* Estrellitas cuando está activo */}
              {activeItem === index && (
                <>
                  <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 opacity-100 transition-all duration-500 delay-100">
                    <Sparkle className="h-2 w-2 md:h-3 md:w-3 text-purple-300" />
                  </span>
                  <span className="absolute -top-1 left-0 opacity-100 transition-all duration-500 delay-150">
                    <Sparkle className="h-1 w-1 md:h-2 md:w-2 text-blue-300" />
                  </span>
                  <span className="absolute top-1/4 -right-2 md:-right-3 opacity-100 transition-all duration-500 delay-200">
                    <Sparkle className="h-1 w-1 md:h-2 md:w-2 text-cyan-300" />
                  </span>
                  <span className="absolute bottom-1/3 -left-2 md:-left-3 opacity-100 transition-all duration-500 delay-300">
                    <Sparkle className="h-1 w-1 md:h-2 md:w-2 text-purple-300" />
                  </span>
                  <span className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-1 opacity-100 transition-all duration-500 delay-200">
                    <Sparkle className="h-2 w-2 md:h-3 md:w-3 text-blue-300" />
                  </span>
                </>
              )}

              {/* Nombre del elemento en desktop - solo visible en hover */}
              <span className="hidden md:block absolute left-16 whitespace-nowrap bg-gray-900 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm shadow-lg">
                {item.name}
              </span>

              {/* Nombre del elemento en móviles - solo visible en hover */}
              <span className="md:hidden absolute -bottom-6 text-center w-full whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs shadow-lg">
                {item.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  )
}
