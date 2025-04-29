"use client"

import { useState} from "react";
import Nav from "@/components/nav";
import ContentContainer from "@/components/content-container";

export default function Home() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-4 md:p-8 pb-20 font-[family-name:var(--font-geist-sans)] text-green-500">
      <main className="flex flex-col md:flex-row w-full row-start-2 h-full items-stretch gap-4">
        {/* En móviles: Nav arriba, cuadrado abajo */}
        {/* En desktop: Nav a la izquierda, cuadrado a la derecha overflow-hidden h-[600px] md:h-[700px*/}
        <div className="w-full md:w-auto">
          <Nav activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="flex-1 bg-gray-800 rounded-4xl border border-purple-900/50 mt-4 md:mt-0 md:ml-[50px] overflow-hidden flex h-[calc(100dvh-90px)] max-h-[calc(100dvh-90px)]">

          <ContentContainer activeItem={activeItem} />
        </div>
      </main>
    </div>
  )
}
