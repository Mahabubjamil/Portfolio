"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Award, Briefcase as Certificate, Trophy, ExternalLink, Calendar } from "lucide-react"

export function CertificationsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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
      year: "2024",
      description: "Comprehensive training in digital product strategy and management",
      status: "Certified",
    },
    {
      name: "Business Analysis Course",
      icon: Award,
      category: "Ostad",
      year: "2024",
      description: "Advanced techniques in business analysis and requirements gathering",
      status: "Certified",
    },
    {
      name: "ICPC Dhaka Regional 2021",
      icon: Trophy,
      category: "Programming Contest",
      year: "2021",
      description: "Competitive programming excellence at regional level",
      status: "Participant",
    },
  ]

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800`}>
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Professional Development</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Certifications & 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Continuous learning and professional development through recognized certifications and competitive achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <Card
                  key={cert.name}
                  className={`group relative p-8 bg-white/[0.02] backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden ${
                    isVisible ? `animate-fade-in-up` : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon and Status */}
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7 text-blue-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-500 font-medium">{cert.year}</span>
                      </div>
                    </div>

                    {/* Title and Category */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-400 text-sm font-medium">
                          {cert.category}
                        </span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          cert.status === 'Certified' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <span className="text-sm font-medium">View Details</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <div className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800 delay-500`}>
          <div className="inline-flex items-center gap-2 text-slate-500">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-600"></div>
            <span className="text-sm font-medium">Committed to Excellence</span>
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
      `}</style>
    </section>
  )
}