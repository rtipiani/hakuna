import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_ByyNhJnE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B5YLM24h.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const nosotrosImg = new Proxy({"src":"/_astro/nosotros.D8tJQGAl.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/nosotros.png";
							}
							
							return target[name];
						}
					});

function Nosotros() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-center mb-12", children: "Sobre Nosotros" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-md rounded-lg p-8 md:p-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center mb-14", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: nosotrosImg.src,
            alt: "Ángel Aventura Chanchamayo",
            className: "w-full h-80 object-cover rounded-lg shadow-md"
          }
        ),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-700 leading-relaxed text-lg", children: [
          "En ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "Ángel Aventura Chanchamayo " }),
          "ofrecemos experiencias turísticas de alta calidad en la selva central del Perú, enfocadas en la exploración responsable y sostenible, promoviendo la conservación de la biodiversidad y el desarrollo local."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 rounded-lg shadow-sm text-center", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-bullseye text-red-600 text-4xl mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600 mb-3", children: "Misión" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Brindar un servicio turístico de alta calidad, satisfaciendo las necesidades de nuestros visitantes mediante la innovación constante." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 rounded-lg shadow-sm text-center", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-eye text-red-600 text-4xl mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600 mb-3", children: "Visión" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Trabajar bajo el concepto de calidad total, destacando por valores como confianza, integridad, creatividad e innovación." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 p-6 rounded-lg shadow-sm text-center", children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-hand-holding-heart text-red-600 text-4xl mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-red-600 mb-3", children: "Valores" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Honestidad, integridad, innovación y pasión por brindar un servicio excepcional." })
        ] })
      ] })
    ] })
  ] }) });
}

function PorqueElegirnos() {
  const items = [
    {
      icon: "fa-solid fa-gears",
      title: "Gestión profesional y tecnológica",
      text: "Trabajamos con sistemas internos que optimizan reservas y operaciones."
    },
    {
      icon: "fa-solid fa-van-shuttle",
      title: "Transporte propio",
      text: "Vehículos propios de 10, 19 y 25 asientos para un servicio seguro y confiable."
    },
    {
      icon: "fa-solid fa-tags",
      title: "Precios competitivos",
      text: "Relación calidad-precio que garantiza una experiencia excelente."
    },
    {
      icon: "fa-solid fa-map-location-dot",
      title: "Recojo en toda la ciudad",
      text: "Recojo en la ciudad de Chanchamayo, terminales, hoteles y puntos principales."
    },
    {
      icon: "fa-solid fa-robot",
      title: "Automatización de mensajes",
      text: "Envío automatizado de PDF turísticos, catálogos y recomendaciones."
    },
    {
      icon: "fa-solid fa-user-tie",
      title: "Asesoría personalizada",
      text: "Asignación de un ejecutivo comercial para cotizaciones y atención dedicada."
    },
    {
      icon: "fa-solid fa-sliders",
      title: "Flexibilidad operativa",
      text: "Tours todo incluido o servicios flexibles sin entradas, totalmente adaptables."
    },
    {
      icon: "fa-solid fa-credit-card",
      title: "Pagos fáciles y seguros",
      text: "Aceptamos transferencias, tarjetas, Yape, Plin y más métodos seguros."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-semibold text-center mb-12", children: [
      "¿Por qué ",
      /* @__PURE__ */ jsx("br", {}),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "Ángel Aventura Chanchamayo " }),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "es la mejor opción?"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsx("div", { className: "text-red-600 text-4xl mb-4 text-center", children: /* @__PURE__ */ jsx("i", { className: item.icon }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 text-center mb-2", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm leading-relaxed text-center", children: item.text })
    ] }, index)) })
  ] }) });
}

const cert1 = new Proxy({"src":"/_astro/certificacion1.7ReHEicO.png","width":672,"height":270,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/certificacion1.png";
							}
							
							return target[name];
						}
					});

const cert2 = new Proxy({"src":"/_astro/certificacion2.jiZY8iFg.png","width":545,"height":211,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/certificacion2.png";
							}
							
							return target[name];
						}
					});

