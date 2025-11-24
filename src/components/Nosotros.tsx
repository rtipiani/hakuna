import nosotrosImg from "../assets/images/nosotros.png";

export default function Nosotros() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                    Sobre Nosotros
                </h2>

                <div className="bg-white shadow-md rounded-lg p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
                        <img 
                            src={nosotrosImg.src} 
                            alt="Ángel Aventura Chanchamayo" 
                            className="w-full h-80 object-cover rounded-lg shadow-md"
                        />

                        <p className="text-gray-700 leading-relaxed text-lg">
                            En <span className="font-semibold text-red-600">Ángel Aventura Chanchamayo </span> 
                            ofrecemos experiencias turísticas de alta calidad en la selva central del Perú, 
                            enfocadas en la exploración responsable y sostenible, promoviendo la conservación 
                            de la biodiversidad y el desarrollo local.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                            <i className="fa-solid fa-bullseye text-red-600 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-red-600 mb-3">Misión</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Brindar un servicio turístico de alta calidad, 
                                satisfaciendo las necesidades de nuestros visitantes 
                                mediante la innovación constante.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                            <i className="fa-solid fa-eye text-red-600 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-red-600 mb-3">Visión</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Trabajar bajo el concepto de calidad total, 
                                destacando por valores como confianza, integridad, 
                                creatividad e innovación.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm text-center">
                            <i className="fa-solid fa-hand-holding-heart text-red-600 text-4xl mb-4"></i>
                            <h3 className="text-xl font-semibold text-red-600 mb-3">Valores</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Honestidad, integridad, innovación y pasión por brindar 
                                un servicio excepcional.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
