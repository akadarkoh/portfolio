import { ProfileHeader } from "../components/profile-header"
import { AboutSection } from "../components/about-section"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <ProfileHeader />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}
