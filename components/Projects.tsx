import React from 'react';
import { Github, Link } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl, imageUrl }: ProjectCardProps) => (
    <div className="backdrop-blur-md bg-gray-800/30 rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors">
        {imageUrl && (
            <div className="mb-4 rounded-lg overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            </div>
        )}
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/50">
                    {tech}
                </span>
            ))}
        </div>
        <div className="flex space-x-4">
            {githubUrl && (
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                </a>
            )}
            {liveUrl && (
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                    <Link className="w-5 h-5" />
                    <span>Live Demo</span>
                </a>
            )}
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "Health Tracking App",
            description: "A SwiftUI-based iOS app for tracking daily health metrics, featuring HealthKit integration, custom animations, and widgets.",
            technologies: ["SwiftUI", "HealthKit", "Core Data", "Combine"],
            githubUrl: "https://github.com/yourusername/health-tracker",
            imageUrl: "/projects/health-tracker.png"
        },
        {
            title: "Weather App",
            description: "Beautiful weather application with dynamic animations, location-based forecasts, and weather alerts.",
            technologies: ["SwiftUI", "CoreLocation", "WeatherKit", "Async/Await"],
            githubUrl: "https://github.com/yourusername/weather-app",
            imageUrl: "/projects/weather-app.png"
        },
        {
            title: "Task Manager",
            description: "Productivity app with iCloud sync, custom notifications, and widget support.",
            technologies: ["SwiftUI", "CloudKit", "NotificationCenter", "WidgetKit"],
            githubUrl: "https://github.com/yourusername/task-manager",
            imageUrl: "/projects/task-manager.png"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;