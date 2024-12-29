"use client"

import React from 'react';
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Links: React.FC = () => {
    // Direct email handling function
    const openEmail = () => {
        window.open('mailto:geethikak004@gmail.com', '_blank');
    };

    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
            <Link 
                href="https://github.com/Geethika-Kancharla" 
                target="_blank"
                className="group relative"
            >
                <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg">
                    <FaGithub className="text-white text-2xl" />
                </div>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitHub Profile
                </span>
            </Link>
            
            <Link 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank"
                className="group relative"
            >
                <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg">
                    <FaLinkedin className="text-white text-2xl" />
                </div>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    LinkedIn Profile
                </span>
            </Link>
            
            <button 
                onClick={openEmail}
                className="group relative"
                aria-label="Send email"
            >
                <div className="bg-slate-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg">
                    <MdEmail className="text-white text-2xl" />
                </div>
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Send Email
                </span>
            </button>
        </div>
    );
};

export default Links;