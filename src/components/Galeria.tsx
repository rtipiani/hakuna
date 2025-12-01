import { useState } from "react";

import img1 from "../assets/images/galeria/villarica-1.png";
import img2 from "../assets/images/galeria/villarica-2.png";
import img3 from "../assets/images/galeria/villarica-3.png";
import img4 from "../assets/images/galeria/villarica-4.png";
import img5 from "../assets/images/galeria/villarica-5.png";
import img6 from "../assets/images/galeria/villarica-6.png";
import img7 from "../assets/images/galeria/villarica-7.png";
import img8 from "../assets/images/galeria/oxapampa-1.png";
import img9 from "../assets/images/galeria/oxapampa-2.png";
import img10 from "../assets/images/galeria/oxapampa-3.png";
import img11 from "../assets/images/galeria/oxapampa-4.png";
import img12 from "../assets/images/galeria/oxapampa-5.png";
import img13 from "../assets/images/galeria/oxapampa-6.png";
import img14 from "../assets/images/galeria/oxapampa-7.png";
import img15 from "../assets/images/galeria/chanchamayo-1.png";
import img17 from "../assets/images/galeria/chanchamayo-3.png";
import img18 from "../assets/images/galeria/chanchamayo-4.png";
import img19 from "../assets/images/galeria/chanchamayo-5.png";
import img20 from "../assets/images/galeria/chanchamayo-6.png";

import gal1 from "../assets/images/galeria/gal1.png";
import gal2 from "../assets/images/galeria/gal2.png";
import gal3 from "../assets/images/galeria/gal3.png";
import gal4 from "../assets/images/galeria/gal4.png";
import gal5 from "../assets/images/galeria/gal5.png";

export default function Gallery() {
    const images = [
        gal1, gal2, gal3, gal4, gal5, img1, img2, img3, img4, img5, img6, img7,
        img8, img9, img10, img11, img12, img13, img14,
        img15, img17, img18, img19, img20
    ];

    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const showPrev = () => {
        if (currentIndex === null) return;
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const showNext = () => {
        if (currentIndex === null) return;
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm">
                    Galería
                </h2>

                <p className="text-center text-gray-600 mt-3 mb-12 text-lg md:text-xl">
                    Momentos únicos en nuestras experiencias turísticas.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                            onClick={() => setCurrentIndex(i)}
                        >
                            <img
                                src={img.src}
                                alt={`Imagen galería ${i + 1}`}
                                className="w-full h-40 md:h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {currentIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                >
                    <button type="button"
                        className="absolute top-6 right-6 text-white text-5xl font-bold hover:text-red-400 transition cursor-pointer"
                        onClick={() => setCurrentIndex(null)}
                    >
                        ×
                    </button>

                    <button type="button"
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                        className="absolute left-4 md:left-10 text-white text-5xl font-bold hover:text-red-300 transition cursor-pointer"
                    >
                        ❮
                    </button>

                    <img
                        src={images[currentIndex].src}
                        alt="Preview"
                        className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl transition-opacity duration-300"
                    />

                    <button type="button"
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                        className="absolute right-4 md:right-10 text-white text-5xl font-bold hover:text-red-300 transition cursor-pointer"
                    >
                        ❯
                    </button>
                </div>
            )}
        </section>
    );
}
