"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles } from "lucide-react";

export default function ModernGlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#csr", label: "CSR" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-slate-900/80 border-b border-white/10 shadow-2xl' 
          : 'backdrop-blur-sm bg-slate-900/60'
      }`}
    >
      {/* Gradient overlay for glass effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5"></div>
      
      <div className="container mx-auto px-6 py-2 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="group cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">MJ</span>
              </div>
              <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-emerald-300 group-hover:to-cyan-300 transition-all duration-300">
                Mahabub
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-white/10">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-1 text-gray-300 hover:text-white transition-all duration-300 rounded-xl group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1Oa_zxc5N8cutpX0KUMzKQkGqKybrFiYi/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Download className="w-4 h-4 group-hover:animate-bounce" />
                  Resume
                </div>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-medium">{item.label}</span>
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/10 mt-4">
                <a
                  href="https://drive.google.com/file/d/1Oa_zxc5N8cutpX0KUMzKQkGqKybrFiYi/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      Download Resume
                    </div>
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </header>
  );
}