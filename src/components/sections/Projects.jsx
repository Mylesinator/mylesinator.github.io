import RevealOnScroll from "../RevealOnScroll";
import projects from "../../assets/projects.json";
import Carousel from "../Carousel.jsx";

export default function Projects() {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <Carousel projects={projects} />
        </div>
      </RevealOnScroll>
    </section>
}
