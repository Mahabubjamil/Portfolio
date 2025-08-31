"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Brain, Users, Database, Presentation, MessageSquare } from "lucide-react"

export function SkillsSection() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Business Analysis",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        "Business Analysis",
        "Product Management",
        "ERP Gap Analysis",
        "Requirements Gathering",
        "Process Mapping",
      ],
      color: "bg-[#007BFF]",
    },
    {
      title: "Technical Skills",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "NLP", "SQL", "Power BI", "Data Visualization", "Python", "PyTorch"],
      color: "bg-[#10B981]",
    },
    {
      title: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Predictive Analytics",
        "Business Intelligence",
        "KPI Development",
      ],
      color: "bg-[#0056B3]",
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Client Engagement", "Stakeholder Management", "Communication", "Leadership", "Problem Solving"],
      color: "bg-[#059669]",
    },
    {
      title: "Tools & Platforms",
      icon: <Presentation className="h-6 w-6" />,
      skills: ["HuggingFace", "LangChain", "Google Earth Engine", "SHAP", "LIME", "TensorFlow"],
      color: "bg-[#007BFF]",
    },
    {
      title: "Domain Expertise",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["Healthcare AI", "Climate Tech", "ERP Systems", "HRM", "Digital Transformation", "CSR Initiatives"],
      color: "bg-[#10B981]",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C]">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#007BFF] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning business analysis, AI/ML technologies, and strategic consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#007BFF]/50 hover:shadow-lg hover:shadow-[#007BFF]/20 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? `animate-fade-in-up delay-${index * 100}` : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs bg-white/10 text-gray-300 border border-white/20 hover:bg-[#007BFF]/20 hover:text-white hover:border-[#007BFF]/50 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
