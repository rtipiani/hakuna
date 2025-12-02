import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_ByyNhJnE.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { p as perene, o as oxapampa, v as villaRica, a as pozuzo, b as puenteKimiri, c as chanchamayo, l as laFortuna } from '../chunks/la-fortuna_C1m9C7LR.mjs';
import { $ as $$Layout } from '../chunks/Layout_B5YLM24h.mjs';
export { renderers } from '../renderers.mjs';

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
    description: "Aventura en Oxapampa: canopy opcional, manantial La Virgen, casa museo, bailes tiroleses, artesanías, cueva Tunki y degustación en El Wharapo. Salida 9:00 a.m. — Retorno 7:30 p.m."
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
    description: "Aventura en Pozuzo: catarata Rayantambo, Portal de Bienvenida, colonia austro-alemana, pozas de Agua Salada, cervecería Dorcher Bier y puente Emperador Guillermo I. Salida 6:00 a.m. — Retorno 8:30 p.m."
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

const $$FullDay = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TourFullDay", Recomendation, {})} ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/full-day.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/full-day.astro";
const $$url = "/full-day";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$FullDay,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
