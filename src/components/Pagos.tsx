import React, { useState } from "react";
import visa from "../assets/images/visa.avif";
import mastercard from "../assets/images/mastercard.avif";
import yape from "../assets/images/yape.avif";
import plin from "../assets/images/plin.avif";
import paypal from "../assets/images/paypal.avif";
import wester from "../assets/images/western-union.avif";
import bcp from "../assets/images/pagos/bcp.png";
import bbva from "../assets/images/pagos/bbva.png";

type TabType = "billeteras" | "bancos" | "tarjetas";

const MediosDePago = () => {
    const [activeTab, setActiveTab] = useState<TabType>("billeteras");
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => {
            setCopiedId(null);
        }, 2000);
    };

    return (
        <section className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden font-sans">
            {/* Elementos Decorativos de Fondo */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/5 rounded-full filter blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-3xl pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Cabecera de la Sección */}
                <div className="text-center mb-12">
                    <span className="text-brand-orange text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
                        Reserva Fácil y Seguro
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-brand-purple tracking-tight mb-4">
                        Medios de Pago
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
                        Ofrecemos múltiples opciones seguras para que confirmes tu aventura sin complicaciones.
                    </p>
                    <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Selectores de Pestañas (Tabs) */}
                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2 sm:gap-1 bg-gray-100/80 backdrop-blur-xs p-1.5 rounded-2xl max-w-2xl mx-auto mb-10 border border-gray-200/50">
                    <button
                        onClick={() => setActiveTab("billeteras")}
                        className={`flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                            activeTab === "billeteras"
                                ? "bg-white text-brand-purple shadow-sm scale-[1.02]"
                                : "text-gray-500 hover:text-brand-purple hover:bg-white/40"
                        }`}
                    >
                        <i className="fa-solid fa-mobile-screen-button text-base"></i>
                        Billeteras Digitales
                    </button>
                    <button
                        onClick={() => setActiveTab("bancos")}
                        className={`flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                            activeTab === "bancos"
                                ? "bg-white text-brand-purple shadow-sm scale-[1.02]"
                                : "text-gray-500 hover:text-brand-purple hover:bg-white/40"
                        }`}
                    >
                        <i className="fa-solid fa-building-columns text-base"></i>
                        Transferencias Bancarias
                    </button>
                    <button
                        onClick={() => setActiveTab("tarjetas")}
                        className={`flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                            activeTab === "tarjetas"
                                ? "bg-white text-brand-purple shadow-sm scale-[1.02]"
                                : "text-gray-500 hover:text-brand-purple hover:bg-white/40"
                        }`}
                    >
                        <i className="fa-solid fa-credit-card text-base"></i>
                        Tarjetas e Internacional
                    </button>
                </div>

                {/* Contenedor Principal de Contenido con Transición */}
                <div className="min-h-[340px] flex items-stretch">
                    {/* TAB: BILLETERAS DIGITALES */}
                    {activeTab === "billeteras" && (
                        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch animate-in fade-in slide-in-from-bottom-4 duration-300">
                            {/* Tarjeta Detalle de Yape/Plin */}
                            <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
                                            <i className="fa-solid fa-qrcode text-brand-purple text-2xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-brand-purple">Pago rápido por Plin</h3>
                                            <p className="text-xs text-gray-400">Confirmación inmediata sin comisiones</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-gray-50/70 rounded-2xl p-4 sm:p-5 border border-gray-100 text-center relative overflow-hidden group">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                Número de Celular para pago
                                            </span>
                                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                                                <span className="text-3xl sm:text-4xl font-extrabold text-brand-purple tracking-wide">
                                                    935 652 497
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("935652497", "celular")}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-purple/5 hover:bg-brand-purple text-brand-purple hover:text-white text-xs font-bold transition duration-300 cursor-pointer active:scale-95"
                                                    title="Copiar número"
                                                >
                                                    {copiedId === "celular" ? (
                                                        <>
                                                            <i className="fa-solid fa-check"></i>
                                                            <span>¡Copiado!</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="fa-regular fa-copy"></i>
                                                            <span>Copiar</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center px-2 py-1">
                                            <div>
                                                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Titular</span>
                                                <span className="text-sm font-semibold text-gray-700">KARINA DE LA CRUZ PAZCE</span>
                                            </div>
                                            <div className="sm:text-right">
                                                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Operación</span>
                                                <span className="text-sm font-semibold text-emerald-600 flex items-center gap-1.5">
                                                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    Sin comisión nacional
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6 mt-6 flex items-center gap-3 text-xs text-gray-500 leading-normal">
                                    <i className="fa-solid fa-circle-info text-brand-orange text-base shrink-0"></i>
                                    <span>Una vez realizado el depósito, envía el comprobante por WhatsApp con tus datos para registrar tus reservas de inmediato.</span>
                                </div>
                            </div>

                            {/* Logos y Código QR visual en lateral */}
                            <div className="md:col-span-5 bg-gradient-to-br from-brand-purple to-purple-950 rounded-3xl p-8 text-white flex flex-col justify-between items-center text-center shadow-xl shadow-purple-950/20 relative overflow-hidden group">
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full filter blur-xl group-hover:scale-110 transition duration-500"></div>
                                
                                <div className="space-y-4 relative z-10 w-full">
                                    <h4 className="text-brand-yellow font-bold uppercase text-xs tracking-wider">Billeteras Soportadas</h4>
                                    <div className="flex justify-center items-center gap-6 py-4">
                                        <div className="bg-white p-3 rounded-2xl shadow-md transform hover:scale-105 transition duration-300">
                                            <img src={plin.src} alt="Plin" className="h-10 sm:h-12 object-contain" />
                                        </div>
                                    </div>
                                </div>

                                <div className="py-6 flex flex-col items-center relative z-10">
                                    <div className="h-28 w-28 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/15 transition duration-300">
                                        <i className="fa-solid fa-mobile-screen text-5xl text-brand-yellow animate-bounce duration-1000"></i>
                                    </div>
                                    <p className="text-xs text-purple-200 mt-4 max-w-[200px]">
                                        Escanea o envía directamente usando el número adjunto en la tarjeta.
                                    </p>
                                </div>

                                <div className="w-full bg-white/10 backdrop-blur-xs py-2.5 px-4 rounded-xl border border-white/10 text-xs font-semibold tracking-wide text-brand-yellow">
                                    <i className="fa-solid fa-shield-halved mr-1.5"></i> Transacciones encriptadas y seguras
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB: TRANSFERENCIAS BANCARIAS */}
                    {activeTab === "bancos" && (
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-in fade-in slide-in-from-bottom-4 duration-300">
                            {/* BANCO BCP */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between relative group hover:border-gray-200/80 transition duration-300">
                                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-3xl"></div>
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-blue-50/50 px-4 py-2.5 rounded-xl border border-blue-100">
                                            <img src={bcp.src} alt="BCP" className="h-6 object-contain" />
                                        </div>
                                        <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-100">
                                            Soles (S/.)
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Cuenta */}
                                        <div className="border-b border-gray-100 pb-3.5">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                Número de Cuenta
                                            </span>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-base sm:text-lg font-bold text-gray-800 tracking-wide">
                                                    41090399509027
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("41090399509027", "bcp-cuenta")}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-50 hover:bg-brand-purple hover:text-white text-gray-500 text-xs font-semibold transition duration-200 cursor-pointer"
                                                >
                                                    {copiedId === "bcp-cuenta" ? (
                                                        <><i className="fa-solid fa-check"></i><span>¡Ok!</span></>
                                                    ) : (
                                                        <><i className="fa-regular fa-copy"></i><span>Copiar</span></>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* CCI */}
                                        <div className="border-b border-gray-100 pb-3.5">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                CCI (Interbancario)
                                            </span>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-base sm:text-lg font-bold text-gray-800 tracking-wide">
                                                    002410190399509027
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("002410190399509027", "bcp-cci")}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-50 hover:bg-brand-purple hover:text-white text-gray-500 text-xs font-semibold transition duration-200 cursor-pointer"
                                                >
                                                    {copiedId === "bcp-cci" ? (
                                                        <><i className="fa-solid fa-check"></i><span>¡Ok!</span></>
                                                    ) : (
                                                        <><i className="fa-regular fa-copy"></i><span>Copiar</span></>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Titular */}
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                                                Titular
                                            </span>
                                            <span className="text-sm font-bold text-brand-purple">
                                                HAKUNA MATATA TRAVEL VIP
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BANCO BBVA */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between relative group hover:border-gray-200/80 transition duration-300">
                                <div className="absolute top-0 left-0 w-full h-2 bg-sky-800 rounded-t-3xl"></div>
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-sky-50/50 px-4 py-2.5 rounded-xl border border-sky-100">
                                            <img src={bbva.src} alt="BBVA" className="h-6 object-contain" />
                                        </div>
                                        <span className="bg-sky-50 text-sky-800 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-sky-100">
                                            Soles (S/.)
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Cuenta */}
                                        <div className="border-b border-gray-100 pb-3.5">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                Número de Cuenta
                                            </span>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-base sm:text-lg font-bold text-gray-800 tracking-wide">
                                                    0011-0814-0221427225
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("0011-0814-0221427225", "bbva-cuenta")}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-50 hover:bg-brand-purple hover:text-white text-gray-500 text-xs font-semibold transition duration-200 cursor-pointer"
                                                >
                                                    {copiedId === "bbva-cuenta" ? (
                                                        <><i className="fa-solid fa-check"></i><span>¡Ok!</span></>
                                                    ) : (
                                                        <><i className="fa-regular fa-copy"></i><span>Copiar</span></>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* CCI */}
                                        <div className="border-b border-gray-100 pb-3.5">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block mb-1">
                                                CCI (Interbancario)
                                            </span>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-base sm:text-lg font-bold text-gray-800 tracking-wide">
                                                    011-814-000221427225-10
                                                </span>
                                                <button
                                                    onClick={() => handleCopy("011-814-000221427225-10", "bbva-cci")}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-gray-50 hover:bg-brand-purple hover:text-white text-gray-500 text-xs font-semibold transition duration-200 cursor-pointer"
                                                >
                                                    {copiedId === "bbva-cci" ? (
                                                        <><i className="fa-solid fa-check"></i><span>¡Ok!</span></>
                                                    ) : (
                                                        <><i className="fa-regular fa-copy"></i><span>Copiar</span></>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Titular */}
                                        <div>
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                                                Titular
                                            </span>
                                            <span className="text-sm font-bold text-brand-purple">
                                                KARINA DE LA CRUZ PAZCE
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TAB: TARJETAS E INTERNACIONAL */}
                    {activeTab === "tarjetas" && (
                        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col justify-between animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-12 w-12 rounded-xl bg-orange-50 flex items-center justify-center">
                                        <i className="fa-solid fa-globe text-brand-orange text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-brand-purple">Tarjetas de Crédito & Pagos Internacionales</h3>
                                        <p className="text-xs text-gray-400">Paga de forma segura desde cualquier lugar del mundo</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Subsección Tarjetas de Crédito */}
                                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/80 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-bold text-brand-purple text-base mb-2 flex items-center gap-2">
                                                <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                                                Pago Online con Tarjeta
                                            </h4>
                                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                                Aceptamos todas las marcas principales (Visa, Mastercard, American Express, Diners). 
                                                Te generamos un enlace de pago totalmente seguro.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 pt-2">
                                            <img src={visa.src} alt="Visa" className="h-7 object-contain opacity-80 hover:opacity-100 transition" />
                                            <img src={mastercard.src} alt="MasterCard" className="h-7 object-contain opacity-80 hover:opacity-100 transition" />
                                        </div>
                                    </div>

                                    {/* Subsección Internacional (PayPal / Western Union) */}
                                    <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/80 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-bold text-brand-purple text-base mb-2 flex items-center gap-2">
                                                <i className="fa-solid fa-plane-departure text-blue-600"></i>
                                                Giros y Moneda Extranjera
                                            </h4>
                                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                                ¿Resides fuera de Perú? Puedes realizar giros por Western Union o abonar directamente 
                                                a nuestra cuenta de PayPal.
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-5 pt-2">
                                            <img src={paypal.src} alt="PayPal" className="h-6 object-contain opacity-80 hover:opacity-100 transition" />
                                            <img src={wester.src} alt="Western Union" className="h-6.5 object-contain opacity-80 hover:opacity-100 transition" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="text-xs text-gray-500 text-center sm:text-left">
                                    <i className="fa-solid fa-lock text-emerald-600 mr-1.5"></i>
                                    Para coordinar estos métodos de pago, comunícate con un asesor.
                                </span>
                                <a
                                    href="https://wa.me/51964534249?text=Hola%20Hakuna%20Matata%20Travel%20VIP%2C%20quisiera%20solicitar%20un%20enlace%20de%20pago%20con%20tarjeta%20o%20los%20datos%20de%20PayPal/Western%20Union."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:bg-emerald-500 transition duration-300 hover:scale-[1.02] cursor-pointer"
                                >
                                    <i className="fa-brands fa-whatsapp text-base"></i>
                                    Solicitar Enlace de Pago
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MediosDePago;
