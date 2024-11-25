import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-center text-gray-400">
                    © {new Date().getFullYear()} Brian Chang. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;