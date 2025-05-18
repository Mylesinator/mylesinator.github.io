import { useEffect } from "react"

export default function Navbar({ menuOpen, setMenuOpen, darkMode, setDarkMode }) {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return <nav className="fixed top-0 w-full z-40 bg-white dark:bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-black dark:border-white/10 shadow-lg">
        <div className="max-w mx-auto px-4">
            <div className="flex items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-black dark:text-white mr-8">
                    Myles<span className="text-green-500">inator</span>
                </a>

                <div className="text-black dark:text-white w-full rtl h-5 relative cursor-pointer z-40 md:hidden" dir="rtl" onClick={() => setMenuOpen((prev => !prev))}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-4 w-full">
                    <a href="#home" className="text-black dark:text-gray-300 dark:hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-black dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
                    <a href="#projects" className="text-black dark:text-gray-300 dark:hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="text-black dark:text-gray-300 dark:hover:text-white transition-colors">Contact</a>
                    <button className="text-black dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer ml-auto" onClick={() => {setDarkMode(!darkMode); document.documentElement.classList.toggle("dark");}}>
                        { darkMode === true ? "Light Mode" : "Dark Mode" }
                    </button>
                </div>
            </div>
        </div>
    </nav>
}
