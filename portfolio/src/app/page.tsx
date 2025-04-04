import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin, ArrowRight, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
      {/* Stylish Header with Logo */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm">
              akadarkoh
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Kofi Asante
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm font-medium relative group">
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#projects" className="text-sm font-medium relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contact" className="text-sm font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Stylish Hero Section with Photo */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="mb-2" variant="outline">
                    Cloud Engineer
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                    Building the <span className="text-primary">Cloud</span> Infrastructure of Tomorrow
                  </h1>
                  <p className="text-muted-foreground md:text-xl max-w-[600px] mt-4">
                    Architecting scalable, resilient, and efficient cloud solutions that power modern applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                  <Button asChild className="group bg-primary/90 hover:bg-primary transition-all duration-300">
                    <Link href="#projects">
                      View My Projects
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="group">
                    <Link href="#contact">
                      Contact Me
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-sm"></div>
                  <div className="relative aspect-square overflow-hidden rounded-full border-4 border-background bg-muted md:aspect-square lg:aspect-square h-[280px] w-[280px]">
                    {/* Replace with your actual photo */}
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Profile Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stylish About Section */}
        <section id="about" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-muted/30 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="flex flex-col items-center text-center space-y-2 mb-8">
                <Badge variant="outline" className="mb-2">
                  About Me
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">The Journey So Far</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2"></div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a cloud engineer specializing in designing and implementing scalable infrastructure solutions. With
                expertise in AWS, Azure, and GCP, I help organizations build reliable and efficient cloud environments
                that scale with their needs.
              </p>

              <div className="grid gap-8 md:grid-cols-2 mt-12">
                <div className="space-y-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Cloud Architecture (AWS, Azure, GCP)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Infrastructure as Code (Terraform, CloudFormation)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Containerization (Docker, Kubernetes)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      CI/CD Pipelines (Jenkins, GitHub Actions)
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Experience</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Cloud Migration & Modernization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Serverless Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Microservices Implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      DevOps Practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stylish Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-12">
              <div className="flex flex-col items-center text-center space-y-2">
                <Badge variant="outline" className="mb-2">
                  Portfolio
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2"></div>
              </div>

              <div className="space-y-16">
                {/* Project 1 */}
                <div className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="overflow-hidden">
                      <div className="aspect-video w-full h-full relative">
                        <Image
                          src="/placeholder.svg?height=300&width=600"
                          alt="Serverless API Platform"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          AWS
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          Serverless
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          DynamoDB
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">GameDay Schedule</h3>

                      <p className="text-muted-foreground flex-grow">
                        Built a highly scalable serverless API platform using AWS Lambda, API Gateway, and DynamoDB.
                        This solution handles millions of requests per day with automatic scaling and minimal
                        operational overhead.
                      </p>

                      <div className="space-y-1 my-4">
                        <h4 className="text-sm font-medium">Key Features:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Auto-scaling based on traffic patterns
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Authentication and authorization using Cognito
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Real-time data processing with Lambda
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-4 mt-auto pt-2">
                        <Button variant="outline" size="sm">
                          <Link href="https://github.com/akadarkoh/gameday-schedule" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                            <span className="sr-only">View Code on GitHub</span>
                          </Link>
                        </Button>
                        <Button size="sm">
                          <Link href="https://example.com/demo" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                            <span className="sr-only">View Live Demo</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="overflow-hidden md:order-last">
                      <div className="aspect-video w-full h-full relative">
                        <Image
                          src="/placeholder.svg?height=300&width=600"
                          alt="Multi-Cloud Infrastructure"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          Terraform
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          AWS
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          Azure
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">Multi-Cloud Infrastructure</h3>

                      <p className="text-muted-foreground flex-grow">
                        Designed and implemented a multi-cloud infrastructure using Terraform to manage resources across
                        AWS and Azure. This solution provides redundancy and flexibility while maintaining a single
                        source of truth for infrastructure.
                      </p>

                      <div className="space-y-1 my-4">
                        <h4 className="text-sm font-medium">Key Features:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Infrastructure as Code with Terraform modules
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Cross-cloud networking and security
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Disaster recovery across cloud providers
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-4 mt-auto pt-2">
                        <Button variant="outline" size="sm" asChild className="group/btn">
                          <Link href="https://github.com/yourusername/multi-cloud-infra" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                            <span className="sr-only">View Code on GitHub</span>
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="group/btn">
                          <Link href="https://example.com/case-study" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Case Study
                            <span className="sr-only">View Case Study</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="overflow-hidden">
                      <div className="aspect-video w-full h-full relative">
                        <Image
                          src="/placeholder.svg?height=300&width=600"
                          alt="Kubernetes Cluster"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          Kubernetes
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          EKS
                        </Badge>
                        <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                          ArgoCD
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">Kubernetes Cluster Automation</h3>

                      <p className="text-muted-foreground flex-grow">
                        Set up a production-ready Kubernetes cluster with GitOps workflow using EKS, Helm, and ArgoCD.
                        This solution enables continuous deployment and management of containerized applications with
                        minimal manual intervention.
                      </p>

                      <div className="space-y-1 my-4">
                        <h4 className="text-sm font-medium">Key Features:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            GitOps workflow with ArgoCD
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Automated cluster scaling and management
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            Monitoring and logging infrastructure
                          </li>
                        </ul>
                      </div>

                      <div className="flex gap-4 mt-auto pt-2">
                        <Button variant="outline" size="sm" asChild className="group/btn">
                          <Link href="https://github.com/yourusername/k8s-gitops" target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                            <span className="sr-only">View Code on GitHub</span>
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="group/btn">
                          <Link href="https://example.com/k8s-demo" target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Documentation
                            <span className="sr-only">View Documentation</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stylish Contact Section */}
        <section id="contact" className="w-full py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-muted/30 -z-10"></div>
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <Badge variant="outline" className="mb-2">
                  Contact
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2"></div>
                <p className="text-muted-foreground max-w-[600px] mt-4">
                  Have a project in mind? Let's discuss how I can help you with your cloud infrastructure needs.
                </p>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row justify-center mt-8">
                <Link
                  href="mailto:kofiasante2001@yahoo.com"
                  className="flex flex-col items-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:bg-card/80"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">kofiasante2001@yahoo.com</p>
                </Link>

                <Link
                  href="https://linkedin.com/in/akadarkoh2001"
                  target="_blank"
                  className="flex flex-col items-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:bg-card/80"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/akadarkoh2001</p>
                </Link>

                <Link
                  href="https://github.com/akadarkoh"
                  target="_blank"
                  className="flex flex-col items-center p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:bg-card/80"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-muted-foreground">github.com/akadarkoh</p>
                </Link>
              </div>

              <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 mt-12 transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <h3 className="text-xl font-bold mb-6 text-center">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Stylish Footer */}
      <footer className="w-full border-t border-border/40 py-8 bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm">
              YN
            </div>
            <span className="text-lg font-bold">Kofi Asante</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} akadarkoh. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/akadarkoh"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/akadarkoh2001"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:kofiasante2001@yahoo.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

