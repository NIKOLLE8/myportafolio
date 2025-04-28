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

  return <div className="h-full overflow-hidden">{renderContent()}</div>
}
