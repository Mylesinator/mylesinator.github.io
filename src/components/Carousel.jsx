import { useState } from "react";

export default function ProjectCarousel({ projects }) {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center space-x-6 transition-transform duration-500 ease-in-out">
        {projects.map((project, index) => {
          const isActive = index === current;
          const isPrev = index === (current - 1 + projects.length) % projects.length;
          const isNext = index === (current + 1) % projects.length;

          let positionClass = "opacity-0 scale-75 pointer-events-none absolute";
          if (isActive) {
            positionClass = "z-10 scale-100 opacity-100 relative";
          } else if (isPrev || isNext) {
            positionClass = "opacity-30 scale-90 blur-sm grayscale relative z-0";
          }

          return (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out w-[80%] md:w-[50%] lg:w-[40%] ${positionClass}`}
            >
              <div className="p-6 rounded-xl border border-black dark:border-white/10 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                <img src={project.img} alt={project.name} className="mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2 text-black dark:text-gray-100">{project.name}</h3>
                <p className="text-black dark:text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-green-400 hover:text-green-300 transition-colors block">
                  View Project →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nav Buttons */}
      <button
        onClick={prevProject}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur p-2 rounded-full text-green-400 hover:text-green-200 transition"
      >
        ←
      </button>
      <button
        onClick={nextProject}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur p-2 rounded-full text-green-400 hover:text-green-200 transition"
      >
        →
      </button>
    </div>
  );
}
