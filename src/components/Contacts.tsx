import { actions } from "astro:actions";
import { useState, useTransition } from "react";

export default function Contacts() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        (e.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800">
          Contáctanos
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
          Escríbenos y te responderemos a la brevedad.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Correo
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje..."
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition disabled:opacity-60"
            >
              {isPending ? "Enviando..." : "Enviar mensaje"}
            </button>

            {errorMsg && (
              <p className="text-red-600 mt-3">{errorMsg}</p>
            )}

            {success && (
              <p className="text-green-600 mt-3">
                ¡Mensaje enviado correctamente!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


