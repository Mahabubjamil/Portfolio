"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, TrendingUp } from "lucide-react"

export function ExperienceSection() {
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

    const element = document.getElementById("work")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      company: "GoInnovior Limited",
      period: "2024 – Present",
      role: "Business Analyst",
      achievements: [
        "Requirements gathering, pre-sales, product demos → improved client onboarding by 30%",
        "Gap Analysis for Pacific Jeans Group & Maheen Label Tex Ltd",
        "Delivered ERP, HRM, Corporate Websites with 70%+ on-time rate",
      ],
      clients: ["Pretty Group", "E-Group", "Impress Group", "Paiker Foods", "Arab Ship Breaking Ltd"],
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      company: "Global Ed Expo",
      period: "2023",
      role: "System Enhancement Specialist",
      achievements: [
        "Enhanced system UX, increasing engagement by 30%",
        "Improved user experience and system efficiency",
        "Collaborated with cross-functional teams for system optimization",
      ],
      clients: [],
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ]

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-[#2C2C2C] to-[#1E1E1E]">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-[#4F8DF7] mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
            Proven track record in business analysis, client engagement, and digital transformation across multiple
            industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`bg-[#2E2E2E] border border-white/10 hover:border-[#4F8DF7]/50 transition-all duration-500 hover:shadow-xl ${
                isVisible ? `opacity-100 translate-y-0 delay-${index * 200}` : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4F8DF7]/20 rounded-lg flex items-center justify-center text-[#4F8DF7]">
                    {exp.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-poppins font-semibold text-xl text-white mb-1">{exp.company}</h3>
                      <p className="text-[#4F8DF7] font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center text-[#9CA3AF] mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2 text-white" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#4F8DF7] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  {exp.clients.length > 0 && (
                    <div>
                      <p className="text-sm font-medium text-[#9CA3AF] mb-3">Key Clients:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.clients.map((client, i) => (
                          <Badge
                            key={i}
                            className="bg-[#4F8DF7]/20 text-[#4F8DF7] border-[#4F8DF7]/30 hover:bg-[#4F8DF7]/30"
                          >
                            {client}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
