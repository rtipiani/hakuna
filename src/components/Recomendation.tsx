import React, { useState } from "react";
import pozuzo from "../assets/images/pozuzo.png";
import chanchamayo from "../assets/images/chanchamayo.png";

const tours = [
    {
        title: "Tour Oxapampa y Pozuzo",
        days: "2D/1N",
        image: pozuzo,
        lista: [
            "Visita guiada a Oxapampa y Pozuzo",
            "Pozas Turquesas de Agua Salada",
            "Puente Colgante Guillermo I",
            "Cueva Tunki y El Wharapo",
            "Colonia Austro-Alemana",
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
    }
];

const Recomendation = () => {
    const [selectedTourIndex, setSelectedTourIndex] = useState<number | null>(null);

    return (
        <section id="recomendados" className="py-20 bg-gray-50/50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cabecera de la Sección */}
                <div className="text-center mb-16">
                    <span className="text-brand-orange text-xs sm:text-sm font-bold uppercase tracking-widest block mb-3">
                        Experiencias Inolvidables
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-brand-purple tracking-tight">
                        Nuestros Tours Más Vendidos
                    </h2>
                    <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grilla de Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour, index) => {
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

                                    {/* Separador y Botón de WhatsApp - Abre Modal de Precios */}
                                    <div className="border-t border-gray-100 pt-4 mt-auto">
                                        <button 
                                            onClick={() => setSelectedTourIndex(index)}
                                            className="w-full flex items-center justify-center gap-2 bg-brand-purple text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-brand-orange transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                        >
                                            <i className="fa-solid fa-tags text-sm"></i>
                                            <span>Ver opciones de precios</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MODAL DE PRECIOS */}
            {selectedTourIndex !== null && (
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
                                <p className="text-[10px] text-brand-yellow font-normal">{tours[selectedTourIndex].title} {tours[selectedTourIndex].days}</p>
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
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta Todo el Año - Alojamiento + Tours (Básico)* por S/. ' + tours[selectedTourIndex].precios.normal.alojamientoTours.basico + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.normal.alojamientoTours.basico}</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta Todo el Año - Alojamiento + Tours (Exclusivo)* por S/. ' + tours[selectedTourIndex].precios.normal.alojamientoTours.exclusivo + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.normal.alojamientoTours.exclusivo}</span>
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
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta Todo el Año - Alojamiento + Tours + Bus (Básico)* por S/. ' + tours[selectedTourIndex].precios.normal.alojamientoToursBus.basico + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.normal.alojamientoToursBus.basico}</span>
                                                    <span className="text-[8px] font-medium text-emerald-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta Todo el Año - Alojamiento + Tours + Bus (Exclusivo)* por S/. ' + tours[selectedTourIndex].precios.normal.alojamientoToursBus.exclusivo + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-emerald-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.normal.alojamientoToursBus.exclusivo}</span>
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
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta de Feriado - Alojamiento + Tours (Básico)* por S/. ' + tours[selectedTourIndex].precios.feriado.alojamientoTours.basico + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.feriado.alojamientoTours.basico}</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta de Feriado - Alojamiento + Tours (Exclusivo)* por S/. ' + tours[selectedTourIndex].precios.feriado.alojamientoTours.exclusivo + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.feriado.alojamientoTours.exclusivo}</span>
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
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta de Feriado - Alojamiento + Tours + Bus (Básico)* por S/. ' + tours[selectedTourIndex].precios.feriado.alojamientoToursBus.basico + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Básico</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.feriado.alojamientoToursBus.basico}</span>
                                                    <span className="text-[8px] font-medium text-red-600 uppercase flex items-center justify-center gap-1 mt-0.5 opacity-80 group-hover/opt:opacity-100">
                                                        <i className="fa-brands fa-whatsapp text-xs"></i> Reservar
                                                    </span>
                                                </a>
                                                <a 
                                                    href={`https://wa.me/51918024860?text=${encodeURIComponent('Hola Hakuna Matata Travel VIP, quiero reservar el ' + tours[selectedTourIndex].title + ' ' + tours[selectedTourIndex].days + ' en la opción *Oferta de Feriado - Alojamiento + Tours + Bus (Exclusivo)* por S/. ' + tours[selectedTourIndex].precios.feriado.alojamientoToursBus.exclusivo + '.')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-50 border border-gray-100 hover:border-red-300 p-2 rounded-lg text-center group/opt transition duration-200"
                                                >
                                                    <span className="text-[9px] font-normal text-gray-400 block uppercase">Exclusivo</span>
                                                    <span className="text-base font-medium text-gray-700 block">S/. {tours[selectedTourIndex].precios.feriado.alojamientoToursBus.exclusivo}</span>
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

export default Recomendation;