import logo from "../assets/images/logo.webp";
import React, { useState, useEffect } from "react";

const menu = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Paquetes Turísticos",
    dropdown: [
      { label: "Oxapampa", href: "/oxapampa" },
      { label: "Chanchamayo", href: "/chanchamayo" },
      { label: "Selva Central", href: "/selva-central" },
    ],
  },
  { label: "Full Day", href: "/full-day" },
  { label: "Escolares", href: "/escolares" },
  { label: "Galería", href: "/galeria" },
  { label: "Contáctanos", href: "/contactanos" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  const openDropdown = () => {
    setDesktopDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDesktopDropdownOpen(false);
  };

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const linkClass = (path: string) =>
    `transition duration-200 ${activePath === path
      ? "text-red-600 font-bold border-b-2 border-red-600"
      : "text-orange-800 hover:text-red-600"
    }`;

  return (
    <nav className="bg-white py-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-6">

        {/* LOGO */}
        <a href="/" className="flex items-center z-50 relative">
          <img
            src={logo.src}
            alt="Angela Aventura Tours"
            className="h-12 lg:h-16 object-contain"
          />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center space-x-6 text-lg font-medium">
          {menu.map((item, i) =>
            item.dropdown ? (
              <li
                key={i}
                className="relative group"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button className="flex items-center gap-2 text-orange-800 hover:text-red-600 transition">
                  {item.label}
                  <i
                    className={`fas fa-chevron-down text-sm transition-transform duration-300 ${desktopDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown */}
                <ul
                  className={`
                    absolute left-0 mt-3 w-48 bg-white shadow-xl rounded-lg py-2 text-orange-800
                    border border-orange-200/50 transition-all duration-200 origin-top z-50
                    before:absolute before:-top-3 before:left-0 before:w-full before:h-3 before:content-[''] 
                    ${desktopDropdownOpen
                      ? "opacity-100 scale-y-100"
                      : "opacity-0 scale-y-0 pointer-events-none"
                    }
                  `}
                >
                  {item.dropdown.map((d, idx) => (
                    <li key={idx}>
                      <a
                        href={d.href}
                        className={`block px-4 py-2 hover:bg-yellow-100 ${linkClass(
                          d.href
                        )}`}
                      >
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={i}>
                <a href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          title="Abrir menú"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl text-red-600 z-50 relative focus:outline-none"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-24 pb-6 px-6 overflow-y-auto">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-orange-900">
            {menu.map((item, i) =>
              item.dropdown ? (
                <li key={i} className="border-b border-orange-100 pb-2">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex justify-between items-center py-2 text-orange-800 hover:text-red-600 transition-colors"
                  >
                    {item.label}
                    <i
                      className={`fas fa-chevron-down transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Mobile dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdownOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                  >
                    <ul className="pl-4 space-y-2 border-l-2 border-red-100 ml-2">
                      {item.dropdown.map((d, idx) => (
                        <li key={idx}>
                          <a
                            href={d.href}
                            className={`block py-2 text-sm text-gray-600 hover:text-red-600 transition-colors ${activePath === d.href ? "text-red-600 font-semibold" : ""}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {d.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={i} className="border-b border-orange-100 pb-2">
                  <a
                    href={item.href}
                    className={`block py-2 hover:text-red-600 transition-colors ${activePath === item.href ? "text-red-600 font-bold" : "text-orange-800"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          <div className="mt-auto pt-8">
            <a
              href="/contactanos"
              className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserva Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
