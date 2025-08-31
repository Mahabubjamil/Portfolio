"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Linkedin, Send, GraduationCap } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="py-20 bg-[#1E1E1E] border-t border-gradient-to-r from-[#00D4FF]/20 via-[#00FF88]/20 to-[#00D4FF]/20"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Let's Build the Future Together
          </h2>
          <div className="w-20 h-1 bg-[#00D4FF] mx-auto mb-8"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to transform your business with data-driven insights and strategic solutions? Let's connect and
            discuss your next project.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info & Education */}
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
              {/* Contact Information */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="font-poppins font-semibold text-xl text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center text-[#00D4FF]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email</p>
                      <p className="font-medium text-white">Sgowvik6646@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00FF88]/10 rounded-lg flex items-center justify-center text-[#00FF88]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Phone</p>
                      <p className="font-medium text-white">01740466646</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center text-[#00D4FF]">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">LinkedIn</p>
                      <p className="font-medium text-[#00D4FF] cursor-pointer hover:underline">Connect with me</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Education */}
              <Card className="p-6 bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="font-poppins font-semibold text-xl text-white mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#00FF88]/10 rounded-lg flex items-center justify-center text-[#00FF88]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">BSc in Computer Science</p>
                      <p className="text-sm text-white/60">Daffodil International University (DIU)</p>
                      <p className="text-sm font-medium text-[#00FF88]">CGPA: 3.79/4.00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#00FF88]/10 rounded-lg flex items-center justify-center text-[#00FF88]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Higher Secondary Certificate</p>
                      <p className="text-sm text-white/60">HSC</p>
                      <p className="text-sm font-medium text-[#00FF88]">GPA: 5.00</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
              <Card className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="font-poppins font-semibold text-xl text-white mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-transparent border-white/30 text-white placeholder:text-white/50 focus:border-[#00D4FF] focus:ring-[#00D4FF]/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="bg-transparent border-white/30 text-white placeholder:text-white/50 focus:border-[#00D4FF] focus:ring-[#00D4FF]/50"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      className="bg-transparent border-white/30 text-white placeholder:text-white/50 focus:border-[#00D4FF] focus:ring-[#00D4FF]/50"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white font-montserrat rounded-xl"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
