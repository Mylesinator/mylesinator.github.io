import RevealOnScroll from "../RevealOnScroll";

export default function Home() {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Myles Marshall
          </h1>

          <p className="text-black dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
			A full-stack web developer who specializes in developing efficient and scalable APIs, databases, and backend systems that power modern applications.
          </p>

          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-green-500 text-black dark:text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]">
              View Projects
            </a>

            <a href="#contact" className="border border-green-600 text-green-700 dark:border-green-500/50 dark:text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.2)] hover:bg-green-500/10">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
}
