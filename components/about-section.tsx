"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    industries: 0,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { years: 2, projects: 15, industries: 5 }
    const duration = 2000
    const steps = 60

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    })
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#1E1E1E] to-[#2C2C2C]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-[#4F8DF7] mx-auto mb-8"></div>
            <p className="text-lg text-white max-w-3xl mx-auto text-pretty leading-relaxed">
              I'm Mahabub Jamil Showvik, a Business Analyst with expertise in ERP, HRM, AI-driven projects, and digital
              transformation. With proven experience in gap analysis, product management, and client engagement, I
              specialize in translating business needs into actionable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className={`p-8 text-center bg-[#2E2E2E]/50 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-105 hover:border-[#4F8DF7]/50 transition-all duration-500 shadow-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-5xl font-poppins font-bold text-[#4F8DF7] mb-3">{counters.years}+</div>
              <div className="text-[#9CA3AF] font-inter">Years Experience</div>
            </Card>

            <Card
              className={`p-8 text-center bg-[#2E2E2E]/50 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-105 hover:border-[#4F8DF7]/50 transition-all duration-500 shadow-xl ${isVisible ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-5xl font-poppins font-bold text-[#4F8DF7] mb-3">{counters.projects}+</div>
              <div className="text-[#9CA3AF] font-inter">Projects Completed</div>
            </Card>

            <Card
              className={`p-8 text-center bg-[#2E2E2E]/50 backdrop-blur-sm border border-white/10 rounded-xl hover:scale-105 hover:border-[#4F8DF7]/50 transition-all duration-500 shadow-xl ${isVisible ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-5xl font-poppins font-bold text-[#4F8DF7] mb-3">{counters.industries}+</div>
              <div className="text-[#9CA3AF] font-inter">Industries Served</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
