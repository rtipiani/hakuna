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

  // Delay para evitar que el menú se cierre al pasar entre botón y dropdown
  const dropdownTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150); // 150ms evita cierres inesperados
  };

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const linkClass = (path: string) =>
    `transition duration-200 ${
      activePath === path
        ? "text-red-600 font-bold border-b-2 border-red-600"
        : "text-orange-800 hover:text-red-600"
    }`;

  return (
    <nav className="bg-white py-4 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src={logo.src}
            alt="Angela Aventura Tours"
            className="h-12 md:h-16 object-contain"
          />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-6 text-lg font-medium">
          {menu.map((item, i) =>
            item.dropdown ? (
              <li
                key={i}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button className="flex items-center gap-2 text-orange-800 hover:text-red-600 transition">
                  {item.label}
                  <i
                    className={`fas fa-chevron-down text-sm transition-transform duration-300 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <ul
                  className={`
                    absolute left-0 mt-3 w-48 bg-white shadow-xl rounded-lg py-2 text-orange-800
                    border border-orange-200/50 transition-all duration-200 origin-top z-50
                    ${
                      desktopDropdownOpen
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
          className="md:hidden text-3xl text-red-600"
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-600 text-white py-4">
          <ul className="flex flex-col text-lg font-medium">
            {menu.map((item, i) =>
              item.dropdown ? (
                <li key={i} className="px-4">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex justify-between py-2 items-center"
                  >
                    {item.label}
                    <i
                      className={`fas fa-chevron-down transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile dropdown */}
                  <ul
                    className={`
                      bg-white text-orange-800 rounded-lg shadow mt-2 overflow-hidden transition-all duration-300
                      ${
                        mobileDropdownOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0 pointer-events-none"
                      }
                    `}
                  >
                    {item.dropdown.map((d, idx) => (
                      <li key={idx}>
                        <a
                          href={d.href}
                          className="block px-4 py-2 hover:bg-yellow-200"
                        >
                          {d.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={i}>
                  <a
                    href={item.href}
                    className="px-4 py-3 block hover:bg-red-700 transition"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
