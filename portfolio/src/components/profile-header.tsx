import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export function ProfileHeader() {
  return (
    <header className="mb-12 text-center">
      <div className="mb-6 flex justify-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-secondary">
          <Image
            src="/professional-headshot-devops-engineer.jpg"
            alt="Profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Your Name</h1>
      <p className="mb-4 text-base text-muted-foreground">Cloud Engineering Professional</p>

      <div className="flex items-center justify-center gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </header>
  )
}
