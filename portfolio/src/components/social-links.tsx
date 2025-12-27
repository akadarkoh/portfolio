import { Github, Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    name: "Website",
    url: "https://yourwebsite.com",
    icon: Globe,
  },
]

export function SocialLinks() {
  return (
    <section className="border-t border-border pt-12">
      <h2 className="mb-6 text-center text-xl font-semibold text-foreground">Connect With Me</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-md"
            >
              <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="font-medium text-foreground">{link.name}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
