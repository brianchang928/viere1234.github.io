import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
                <div className="flex justify-center space-x-8">
                    <a
                        href="https://github.com/brianchang928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <GithubIcon />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brianchang928/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="mailto:me@brianchang.tw"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <Mail className="w-6 h-6" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
