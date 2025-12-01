import perene from "../assets/images/turisticos/perene.png";
import villaRica from "../assets/images/turisticos/villa-rica.png";
import pozuzo from "../assets/images/turisticos/pozuzo.png";
import oxapampa from "../assets/images/turisticos/oxapampa.png";
import perene2 from "../assets/images/turisticos/perene2.png";
import villarica2 from "../assets/images/turisticos/villarica2.png";

// Galería general
import g1 from "../assets/images/escolares/esc4.png";
import g2 from "../assets/images/escolares/esc5.png";
import g3 from "../assets/images/escolares/esc6.png";
import g4 from "../assets/images/escolares/esc7.png";
import g5 from "../assets/images/escolares/esc8.png";
import g6 from "../assets/images/escolares/esc9.png";
import g7 from "../assets/images/escolares/esc10.png";
import g8 from "../assets/images/escolares/esc11.png";
import g9 from "../assets/images/escolares/esc12.png";
import g10 from "../assets/images/escolares/esc13.png";
import g11 from "../assets/images/escolares/esc14.png";
import g12 from "../assets/images/escolares/esc15.png";

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

// Galería independiente (abajo)
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const Recomendation = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8">
                    Tours <br /> Selva Central
                </h2>

                {/* Cards */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {tours.map((tour, index) => {
                        const message = `¡Hola! Angel Aventura Tours. Estoy interesado en el tour ${tour.title} - ${tour.days}.`;
                        const waLink = `https://wa.me/51918024860?text=${encodeURIComponent(message)}`;

                        return (
                            <div key={index} className="bg-white rounded-lg shadow-md">
                                {/* Imagen */}
                                <img
                                    src={tour.image.src}
                                    alt={tour.title}
                                    className="w-full h-56 object-cover rounded-t-lg"
                                />

                                <div className="p-6">
                                    {/* Título */}
                                    <h3 className="text-xl font-semibold mb-2">
                                        {tour.title}
                                    </h3>

                                    {/* Días */}
                                    <p className="font-medium text-yellow-600 mb-2">
                                        {tour.days}
                                    </p>

                                    <p className="text-red-600 font-bold mb-3">
                                        Desde S/. {tour.price}
                                    </p>

                                    {/* Botón */}
                                    <a
                                        href={waLink}
                                        target="_blank"
                                        className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-yellow-600"
                                    >
                                        Consultar ahora
                                        <i className="fa-brands fa-whatsapp ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 🔻 Galería ABAJO */}
                <h3 className="text-2xl font-semibold mt-16 mb-6">Experiencias</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={`Galería ${index}`}
                            className="h-32 w-full object-cover rounded-lg shadow-sm hover:scale-105 transition-transform cursor-pointer"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recomendation;
