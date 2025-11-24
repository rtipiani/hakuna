export default function Politicas() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-wide drop-shadow-sm">
                    Políticas y Condiciones de Viaje
                </h2>

                <div className="mt-12 bg-linear-to-br from-red-50 to-red-50 p-10 rounded-3xl shadow-xl border border-red-100 space-y-8">

                    {/* Políticas de pago */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Políticas de Pago</h3>
                        <ol className="list-decimal list-inside text-gray-700 space-y-2">
                            <li>En caso de transferencias, depósitos o pagos en efectivo deberán efectuarse en moneda local (En soles).</li>
                            <li>El Pasajero deberá abonar el 50% de adelanto.</li>
                            <li>No Incluye IGV, por ley de promoción de la inversión en la Amazonia.</li>
                            <li>En el caso de ofertas y promociones, las tarifas fijadas serán válidas durante el tiempo de campaña.</li>
                            <li>Niños de 3 a 9 años 10% de descuento.</li>
                            <li>Niños de 10 años en adelante pagan tarifa completa.</li>
                            <li>Paquete válido para 02 pasajeros.</li>
                        </ol>
                    </div>

                    {/* Check In / Check Out */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Check In / Check Out</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Ingreso a la habitación 12:00 horas del primer día de tour.</li>
                            <li>Salida de la habitación 11:00 horas del último día de tour.</li>
                        </ul>
                    </div>

                    {/* Tarifa no reembolsable */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Tarifa no reembolsable</h3>
                        <p className="text-gray-700 space-y-2">
                            En caso de cualquier suspensión por motivos que manifieste el pasajero; podrá solicitar la reprogramación de su paquete o tour en un periodo de 120 días. En caso de problemas climáticos, deterioro de vías de transporte se suspenderán las actividades turísticas para luego ser reprogramadas en un periodo también de 120 días. En caso de manifestaciones, sociales, políticas de fuerza mayor como huelgas locales, regionales y nacionales se procederá a la reprogramación de los tours o paquetes turísticos.
                        </p>
                    </div>

                    {/* Tarifas para grupos */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Tarifas para Grupos</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>5 personas</li>
                            <li>10 personas</li>
                        </ul>
                    </div>

                    {/* Incluye */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Los Programas o Paquetes Incluyen</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Traslados del terminal al hotel.</li>
                            <li>Excursiones guiadas en selva, en español.</li>
                            <li>Desayunos.</li>
                            <li>Transporte turístico compartido (Consultar tarifas con transporte privado)</li>
                            <li>Entradas a lugares turísticos</li>
                            <li>Atención personalizada.</li>
                            <li>Equipo de primeros auxilios.</li>
                            <li>Atención en caso de emergencias (MEDICA VERDE)</li>
                        </ul>
                    </div>

                    {/* Tours diarios */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Los Tours Diarios Incluyen</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Recojo de pasajeros en el hotel.</li>
                            <li>Excursiones guiadas en selva, en español.</li>
                            <li>Transporte turístico compartido (Consultar tarifas con transporte privado)</li>
                            <li>Entradas a lugares turísticos</li>
                            <li>Atención personalizada.</li>
                            <li>Equipo de primeros auxilios.</li>
                            <li>Atención en caso de emergencias (MEDICA VERDE)</li>
                        </ul>
                    </div>

                    {/* No incluye */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">No Incluye</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Ticket de bus Lima – Chanchamayo– Lima.</li>
                            <li>Almuerzos, cenas.</li>
                        </ul>
                    </div>

                    {/* Recomendaciones */}
                    <div>
                        <h3 className="text-2xl font-bold text-red-700 mb-4">Recomendaciones</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Zapatillas, ropa ligera, ropa de baño, abrigo, repelente, bloqueador solar, lentes para sol, gorra.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
