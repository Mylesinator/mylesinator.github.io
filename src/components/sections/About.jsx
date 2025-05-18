import RevealOnScroll from "../RevealOnScroll";

export default function About() {
    const frontendSkills = ["React", "Tailwind", "Bootstrap", "Phaser.js"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "SQL", "Deno", "Laravel"];
	const languages = ["JavaScript", "TypeScript", "Lua", "Luau", "C", "PHP"];
    const tools = ["Blender", "Visual Studio Code", "Neovim", "Vim", "Git", "NPM"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border border-black dark:border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-black dark:text-gray-300 mb-6">
                        Knowledge-seeking developer passionate about Web & Game Development.
                        With a full-stack foundation and a curiosity-driven mindset, I love tackling complex problems and exploring new technologies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Frontend</h3>

                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Languages</h3>

                            <div className="flex flex-wrap gap-2">
                                {languages.map((lang, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Backend</h3>

                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Other Tools</h3>

                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,246,130,0.2)] transition">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-black dark:border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Education</h3>

                        <ul className="list-disc list-inside text-black dark:text-gray-300 space-y-2">
                            <li>
                                <strong>West-MEC Coding Program (2023-2025)</strong>
                            </li>
                            <li>
                                Relevant Coursework: Web Development, Data Structures & Algorithms
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-black dark:border-white/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-black dark:text-gray-100">Work Experience</h3>

                        <div className="space-y-4 text-black dark:text-gray-300">
                            <div>
                                <h4 className="font-semibold">Unemployed 4L &#x2665;&#xfe0f;🤞</h4>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
