import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmF1WQap.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as g1, a as g2, b as g3, c as g4, d as g5, e as g6, f as g7, h as g8, i as g9, j as g10, k as g11, l as g12 } from '../chunks/esc15_Cw49ojp6.mjs';
import { $ as $$Layout } from '../chunks/Layout_T1GHeZ74.mjs';
export { renderers } from '../renderers.mjs';

const esc = new Proxy({"src":"/_astro/esc-1.D7B9KBfH.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/escolares/esc-1.png";
							}
							
							return target[name];
						}
					});

const esc2 = new Proxy({"src":"/_astro/esc2.CSP2Yoku.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/escolares/esc2.png";
							}
							
							return target[name];
						}
					});

const esc3 = new Proxy({"src":"/_astro/esc3.CUZ1gM-v.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/escolares/esc3.png";
							}
							
							return target[name];
						}
					});

const tours = [
  {
    title: "PERENÉ - OXAPAMPA - POZUZO - VILLA RICA",
    days: "4D/3N",
    price: 650,
    image: esc,
    description: "Una experiencia educativa y divertida en la Selva Central, perfecta para estudiantes que buscan aprender, explorar y disfrutar rodeados de naturaleza."
  },
  {
    title: "PERENE - OXAPAMPA - POZUZO - VILLA RICA - INDIANA JONES",
    days: "5D/4N",
    price: 830,
    image: esc2,
    description: "Un viaje escolar de aventura y aprendizaje por la Selva Central, explorando ciudades emblemáticas y culminando con la emocionante experiencia Indiana Jones."
  },
  {
    title: "VILLA RICA - OXAPAMPA - POZUZO",
    days: "3D/2N",
    price: 600,
    image: esc3,
    description: "Una experiencia escolar llena de naturaleza y cultura, recorriendo Villa Rica, Oxapampa y Pozuzo en un viaje educativo por la Selva Central."
  }
];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
const Recomendation = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8", children: [
      "Tours ",
      /* @__PURE__ */ jsx("br", {}),
      " para escolares"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8", children: tours.map((tour, index) => {
      const message = `¡Hola! Angel Aventura Tours. Estoy interesado en el paquete ${tour.days} - ${tour.title}.`;
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
          /* @__PURE__ */ jsxs("p", { className: "text-red-600 font-bold mb-3", children: [
            "Desde S/. ",
            tour.price
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-light mb-4", children: tour.description }),
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

const $$Escolares = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Viajes de Promoci\xF3n y Escolares | Selva Central | Angel Aventura", "description": "Organizamos el mejor viaje de promoci\xF3n a la Selva Central. Seguridad, diversi\xF3n y aprendizaje para grupos escolares con gu\xEDas especializados." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "TourEscolares", Recomendation, {})} </main> ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/escolares.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/escolares.astro";
const $$url = "/escolares";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Escolares,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
