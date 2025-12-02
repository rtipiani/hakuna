import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_ByyNhJnE.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as g1, a as g2, b as g3, c as g4, d as g5, e as g6, f as g7, h as g8, i as g9, j as g10, k as g11, l as g12 } from '../chunks/esc15_Cw49ojp6.mjs';
import { $ as $$Layout } from '../chunks/Layout_DJKFbqjQ.mjs';
export { renderers } from '../renderers.mjs';

const mirador = new Proxy({"src":"/_astro/cruz-chanchamayo.DZ_RUyM_.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/cruz-chanchamayo.png";
							}
							
							return target[name];
						}
					});

const catarata = new Proxy({"src":"/_astro/catarata-bayoz.C7VOSKMD.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/catarata-bayoz.png";
							}
							
							return target[name];
						}
					});

const zoologico = new Proxy({"src":"/_astro/gallito-de-las-rocas.DJHzzlaz.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/gallito-de-las-rocas.png";
							}
							
							return target[name];
						}
					});

const tours = [
  {
    title: "CHANCHAMAYO",
    days: "Salida 10:30AM",
    lista: [
      "Mariposario",
      "Mirador Cruz de Chanchamayo",
      "Catarata Tirol",
      "Degustación de helados orgánicos",
      "Degustación de café"
    ],
    image: mirador
  },
  {
    title: "PERENÉ",
    days: "Salida 10:00AM",
    lista: [
      "Puente colgante Kimiri",
      "Perfil del nativo dormido",
      "Reino del machetero",
      "Catarata Bayoz",
      "Catarata velo de la novia",
      "Comunidad nativa Ashaninka"
    ],
    image: catarata
  },
  {
    title: "LA FORTUNA",
    days: "Salida 11:00AM",
    lista: [
      "Mirador cruz de Chanchamayo",
      "Zoológico gallito de las rocas",
      "Cascadas la fortuna",
      "Jacuzzi natural",
      "Plaza de san Ramón",
      "Puente Herrería"
    ],
    image: zoologico
  }
];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
const Recomendation = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8", children: [
      "Tours ",
      /* @__PURE__ */ jsx("br", {}),
      " Chanchamayo"
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
        className: "h-32 w-full object-cover rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
      },
      index
    )) })
  ] }) });
};

const $$Chanchamayo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourChanchamayo", Recomendation, {})} ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/chanchamayo.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/chanchamayo.astro";
const $$url = "/chanchamayo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Chanchamayo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
