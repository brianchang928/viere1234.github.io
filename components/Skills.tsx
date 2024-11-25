import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                        <h3 className="font-semibold mb-4 text-white">iOS Development</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Swift</li>
                            <li>SwiftUI</li>
                            <li>UIKit</li>
                            <li>Xcode</li>
                        </ul>
                    </div>
                    <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                        <h3 className="font-semibold mb-4 text-white">iOS Frameworks</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Core Data</li>
                            <li>CloudKit</li>
                            <li>WidgetKit</li>
                            <li>Push Notifications</li>
                        </ul>
                    </div>
                    <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                        <h3 className="font-semibold mb-4 text-white">Tools</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Figma</li>
                            <li>TestFlight</li>
                        </ul>
                    </div>
                    <div className="backdrop-blur-md bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                        <h3 className="font-semibold mb-4 text-white">Soft Skills</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Problem Solving</li>
                            <li>UI/UX Design</li>
                            <li>Team Collaboration</li>
                            <li>App Store Guidelines</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;