export default function Mapa() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm">
                    Nuestra Ubicación
                </h2>
                <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
                    Encuéntranos en Aventura Sobre Arena
                </p>

                <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-red-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7661371125682!2d-75.32858829999999!3d-11.0561525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910974ba65998275%3A0x68675f5c466b7533!2sAngel%20Aventura%20Chanchamayo!5e0!3m2!1ses!2spe!4v1763954184133!5m2!1ses!2spe"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de Aventura Sobre Arena"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
