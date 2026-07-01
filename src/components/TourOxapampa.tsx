import React, { useState } from "react";
import iglesia from "../assets/images/iglesia-san-jose.png";

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
        title: "Pozuzo y Oxapampa",
        days: "2D/1N",
        price: 135,
        lista: [
            "Catarata Rayantambo",
            "Iglesia San José",
            "Barrio típico Prusia",
            "Puente colgante Emperador Guillermo I",
            "Fábrica de cerveza artesanal",
            "Pozas turquesas de agua salada",
            "Museo Schafferer (opcional)"
        ],
        image: iglesia,
        hasModal: true
    }
];

// Galería independiente (abajo)
const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const TourOxapampa = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cabecera de la Sección */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
                        Nuestras Rutas
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-brand-purple tracking-tight">
                        Paquetes Turísticos en Oxapampa
                    </h2>
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
                                    {tour.hasModal ? (
                                        <div className="border-t border-gray-100 pt-4 mt-auto">
                                            <button 
                                                onClick={() => setIsModalOpen(true)}
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

            {/* MODAL DE PRECIOS PARA POZUZO 2D/1N */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div 
                        className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Cabecera del Modal */}
                        <div className="bg-brand-purple text-white px-5 py-3.5 flex justify-between items-center">
                            <div>
                                <h3 className="text-base font-medium">Opciones de Precios</h3>
                                <p className="text-[10px] text-brand-yellow font-normal">Tour Oxapampa y Pozuzo 2D/1N</p>
                            </div>
                            <button 
                                onClick={() => setIsModalOpen(false)}
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
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20135."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 135</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%28Exclusivo%29%2A%20por%20S%2F.%20180."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 180</span>
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
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20285."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 285</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20Todo%20el%20A%C3%B1o%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28Exclusivo%29%2A%20por%20S%2F.%20330."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 330</span>
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
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20200."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 200</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%28Exclusivo%29%2A%20por%20S%2F.%20250."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 250</span>
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
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28B%C3%A1sico%29%2A%20por%20S%2F.%20420."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 420</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href="https://wa.me/51918024860?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quiero%20reservar%20el%20Tour%20Oxapampa%20y%20Pozuzo%202D%2F1N%20en%20la%20opci%C3%B3n%20%2A%C3%93ferta%20de%20Feriado%20-%20Alojamiento%20%2B%20Tours%20%2B%20Bus%20%28Exclusivo%29%2A%20por%20S%2F.%20450."
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. 450</span>
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
                                onClick={() => setIsModalOpen(false)}
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

export default TourOxapampa;
