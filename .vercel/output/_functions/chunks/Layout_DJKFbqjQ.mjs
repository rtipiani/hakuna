import { e as createComponent, r as renderTemplate, k as renderComponent, l as renderSlot, n as renderHead } from './astro/server_ByyNhJnE.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                               */

const logo = new Proxy({"src":"/_astro/logo.DjeQ78vG.webp","width":1532,"height":568,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/logo.webp";
							}
							
							return target[name];
						}
					});

function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-red-600 text-gray-300 py-12 mt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: logo.src, alt: "Angel Aventura Tours", className: "w-36 mb-4" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: "Agencia de viajes y turismo con más de 17 años de experiencia. Viaja con los mejores por toda la selva central." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-4", children: "Enlaces" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-white transition-colors", children: "Inicio" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/nosotros", className: "hover:text-white transition-colors", children: "Nosotros" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/oxapampa", className: "hover:text-white transition-colors", children: "Oxapampa" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/chanchamayo", className: "hover:text-white transition-colors", children: "Chanchamayo" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/galeria", className: "hover:text-white transition-colors", children: "Galería" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contactanos", className: "hover:text-white transition-colors", children: "Contáctanos" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-4", children: "Información" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-location-dot mr-2" }),
            "Jr. Tarma N° 29O, Chanchamayo, La Merced"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone mr-2" }),
            "+51 964 534 249"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone mr-2" }),
            "+51 9O2 498 111"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope mr-2" }),
            "ventas@angeladventure.pe"
          ] }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "/nuestras-politicas", children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-book mr-2" }),
            "Nuestras Políticas"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-4", children: "Síguenos" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-4 text-xl", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.facebook.com/Angelaventuraturismochanc/",
              className: "hover:text-white transition-colors",
              title: "Facebook Angel Aventura Tours",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-facebook fa-2xl" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/p/DRU4YTCCc5o/",
              className: "hover:text-white transition-colors",
              title: "Instagram Angel Aventura Tours",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-instagram fa-2xl" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.tiktok.com/@angelaventurachanchamayo",
              className: "hover:text-white transition-colors",
              title: "Tiktok Angel Aventura Tours",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-tiktok fa-2xl" })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.link/exn5e4",
              className: "hover:text-white transition-colors",
              title: "WhatsApp Angel Aventura Tours",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-whatsapp fa-2xl" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center text-gray-100 text-sm mt-10 border-t border-orange-500 pt-6", children: "©2025 Angel Aventura Tours. Todos los derechos reservados." })
  ] });
}