function Certificacion() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-center mb-12", children: "Nuestras Certificaciones" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white p-6 rounded-xl shadow-md border border-gray-200", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: cert1.src,
          alt: "Certificación 1",
          className: "w-full h-auto object-contain rounded-lg"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white p-6 rounded-xl shadow-md border border-gray-200", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: cert2.src,
          alt: "Certificación 2",
          className: "w-full h-auto object-contain rounded-lg"
        }
      ) })
    ] })
  ] }) });
}

const bcp = new Proxy({"src":"/_astro/bcp.BGLiXTc3.png","width":1000,"height":306,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/pagos/bcp.png";
							}
							
							return target[name];
						}
					});

const bbva = new Proxy({"src":"/_astro/bbva.C8SpIEKP.png","width":3508,"height":1218,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/pagos/bbva.png";
							}
							
							return target[name];
						}
					});

const yape = new Proxy({"src":"/_astro/yape.CEiwUFo0.avif","width":1920,"height":1080,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/pagos/yape.avif";
							}
							
							return target[name];
						}
					});

const plin = new Proxy({"src":"/_astro/plin.DpgYZBLE.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/pagos/plin.png";
							}
							
							return target[name];
						}
					});

function MediosPago() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-wide", children: "Medios de Pago" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mt-3 mb-14 text-lg font-medium", children: "Aceptamos todo medio de pago" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-10 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-700 to-red-500 rounded-t-2xl" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-10 mb-10", children: [
          /* @__PURE__ */ jsx("img", { src: bcp.src, alt: "BCP", className: "h-14 object-contain drop-shadow-sm" }),
          /* @__PURE__ */ jsx("img", { src: bbva.src, alt: "BBVA", className: "h-14 object-contain drop-shadow-sm" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-red-600 mb-2", children: "BCP - Soles" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
                "N° Cuenta: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "41090399509027" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
                "CCI: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "002410190399509027" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
                "Titular: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "ANGEL AVENTURA CHANCHAMAYO" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-red-600 mb-2", children: "BBVA - Soles" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
                "N° Cuenta: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "0011-0814-0221427225" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
                "CCI: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "011-814-000221427225-10" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm", children: [
                "Titular: ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "KARINA DE LA CRUZ PAZCE" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl border border-gray-200 p-10 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-500 to-red-700 rounded-t-2xl" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-10 mb-10", children: [
          /* @__PURE__ */ jsx("img", { src: yape.src, alt: "Yape", className: "h-14 object-contain drop-shadow-sm" }),
          /* @__PURE__ */ jsx("img", { src: plin.src, alt: "Plin", className: "h-14 object-contain drop-shadow-sm" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mb-3 text-center", children: "Plin / Yape" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm text-center mb-2", children: "Número:" }),
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold text-red-600 text-center tracking-wider mb-4", children: "964 534 249" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-700 text-sm text-center", children: [
          "Titular: ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "KARINA DE LA CRUZ PAZCE" })
        ] })
      ] })
    ] })
  ] }) });
}

const rsImg = new Proxy({"src":"/_astro/responsabilidad.BR25b1fz.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/responsabilidad.png";
							}
							
							return target[name];
						}
					});

function ResponsabilidadSocial() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("img", { src: rsImg.src, alt: "Responsabilidad Social", className: "rounded-2xl shadow-xl object-cover w-full h-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-tr from-black/10 to-transparent rounded-2xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-tight", children: "Responsabilidad Social" }),
      /* @__PURE__ */ jsxs("p", { className: "mt-5 text-gray-700 text-lg leading-relaxed", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "MEJORANDO Y PRESERVANDO EL ACCESO" }),
        " ",
        "de una importante ruta turística de Chanchamayo."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-600 leading-relaxed text-base", children: "Creemos en el poder de impactar positivamente. Por eso trabajamos con responsabilidad social, promoviendo iniciativas que benefician a nuestra comunidad y al entorno." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 w-24 h-1 bg-red-600 rounded-full" })
    ] })
  ] }) });
}

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NosotrosAngel", Nosotros, {})} ${renderComponent($$result2, "Porque", PorqueElegirnos, {})} ${renderComponent($$result2, "Certificacion", Certificacion, {})} ${renderComponent($$result2, "MediosPagos", MediosPago, {})} ${renderComponent($$result2, "Responsabilidad", ResponsabilidadSocial, {})} ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/nosotros.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Nosotros,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
