import React from 'react';
import FCYT from '../../assets/fcyt.jpg'; // Importa tu imagen de la FCYT

const Historia = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden my-20">
                {/* Imagen grande a la izquierda */}
                <div className="md:w-1/2 h-80 md:h-auto">
                    <img src={FCYT} alt="Historia Imagen" className="w-full h-full object-cover object-center" />
                </div>
                
                {/* Texto de la historia a la derecha */}
                <div className="md:w-1/2 p-8 bg-gradient-to-r from-white to-gray-50">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 border-b-4 border-blue-500 inline-block">Historia</h2>
                    <p className="text-gray-800 leading-relaxed text-justify mb-4">
                        La carrera de Informática se encuentra dedicada a la formación de profesionales en el área de Informática o Ciencias de la Computación desde 1979, a partir de esa fecha hasta la actualidad ha sufrido grandes transformaciones en lo que hace a la formación de profesionales informáticos, transformaciones que permiten a nuestros profesionales contar con un prestigio tanto a nivel local, nacional e internacional.
                    </p>
                    <p className="text-gray-800 leading-relaxed text-justify mb-4">
                        Dichas transformaciones son producto del avance tecnológico y un propósito firme de parte de la carrera de formar profesionales acorde a las exigencias de ese avance tecnológico y las necesidades del medio. A partir de la primera promoción allá por los años 1985, nuestra labor es continua, proporcionando al medio profesionales de alta calidad académica y moral, contando en la actualidad con un promedio de 25 titulados por año.
                    </p>
                    {/* <div className="text-center mt-6">
                        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">Más Información</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Historia;
