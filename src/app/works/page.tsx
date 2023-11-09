import projects from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Page() {
  return (
    <div className="grid xl: grid-cols-8 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3">
      {projects.map((x, i) => (
        <ProjectCard delay={0.1 + 0.05 * i} />
      ))}
    </div>
  )
}