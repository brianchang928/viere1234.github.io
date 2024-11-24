import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Code, BookOpen, Briefcase } from 'lucide-react';

const Portfolio = () => {
  return (
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900/90">
        {/* Navigation */}
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

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20 backdrop-blur-sm">
                    <Image
                        src="profile.png"
                        alt="Brian Chang"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-full border border-blue-500/20 animate-pulse"></div>
                </div>
              </div>

              {/* Name with gradient text */}
              <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                Brian Chang
              </span>
              </h1>

              <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Aspiring Software Engineer
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Building the future one line of code at a time
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#contact" className="bg-blue-500/20 backdrop-blur-sm text-blue-300 border border-blue-500/50 px-6 py-2 rounded-lg hover:bg-blue-500/30 transition-all">
                  Get in Touch
                </a>
                <a href="#projects" className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700/50 transition-all">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
            <div className="backdrop-blur-md bg-gray-800/30 p-8 rounded-lg border border-gray-700/50">
              <p className="text-gray-300 mb-6">
                I&apos;m an aspiring software engineer passionate about creating elegant solutions to complex problems.
                Currently focused on learning modern web development technologies and best practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-4">
                  <Code className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Development</h3>
                    <p className="text-sm text-gray-400">Clean, maintainable code</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Learning</h3>
                    <p className="text-sm text-gray-400">Continuous improvement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white">Projects</h3>
                    <p className="text-sm text-gray-400">Practical experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-semibold mb-4 text-white">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-semibold mb-4 text-white">Backend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>APIs</li>
                  <li>Databases</li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-semibold mb-4 text-white">Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>Terminal</li>
                </ul>
              </div>
              <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <h3 className="font-semibold mb-4 text-white">Soft Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Problem Solving</li>
                  <li>Communication</li>
                  <li>Team Work</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/viere1234" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/brian-chang-517965234" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a href="viere0928@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Brian Chang. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
  );
};

export default Portfolio;