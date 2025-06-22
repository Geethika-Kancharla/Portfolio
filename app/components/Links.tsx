"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Links: React.FC = () => {
  

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:flex fixed right-4 xl:right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50">
        {[{
          href: "https://github.com/Geethika-Kancharla",
          icon: <FaGithub className="text-white text-2xl" />,
          label: "GitHub Profile"
        }, {
          href: "https://www.linkedin.com/in/geethika-kancharla-4634092a2",
          icon: <FaLinkedin className="text-white text-2xl" />,
          label: "LinkedIn Profile"
        }, {
          href: "https://leetcode.com/u/Geethika-k/",
          icon: <SiLeetcode className="text-white text-2xl" />,
          label: "LeetCode Profile"
        }].map(({ href, icon, label }, idx) => (
          <Link href={href} target="_blank" key={idx} className="group relative">
            <div className="bg-gray-800 p-3 rounded-full hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-lg flex items-center justify-center">
              {icon}
            </div>
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
              {label}
            </span>
          </Link>
        ))}

       
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-50 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full shadow-xl border border-white/10">
        {[{
          href: "https://github.com/Geethika-Kancharla",
          icon: <FaGithub className="text-white text-lg sm:text-xl" />
        }, {
          href: "https://www.linkedin.com/in/geethika-kancharla-4634092a2",
          icon: <FaLinkedin className="text-white text-lg sm:text-xl" />
        }, {
          href: "https://leetcode.com/u/Geethika-k/",
          icon: <SiLeetcode className="text-white text-lg sm:text-xl" />
        }].map(({ href, icon }, idx) => (
          <Link href={href} target="_blank" key={idx} className="group">
            <div className="bg-gray-800 p-2.5 sm:p-3 rounded-full hover:scale-110 hover:brightness-110 transition-all duration-300 shadow-md flex items-center justify-center">
              {icon}
            </div>
          </Link>
        ))}

       
      </div>
    </>
  );
};

export default Links;