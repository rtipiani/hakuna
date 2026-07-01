import React, { useState } from "react";
import chanchamayo from "../assets/images/chanchamayo.png";
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
        title: "Chanchamayo y Oxapampa",
        days: "2D/1N",
        image: perene,
        lista: [
            "Visita a Chanchamayo y Oxapampa",
            "Tour Cafetalero y Degustación",
            "Catarata Velo de Novia y Bayoz",
            "Comunidad Nativa Asháninka",
            "Cueva Tunki y Planta Lechera",
            "Alojamiento y Tours incluidos"
        ],
        precios: {
            normal: {
                alojamientoTours: { basico: 135, exclusivo: 180 },
                alojamientoToursBus: { basico: 285, exclusivo: 330 }
            },
            feriado: {
                alojamientoTours: { basico: 200, exclusivo: 250 },
                alojamientoToursBus: { basico: 420, exclusivo: 450 }
            }
        }
    },
    {
        title: "Chanchamayo y Oxapampa",
        days: "3D/2N",
        price: 390,
        image: villaRica,
        lista: [
            "Visita guiada a Oxapampa",
            "Excursión a la colonia Pozuzo",
            "Tour cafetalero en Villa Rica",
            "Catarata El León y Mirador",
            "Comunidad Nativa Asháninka",
            "Alojamiento y Tours incluidos"
        ],
        precios: {
            normal: {
                alojamientoTours: { basico: 390, exclusivo: 450 },
                alojamientoToursBus: { basico: 550, exclusivo: 610 }
            },
            feriado: {
                alojamientoTours: { basico: 450, exclusivo: 520 },
                alojamientoToursBus: { basico: 650, exclusivo: 720 }
            }
        }
    },
    {
        title: "Chanchamayo y Oxapampa",
        days: "4D/3N",
        price: 450,
        image: perene2,
        lista: [
            "Día 1: Valle del Perené y Cataratas",
            "Día 2: Oxapampa y sus encantos",
            "Día 3: Pozuzo, colonia austro-alemana",
            "Día 4: Ruta del Café en Villa Rica",
            "Alojamiento y Tours incluidos"
        ],
        precios: {
            normal: {
                alojamientoTours: { basico: 450, exclusivo: 520 },
                alojamientoToursBus: { basico: 610, exclusivo: 680 }
            },
            feriado: {
                alojamientoTours: { basico: 520, exclusivo: 600 },
                alojamientoToursBus: { basico: 710, exclusivo: 790 }
            }
        }
    },
    {
        title: "Chanchamayo y Oxapampa",
        days: "5D/4N",
        price: 395,
        image: pozuzo,
        lista: [
            "Día 1: Valle del Perené",
            "Día 2: Ruta del Café en Villa Rica",
            "Día 3: Chanchamayo Mágico",
            "Día 4: Oxapampa y sus encantos",
            "Día 5: Colonia Pozuzo",
            "Alojamiento y Tours incluidos"
        ],
        precios: {
            normal: {
                alojamientoTours: { basico: 395, exclusivo: 470 },
                alojamientoToursBus: { basico: 580, exclusivo: 650 }
            },
            feriado: {
                alojamientoTours: { basico: 460, exclusivo: 540 },
                alojamientoToursBus: { basico: 670, exclusivo: 750 }
            }
        }
    },
    {
        title: "Chanchamayo y Oxapampa",
        days: "6D/5N",
        price: 465,
        image: oxapampa,
        lista: [
            "Día 1: Valle del Perené",
            "Día 2: Ruta del Café en Villa Rica",
            "Día 3: Chanchamayo Mágico",
            "Día 4: Oxapampa y sus encantos",
            "Día 5: Colonia Pozuzo",
            "Día 6: Aventura Indiana Jones",
            "Alojamiento y Tours incluidos"
        ],
        precios: {
            normal: {
                alojamientoTours: { basico: 465, exclusivo: 540 },
                alojamientoToursBus: { basico: 630, exclusivo: 710 }
            },
            feriado: {
                alojamientoTours: { basico: 540, exclusivo: 620 },
                alojamientoToursBus: { basico: 750, exclusivo: 840 }
            }
        }
    }
];

