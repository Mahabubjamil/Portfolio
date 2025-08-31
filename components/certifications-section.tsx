"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Award, Briefcase as Certificate, Trophy } from "lucide-react"

export function CertificationsSection() {
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

    const element = document.getElementById("certifications")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      name: "Digital Product Management",
      icon: Certificate,
      category: "Ostad",
    },
    {
      name: "Business Analysis Course",
      icon: Award,
      category: "Ostad",
    },
    {
      name: "ICPC Dhaka Regional 2021",
      icon: Trophy,
      category: "Participant",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-[#1E1E1E] to-[#2C2C2C]">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card
                  key={cert.name}
                  className={`p-6 bg-white/5 backdrop-blur-sm border border-[#007BFF]/30 hover:border-[#007BFF] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#007BFF]/20 ${
                    isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : "opacity-0"
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-[#007BFF]/10 rounded-xl flex items-center justify-center text-[#007BFF] mx-auto">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-white text-lg mb-2">{cert.name}</h3>
                      <p className="text-[#007BFF] text-sm font-medium">{cert.category}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
