import { Heart, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Mahabub Jamil Showvik</h3>
            <p className="text-blue-100 mb-4">
              Business Analyst & Strategist helping organizations unlock efficiency through data, strategy, and
              human-centered digital transformation.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent" />
              <span>for innovation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-blue-100 hover:text-white transition-colors duration-200">
                About Me
              </a>
              <a href="#experience" className="block text-blue-100 hover:text-white transition-colors duration-200">
                Experience
              </a>
              <a href="#projects" className="block text-blue-100 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#csr" className="block text-blue-100 hover:text-white transition-colors duration-200">
                CSR Initiative
              </a>
              <a href="#skills" className="block text-blue-100 hover:text-white transition-colors duration-200">
                Skills
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-blue-100">Sgowvik6646@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-blue-100">01740466646</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-accent" />
                <span className="text-blue-100 cursor-pointer hover:text-white transition-colors duration-200">
                  LinkedIn Profile
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Mahabub Jamil Showvik. All rights reserved. | Bridging Business Goals with Technology
          </p>
        </div>
      </div>
    </footer>
  )
}
