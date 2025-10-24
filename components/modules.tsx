import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/**
 * SECCIÓN DE MÓDULOS
 *
 * Muestra los 9 módulos principales de la plataforma CodeCampus.
 * Cada tarjeta de módulo muestra:
 * - Insignia con número de módulo
 * - Título del módulo
 * - Descripción detallada de la funcionalidad
 *
 * Esta sección ayuda a los usuarios a entender la arquitectura completa del sistema.
 */
export function Modules() {
  const modules = [
    {
      number: "01",
      title: "Autenticación y Autorización",
      description:
        "Autenticación basada en JWT con control de acceso basado en roles. Soporta roles ESTUDIANTE y ADMIN con permisos granulares.",
    },
    {
      number: "02",
      title: "Gestión de Retos",
      description:
        "Operaciones CRUD completas para retos algorítmicos. Carga casos de prueba, establece límites de tiempo/memoria y gestiona niveles de dificultad.",
    },
    {
      number: "03",
      title: "Sistema de Envíos",
      description:
        "Maneja envíos de código con procesamiento asíncrono. Rastrea estados de ejecución desde EN COLA hasta ACEPTADO con retroalimentación detallada.",
    },
    {
      number: "04",
      title: "Ejecutores Multi-Lenguaje",
      description:
        "Entornos de ejecución aislados para Python, Node.js, C++ y Java. Cada ejecutor opera en un contenedor Docker seguro.",
    },
    {
      number: "05",
      title: "Organización de Cursos",
      description:
        "Crea y gestiona cursos académicos con estudiantes inscritos. Asigna retos y rastrea el progreso por grupo de curso.",
    },
    {
      number: "06",
      title: "Evaluaciones Automatizadas",
      description:
        "Diseña exámenes cronometrados con calificación automática. Establece límites de duración y genera informes completos de rendimiento.",
    },
    {
      number: "07",
      title: "Clasificaciones Dinámicas",
      description:
        "Rankings en tiempo real por reto, curso o evaluación. Ordena por puntuación, tiempo de ejecución y fecha de envío.",
    },
    {
      number: "08",
      title: "Observabilidad y Métricas",
      description:
        "Registro estructurado con rastreo de solicitudes. Monitorea métricas de envíos, tiempos de ejecución y salud del sistema.",
    },
    {
      number: "09",
      title: "Asistente de IA",
      description:
        "Asistente inteligente para creación de retos. Genera ideas de problemas, casos de prueba y ejemplos basados en temas.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nueve módulos poderosos</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Una arquitectura de sistema completa diseñada para escalabilidad y mantenibilidad
          </p>
        </div>

        {/* Cuadrícula de módulos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-colors bg-card border-border group">
              {/* Insignia de número de módulo */}
              <Badge variant="outline" className="mb-4 text-primary border-primary/30 group-hover:bg-primary/10">
                Módulo {module.number}
              </Badge>

              {/* Título del módulo */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{module.title}</h3>

              {/* Descripción del módulo */}
              <p className="text-muted-foreground leading-relaxed text-sm">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
