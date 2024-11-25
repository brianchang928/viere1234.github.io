import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ title, company, period, description }: {
    title: string;
    company: string;
    period: string;
    description: string;
}) => (
    <div className="backdrop-blur-md bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
        <div className="flex items-center space-x-2 mb-2">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-blue-300 mb-1">{company}</p>
        <div className="flex items-center space-x-2 text-gray-400 mb-3">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{period}</span>
        </div>
        <p className="text-gray-300">{description}</p>
    </div>
);

export const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
                <div className="space-y-6">
                    <ExperienceItem
                        title="iOS Developer (Volunteer)"
                        company="OPass"
                        period="Mar 2022 - Present"
                        description="Developed and maintained a brand new iOS application using SwiftUI. Implemented complex UI components, integrated RESTful APIs, and collaborated with the design team to ensure pixel-perfect implementation."
                    />
                    <ExperienceItem
                        title="2022 Information Team - iOS Developer (Volunteer)"
                        company="COSCUP"
                        period="Mar 2022 - Aug 2022"
                        description="Developed and maintained a brand new iOS application using SwiftUI. Implemented complex UI components, integrated RESTful APIs, and collaborated with the design team to ensure pixel-perfect implementation."
                    />
                    <ExperienceItem
                        title="2022 Development Team - iOS Developer (Volunteer)"
                        company="SITCON"
                        period="Mar 2022 - Sep 2022"
                        description="Developed and maintained a brand new iOS application using SwiftUI. Implemented complex UI components, integrated RESTful APIs, and collaborated with the design team to ensure pixel-perfect implementation."
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;