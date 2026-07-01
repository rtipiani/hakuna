import bcp from "../assets/images/pagos/bcp.png";
import bbva from "../assets/images/pagos/bbva.png";
import yape from "../assets/images/pagos/yape.avif";
import plin from "../assets/images/pagos/plin.png";

export default function MediosPago() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-wide">
                    Medios de Pago
                </h2>

                <p className="text-center text-gray-600 mt-3 mb-14 text-lg font-medium">
                    Aceptamos todo medio de pago
                </p>

                <div className="grid md:grid-cols-2 gap-12">

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 relative">

                        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-700 to-red-500 rounded-t-2xl"></div>

                        <div className="flex items-center justify-center gap-10 mb-10">
                            <img src={bcp.src} alt="BCP" loading="lazy" className="h-14 object-contain drop-shadow-sm" />
                            <img src={bbva.src} alt="BBVA" loading="lazy" className="h-14 object-contain drop-shadow-sm" />
                        </div>

                        <div className="space-y-8">

                            <div>
                                <h3 className="text-xl font-bold text-red-600 mb-2">BCP - Soles</h3>

                                <div className="space-y-1">
                                    <p className="text-gray-700 text-sm">
                                        N° Cuenta: <span className="font-semibold">41090399509027</span>
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        CCI: <span className="font-semibold">002410190399509027</span>
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Titular: <span className="font-semibold">HAKUNA MATATA TRAVEL VIP</span>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-red-600 mb-2">BBVA - Soles</h3>

                                <div className="space-y-1">
                                    <p className="text-gray-700 text-sm">
                                        N° Cuenta: <span className="font-semibold">0011-0814-0221427225</span>
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        CCI: <span className="font-semibold">011-814-000221427225-10</span>
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Titular: <span className="font-semibold">KARINA DE LA CRUZ PAZCE</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 relative">

                        <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-red-500 to-red-700 rounded-t-2xl"></div>

                        <div className="flex items-center justify-center gap-10 mb-10">
                            <img src={yape.src} alt="Yape" loading="lazy" className="h-14 object-contain drop-shadow-sm" />
                            <img src={plin.src} alt="Plin" loading="lazy" className="h-14 object-contain drop-shadow-sm" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                            Plin / Yape
                        </h3>

                        <p className="text-gray-700 text-sm text-center mb-2">
                            Número:
                        </p>

                        <p className="text-4xl font-bold text-red-600 text-center tracking-wider mb-4">
                            964 534 249
                        </p>

                        <p className="text-gray-700 text-sm text-center">
                            Titular: <span className="font-semibold">KARINA DE LA CRUZ PAZCE</span>
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}