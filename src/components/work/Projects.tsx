import projects from '@/data/projects.json'
import { ExternalLink, Lock } from "lucide-react";

export function Project() {
  return (
    <section className="my-4 max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects
        .filter((projects) => (!projects.disabled))
        .map((project) => (
          <div key={project.title} className="p-4 rounded-lg border shadow-sm bg-white hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900/75">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-2 text-sm mt-2">
              {project.stack.map((tech) => (
                <span key={tech} className="bg-muted px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-primary"
                >
                  <ExternalLink size={16} /> Visit
                </a>
              ) : (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Lock size={16} /> Visit (Private)
                </span>
              )}

              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline text-primary"
                >
                  <ExternalLink size={16} /> Code
                </a>
              ) : (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Lock size={16} /> Code (Private)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
