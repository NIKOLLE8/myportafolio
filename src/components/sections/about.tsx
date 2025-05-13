"use client";

import {
  Film,
  Headphones,
  BoomBox,
  Book,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-center md:mx-4">
        <div className="items-center flex flex-col justify-center text-center">
          <div className="w-32 h-32 md:w-55 md:h-55 rounded-lg overflow-hidden border-4 border-purple-400 flex-shrink-0">
            <img
              src="/img/NIKOLLE-ACUÑA.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <Button
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            onClick={() => window.open("/CV-NikolleAcuña.pdf", "_blank")}
          >
            <Download className="w-4 h-4" /> Download CV
          </Button>
        </div>

        <div className="px-8">
          <h2 className="text-2xl text-center md:text-4xl font-bold text-purple-200 mb-4">
            Nikolle Yamelí Acuña Javier
          </h2>
          <p className="text-purple-100 mb-4 text-justify">
          Soy estudiante de Ingeniería de Software, apasionada por el desarrollo web, el back-end y el cloud computing. Mi enfoque se centra en ayudar a crear soluciones tecnológicas, adaptándome rápidamente a nuevos desafíos y trabajando de manera colaborativa para alcanzar objetivos comunes.
          </p>
          <p className="text-purple-100 mb-4 text-justify">
       Me interesa explorar nuevos lugares y conocer diversas culturas para ampliar mi perspectiva global y enriquecer mi capacidad de adaptación y resolución de problemas en entornos diversos.
          </p>
          <div className="flex flex-wrap gap-2 ">
            <Badge
              variant="outline"
              className="bg-purple-700/50 text-purple-200 border-purple-500"
            >
              ✨ 21 años
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-700/50 text-purple-200 border-purple-500"
            >
              📍 Rímac
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-700/50 text-purple-200 border-purple-500"
            >
              💻 Desarrollo web
            </Badge>
            <Badge
              variant="outline"
              className="bg-purple-700/50 text-purple-200 border-purple-500"
            >
              💜 방탄소년단
            </Badge>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-purple-700/30 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-700/40 transition-all hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-purple-600/40 flex items-center justify-center mb-3 group-hover:bg-purple-600/60 transition-all">
                <Film className="w-7 h-7 text-purple-200" />
              </div>
              <h4 className="font-medium text-purple-200 mb-1">Mirar</h4>
              <p className="text-purple-300/80 text-sm">
                Distopias, Thillers, Crimenes y Animes
              </p>
            </div>
          </div>

          <div className="bg-purple-700/30 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-700/40 transition-all hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-purple-600/40 flex items-center justify-center mb-3 group-hover:bg-purple-600/60 transition-all">
                <Headphones className="w-7 h-7 text-purple-200" />
              </div>
              <h4 className="font-medium text-purple-200 mb-1">Música</h4>
              <p className="text-purple-300/80 text-sm">
                Mi gran playlist de Youtube Music
              </p>
            </div>
          </div>

          <div className="bg-purple-700/30 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-700/40 transition-all hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-purple-600/40 flex items-center justify-center mb-3 group-hover:bg-purple-600/60 transition-all">
                <Book className="w-7 h-7 text-purple-200" />
              </div>
              <h4 className="font-medium text-purple-200 mb-1">Leer</h4>
              <p className="text-purple-300/80 text-sm">
                Romance, Novelas Ligeras y Manwhas 
              </p>
            </div>
          </div>

          <div className="bg-purple-700/30 border border-purple-500/30 rounded-lg p-4 hover:bg-purple-700/40 transition-all hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] group">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-purple-600/40 flex items-center justify-center mb-3 group-hover:bg-purple-600/60 transition-all">
                <BoomBox className="w-7 h-7 text-purple-200" />
              </div>
              <h4 className="font-medium text-purple-200 mb-1">Bailar</h4>
              <p className="text-purple-300/80 text-sm">
                Explorando las coreos de K-pop 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
