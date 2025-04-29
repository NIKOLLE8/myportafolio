"use client"

import { useState} from "react";
import Nav from "@/components/nav";
import ContentContainer from "@/components/content-container";

export default function Home() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen p-4 md:p-8 pb-20 font-[family-name:var(--font-geist-sans)] text-green-500">
      <main className="flex flex-col md:flex-row w-full row-start-2 h-full gap-4">
        <div className="md:min-w-[200px]">
          <Nav activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
        <div className="flex-1 bg-gray-800 rounded-4xl border border-purple-900/50 overflow-hidden flex flex-col md:ml-[50px] h-[70vh] md:h-[75vh]">
          <ContentContainer activeItem={activeItem} />
        </div>
      </main>
    </div>
  )
}
