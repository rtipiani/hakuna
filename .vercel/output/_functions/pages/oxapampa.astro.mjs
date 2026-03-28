import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmF1WQap.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as g1, a as g2, b as g3, c as g4, d as g5, e as g6, f as g7, h as g8, i as g9, j as g10, k as g11, l as g12 } from '../chunks/esc15_Cw49ojp6.mjs';
import { $ as $$Layout } from '../chunks/Layout_T1GHeZ74.mjs';
export { renderers } from '../renderers.mjs';

const puente = new Proxy({"src":"/_astro/puente-paucartambo.CY4wzptI.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/puente-paucartambo.png";
							}
							
							return target[name];
						}
					});

const iglesia = new Proxy({"src":"/_astro/iglesia-san-jose.fDWVFLMN.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/iglesia-san-jose.png";
							}
							
							return target[name];
						}
					});

const catarata = new Proxy({"src":"/_astro/catarata-leon-dormido.Zk9zjj7h.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/catarata-leon-dormido.png";
							}
							
							return target[name];
						}
					});

const tours = [
  {
    title: "OXAPAMPA",
    days: "Salida 9:00AM",
    lista: [
      "Puente Paucartambo",
      "Manantial La Virgen (opcional)",
      "Casa museo Schlaefli",
      "Turismo vivencial (ordeño de vacas)",
      "Café Tirolés (danzas típicas)",
      "Tunqui cueva (opcional)",
      "Parque temático de chontabamba",
      "Casas típicas Austro Alemanas",
      "Centro de artesanías",
      "Exposición apícola",
      "Iglesia Santa Rosa (plaza principal)"
    ],
    image: puente
  },
  {
    title: "POZUZO",
    days: "2D/1N",
    lista: [
      "Catarata Rayantambo",
      "Iglesia San José",
      "Barrio típico Prusia",
      "Puente colgante Emperador Guillermo I",
      "Fábrica de cerveza artesanal",
      "Pozas turquesas de agua salada",
      "Museo Schafferer (opcional)"
    ],
    image: iglesia
  },
  {
    title: "VILLA RICA",
    days: "Salida 9:00AM",
    lista: [
      "Plaza principal, san Luis de Shuaro",
      "Puente Paucartambo",
      "Catarata el león dormido",
      "Mirador de Villa Rica",
      "Laguna el Oconal (paseo en canoa)",
      "Ictioterapia",
      "Plaza principal de Villa Rica",
      "Degustación de café"
    ],
    image: catarata
  }
];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
const Recomendation = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8", children: [
      "Tours ",
      /* @__PURE__ */ jsx("br", {}),
      " Oxapampa"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: tours.map((tour, index) => {
      const message = `¡Hola! Angel Aventura Tours. Estoy interesado en el tour ${tour.title} - ${tour.days}.`;
      const waLink = `https://wa.me/51918024860?text=${encodeURIComponent(message)}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: tour.image.src,
            alt: tour.title,
            loading: "lazy",
            className: "w-full h-56 object-cover rounded-t-lg"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: tour.title }),
          /* @__PURE__ */ jsx("p", { className: "font-medium text-yellow-600 mb-2", children: tour.days }),
          /* @__PURE__ */ jsx("ul", { className: "text-left mb-4 list-disc list-inside text-gray-700", children: tour.lista.map((item, i) => /* @__PURE__ */ jsx("li", { children: item }, i)) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waLink,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-yellow-600",
              children: [
                "Consultar ahora",
                /* @__PURE__ */ jsx("i", { className: "fa-brands fa-whatsapp ml-1" })
              ]
            }
          )
        ] })
      ] }, index);
    }) }),
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mt-16 mb-6", children: "Experiencias" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4", children: galleryImages.map((img, index) => /* @__PURE__ */ jsx(
      "img",
      {
        src: img.src,
        alt: `Galería ${index}`,
        loading: "lazy",
        className: "h-32 w-full object-cover rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
      },
      index
    )) })
  ] }) });
};

const $$Oxapampa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours en Oxapampa | Naturaleza y Tradiciones Austro-Alemanas", "description": "Descubre el encanto de Oxapampa. Vive la armon\xEDa entre monta\xF1as, tradiciones europeas y la exuberante selva central con Angel Aventura Tours." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "TourOxapampa", Recomendation, {})} </main> ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/oxapampa.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/oxapampa.astro";
const $$url = "/oxapampa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Oxapampa,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
