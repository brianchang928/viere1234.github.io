import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-md bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl font-semibold mb-2 text-white">Personal Portfolio</h3>
                        <p className="text-gray-300 mb-4">
                            A Next.js-powered portfolio website showcasing my journey and projects.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50">Next.js</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50">React</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50">Tailwind</span>
                        </div>
                    </div>
                    <div className="backdrop-blur-md bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl font-semibold mb-2 text-white">Future Project</h3>
                        <p className="text-gray-300 mb-4">
                            Description of your next exciting project will go here.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;