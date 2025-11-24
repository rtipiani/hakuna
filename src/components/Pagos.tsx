import visa from "../assets/images/visa.avif";
import mastercard from "../assets/images/mastercard.avif";
import yape from "../assets/images/yape.avif";
import plin from "../assets/images/plin.avif";
import paypal from "../assets/images/paypal.avif";
import wester from "../assets/images/western-union.avif";

const MediosDePago = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center px-4">

                <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                    Medios de Pago
                </h2>

                <p className="text-gray-600 mb-10">
                    Aceptamos los principales métodos de pago para tu comodidad.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 items-center justify-center">
                    <img src={visa.src} alt="Visa" className="w-full max-h-20 object-contain" />
                    <img src={mastercard.src} alt="Mastercard" className="w-full max-h-20 object-contain" />
                    <img src={yape.src} alt="Yape" className="w-full max-h-20 object-contain" />
                    <img src={plin.src} alt="Plin" className="w-full max-h-20 object-contain" />
                    <img src={wester.src} alt="Plin" className="w-full max-h-20 object-contain" />
                    <img src={paypal.src} alt="Paypal" className="w-full max-h-20 object-contain" />
                </div>

            </div>
        </section>
    );
};

export default MediosDePago;
