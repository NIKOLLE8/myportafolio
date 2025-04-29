"use client"
import NikolleContent from "./content/nikolle-content"
import SoftwareContent from "./content/estudios-content"
import ProyectosContent from "./content/proyectos-content"
import TecnologiaContent from "./content/tecnologia-content"
import ContactoContent from "./content/contacto-content"

export default function ContentContainer({ activeItem }) {
// Renderizar el contenido según el ítem activo
const renderContent = () => {
  switch (activeItem) {
    case 0:
      return <NikolleContent />
    case 1:
      return <SoftwareContent />
    case 2:
      return <ProyectosContent />
    case 3:
      return <TecnologiaContent />
    case 4:
      return <ContactoContent />
    default:
      return <NikolleContent />
  }
}

return (
  <>
    <style jsx global>{`
      /* Estilo para el scrollbar */
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(128, 90, 213, 0.1);
        border-radius: 10px;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(168, 85, 247, 0.6);
        border-radius: 10px;
        transition: all 0.3s ease;
      }
      
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(168, 85, 247, 0.8);
      }
      
      /* Firefox */
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: rgba(168, 85, 247, 0.6) rgba(128, 90, 213, 0.1);
      }
    `}</style>
    <div className="h-full w-full overflow-y-auto flex-1 custom-scrollbar p-4">
        {renderContent()}
      </div>
  </>
)
}
