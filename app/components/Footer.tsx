import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Geethika-Kancharla',
            icon: FaGithub,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/geethika-kancharla-4634092a2',
            icon: FaLinkedinIn,
        },

        {
            name: 'Email',
            href: 'mailto:geethikak004@gmail.com',
            icon: MdEmail,
        },
    ];

    const navigationLinks = [
        { name: 'Home', href: '/' },
        { name: 'Skills', href: "#skills" },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },

    ];

    return (
        <footer className="bg-gradient-to-br from-slate-950 to-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col items-center space-y-8">


                    <nav className="flex flex-wrap justify-center gap-6">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex gap-6">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 group"
                                aria-label={social.name}
                            >
                                <social.icon
                                    className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </Link>
                        ))}
                    </div>

                    <div className="text-center space-y-2">
                        <p className="text-slate-400">
                            © {currentYear} Geethika. All rights reserved.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;