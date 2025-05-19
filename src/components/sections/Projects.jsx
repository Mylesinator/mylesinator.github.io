import RevealOnScroll from "../RevealOnScroll";
import projects from "../../assets/projects.json";

export default function Projects() {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, key) => (
              <div key={key} className="p-6 rounded-xl border border-black dark:border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                <img src={project.img} alt="an image of a project" className="mb-4" />

                <h3 className="text-xl font-bold mb-2 text-black dark:text-gray-100">{project.name}</h3>

                <p className="text-black dark:text-gray-400 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, key) => (
                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.1)] transition-all">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="text-green-400 hover:text-green-300 transition-colors my-4">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
}
