import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20   font-[family-name:var(--font-geist-sans)] text-green-500">
      
    <main className="flex flex-row w-full row-start-2 h-full items-stretch">
      <Nav />

      <div className="flex-1 bg-gray-800 rounded-4xl ml-[50px]" />

    </main>

  </div>
  
  );
}
