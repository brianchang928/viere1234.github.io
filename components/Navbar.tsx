import React from 'react';

const Navbar = () => {
    return (
        <nav className="backdrop-blur-md bg-gray-900/30 sticky top-0 z-50 border-b border-gray-700/50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                            Brian Chang
                        </span>
                    </h1>
                    <div className="hidden md:flex space-x-6">
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
                        <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                    <button className="md:hidden text-gray-300 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="hidden md:hidden px-4 py-2">
                <div className="flex flex-col space-y-2">
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
                    <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;