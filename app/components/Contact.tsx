import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    return (
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
    );
};

export default Contact;