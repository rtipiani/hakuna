import socio1 from "../assets/images/mincetur.png";
import socio2 from "../assets/images/promperu.png";
import socio3 from "../assets/images/dircetur.png";
import socio4 from "../assets/images/ytuqueplanes.png";

const NuestrosSocios = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto text-center px-4">
                
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                    Socios Estratégicos
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                    <img src={socio1.src} alt="Mincetur" className="w-full max-h-24 object-contain" />
                    <img src={socio2.src} alt="PromPerú" className="w-full max-h-24 object-contain" />
                    <img src={socio3.src} alt="Dircetur Junin" className="w-full max-h-24 object-contain" />
                    <img src={socio4.src} alt="Y tú que planes?" className="w-full max-h-24 object-contain" />
                </div>

            </div>
        </section>
    );
};

export default NuestrosSocios;
