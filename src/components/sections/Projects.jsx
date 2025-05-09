import RevealOnScroll from "../RevealOnScroll";

export default function Projects() {
    return (
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Star Wars AT-AT Animation
              </h3>

              <p className="text-gray-400 mb-4">Animation of an AT-AT walking across a snowy landscape</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML5", "SVG Images"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Mylesinator/polish_at-at"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Some Project 2</h3>

              <p className="text-gray-400 mb-4">Some project description</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Tech 1", "Tech 2"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
}