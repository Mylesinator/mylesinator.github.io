import RevealOnScroll from "../RevealOnScroll";

export default function Contact() {
    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>

                <form className="space-y-6">
                    <div className="relative">
                        <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                        placeholder="Name..."
                        />

                        <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                        placeholder="example@email.com"
                        />

                        <textarea id="message" name="message" required rows={5} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-green-500 focus:bg-green-500/5"
                        placeholder="Your message here..."
                        />
                    </div>

                    <button type="submit" className="w-full bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
}