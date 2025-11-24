import React from "react";

const TopHeader: React.FC = () => {
    return (
        <section className="bg-red-600 hidden lg:flex md:items-center md:justify-center md:py-4 md:px-8">
            <div className="flex items-center space-x-12 text-sm">
                <div>
                    <a href="" className="text-white rounded flex items-center gap-1 py-1 px-2 text-md font-medium" aria-label="Llamar a Angela Aventura Tours">
                        <i className="fas fa-phone text-xl text-white"></i>
                        <span className="sr-only">
                            Llámanos:
                        </span>
                        +51 964 534 249
                    </a>
                </div>

                <div className="flex space-x-4 text-xl">
                    <a href="https://www.facebook.com/Angelaventuraturismochanc/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition" aria-label="Vamos a facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f text-red-600"></i>
                    </a>
                    <a href="https://www.instagram.com/p/DRU4YTCCc5o/" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition" aria-label="Vamos a instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram text-red-600"></i>
                    </a>
                    <a href="https://www.tiktok.com/@angelaventurachanchamayo" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition" aria-label="Vamos a tiktok" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-tiktok text-red-600"></i>
                    </a>
                    <a href="https://wa.link/exn5e4" className="bg-white p-2 rounded-full flex items-center justify-center w-9 h-9 hover:bg-orange-100  transition" aria-label="Vamos a whatsapp" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp text-red-600"></i>
                    </a>
                </div>
                <div>
                    <a href="mailto:contacto@gmail.com" className="text-white hover:underline rounded flex items-center gap-2py-2 px-4 text-lg" aria-label="Enviar un correo">
                        <i className="fas fa-envelope text-xl text-white mr-1"></i>
                        ventas@angeladventure.pe
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TopHeader;