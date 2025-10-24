import { Code2, Github, Mail } from "lucide-react"

/**
 * SECCIÓN DE PIE DE PÁGINA
 *
 * Contiene:
 * - Créditos de desarrolladores con nombres
 * - Información del proyecto
 * - Enlaces a documentación y recursos
 * - Copyright y contexto académico
 *
 * Esta es la sección final de la página de inicio.
 */
export function Footer() {
  const developers = ["Juan Carrasquilla", "Efraín Rada", "Alberto Sandoval", "Alejandra Valencia"]

  return (
    <footer className="bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sección de marca */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">CodeCampus</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una plataforma moderna de juez online para evaluación de algoritmos y gestión de cursos. Diseñada para la
              excelencia académica.
            </p>
            <p className="text-sm text-muted-foreground">
              Departamento de Ingeniería de Sistemas
              <br />
              Desarrollo de aplicaciones Backend
            </p>
          </div>

          {/* Sección de desarrolladores */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Equipo de Desarrollo</h3>
            <ul className="space-y-2">
              {developers.map((developer, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {developer}
                </li>
              ))}
            </ul>
          </div>

          {/* Sección de enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Repositorio GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  Documentación API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contactar Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior con copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 CodeCampus. Proyecto Final - Desarrollo de Aplicaciones Backend.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Construido con Next.js</span>
              <span>•</span>
              <span>Impulsado por Docker</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
