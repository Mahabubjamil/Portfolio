




import { CertificationsSection } from "@/components/certifications-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import ModernHeroSection from "@/components/hero-section"
import ModernGlassHeader from "@/components/header"
import ModernAboutSection from "@/components/about-section"
import ModernExperienceSection from "@/components/experience-section"
import ModernProjectsSection from "@/components/projects-section"
import ModernCSRSection from "@/components/csr-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ModernGlassHeader  />
      <ModernHeroSection />
      <ModernAboutSection />
      <ModernExperienceSection />
      <ModernProjectsSection />
      <ModernCSRSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
