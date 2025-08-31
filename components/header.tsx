"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#csr", label: "CSR" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1F2937] shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-poppins font-bold text-xl text-white">Mahabub</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#4F8DF7] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://drive.google.com/file/d/1Oa_zxc5N8cutpX0KUMzKQkGqKybrFiYi/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >
              <Button className="font-montserrat bg-[#4F8DF7] hover:bg-[#3B7CE8] text-white">
                <Download className="h-4 w-4 mr-2" />
                Resume
                </Button>
            </a>

          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-600">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#4F8DF7] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://drive.google.com/file/d/1Oa_zxc5N8cutpX0KUMzKQkGqKybrFiYi/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <Button className="font-montserrat bg-[#4F8DF7] hover:bg-[#3B7CE8] text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                    </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
