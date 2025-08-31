"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Users, Lightbulb, Bot, BookOpen } from "lucide-react"

export function CSRSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("csr")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="csr" className="py-20 bg-gradient-to-b from-[#1E1E1E] to-[#2C2C2C]">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">CSR – Codeinnovior</h2>
          <div className="w-20 h-1 bg-[#00D4FF] mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`p-8 bg-gradient-to-br from-[#232323] to-[#2E2E2E] border-[#00D4FF]/20 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}
          >
            <div className="text-center space-y-6">
              {/* Playful Icon */}
              <div className="flex justify-center items-center gap-2 mb-6">
                <div className="w-16 h-16 bg-[#00D4FF]/10 rounded-2xl flex items-center justify-center">
                  <Bot className="h-8 w-8 text-[#00D4FF]" />
                </div>
                <div className="text-[#00FF88] text-2xl">+</div>
                <div className="w-16 h-16 bg-[#00FF88]/10 rounded-2xl flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-[#00FF88]" />
                </div>
              </div>

              <h3 className="font-poppins font-bold text-2xl text-[#00D4FF] mb-4">
                "Introducing Kids to the World of AI"
              </h3>

              <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
                As part of GoInnovior's CSR, I lead initiatives under Codeinnovior, empowering kids and students with
                coding, design, and AI literacy. From teaching Python programming to guiding them into the world of AI,
                we focus on building future-ready professionals from a young age.
              </p>

              <p className="text-white/90 max-w-2xl mx-auto">
                Our mission is to democratize technology education and create the next generation of innovators.
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#00D4FF]/10 rounded-xl flex items-center justify-center text-[#00D4FF] mx-auto mb-3">
                    <Code className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-[#00D4FF]">50+</div>
                  <div className="text-sm text-white/70">Kids Taught</div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#00FF88]/10 rounded-xl flex items-center justify-center text-[#00FF88] mx-auto mb-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-[#00FF88]">10+</div>
                  <div className="text-sm text-white/70">Workshops</div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#00D4FF]/10 rounded-xl flex items-center justify-center text-[#00D4FF] mx-auto mb-3">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-[#00D4FF]">5+</div>
                  <div className="text-sm text-white/70">Programs</div>
                </div>
              </div>

              <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white font-montserrat px-8 py-3 rounded-xl mt-8">
                Learn More About Codeinnovior
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
