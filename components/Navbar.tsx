"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/img-s.webp";
import Image from "next/image";
export function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "inicio";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <button
              className="sm:hidden text-gray-700 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Image
              src={Logo.src}
              alt="Papelería Doble T"
              className="w-12 h-12"
              width={200}
              priority
              height={200}
            />
            <span className="font-heading font-bold text-2xl text-primary hidden sm:block">
              Doble T
            </span>
          </div>

          <div className="hidden sm:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side placeholder or CTA if needed, but keeping it clean */}
          <div className="flex items-center space-x-4">
            <a
              href="#servicios"
              className="hidden md:flex bg-secondary hover:bg-secondary/90 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-100 pb-4 px-4 shadow-lg absolute w-full left-0 top-16">
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#servicios"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-secondary"
            >
              Servicios de diseño
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
