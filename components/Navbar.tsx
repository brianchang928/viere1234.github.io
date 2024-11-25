import React from 'react';

const Navbar = () => {
    return (
        <nav className="backdrop-blur-md bg-gray-900/30 sticky top-0 z-50 border-b border-gray-700/50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Brian Chang</h1>
                    <div className="flex space-x-6">
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;