import img1 from "../assets/images/chanchamayo/chanchamayo-1.png";
import img2 from "../assets/images/chanchamayo/chanchamayo-2.png";
import img3 from "../assets/images/chanchamayo/chanchamayo-3.png";
import img4 from "../assets/images/chanchamayo/chanchamayo-4.png";
import img5 from "../assets/images/chanchamayo/chanchamayo-5.png";
import img6 from "../assets/images/chanchamayo/chanchamayo-6.png";

export default function TourChanchamayo() {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm">
                    Tour a Chanchamayo
                </h2>

                <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
                    Naturaleza, aventura y biodiversidad en un solo día.
                </p>

                <div className="relative bg-linear-to-br from-red-50 to-red-50 p-10 rounded-3xl shadow-xl border border-red-100">

                    <h3 className="text-3xl font-bold text-red-700 mb-10 text-center">
                        Itinerario del Tour
                    </h3>

                    <div className="space-y-12 relative">

                        <div className="absolute left-7 top-0 bottom-0 w-1 bg-red-500/80 rounded-full"></div>

                        {[
                            [
                                "📍 Salida – 10:30 AM",
                                "Inicio del recorrido hacia el distrito de San Ramón."
                            ],
                            [
                                "🥾 Caminata al Tirol",
                                "Caminata de 35 minutos por un hermoso sendero rodeado de vegetación que nos llevará a la Catarata del Tirol."
                            ],
                            [
                                "🏛 Plaza de San Ramón",
                                "Visita a la plaza principal del distrito, ideal para fotografías y descanso breve."
                            ],
                            [
                                "🦋 Mariposario Zhaveta Yard",
                                "Recorrido por el mariposario que cuenta con orquideario, vivero de mariposas y un mini zoológico."
                            ],
                            [
                                "🍨 Degustaciones",
                                "Degustación de licores exóticos y helados artesanales de la zona."
                            ],
                            [
                                "🔙 Retorno – 6:00 PM",
                                "Retorno a Chanchamayo y fin del tour."
                            ],
                        ].map(([title, text], i) => (
                            <div key={i} className="relative pl-20">
                                <div className="absolute left-4 top-2 w-10 h-10 bg-red-600 rounded-full shadow-md border-4 border-white"></div>

                                <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                                <p className="text-gray-700 mt-2 leading-relaxed">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="rounded-3xl shadow-xl overflow-hidden border-[6px] border-transparent bg-linear-to-br from-white to-white p-[3px] hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={img.src}
                                alt={`Tour Chanchamayo imagen ${i + 1}`}
                                className="w-full h-56 object-cover rounded-2xl"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
