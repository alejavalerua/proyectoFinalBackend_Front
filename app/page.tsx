import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Modules } from "@/components/modules"
import { Footer } from "@/components/footer"

/**
 * PÁGINA PRINCIPAL DE CODECAMPUS
 *
 * Este es el punto de entrada principal para la página de inicio de CodeCampus.
 * Compone todas las secciones principales de la página en orden:
 *
 * 1. Hero - Encabezado principal y llamado a la acción
 * 2. Features - Capacidades clave de la plataforma
 * 3. Modules - Desglose detallado de los 9 módulos del sistema
 * 4. Footer - Créditos de desarrolladores y enlaces adicionales
 */
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Sección Hero - Primera impresión con propuesta de valor principal */}
      <Hero />

      {/* Sección Features - Destacar capacidades clave */}
      <Features />

      {/* Sección Modules - Arquitectura detallada del sistema */}
      <Modules />

      {/* Sección Footer - Créditos e información adicional */}
      <Footer />
    </main>
  )
}
