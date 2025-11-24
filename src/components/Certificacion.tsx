import cert1 from "../assets/images/certificacion1.png";
import cert2 from "../assets/images/certificacion2.png";

export default function Certificacion() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                    Nuestras Certificaciones
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
                    
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                        <img 
                            src={cert1.src} 
                            alt="Certificación 1" 
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                        <img 
                            src={cert2.src} 
                            alt="Certificación 2" 
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
