"use client"

import { Button } from "@/components/ui/button"
import { Code2, Play, Trophy } from "lucide-react"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"

/**
 * SECCIÓN HERO
 *
 * La sección de aterrizaje principal que introduce CodeCampus.
 * Características:
 * - Título grande con el nombre de la plataforma
 * - Subtítulo descriptivo explicando el propósito de la plataforma
 * - Botones de llamado a la acción para comenzar
 * - Decoración visual con fragmento de código
 * - Elementos flotantes de acento para interés visual
 */
export function Hero() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Círculos de acento flotantes para interés visual */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Insignia de la plataforma */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            <Code2 className="w-4 h-4" />
            <span>Online Judge Platform</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              CodeCampus
            </span>
          </h1>

          {/* Descripción del subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Una plataforma moderna para evaluar algoritmos, gestionar cursos de programación y empoderar a los
            estudiantes para dominar la programación competitiva
          </p>

          {/* Botones de llamado a la acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 gap-2 group" onClick={() => setShowAuthModal(true)}>
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Comenzar
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 gap-2 bg-transparent">
              <Trophy className="w-5 h-5" />
              Ver Clasificación
            </Button>
          </div>

          {/* Decoración de fragmento de código */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-chart-4" />
                <div className="w-3 h-3 rounded-full bg-chart-2" />
              </div>
              <pre className="text-left text-sm font-mono text-muted-foreground">
                <code>{`// Envía tu solución
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </section>
  )
}
