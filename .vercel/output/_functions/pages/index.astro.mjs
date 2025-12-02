import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_ByyNhJnE.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { $ as $$Layout } from '../chunks/Layout_B5YLM24h.mjs';
import { p as perene, o as oxapampa, v as villaRica, a as pozuzo, b as puenteKimiri, c as chanchamayo, l as laFortuna } from '../chunks/la-fortuna_C1m9C7LR.mjs';
export { renderers } from '../renderers.mjs';

const slide1 = new Proxy({"src":"/_astro/slide1.Coq6CPoY.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/slide1.png";
							}
							
							return target[name];
						}
					});

const slide2 = new Proxy({"src":"/_astro/slide2.CH3jQL2I.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/slide2.png";
							}
							
							return target[name];
						}
					});

const slide3 = new Proxy({"src":"/_astro/slide3.C6AoFycJ.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/slide3.png";
							}
							
							return target[name];
						}
					});

const slides = [
  {
    src: slide1.src,
    alt: "Recorre las sagradas tierras del Cusco, hogar el imperio Inca.",
    title: "Chanchamayo",
    description: "Sumérgete en la selva central, entre cataratas, café y la calidez de su gente.",
    whatsappLink: "https://wa.link/okkl9y"
  },
  {
    src: slide2.src,
    alt: "Recorre las sagradas tierras del Cusco, hogar el imperio Inca.",
    title: "Oxapampa",
    description: "Vive la armonía entre montañas, tradiciones austro-alemanas y naturaleza pura.",
    whatsappLink: "https://wa.link/b6g8ba"
  },
  {
    src: slide3.src,
    alt: "Recorre las sagradas tierras del Cusco, hogar el imperio Inca.",
    title: "Pozuzo",
    description: "Descubre el encanto del primer pueblo austro-alemán del Perú, rodeado de verdes valles.",
    whatsappLink: "https://wa.link/wlb78h"
  }
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const updateSlide = (index) => {
    if (!sliderRef.current) return;
    const totalSlides = slides.length;
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
  };
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);
  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5e3);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { ref: sliderRef, className: "flex transition-transform duration-700 ease-in-out h-full", children: slides.map((slide, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex shrink-0 w-full h-full", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: slide.src,
          alt: slide.alt,
          className: "w-full h-full object-cover",
          loading: i === 0 ? "eager" : "lazy"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 text-white", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-1", children: slide.title }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-3 max-w-[90%] lg:max-w-[70%]", children: slide.description }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: slide.whatsappLink,
            className: "inline-flex items-center bg-red-600 text-white hover:bg-yellow-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:scale-95 transition duration-300",
            target: "_blank",
            "aria-label": `Consulta sobre ${slide.title} vía whatsapp`,
            children: [
              "Consultar ahora",
              /* @__PURE__ */ jsx("i", { className: "fa-brands fa-whatsapp" })
            ]
          }
        )
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          stopAutoSlide();
          updateSlide(currentSlide - 1);
          startAutoSlide();
        },
        className: "bg-black/40 absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full text-white transition transform cursor-pointer",
        title: "Slide anterior",
        "aria-label": "Anterior",
        children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-left" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          stopAutoSlide();
          updateSlide(currentSlide + 1);
          startAutoSlide();
        },
        className: "bg-black/40 absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full text-white transition transform cursor-pointer",
        title: "Slide siguiente",
        "aria-label": "Siguiente",
        children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-right" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10", children: slides.map((_, i) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          stopAutoSlide();
          updateSlide(i);
          startAutoSlide();
        },
        className: `w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white scale-110" : "bg-gray-300 opacity-70 hover:opacity-100"}`,
        "aria-label": `Ir al slide ${i + 1}`
      },
      i
    )) })
  ] });
};

