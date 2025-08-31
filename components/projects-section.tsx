"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Brain, Activity, GraduationCap, Building, MessageSquare } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "AI for Healthcare & Precision Medicine",
      description: "Explainable AI for Disease Progression Prediction",
      tools: ["PyTorch", "SHAP", "LIME"],
      outcome: "Risk prediction dashboard with interpretability",
      category: "ai",
      icon: <Activity className="h-6 w-6" />,
    },
    {
      title: "Climate AI – Flood Risk Prediction",
      description: "Flood Risk Prediction for Bangladesh",
      tools: ["Google Earth Engine", "PyTorch Geospatial"],
      outcome: "Interactive flood risk map + forecasting alerts",
      category: "ai",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "EduAI: Personalized Study Guidance",
      description: "Personalized Study Guidance Assistant",
      tools: ["HuggingFace", "LangChain", "RAG"],
      outcome: "Scholarship recommender + AI chatbot",
      category: "ai",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "AI for Mental Health",
      description: "Mental health monitoring and awareness platform",
      tools: ["HuggingFace NLP", "TensorFlow"],
      outcome: "Mental health monitoring dashboard (awareness-focused)",
      category: "ai",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "ERP Gap Analysis – Impress Group",
      description: "Comprehensive ERP system analysis and optimization",
      tools: ["Business Analysis", "Process Mapping"],
      outcome: "Identified inefficiencies → improved automation & data accuracy",
      category: "erp",
      icon: <Building className="h-6 w-6" />,
    },
    {
      title: "Product Review Analysis",
      description: "ML/NLP-powered product review insights",
      tools: ["NLP", "Machine Learning", "Data Analysis"],
      outcome: "Extracted insights from reviews → guided product improvement",
      category: "ai",
      icon: <MessageSquare className="h-6 w-6" />,
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1E1E1E] to-[#2C2C2C]">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#4F8DF7] mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto mb-8 leading-relaxed">
            Showcasing innovative solutions across AI, healthcare, climate tech, and enterprise systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={`font-montserrat ${
                filter === "all"
                  ? "bg-[#4F8DF7] hover:bg-[#3B7CE8] text-white"
                  : "border-[#4F8DF7] text-[#4F8DF7] hover:bg-[#4F8DF7] hover:text-white"
              }`}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "ai" ? "default" : "outline"}
              onClick={() => setFilter("ai")}
              className={`font-montserrat ${
                filter === "ai"
                  ? "bg-[#4F8DF7] hover:bg-[#3B7CE8] text-white"
                  : "border-[#4F8DF7] text-[#4F8DF7] hover:bg-[#4F8DF7] hover:text-white"
              }`}
            >
              AI Projects
            </Button>
            <Button
              variant={filter === "erp" ? "default" : "outline"}
              onClick={() => setFilter("erp")}
              className={`font-montserrat ${
                filter === "erp"
                  ? "bg-[#4F8DF7] hover:bg-[#3B7CE8] text-white"
                  : "border-[#4F8DF7] text-[#4F8DF7] hover:bg-[#4F8DF7] hover:text-white"
              }`}
            >
              ERP Projects
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 bg-[#2E2E2E] border border-white/10 hover:border-[#4F8DF7] hover:shadow-2xl hover:shadow-[#4F8DF7]/20 transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? `opacity-100 translate-y-0 delay-${index * 100}` : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#4F8DF7]/20 rounded-lg flex items-center justify-center text-[#4F8DF7] group-hover:bg-[#4F8DF7] group-hover:text-white transition-colors duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-lg text-white group-hover:text-[#4F8DF7] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-[#9CA3AF] mb-4 text-sm">{project.description}</p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-[#9CA3AF] mb-2">Tools & Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} className="bg-[#4F8DF7]/20 text-[#4F8DF7] border-[#4F8DF7]/30 text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-[#9CA3AF] mb-2">Outcome:</p>
                  <p className="text-sm text-white">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-white hover:bg-[#4F8DF7] hover:text-white transition-colors duration-300"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
