import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  tools: string[]
}

export function ProjectCard({ title, description, link, tools }: ProjectCardProps) {
  return (
    <div className="rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
      >
        View Project
        <ArrowRight className="h-4 w-4" />
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span key={index} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
