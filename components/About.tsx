import React from 'react';
import { Code, BookOpen, Smartphone } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
                <div className="backdrop-blur-md bg-gray-800/30 p-8 rounded-lg border border-gray-700/50">
                    <p className="text-gray-300 mb-6">
                        I&apos;m a passionate iOS developer with a strong focus on creating elegant and intuitive mobile applications using SwiftUI.
                        I love combining beautiful design with clean, efficient code to build apps that make a difference in people&apos;s lives.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-4">
                            <Smartphone className="w-8 h-8 text-blue-400" />
                            <div>
                                <h3 className="font-semibold text-white">iOS Development</h3>
                                <p className="text-sm text-gray-400">SwiftUI specialist</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Code className="w-8 h-8 text-blue-400" />
                            <div>
                                <h3 className="font-semibold text-white">Clean Code</h3>
                                <p className="text-sm text-gray-400">Swift best practices</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <BookOpen className="w-8 h-8 text-blue-400" />
                            <div>
                                <h3 className="font-semibold text-white">Learning</h3>
                                <p className="text-sm text-gray-400">Always improving</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;