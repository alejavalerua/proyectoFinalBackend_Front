import { Card } from "@/components/ui/card"
import { Code, Users, Shield, Zap, BarChart3, BookOpen } from "lucide-react"

/**
 * SECCIÓN DE CARACTERÍSTICAS
 *
 * Muestra las características y capacidades clave de CodeCampus.
 * Cada tarjeta de característica incluye:
 * - Un icono que representa la característica
 * - Un título
 * - Una descripción de la capacidad
 *
 * Las características se muestran en un diseño de cuadrícula responsive.
 */
export function Features() {
  const features = [
    {
      icon: Code,
      title: "Soporte Multi-Lenguaje",
      description: "Ejecuta código en Python, Java, C++ y Node.js con entornos sandbox aislados",
    },
    {
      icon: Shield,
      title: "Ejecución Segura",
      description: "Contenedores aislados basados en Docker con límites de CPU y memoria para ejecución segura",
    },
    {
      icon: Users,
      title: "Gestión de Cursos",
      description: "Organiza estudiantes y profesores en cursos con retos dedicados y clasificaciones",
    },
    {
      icon: Zap,
      title: "Evaluación en Tiempo Real",
      description: "Procesamiento asíncrono con colas Redis para evaluación de código rápida y eficiente",
    },
    {
      icon: BarChart3,
      title: "Clasificaciones y Rankings",
      description: "Rastrea el progreso de los estudiantes con clasificaciones dinámicas por reto, curso o evaluación",
    },
    {
      icon: BookOpen,
      title: "Evaluaciones Automatizadas",
      description: "Crea exámenes cronometrados con calificación automática y análisis completo de resultados",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Todo lo que necesitas para enseñar y aprender
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Una plataforma completa diseñada para la excelencia académica
          </p>
        </div>

        {/* Cuadrícula de características */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
              {/* Icono de característica */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Título de característica */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

              {/* Descripción de característica */}
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
