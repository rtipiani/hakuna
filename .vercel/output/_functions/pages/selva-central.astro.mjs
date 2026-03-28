import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmF1WQap.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as g1, a as g2, b as g3, c as g4, d as g5, e as g6, f as g7, h as g8, i as g9, j as g10, k as g11, l as g12 } from '../chunks/esc15_Cw49ojp6.mjs';
import { $ as $$Layout } from '../chunks/Layout_T1GHeZ74.mjs';
export { renderers } from '../renderers.mjs';

const perene = new Proxy({"src":"/_astro/perene.BUz1u9SV.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/turisticos/perene.png";
							}
							
							return target[name];
						}
					});

const villaRica = new Proxy({"src":"/_astro/villa-rica.D6vsBq5G.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/turisticos/villa-rica.png";
							}
							
							return target[name];
						}
					});

const pozuzo = new Proxy({"src":"/_astro/pozuzo.C-qTk-sK.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/turisticos/pozuzo.png";
							}
							
							return target[name];
						}
					});

const oxapampa = new Proxy({"src":"/_astro/oxapampa.BnBu8t-t.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/turisticos/oxapampa.png";
							}
							
							return target[name];
						}
					});

const perene2 = new Proxy({"src":"/_astro/perene2.wH0j6HtD.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/turisticos/perene2.png";
							}
							
							return target[name];
						}
					});

const villarica2 = new Proxy({"src":"/_astro/villarica2.A-iAbbQt.png","width":1200,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Vercel/angelaventuratours/src/assets/images/turisticos/villarica2.png";
							}
							
							return target[name];
						}
					});

const tours = [
  {
    title: "PERENÉ – OXAPAMPA",
    days: "2D/1N",
    price: 135,
    image: perene
  },
  {
    title: "OXAPAMPA – POZUZO – VILLA RICA",
    days: "3D/2N",
    price: 390,
    image: villaRica
  },
  {
    title: "PERENÉ – VILLA RICA – CHANCHAMAYO – OXAPAMPA – POZUZO",
    days: "5D/4N",
    price: 395,
    image: pozuzo
  },
  {
    title: "PERENÉ – VILLA RICA – CHANCHAMAYO – OXAPAMPA – POZUZO – INDIANA JONES",
    days: "6D/5N",
    price: 465,
    image: oxapampa
  },
  {
    title: "OXAPAMPA – POZUZO – VILLA RICA – PERENÉ",
    days: "4D/3N",
    price: 450,
    image: perene2
  },
  {
    title: "OXAPAMPA – POZUZO – VILLA RICA – PERENÉ",
    days: "4D/3N",
    price: 450,
    image: villarica2
  }
];
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];
const Recomendation = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8", children: [
      "Tours ",
      /* @__PURE__ */ jsx("br", {}),
      " Selva Central"
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
          /* @__PURE__ */ jsxs("p", { className: "text-red-600 font-bold mb-3", children: [
            "Desde S/. ",
            tour.price
          ] }),
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

const $$SelvaCentral = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Turismo en Selva Central | Paquetes de Viaje Completos", "description": "Explora lo mejor de la Selva Central del Per\xFA: Chanchamayo, Oxapampa, Pozuzo y m\xE1s con nuestros paquetes tur\xEDsticos certificados por MINCETUR." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "TourSelvaCentral", Recomendation, {})} </main> ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/selva-central.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/selva-central.astro";
const $$url = "/selva-central";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SelvaCentral,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
