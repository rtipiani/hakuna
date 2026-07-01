import logo from "../assets/images/logo.png";

export default function Footer() {
    return (
        <footer className="bg-brand-purple text-gray-300 py-12 mt-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <img src={logo.src} alt="Hakuna Matata Travel VIP" className="w-36 mb-4" />
                    <p className="text-sm leading-relaxed">
                        Agencia de viajes y turismo con amplia experiencia. 
                        Viaja con los mejores por toda la selva central.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Enlaces</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                        <li><a href="/nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                        <li><a href="/oxapampa" className="hover:text-white transition-colors">Oxapampa</a></li>
                        <li><a href="/chanchamayo" className="hover:text-white transition-colors">Chanchamayo</a></li>
                        <li><a href="/galeria" className="hover:text-white transition-colors">Galería</a></li>
                        <li><a href="/contactanos" className="hover:text-white transition-colors">Contáctanos</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Información</h3>
                    <ul className="space-y-2 text-sm">
                        <li><i className="fa-solid fa-location-dot mr-2"></i>Jr. Tarma N° 290, Chanchamayo, La Merced</li>
                        <li><i className="fa-solid fa-phone mr-2"></i>+51 964 534 249</li>
                        <li><i className="fa-solid fa-phone mr-2"></i>+51 902 498 111</li>
                        <li><i className="fa-solid fa-envelope mr-2"></i>contacto@hakunamatatatravel.com</li>
                        <li>
                            <a href="/nuestras-politicas">
                                <i className="fa-solid fa-book mr-2"></i>
                                Nuestras Políticas
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Síguenos</h3>
                    <div className="flex gap-4 mt-4 text-xl">
                        <a 
                            href="https://www.facebook.com/" 
                            className="hover:text-white transition-colors"
                            title="Facebook Hakuna Matata"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-facebook fa-2xl"></i>
                        </a>

                        <a 
                            href="https://www.instagram.com/" 
                            className="hover:text-white transition-colors"
                            title="Instagram Hakuna Matata"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram fa-2xl"></i>
                        </a>

                        <a 
                            href="https://www.tiktok.com/" 
                            className="hover:text-white transition-colors"
                            title="Tiktok Hakuna Matata"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-tiktok fa-2xl"></i>
                        </a>

                        <a 
                            href="https://wa.link/exn5e4" 
                            className="hover:text-white transition-colors"
                            title="WhatsApp Hakuna Matata"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-whatsapp fa-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-100 text-sm mt-10 border-t border-orange-500 pt-6">
                ©2026 Hakuna Matata Travel VIP. Todos los derechos reservados.
            </div>
        </footer>
    );
}