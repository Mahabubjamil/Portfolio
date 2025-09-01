"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Send, GraduationCap, MapPin, MessageCircle, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Sgowvik6646@gmail.com",
      href: "mailto:Sgowvik6646@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/5",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1740 466646",
      href: "tel:+8801740466646",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/5",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/mahabub-jamil-91b974219/",
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-600/10 to-blue-700/5",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/5",
    },
  ]

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "Daffodil International University (DIU)",
      grade: "CGPA: 3.79/4.00",
      year: "2019-2023",
      status: "Completed",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Science Background",
      grade: "GPA: 5.00/5.00",
      year: "2017-2019",
      status: "Completed",
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/3 left-1/5 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6 tracking-tight">
            Let's Build the 
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"> Future Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with data-driven insights and strategic solutions? Let's connect and discuss your next project.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info & Education */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className={`p-8 bg-white/[0.02] backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-slate-600/70 transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`} style={{ animationDelay: isVisible ? "200ms" : "0ms" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-2xl text-white">Contact Information</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="group block p-4 bg-white/[0.02] border border-slate-700/30 rounded-xl hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${info.bgGradient} rounded-lg flex items-center justify-center`}>
                            <IconComponent className={`h-5 w-5 bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{info.label}</p>
                            <p className="text-sm text-white font-medium truncate group-hover:text-blue-400 transition-colors duration-200">{info.value}</p>
                          </div>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </Card>

              {/* Education */}
              <Card className={`p-8 bg-white/[0.02] backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-slate-600/70 transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`} style={{ animationDelay: isVisible ? "400ms" : "0ms" }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-2xl text-white">Education</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="group p-4 bg-white/[0.02] border border-slate-700/30 rounded-xl hover:border-slate-600/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg mb-1 group-hover:text-emerald-400 transition-colors duration-200">{edu.degree}</h4>
                          <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-emerald-400 font-semibold">{edu.grade}</span>
                            <span className="text-slate-500">• {edu.year}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                          <CheckCircle className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-medium">{edu.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Availability Status */}
              <Card className={`p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`} style={{ animationDelay: isVisible ? "600ms" : "0ms" }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-medium">Available for new opportunities</span>
                  <Clock className="h-4 w-4 text-emerald-400 ml-auto" />
                </div>
              </Card>
            </div>

            {/* Right Column - Contact Form */}
            <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800`} style={{ animationDelay: isVisible ? "500ms" : "0ms" }}>
              <Card className="p-8 bg-white/[0.02] backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-slate-600/70 transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white">
                      <Send className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-white">Send me a message</h3>
                      <p className="text-slate-400 text-sm">I'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl h-12 transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl h-12 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, goals, or how I can help you achieve success..."
                          rows={6}
                          className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl transition-all duration-200 resize-none"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-semibold rounded-xl h-12 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        Your information is secure and will never be shared with third parties
                      </p>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h4>
                      <p className="text-slate-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className={`text-center mt-20 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800 delay-800`}>
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Whether you need business analysis, AI/ML solutions, or strategic consulting, I'm here to help you achieve your goals with innovative, data-driven approaches.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
         
              <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-xl">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className={`text-center mt-16 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"} transition-all duration-800 delay-1000`}>
          <div className="inline-flex items-center gap-2 text-slate-500">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-600"></div>
            <span className="text-sm font-medium">Professional • Reliable • Results-Driven</span>
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
          0%, 100% {
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