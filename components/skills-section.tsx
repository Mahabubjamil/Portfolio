"use client"

import { JSX, useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Brain,
  Users,
  Database,
  Presentation,
  MessageSquare,
  Sparkles,
  TrendingUp,
} from "lucide-react"

// ✅ Define proper types for skills & categories
interface Skill {
  name: string
  level: "Expert" | "Advanced" | "Intermediate" | string
}

interface SkillCategory {
  title: string
  icon: JSX.Element
  skills: Skill[]
  gradient: string
  bgGradient: string
  description: string
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null) // ✅ fixed

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories: SkillCategory[] = [
    {
      title: "Business Analysis",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Business Analysis", level: "Expert" },
        { name: "Product Management", level: "Advanced" },
        { name: "ERP Gap Analysis", level: "Expert" },
        { name: "Requirements Gathering", level: "Expert" },
        { name: "Process Mapping", level: "Advanced" },
      ],
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/5",
      description: "Strategic business transformation and process optimization",
    },
    {
      title: "Technical Skills",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Machine Learning", level: "Advanced" },
        { name: "NLP", level: "Expert" },
        { name: "SQL", level: "Advanced" },
        { name: "Power BI", level: "Advanced" },
        { name: "Data Visualization", level: "Expert" },
        { name: "Python", level: "Advanced" },
        { name: "PyTorch", level: "Intermediate" },
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/5",
      description: "AI/ML development and data science expertise",
    },
    {
      title: "Data & Analytics",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Data Analysis", level: "Expert" },
        { name: "Statistical Modeling", level: "Advanced" },
        { name: "Predictive Analytics", level: "Advanced" },
        { name: "Business Intelligence", level: "Expert" },
        { name: "KPI Development", level: "Advanced" },
      ],
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-500/10 to-purple-600/5",
      description: "Data-driven insights and analytics solutions",
    },
    {
      title: "Leadership & Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: [
        { name: "Client Engagement", level: "Expert" },
        { name: "Stakeholder Management", level: "Expert" },
        { name: "Communication", level: "Expert" },
        { name: "Leadership", level: "Advanced" },
        { name: "Problem Solving", level: "Expert" },
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/5",
      description: "Collaborative leadership and strategic communication",
    },
    {
      title: "Tools & Platforms",
      icon: <Presentation className="h-6 w-6" />,
      skills: [
        { name: "HuggingFace", level: "Advanced" },
        { name: "LangChain", level: "Intermediate" },
        { name: "Google Earth Engine", level: "Intermediate" },
        { name: "SHAP", level: "Advanced" },
        { name: "LIME", level: "Intermediate" },
        { name: "TensorFlow", level: "Intermediate" },
      ],
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/5",
      description: "Modern AI/ML frameworks and development tools",
    },
    {
      title: "Domain Expertise",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: [
        { name: "Healthcare AI", level: "Advanced" },
        { name: "Climate Tech", level: "Intermediate" },
        { name: "ERP Systems", level: "Expert" },
        { name: "HRM", level: "Advanced" },
        { name: "Digital Transformation", level: "Expert" },
        { name: "CSR Initiatives", level: "Advanced" },
      ],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-600/5",
      description: "Specialized industry knowledge and domain expertise",
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
      case "Advanced":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30"
      case "Intermediate":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30"
      default:
        return "bg-slate-500/15 text-slate-400 border-slate-500/30"
    }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Core Competencies</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning business analysis, AI/ML technologies, and strategic consulting with
            proven expertise across multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index: number) => (
            <Card
              key={index}
              className={`group relative p-8 bg-white/[0.02] backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl rounded-2xl overflow-hidden ${
                isVisible ? `animate-fade-in-up` : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
              ></div>
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}
              ></div>

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-xs">{category.skills.length} skills</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        className={`text-xs border transition-all duration-300 hover:scale-105 cursor-default ${
                          hoveredCategory === index
                            ? `${getLevelColor(skill.level)} shadow-sm`
                            : "bg-slate-800/50 text-slate-300 border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50"
                        }`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        {hoveredCategory === index && (
                          <span className="ml-1 opacity-75">• {skill.level}</span>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Skill level indicator */}
                <div className="pt-2 border-t border-slate-700/30">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Proficiency Levels</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span>Expert</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span>Advanced</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                        <span>Intermediate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className={`text-center mt-20 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800 delay-700`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/[0.02] backdrop-blur-xl border border-slate-700/30 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">6+</div>
                <div className="text-slate-400 text-sm">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">32+</div>
                <div className="text-slate-400 text-sm">Total Skills</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-400 text-sm">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800 delay-900`}
        >
          <div className="inline-flex items-center gap-2 text-slate-500">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-600"></div>
            <span className="text-sm font-medium">Continuously Evolving</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-slate-600"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  )
}
