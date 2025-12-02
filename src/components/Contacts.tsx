import { actions } from "astro:actions";
import { useState } from "react";

export default function Contactanos() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
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
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error capturado:", error);
      setMessageType("error");
      setMessage("Error al enviar el mensaje. Por favor intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm">
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
          Escríbenos y te responderemos a la brevedad.
        </p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                className="block text-gray-700 font-semibold mb-2" 
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                required
                minLength={2}
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
              />
            </div>

            <div>
              <label 
                className="block text-gray-700 font-semibold mb-2" 
                htmlFor="email"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 disabled:bg-gray-100 disabled:cursor-not-allowed transition"
              />
            </div>

            <div>
              <label 
                className="block text-gray-700 font-semibold mb-2" 
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                required
                minLength={10}
                disabled={loading}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed transition"
              ></textarea>
            </div>

            {message && (
              <div 
                className={`p-4 rounded-xl font-medium transition-all ${
                  messageType === "success" 
                    ? "bg-green-100 text-green-800 border border-green-200" 
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {messageType === "success" ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span>{message}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-red-500 transition-all transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                "Enviar Mensaje"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}