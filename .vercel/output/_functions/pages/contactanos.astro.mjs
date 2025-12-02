import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_ByyNhJnE.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { a as actions } from '../chunks/virtual_B0SgGv2A.mjs';
import { useState } from 'react';
import { $ as $$Layout } from '../chunks/Layout_B5YLM24h.mjs';
export { renderers } from '../renderers.mjs';

function Contactanos() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };
    try {
      const result = await actions.send(data);
      if (result.error) {
        setMessageType("error");
        setMessage(result.error.message || "Error al enviar el mensaje");
        console.error("Error de la acción:", result.error);
      } else {
        setMessageType("success");
        setMessage("¡Mensaje enviado exitosamente! Te contactaremos pronto.");
        form.reset();
        setTimeout(() => setMessage(""), 5e3);
      }
    } catch (error) {
      console.error("Error capturado:", error);
      setMessageType("error");
      setMessage("Error al enviar el mensaje. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "w-full py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm", children: "Contáctanos" }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl", children: "Escríbenos y te responderemos a la brevedad." }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-gray-700 font-semibold mb-2",
            htmlFor: "name",
            children: "Nombre"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Tu nombre completo",
            required: true,
            minLength: 2,
            disabled: loading,
            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-gray-700 font-semibold mb-2",
            htmlFor: "email",
            children: "Correo electrónico"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            placeholder: "ejemplo@correo.com",
            required: true,
            disabled: loading,
            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-gray-700 font-semibold mb-2",
            htmlFor: "message",
            children: "Mensaje"
          }
        ),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            id: "message",
            name: "message",
            placeholder: "Escribe tu mensaje aquí...",
            required: true,
            minLength: 10,
            disabled: loading,
            rows: 5,
            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed transition"
          }
        )
      ] }),
      message && /* @__PURE__ */ jsx(
        "div",
        {
          className: `p-4 rounded-xl font-medium transition-all ${messageType === "success" ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"}`,
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            messageType === "success" ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { children: message })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-red-500 transition-all transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100",
          children: loading ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-5 w-5", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }),
              /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
            ] }),
            "Enviando..."
          ] }) : "Enviar Mensaje"
        }
      )
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contacts", Contactanos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Vercel/angelaventuratours/src/components/Contacts", "client:component-export": "default" })} ${renderComponent($$result2, "Mapa", Mapa, {})} ` })}`;
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