const tours = [
  {
    title: "TOUR PERENÉ",
    days: "FULL DAY",
    price: 40,
    image: perene,
    description: "Aventura total: puente Kimiri, miradores, cataratas, pozas naturales y experiencia Asháninca. Salida 10:00 a.m. — Retorno 7:00 p.m."
  },
  {
    title: "TOUR OXAPAMPA",
    days: "FULL DAY",
    price: 50,
    image: oxapampa,
    description: "Aventura en Oxapampa: manantial La Virgen, casa museo, bailes tiroleses, artesanías, cueva Tunki y degustación en El Wharapo. Salida 9:00 a.m. — Retorno 7:30 p.m."
  },
  {
    title: "TOUR VILLA RICA",
    days: "FULL DAY",
    price: 50,
    image: villaRica,
    description: "Aventura en Villa Rica: laguna El Oconal, ictioterapia, cascada El León, mirador La Cumbre y experiencia en fundo cafetalero con degustación. Salida 9:00 a.m. — Retorno 7:00 p.m."
  },
  {
    title: "TOUR POZUZO Y OXAPAMPA",
    days: "FULL DAY",
    price: 120,
    image: pozuzo,
    description: "Aventura en Pozuzo: catarata Rayantambo, Portal de Bienvenida, colonia Austro-Alemana, pozas de Agua Salada, cervecería Dorcher Bier y puente Emperador Guillermo I. Salida 6:00 a.m. — Retorno 8:30 p.m."
  },
  {
    title: "TOUR INDIANA JONES",
    days: "FULL DAY",
    price: 50,
    image: puenteKimiri,
    description: "Aventura Indiana Jones: puente colgante Kimiri, caminata selvática, ruta por el río con rocas, lianas, toboganes naturales y pozas para un refrescante baño hasta las cataratas finales. Salida 11:00 a.m. — Retorno 5:00 p.m."
  },
  {
    title: "TOUR CHANCHAMAYO",
    days: "FULL DAY",
    price: 40,
    image: chanchamayo,
    description: "Aventura en San Ramón: caminata a la catarata Tirol, visita a la plaza, mariposario Zhaveta Yard con orquideario y mini zoológico, más degustación de licores y helados artesanales. Salida 10:30 a.m. — Retorno 6:00 p.m."
  },
  {
    title: "TOUR LA FORTUNA",
    days: "FULL DAY",
    price: 40,
    image: laFortuna,
    description: "Aventura en La Fortuna: caminata a su jacuzzi natural, pozas ecológicas y cascada, visita a la plaza de San Ramón, mariposario Zhaveta Yard, almuerzo típico y mirador de la Cruz. Salida 10:30 a.m. — Retorno 6:00 p.m."
  }
];
const Recomendation = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8", children: "Tours más vendidos" }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: tours.map((tour, index) => {
      const message = `¡Hola! Angel Aventura Tours. Estoy interesado en el paquete ${tour.days} - ${tour.title}.`;
      const waLink = `https://wa.me/51918024860?text=${encodeURIComponent(message)}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsx("img", { src: tour.image.src, alt: tour.title, className: "w-full h-56 object-cover rounded-t-lg" }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: tour.title }),
          /* @__PURE__ */ jsx("p", { className: "font-medium mb-2", children: tour.days }),
          /* @__PURE__ */ jsxs("p", { className: "text-red-600 font-bold mb-3", children: [
            "Desde S/. ",
            tour.price
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-light mb-4", children: tour.description }),
          /* @__PURE__ */ jsx("a", { href: waLink, target: "_blank", className: "inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-yellow-600", children: "Consultar ahora" })
        ] })
      ] }, index);
    }) })
  ] }) });
};

const socio1 = new Proxy({"src":"/_astro/mincetur.DEE8jV3I.png","width":1200,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/mincetur.png";
							}
							
							return target[name];
						}
					});

const socio2 = new Proxy({"src":"/_astro/promperu.Dp5CVADz.png","width":1200,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/promperu.png";
							}
							
							return target[name];
						}
					});

const socio3 = new Proxy({"src":"/_astro/dircetur.D8OQV_fm.png","width":1200,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/dircetur.png";
							}
							
							return target[name];
						}
					});

const socio4 = new Proxy({"src":"/_astro/ytuqueplanes.yaGRuPB2.png","width":1200,"height":240,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/ytuqueplanes.png";
							}
							
							return target[name];
						}
					});

const NuestrosSocios = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-semibold mb-10", children: "Socios Estratégicos" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center", children: [
      /* @__PURE__ */ jsx("img", { src: socio1.src, alt: "Mincetur", className: "w-full max-h-24 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: socio2.src, alt: "PromPerú", className: "w-full max-h-24 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: socio3.src, alt: "Dircetur Junin", className: "w-full max-h-24 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: socio4.src, alt: "Y tú que planes?", className: "w-full max-h-24 object-contain" })
    ] })
  ] }) });
};

const visa = new Proxy({"src":"/_astro/visa.BuJowzWk.avif","width":350,"height":150,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/visa.avif";
							}
							
							return target[name];
						}
					});

const mastercard = new Proxy({"src":"/_astro/mastercard.S3RVrdZ-.avif","width":350,"height":150,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/mastercard.avif";
							}
							
							return target[name];
						}
					});

const yape = new Proxy({"src":"/_astro/yape.CsdMIzF1.avif","width":350,"height":150,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/yape.avif";
							}
							
							return target[name];
						}
					});

const plin = new Proxy({"src":"/_astro/plin.Ca25J89q.avif","width":350,"height":150,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/plin.avif";
							}
							
							return target[name];
						}
					});

const paypal = new Proxy({"src":"/_astro/paypal.WbqKiSpe.avif","width":350,"height":150,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/paypal.avif";
							}
							
							return target[name];
						}
					});

const wester = new Proxy({"src":"/_astro/western-union.T7x_6XZw.avif","width":350,"height":150,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/western-union.avif";
							}
							
							return target[name];
						}
					});

const MediosDePago = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-semibold mb-10", children: "Medios de Pago" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-10", children: "Aceptamos los principales métodos de pago para tu comodidad." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-10 items-center justify-center", children: [
      /* @__PURE__ */ jsx("img", { src: visa.src, alt: "Visa", className: "w-full max-h-20 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: mastercard.src, alt: "Mastercard", className: "w-full max-h-20 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: yape.src, alt: "Yape", className: "w-full max-h-20 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: plin.src, alt: "Plin", className: "w-full max-h-20 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: wester.src, alt: "Plin", className: "w-full max-h-20 object-contain" }),
      /* @__PURE__ */ jsx("img", { src: paypal.src, alt: "Paypal", className: "w-full max-h-20 object-contain" })
    ] })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Slider", Slider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Slider", "client:component-export": "default" })} ${renderComponent($$result2, "Recomendation", Recomendation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Recomendation", "client:component-export": "default" })} ${renderComponent($$result2, "Socios", NuestrosSocios, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Socios", "client:component-export": "default" })} ${renderComponent($$result2, "Pagos", MediosDePago, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Pagos", "client:component-export": "default" })} ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/index.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
