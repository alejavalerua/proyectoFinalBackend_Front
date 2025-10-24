"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Mail, Lock, User } from "lucide-react"

/**
 * MODAL DE AUTENTICACIÓN
 *
 * Componente modal que maneja tanto el inicio de sesión como el registro.
 * Características:
 * - Pestañas para cambiar entre Login y Registro
 * - Formularios con validación visual
 * - Diseño suave y moderno con iconos
 * - Totalmente responsive
 *
 * Props:
 * - open: boolean - Controla si el modal está visible
 * - onOpenChange: (open: boolean) => void - Callback cuando cambia el estado del modal
 */

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  // Estado para controlar qué pestaña está activa
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  // Manejador de envío de formulario (placeholder - conectar con tu API)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí irá la lógica de autenticación
    console.log("Formulario enviado")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden">
        {/* Encabezado del modal con gradiente */}
        <div className="bg-gradient-to-r from-primary via-accent to-primary p-6 text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-background/10 backdrop-blur-sm flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <DialogTitle className="text-2xl font-bold">CodeCampus</DialogTitle>
          </div>
          <DialogDescription className="text-primary-foreground/80">
            Accede a tu cuenta o crea una nueva para comenzar
          </DialogDescription>
        </div>

        {/* Contenido del modal con pestañas */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "signup")} className="w-full">
            {/* Lista de pestañas */}
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="signup">Registrarse</TabsTrigger>
            </TabsList>

            {/* Contenido de la pestaña de Login */}
            <TabsContent value="login" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de correo electrónico */}
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-sm font-medium">
                    Correo Electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="login-email" type="email" placeholder="tu@email.com" className="pl-10" required />
                  </div>
                </div>

                {/* Campo de contraseña */}
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-sm font-medium">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="login-password" type="password" placeholder="••••••••" className="pl-10" required />
                  </div>
                </div>

                {/* Enlace de recuperación de contraseña */}
                <div className="flex justify-end">
                  <button type="button" className="text-sm text-primary hover:underline">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                {/* Botón de envío */}
                <Button type="submit" className="w-full" size="lg">
                  Iniciar Sesión
                </Button>
              </form>
            </TabsContent>

            {/* Contenido de la pestaña de Registro */}
            <TabsContent value="signup" className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo de nombre completo */}
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-sm font-medium">
                    Nombre Completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="signup-name" type="text" placeholder="Juan Pérez" className="pl-10" required />
                  </div>
                </div>

                {/* Campo de correo electrónico */}
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-sm font-medium">
                    Correo Electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="signup-email" type="email" placeholder="tu@email.com" className="pl-10" required />
                  </div>
                </div>

                {/* Campo de contraseña */}
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-sm font-medium">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="signup-password" type="password" placeholder="••••••••" className="pl-10" required />
                  </div>
                </div>

                {/* Campo de confirmación de contraseña */}
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm" className="text-sm font-medium">
                    Confirmar Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="signup-confirm" type="password" placeholder="••••••••" className="pl-10" required />
                  </div>
                </div>

                {/* Términos y condiciones */}
                <p className="text-xs text-muted-foreground">
                  Al registrarte, aceptas nuestros{" "}
                  <button type="button" className="text-primary hover:underline">
                    Términos de Servicio
                  </button>{" "}
                  y{" "}
                  <button type="button" className="text-primary hover:underline">
                    Política de Privacidad
                  </button>
                </p>

                {/* Botón de envío */}
                <Button type="submit" className="w-full" size="lg">
                  Crear Cuenta
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
