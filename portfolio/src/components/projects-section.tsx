import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "TravelEase Contact Form",
    description: "TravelEase is a project where users get to make travel reservations by submitting a contact form on the TravelEase company website.",
    link: "https://github.com/akadarkoh/travelease-contact",
    tools: ["Lambda", "IAM", "DynamoDB","Python", "CloudWatch", "S3", "API Gateway","Terraform"],
  },
  {
    title: "E-commerce Platform",
    description: "Secure AWS E-commerce Platform with Hybrid Identity & PCI-Compliant Payments.",
    link: "https://github.com/akadarkoh/AWS-E-commerce-Platform-",
    tools: ["s3", "Lambda", "IAM", "CloudFront", "API Gateway", "Okta", "Azure AD", "SAML 2.0", "Monitoring & Security"],
  },
  {
    title: "Kubernetes Cluster Autoscaler",
    description: "Implemented an intelligent autoscaling solution for Kubernetes clusters on GCP.",
    link: "https://github.com/yourusername/k8s-autoscaler",
    tools: ["Kubernetes", "GCP", "Go", "Prometheus"],
  },
  {
    title: "Serverless Data Processing",
    description: "Built a serverless architecture for real-time data processing using Azure Functions.",
    link: "https://github.com/yourusername/serverless-data",
    tools: ["Azure Functions", "Python", "Event Hub", "Cosmos DB"],
  },
]

export function ProjectsSection() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-foreground">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
