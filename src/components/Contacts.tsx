import { actions } from "astro:actions";

export default function Contactanos() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide">
          Contáctanos
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
          Escríbenos y te responderemos a la brevedad.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-3xl mx-auto">

          {/* FORMULARIO REAL USANDO ASTRO ACTION */}
          <form 
            action={actions.send} method="post" 
            className="space-y-6"
          >

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                required
                minLength={2}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                required
                minLength={10}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-red-500 transition-all transform hover:scale-[1.02]"
            >
              Enviar Mensaje
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
