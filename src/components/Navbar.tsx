import logo from "../assets/images/logo.webp";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState("/");

    const toggleMenu = () => setIsMenuOpen((p) => !p);

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    const linkClass = (path: string) =>
        `transition ${
            activePath === path
                ? "text-red-600 font-bold border-b-2 border-red-600"
                : "text-orange-800 hover:text-red-600"
        }`;

    const mobileLinkClass = (path: string) =>
        `block px-4 py-2 transition ${
            activePath === path
                ? "bg-yellow-600 font-bold"
                : "hover:bg-yellow-600"
        }`;

    return (
        <nav className="bg-white py-6 relative z-10">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
                
                <a href="/" title="Inicio - Angela Aventura Tours">
                    <img
                        src={logo.src}
                        alt="Logo Angela Aventura Tours"
                        className="w-auto h-8 md:h-20 lg:h-20 object-contain"
                    />
                </a>

                <ul className="hidden md:flex space-x-6 text-base md:text-lg font-medium">
                    <li><a href="/" className={linkClass("/")}>Inicio</a></li>
                    <li><a href="/nosotros" className={linkClass("/nosotros")}>Nosotros</a></li>
                    <li><a href="/oxapampa" className={linkClass("/oxapampa")}>Oxapampa</a></li>
                    <li><a href="/chanchamayo" className={linkClass("/chanchamayo")}>Chanchamayo</a></li>
                    <li><a href="/galeria" className={linkClass("/galeria")}>Galería</a></li>
                    <li><a href="/contactanos" className={linkClass("/contactanos")}>Contáctanos</a></li>
                </ul>

                <button type="button"
                    onClick={toggleMenu}
                    className="md:hidden text-3xl text-red-600"
                    aria-label="Abrir menú de navegación"
                >
                    <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>
            </div>

            <div className={`${isMenuOpen ? "scale-y-100" : "scale-y-0"} transform origin-top transition-transform duration-300 absolute top-full left-0 w-full bg-red-600`}>
                <ul className="flex flex-col space-y-4 py-6 text-lg text-center font-medium text-white">
                    <li><a href="/" className={mobileLinkClass("/")}>Inicio</a></li>
                    <li><a href="/nosotros" className={mobileLinkClass("/nosotros")}>Nosotros</a></li>
                    <li><a href="/oxapampa" className={mobileLinkClass("/oxapampa")}>Oxapampa</a></li>
                    <li><a href="/chanchamayo" className={mobileLinkClass("/chanchamayo")}>Chanchamayo</a></li>
                    <li><a href="/galeria" className={mobileLinkClass("/galeria")}>Galería</a></li>
                    <li><a href="/contactanos" className={mobileLinkClass("/contactanos")}>Contáctanos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
