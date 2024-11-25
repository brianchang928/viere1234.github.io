import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <div
                                className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/20 backdrop-blur-sm">
                                <Image
                                    src="profile.png"
                                    alt="Brian Chang"
                                    width={256}
                                    height={256}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            <div
                                className="absolute -inset-2 rounded-full border border-blue-500/20 animate-pulse"></div>
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold mb-0">
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                            Brian Chang
                        </span>
                    </h1>
                    <h1 className="text-3xl font-bold mb-4">
                        <span
                            className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text">
                            (張智堯)
                        </span>
                    </h1>

                    <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        iOS Developer
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Crafting delightful mobile experiences with SwiftUI
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#contact"
                           className="bg-blue-500/20 backdrop-blur-sm text-blue-300 border border-blue-500/50 px-6 py-2 rounded-lg hover:bg-blue-500/30 transition-all">
                            Get in Touch
                        </a>
                        <a href="#projects"
                           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700/50 transition-all">
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;