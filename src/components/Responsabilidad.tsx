import rsImg from "../assets/images/responsabilidad.png";

export default function ResponsabilidadSocial() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

                <div className="relative">
                    <img src={rsImg.src} alt="Responsabilidad Social" className="rounded-2xl shadow-xl object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent rounded-2xl"></div>
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Responsabilidad Social
                    </h2>

                    <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                        <span className="font-semibold text-red-600">
                            MEJORANDO Y PRESERVANDO EL ACCESO
                        </span>{" "}
                        de una importante ruta turística de Chanchamayo.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed text-base">
                        Creemos en el poder de impactar positivamente. Por eso trabajamos con responsabilidad social, promoviendo iniciativas que benefician a nuestra comunidad y al entorno.
                    </p>

                    <div className="mt-8 w-24 h-1 bg-red-600 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}