import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BmF1WQap.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { a as actions } from '../chunks/virtual_Dq6OZqCc.mjs';
import { useTransition, useState } from 'react';
import { $ as $$Layout } from '../chunks/Layout_T1GHeZ74.mjs';
export { renderers } from '../renderers.mjs';

function Contacts() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const { data, error } = await actions.send(formData);
      if (error) {
        setErrorMsg(error.message);
        setSuccess(false);
      } else {
        setSuccess(true);
        setErrorMsg("");
        e.target.reset();
      }
    });
  };
  return /* @__PURE__ */ jsx("section", { className: "w-full py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-center text-gray-800", children: "Contáctanos" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl", children: "Escríbenos y te responderemos a la brevedad." }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-gray-700 font-semibold mb-2", children: "Nombre" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "name",
            type: "text",
            name: "name",
            placeholder: "Tu nombre",
            required: true,
            className: "w-full px-4 py-3 rounded-xl border border-gray-300"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-gray-700 font-semibold mb-2", children: "Correo" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "email",
            type: "email",
            name: "email",
            placeholder: "ejemplo@correo.com",
            required: true,
            className: "w-full px-4 py-3 rounded-xl border border-gray-300"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-gray-700 font-semibold mb-2", children: "Mensaje" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            placeholder: "Escribe tu mensaje...",
            rows: 5,
            required: true,
            className: "w-full px-4 py-3 rounded-xl border border-gray-300 resize-none"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: isPending,
          className: "w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition disabled:opacity-60",
          children: isPending ? "Enviando..." : "Enviar mensaje"
        }
      ),
      errorMsg && /* @__PURE__ */ jsx("p", { className: "text-red-600 mt-3", children: errorMsg }),
      success && /* @__PURE__ */ jsx("p", { className: "text-green-600 mt-3", children: "¡Mensaje enviado correctamente!" })
    ] }) })
  ] }) });
}

function Mapa() {
  return /* @__PURE__ */ jsx("section", { className: "w-full py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm", children: "Nuestra Ubicación" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl", children: "Encuéntranos en Aventura Sobre Arena" }),
    /* @__PURE__ */ jsx("div", { className: "w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-red-100", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7661371125682!2d-75.32858829999999!3d-11.0561525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910974ba65998275%3A0x68675f5c466b7533!2sAngel%20Aventura%20Chanchamayo!5e0!3m2!1ses!2spe!4v1763954184133!5m2!1ses!2spe",
        width: "100%",
        height: "100%",
        style: { border: 0 },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "Mapa de Aventura Sobre Arena"
      }
    ) })
  ] }) });
}

const $$Contactanos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cont\xE1ctanos | Angel Aventura Tours | Chanchamayo y Oxapampa", "description": "\xBFTienes dudas? Cont\xE1ctanos para planificar tu viaje a la Selva Central. Atenci\xF3n personalizada por WhatsApp y correo electr\xF3nico." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Contacts", Contacts, {})} ${renderComponent($$result2, "Mapa", Mapa, {})} </main> ` })}`;
}, "D:/Vercel/angelaventuratours/src/pages/contactanos.astro", void 0);

const $$file = "D:/Vercel/angelaventuratours/src/pages/contactanos.astro";
const $$url = "/contactanos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contactanos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
