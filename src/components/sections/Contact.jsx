import RevealOnScroll from "../RevealOnScroll";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-200">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-center">
                        Contact Information
                    </h2>

                    <div className="space-y-4 text-white text-center border border-white/10 rounded px-6 py-8 hover:-translate-y-1 transition-all">
                        <p className="text-lg">
                            You're welcome to contact me via email or connect with me on professional networks.
                        </p>

                        <p>
                            📧 <a href="mailto:mylesmarshall06@gmail.com" className="text-green-500 hover:underline">mylesmarshall06@gmail.com</a>
                        </p>

                        <p>
                            💼 <a href="https://www.linkedin.com/in/mylesmarshall06" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">https://www.linkedin.com/in/mylesmarshall06</a>
                        </p>

                        <p>
                            🧑‍💻 <a href="https://github.com/Mylesinator" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">https://github.com/Mylesinator</a>
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
