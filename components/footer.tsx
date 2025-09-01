'use client'
import { Heart, Linkedin, Mail, Phone, MapPin, ArrowUp, ExternalLink, Star, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "CSR Initiative", href: "#csr" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
  ]

  const services = [
    "Business Analysis",
    "Digital Strategy",
    "AI/ML Solutions",
    "Process Optimization",
    "Data Analytics",
    "Consulting"
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Sgowvik6646@gmail.com",
      href: "mailto:Sgowvik6646@gmail.com",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1740 466646",
      href: "tel:+8801740466646",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      gradient: "from-purple-400 to-pink-400"
    }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 border-t border-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              {/* Brand & Description */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-bold text-3xl mb-4">
                    <span className="text-white">Mahabub Jamil </span>
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Showvik</span>
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                    Business Analyst & AI Strategist helping organizations unlock efficiency through data-driven insights, 
                    strategic analysis, and human-centered digital transformation.
                  </p>
                </div>

                {/* Services Overview */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Core Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/5 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 cursor-default"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Made with love */}
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="text-sm">Crafted with</span>
                  <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                  <span className="text-sm">for innovation & excellence</span>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href} 
                      className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span className="text-sm">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5 text-emerald-400" />
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="group flex items-center gap-3 p-3 bg-white/[0.02] border border-slate-700/30 rounded-xl hover:border-slate-600/50 hover:bg-white/[0.05] transition-all duration-300"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${contact.gradient} rounded-lg flex items-center justify-center text-white`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{contact.label}</p>
                          <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-200 truncate">{contact.value}</p>
                        </div>
                        <ExternalLink className="h-3 w-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    )
                  })}
                </div>

                {/* Availability Status */}
                <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-400 text-sm font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-slate-400 text-sm">
                  © 2025 Mahabub Jamil Showvik. All rights reserved.
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  Bridging Business Goals with Technology • Innovation Through Analysis
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Social Links */}
                <div className="flex items-center gap-2">
                  <a href="mailto:Sgowvik6646@gmail.com" className="w-8 h-8 bg-white/5 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200">
                    <Mail className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/mahabub-jamil-91b974219/" className="w-8 h-8 bg-white/5 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-200">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                {/* Back to Top */}
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  className="bg-white/5 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/50 rounded-lg transition-all duration-300"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </footer>
  )
}