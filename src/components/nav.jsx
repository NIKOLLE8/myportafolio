"use client";
import React from "react";
import { useState } from "react";
import { Code, FolderKanban, Cpu, Wrench, Sparkle } from "lucide-react";

export default function Botoncito() {
  const [activeItem, setActiveItem] = useState(0);

  const navItems = [
    {
      name: "Nikolle Acuña",
      imgSrc:
        "https://i.pinimg.com/736x/c1/f4/5f/c1f45f1978fc7ad515497a5c64605d7f.jpg",
      isImage: true,
    },
    {
      name: "Software",
      icon: <Code className="h-9 w-9 text-purple-600" />,
    },
    {
      name: "Proyectos",
      icon: <FolderKanban className="h-9 w-9 text-purple-600" />,
    },
    {
      name: "Tecnología",
      icon: <Cpu className="h-9 w-9 text-purple-600" />,
    },
    {
      name: "Habilidades",
      icon: <Wrench className="h-9 w-9 text-purple-600" />,
    },
  ];

  return (
    <nav className="flex flex-row md:flex-col bg-gray-800 border border-purple-900/50 shadow-lg rounded-[30px] backdrop-blur-lg w-full md:h-full p-4 md:p-6">
      <div className="flex flex-row md:flex-col w-full justify-between md:justify-center items-center md:space-y-20">
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <a
              href="#"
              className={`flex items-center justify-center w-20 h-20 rounded-xl p-3 transition-all duration-300 ease-in-out ${
                activeItem === index
                  ? "scale-110 bg-purple-500/10"
                  : "group-hover:scale-125"
              }`}
              onClick={() => setActiveItem(index)}
            >
              <span
                className={`transition-all duration-300 ${
                  activeItem === index
                    ? "scale-170"
                    : "scale-110 group-hover:scale-125"
                }`}
              >
                {item.isImage ? (
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden shadow-lg shadow-purple-500/50">
                    <img src={item.imgSrc} alt={item.name} />
                  </div>
                ) : (
                  item.icon
                )}
              </span>

              {/* Efecto de brillos cuando está activo o en hover */}
              <div
                className={`absolute inset-0 rounded-xl ${
                  activeItem === index
                    ? "bg-purple-500/10"
                    : "group-hover:bg-purple-500/10"
                } transition-all duration-500`}
              ></div>

              {/* Estrellitas cuando está activo */}
              {activeItem === index && (
                <>
                  <span className="absolute -top-2 -right-2 opacity-100 transition-all duration-500 delay-100">
                    <Sparkle className="h-3 w-3 text-purple-300" />
                  </span>
                  <span className="absolute -top-1 left-0 opacity-100 transition-all duration-500 delay-150">
                    <Sparkle className="h-2 w-2 text-blue-300" />
                  </span>
                  <span className="absolute top-1/4 -right-3 opacity-100 transition-all duration-500 delay-200">
                    <Sparkle className="h-2 w-2 text-cyan-300" />
                  </span>
                  <span className="absolute bottom-1/3 -left-3 opacity-100 transition-all duration-500 delay-300">
                    <Sparkle className="h-2 w-2 text-purple-300" />
                  </span>
                  <span className="absolute -bottom-2 -right-1 opacity-100 transition-all duration-500 delay-200">
                    <Sparkle className="h-3 w-3 text-blue-300" />
                  </span>
                </>
              )}

              {/* Nombre del elemento al hacer hover */}
              <span className="absolute left-16 whitespace-nowrap bg-gray-900 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm shadow-lg">
                {item.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
