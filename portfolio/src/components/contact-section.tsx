import { Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="mt-12 rounded-lg bg-card p-8 text-center shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Me</h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          <Mail className="h-5 w-5" />
          kofiasante2001@yahoo.com
        </a>
        <a
          href="tel:+16143829559"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <Phone className="h-5 w-5" />
          +1 (614) 382-9559
        </a>
      </div>
    </section>
  )
}
