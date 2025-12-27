import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "AWS Lambda Function Optimizer",
    description: "Developed a tool to analyze and optimize Lambda functions for cost and performance.",
    link: "https://github.com/yourusername/lambda-optimizer",
    tools: ["AWS Lambda", "Python", "CloudWatch", "Terraform"],
  },
  {
    title: "Multi-Cloud Deployment Pipeline",
    description: "Created a CI/CD pipeline for deploying applications across multiple cloud providers.",
    link: "https://github.com/yourusername/multi-cloud-pipeline",
    tools: ["Jenkins", "Docker", "Kubernetes", "AWS", "Azure"],
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
