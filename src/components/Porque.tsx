export default function PorqueElegirnos() {
    const items = [
        {
            icon: "fa-solid fa-gears",
            title: "Gestión profesional y tecnológica",
            text: "Trabajamos con sistemas internos que optimizan reservas y operaciones."
        },
        {
            icon: "fa-solid fa-van-shuttle",
            title: "Transporte propio",
            text: "Vehículos propios de 10, 19 y 25 asientos para un servicio seguro y confiable."
        },
        {
            icon: "fa-solid fa-tags",
            title: "Precios competitivos",
            text: "Relación calidad-precio que garantiza una experiencia excelente."
        },
        {
            icon: "fa-solid fa-map-location-dot",
            title: "Recojo en toda la ciudad",
            text: "Recojo en la ciudad de Chanchamayo, terminales, hoteles y puntos principales."
        },
        {
            icon: "fa-solid fa-robot",
            title: "Automatización de mensajes",
            text: "Envío automatizado de PDF turísticos, catálogos y recomendaciones."
        },
        {
            icon: "fa-solid fa-user-tie",
            title: "Asesoría personalizada",
            text: "Asignación de un ejecutivo comercial para cotizaciones y atención dedicada."
        },
        {
            icon: "fa-solid fa-sliders",
            title: "Flexibilidad operativa",
            text: "Tours todo incluido o servicios flexibles sin entradas, totalmente adaptables."
        },
        {
            icon: "fa-solid fa-credit-card",
            title: "Pagos fáciles y seguros",
            text: "Aceptamos transferencias, tarjetas, Yape, Plin y más métodos seguros."
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                    ¿Por qué <br /> <span className="text-red-600">Ángel Aventura Chanchamayo </span> <br />es la mejor opción?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            
                            <div className="text-red-600 text-4xl mb-4 text-center">
                                <i className={item.icon}></i>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-700 text-sm leading-relaxed text-center">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
