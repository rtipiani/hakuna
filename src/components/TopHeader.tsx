import React from "react";

const TopHeader: React.FC = () => {
    return (
        <section className="bg-brand-purple hidden lg:block py-2 border-b border-white/5">
            <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center text-xs text-white/90">
                {/* Contacto Izquierda */}
                <div className="flex items-center space-x-6">
                    <a 
                        href="tel:+51964534249" 
                        className="flex items-center gap-2 hover:text-brand-yellow transition duration-200" 
                        aria-label="Llamar a Hakuna Matata Travel VIP"
                    >
                        <i className="fas fa-phone text-[10px]"></i>
                        <span>+51 964 534 249</span>
                    </a>
                    
                    <a 
                        href="mailto:contacto@hakunamatatatravel.com" 
                        className="flex items-center gap-2 hover:text-brand-yellow transition duration-200" 
                        aria-label="Enviar un correo"
                    >
                        <i className="fas fa-envelope text-[10px]"></i>
                        <span>contacto@hakunamatatatravel.com</span>
                    </a>
                </div>

                {/* Redes Sociales Derecha */}
                <div className="flex items-center space-x-4 text-sm">
                    <a 
                        href="https://www.facebook.com/" 
                        className="hover:text-brand-yellow transition duration-200" 
                        aria-label="Vamos a facebook" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-facebook-f text-[13px]"></i>
                    </a>
                    <a 
                        href="https://www.instagram.com/" 
                        className="hover:text-brand-yellow transition duration-200" 
                        aria-label="Vamos a instagram" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram text-[13px]"></i>
                    </a>
                    <a 
                        href="https://www.tiktok.com/" 
                        className="hover:text-brand-yellow transition duration-200" 
                        aria-label="Vamos a tiktok" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-tiktok text-[13px]"></i>
                    </a>
                    <a 
                        href="https://wa.link/exn5e4" 
                        className="hover:text-brand-yellow transition duration-200" 
                        aria-label="Vamos a whatsapp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp text-[13px]"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}



export default TopHeader;