// Galería independiente (abajo)
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const TourSelvaCentral = () => {
    const [selectedTourIndex, setSelectedTourIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cabecera de la Sección */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
                        Nuestras Rutas
                    </span>
                    <h1 className="text-2xl md:text-4xl font-extrabold text-brand-purple tracking-tight">
                        Tours Selva Central
                    </h1>
                    <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grilla de Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => {
                        const message = `¡Hola! Hakuna Matata Travel VIP. Estoy interesado en el tour ${tour.title} - ${tour.days}.`;
                        const waLink = `https://wa.me/51918024860?text=${encodeURIComponent(message)}`;

                        return (
                            <div 
                                key={index} 
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full"
                            >
                                {/* Contenedor de Imagen con Badge de Duración */}
                                <div className="relative overflow-hidden rounded-t-2xl aspect-video">
                                    <img 
                                        src={tour.image.src} 
                                        alt={tour.title} 
                                        loading="lazy" 
                                        className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    {/* Badge flotante de Duración */}
                                    <span className="absolute top-4 right-4 bg-brand-purple text-brand-yellow font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md z-10 border border-brand-yellow/10">
                                        <i className="fa-regular fa-clock mr-1"></i> {tour.days}
                                    </span>
                                </div>

                                {/* Cuerpo de la Tarjeta */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-brand-purple mb-4 group-hover:text-brand-orange transition-colors duration-300">
                                        {tour.title}
                                    </h3>
                                    
                                    {/* Lista de Actividades */}
                                    <ul className="text-left mb-6 space-y-2 flex-grow text-gray-500 font-light text-sm">
                                        {tour.lista.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <i className="fa-solid fa-circle-check text-brand-orange text-xs mt-1 shrink-0"></i>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Separador y Precio / Botón de Acción */}
                                    {tour.precios ? (
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <button 
                                                onClick={() => setSelectedTourIndex(index)}
                                                className="w-full flex items-center justify-center gap-2 bg-brand-purple text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-brand-orange transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                            >
                                                <i className="fa-solid fa-tags text-sm"></i>
                                                <span>Ver opciones de precios</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between mb-4">
                                                <div className="flex flex-col text-left">
                                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                                        Desde
                                                    </span>
                                                    <span className="text-2xl font-extrabold text-brand-orange">
                                                        S/. {tour.price}
                                                    </span>
                                                </div>
                                            </div>
                                            <a 
                                                href={waLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full flex items-center justify-center gap-2 bg-brand-purple text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-brand-orange transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                            >
                                                <i className="fa-brands fa-whatsapp text-lg"></i>
                                                <span>Consultar ahora</span>
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MODAL DE PRECIOS */}
            {selectedTourIndex !== null && tours[selectedTourIndex]?.precios && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
                    onClick={() => setSelectedTourIndex(null)}
                >
                    <div 
                        className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Cabecera del Modal */}
                        <div className="bg-brand-purple text-white px-5 py-3.5 flex justify-between items-center">
                            <div>
                                <h3 className="text-base font-medium">Opciones de Precios</h3>
                                <p className="text-[10px] text-brand-yellow font-normal">Tour {tours[selectedTourIndex].title} {tours[selectedTourIndex].days}</p>
                            </div>
                            <button 
                                onClick={() => setSelectedTourIndex(null)}
                                className="text-white hover:text-brand-orange transition text-xl p-1 cursor-pointer focus:outline-none"
                                aria-label="Cerrar modal"
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        {/* Contenido del Modal */}
                        <div className="p-4 overflow-y-auto space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* SECCIÓN TODO EL AÑO (VERDE) */}
                                <div className="border border-emerald-100 rounded-xl overflow-hidden shadow-xs flex flex-col">
                                    <div className="bg-emerald-50/85 px-3 py-1.5 border-b border-emerald-100 text-center">
                                        <span className="text-emerald-800 font-medium text-xs uppercase tracking-wider block">
                                            <i className="fa-solid fa-calendar-check mr-1.5"></i> Oferta Todo el Año
                                        </span>
                                    </div>
                                    <div className="p-3 space-y-3 flex-grow bg-white">
                                        {/* Subsección: Alojamiento + Tours */}
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-normal text-gray-400 uppercase tracking-wider block text-left">
                                                Alojamiento + Tours:
                                            </span>
                                            <div className="grid grid-cols-2 gap-2">
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.normal.alojamientoTours.basico}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.normal.alojamientoTours.basico}</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%28Exclusivo%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.normal.alojamientoTours.exclusivo}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.normal.alojamientoTours.exclusivo}</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        {/* Subsección: Alojamiento + Tours + Bus */}
                                        <div className="space-y-1 pt-1.5 border-t border-gray-100">
                                            <span className="text-[10px] font-normal text-gray-400 uppercase tracking-wider block text-left">
                                                Alojamiento + Tours + Bus:
                                            </span>
                                            <div className="grid grid-cols-2 gap-2">
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.normal.alojamientoToursBus.basico}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.normal.alojamientoToursBus.basico}</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28Exclusivo%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.normal.alojamientoToursBus.exclusivo}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.normal.alojamientoToursBus.exclusivo}</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SECCIÓN FERIADOS (ROJO) */}
                                <div className="border border-red-100 rounded-xl overflow-hidden shadow-xs flex flex-col">
                                    <div className="bg-red-50/85 px-3 py-1.5 border-b border-red-100 text-center">
                                        <span className="text-red-800 font-medium text-xs uppercase tracking-wider block">
                                            <i className="fa-solid fa-fire mr-1.5"></i> Ofertas de Feriado
                                        </span>
                                    </div>
                                    <div className="p-3 space-y-3 flex-grow bg-white">
                                        {/* Subsección: Alojamiento + Tours */}
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-normal text-gray-400 uppercase tracking-wider block text-left">
                                                Alojamiento + Tours:
                                            </span>
                                            <div className="grid grid-cols-2 gap-2">
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.feriado.alojamientoTours.basico}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.feriado.alojamientoTours.basico}</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%28Exclusivo%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.feriado.alojamientoTours.exclusivo}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.feriado.alojamientoTours.exclusivo}</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        {/* Subsección: Alojamiento + Tours + Bus */}
                                        <div className="space-y-1 pt-1.5 border-t border-gray-100">
                                            <span className="text-[10px] font-normal text-gray-400 uppercase tracking-wider block text-left">
                                                Alojamiento + Tours + Bus:
                                            </span>
                                            <div className="grid grid-cols-2 gap-2">
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.feriado.alojamientoToursBus.basico}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.feriado.alojamientoToursBus.basico}</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20${encodeURIComponent(tours[selectedTourIndex].title)}%20${encodeURIComponent(tours[selectedTourIndex].days)}%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28Exclusivo%29%2A%20por%20S%2F.%20${tours[selectedTourIndex].precios?.feriado.alojamientoToursBus.exclusivo}.`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios?.feriado.alojamientoToursBus.exclusivo}</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mensaje de Términos y Condiciones */}
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex gap-2.5 text-left">
                                <i className="fa-solid fa-circle-info text-brand-orange text-base mt-0.5 shrink-0"></i>
                                <div className="text-[10.5px] leading-normal text-gray-500 space-y-0.5">
                                    <p className="font-medium text-gray-700">Información importante sobre las tarifas:</p>
                                    <p>• Tarifas por persona base habitación doble/matrimonial. Básico incluye alojamiento estándar; Exclusivo incluye hoteles premium.</p>
                                </div>
                            </div>
                        </div>

                        {/* Pie del Modal */}
                        <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex justify-end">
                            <button 
                                onClick={() => setSelectedTourIndex(null)}
                                className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-xl text-xs shadow-xs transition duration-200 cursor-pointer"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TourSelvaCentral;
