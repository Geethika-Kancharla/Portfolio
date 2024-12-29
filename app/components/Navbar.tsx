"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (section: string) => {
        setActiveSection(section.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex flex-1 items-center justify-center space-x-8 text-xl mt-8">
                        {['Home', 'Skills', 'Projects', 'Experience', 'More'].map((section) => (
                            <Link
                                key={section}
                                href={`#${section.toLowerCase()}`}
                                onClick={() => handleNavClick(section)}
                                className={`text-md transition-all duration-300 hover:text-blue-400 relative group ${activeSection === section.toLowerCase()
                                    ? 'text-blue-400'
                                    : 'text-slate-300'
                                    }`}
                            >
                                {section}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex-1 flex justify-end md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isMenuOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950/95 backdrop-blur-sm shadow-lg ">
                        {['Home', 'Skills', 'Projects', 'Experience', 'More'].map((section) => (
                            <Link
                                key={section}
                                href={`#${section.toLowerCase()}`}
                                onClick={() => handleNavClick(section)}
                                className={`block px-4 py-2 text-center text-sm transition-colors duration-300 hover:text-blue-400 ${activeSection === section.toLowerCase()
                                    ? 'text-blue-400'
                                    : 'text-slate-300'
                                    }`}
                            >
                                {section}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;