const menu = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Paquetes Turísticos",
    dropdown: [
      { label: "Oxapampa", href: "/oxapampa" },
      { label: "Chanchamayo", href: "/chanchamayo" },
      { label: "Selva Central", href: "/selva-central" }
    ]
  },
  { label: "Full Day", href: "/full-day" },
  { label: "Escolares", href: "/escolares" },
  { label: "Galería", href: "/galeria" },
  { label: "Contáctanos", href: "/contactanos" }
];
const Navbar = () => {
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
  const linkClass = (path) => `transition duration-200 ${activePath === path ? "text-red-600 font-bold border-b-2 border-red-600" : "text-orange-800 hover:text-red-600"}`;
  return /* @__PURE__ */ jsxs("nav", { className: "bg-white py-4 shadow-md relative z-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex justify-between items-center px-4 md:px-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: logo.src,
          alt: "Angela Aventura Tours",
          className: "h-12 md:h-16 object-contain"
        }
      ) }),
      /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center space-x-6 text-lg font-medium", children: menu.map(
        (item, i) => item.dropdown ? /* @__PURE__ */ jsxs(
          "li",
          {
            className: "relative group",
            onMouseEnter: openDropdown,
            onMouseLeave: closeDropdown,
            children: [
              /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 text-orange-800 hover:text-red-600 transition", children: [
                item.label,
                /* @__PURE__ */ jsx(
                  "i",
                  {
                    className: `fas fa-chevron-down text-sm transition-transform duration-300 ${desktopDropdownOpen ? "rotate-180" : ""}`
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "ul",
                {
                  className: `
                    absolute left-0 mt-3 w-48 bg-white shadow-xl rounded-lg py-2 text-orange-800
                    border border-orange-200/50 transition-all duration-200 origin-top z-50
                    before:absolute before:-top-3 before:left-0 before:w-full before:h-3 before:content-[''] 
                    ${desktopDropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
                  `,
                  children: item.dropdown.map((d, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: d.href,
                      className: `block px-4 py-2 hover:bg-yellow-100 ${linkClass(
                        d.href
                      )}`,
                      children: d.label
                    }
                  ) }, idx))
                }
              )
            ]
          },
          i
        ) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, className: linkClass(item.href), children: item.label }) }, i)
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          title: "Abrir menú",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "md:hidden text-3xl text-red-600",
          children: /* @__PURE__ */ jsx("i", { className: `fas ${isMenuOpen ? "fa-times" : "fa-bars"}` })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-red-600 text-white py-4", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col text-lg font-medium", children: menu.map(
      (item, i) => item.dropdown ? /* @__PURE__ */ jsxs("li", { className: "px-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setMobileDropdownOpen(!mobileDropdownOpen),
            className: "w-full flex justify-between py-2 items-center",
            children: [
              item.label,
              /* @__PURE__ */ jsx(
                "i",
                {
                  className: `fas fa-chevron-down transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "ul",
          {
            className: `
                      bg-white text-orange-800 rounded-lg shadow mt-2 overflow-hidden transition-all duration-300
                      ${mobileDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
                    `,
            children: item.dropdown.map((d, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: d.href,
                className: "block px-4 py-2 hover:bg-yellow-200",
                children: d.label
              }
            ) }, idx))
          }
        )
      ] }, i) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: item.href,
          className: "px-4 py-3 block hover:bg-red-700 transition",
          children: item.label
        }
      ) }, i)
    ) }) })
  ] });
};

const TopHeader = () => {
  return /* @__PURE__ */ jsx("section", { className: "bg-red-600 hidden lg:flex md:items-center md:justify-center md:py-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-12 text-sm", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", { href: "", className: "text-white rounded flex items-center gap-1 py-1 px-2 text-md font-medium", "aria-label": "Llamar a Angela Aventura Tours", children: [
      /* @__PURE__ */ jsx("i", { className: "fas fa-phone text-xl text-white" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Llámanos:" }),
      "+51 964 534 249"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 text-xl", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/Angelaventuraturismochanc/", className: "bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition", "aria-label": "Vamos a facebook", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-facebook-f text-red-600" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/p/DRU4YTCCc5o/", className: "bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition", "aria-label": "Vamos a instagram", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-instagram text-red-600" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@angelaventurachanchamayo", className: "bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition", "aria-label": "Vamos a tiktok", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-tiktok text-red-600" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://wa.link/exn5e4", className: "bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition", "aria-label": "Vamos a whatsapp", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-whatsapp text-red-600" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("a", { href: "mailto:contacto@gmail.com", className: "text-white hover:underline rounded flex items-center gap-2py-2 px-4 text-lg", "aria-label": "Enviar un correo", children: [
      /* @__PURE__ */ jsx("i", { className: "fas fa-envelope text-xl text-white mr-1" }),
      "ventas@angeladventure.pe"
    ] }) })
  ] }) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>\n			Angel Aventura Tours | Operador Tur\xEDstico Calificado Por MINCETUR\n		</title><meta name="description" content="Somos una empresa especializada en brindar servicios tur\xEDsticos en la selva central del Per\xFA con m\xE1s de 17 a\xF1os de experiencia y tenemos como fin promover nuestra cultura, gastronom\xEDa y el cuidado del medio ambiente."><meta name="language" content="es-PE"><meta name="geo.region" content="PE"><meta name="geo.placename" content="Oxapampa, Chanchamayo, Selva Central"><meta property="og:title" content="Angel Aventura Tours | Operador Tur\xEDstico Calificado Por MINCETUR"><meta property="og:description" content="Especialistas en turismo por la Selva Central del Per\xFA: Oxapampa, Chanchamayo y m\xE1s, con m\xE1s de 17 a\xF1os de experiencia."><meta property="og:image" content="/og-image.jpg"><meta property="og:url" content="https://angelaventuratours.com"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Angel Aventura Tours"><meta name="twitter:description" content="Especialistas en turismo por la Selva Central del Per\xFA: Oxapampa, Chanchamayo y m\xE1s."><meta name="twitter:image" content="/og-image.jpg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="canonical" href="https://angelaventuratours.com"><script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "TravelAgency",\n				"name": "Angel Aventura Tours",\n				"url": "https://angelaventuratours.com",\n				"logo": "https://angelaventuratours.com/logo.png",\n				"image": "https://angelaventuratours.com/og-image.jpg",\n				"description": "Operador tur\xEDstico con m\xE1s de 17 a\xF1os de experiencia en la Selva Central del Per\xFA.",\n				"address": {\n					"@type": "PostalAddress",\n					"addressCountry": "PE",\n					"addressRegion": "Jun\xEDn",\n					"addressLocality": "Chanchamayo"\n				},\n				"sameAs": [\n					"https://www.facebook.com/Angelaventuraturismochanc/",\n					"https://www.instagram.com/p/DRU4YTCCc5o/"\n				]\n			}\n		<\/script>', "</head> <body> ", " ", " ", " ", ' <a href="https://wa.me/51964534249?text=Hola%20%C3%81ngel%20Aventura%20Tours%2C%20estoy%20interesad%40%20en%20conocer%20Oxapampa%20%F0%9F%8C%B8%2C%20Chanchamayo%20%F0%9F%8C%B4%20y%20toda%20la%20Selva%20Central%20%F0%9F%8C%BF" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"> <i class="fa-brands fa-whatsapp text-3xl"></i> </a> </body></html>'])), renderHead(), renderComponent($$result, "TopHeader", TopHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/TopHeader.tsx", "client:component-export": "default" }), renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Navbar.tsx", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Footer", "client:component-export": "default" }));
}, "D:/Vercel/angelaventuratours/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
