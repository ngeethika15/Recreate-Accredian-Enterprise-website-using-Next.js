"use client";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="h-7 w-7 text-blue-600" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">Accredian <span className="text-blue-600">Enterprise</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#lead-form" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-blue-600 font-medium py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-blue-600 text-white py-2 rounded-lg font-medium mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}