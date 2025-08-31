import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { CSRSection } from "@/components/csr-section"
import { CertificationsSection } from "@/components/certifications-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CSRSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
