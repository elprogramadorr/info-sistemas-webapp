import React from 'react';
import { FaCircle } from 'react-icons/fa';

const MisionVisionObjetivos = () => {

    // Array de objetivos
    const objetivos = [
        {
            id: 1,
            texto: 'Contar con un proceso educativo que permita altos índices de aprovechamiento y rendimiento académico.'
        },
        {
            id: 2,
            texto: 'Establecer vínculos con sectores sociales, productivos y de investigación, para adecuar el programa a las necesidades y potencialidades de nuestro medio y el mundo globalizado en que estamos inmersos.'
        },
        {
            id: 3,
            texto: 'Garantizar una formación integral y permanente del Informático con cursos de actualización, especialización y postgrado, que le permitan tener una ventaja competitiva sostenible en el tiempo y en el medio.'
        },
        {
            id: 4,
            texto: 'Contar con un plantel docente altamente calificado.'
        },
        {
            id: 5,
            texto: 'Disponer de un Sistema de gestión académico eficiente y eficaz.'
        },
        {
            id: 6,
            texto: 'Contar permanentemente con la infraestructura adecuada para el desarrollo del proceso de enseñanza - aprendizaje, la investigación e interacción social.'
        }
    ];

    return (
        <div className="min-h-screen py-12 bg-gray-100 font-serif">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Bloque de Misión */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Misión</h2>
                        <p className="text-gray-700 leading-relaxed text-center">
                            Formar profesionales competitivos en el área de informática, con principios éticos, conciencia social; que lideren soluciones tecnológicas, promoviendo el desarrollo y la innovación, con capacidad de generar conocimiento científico y tecnológico para atender las demandas locales y globales.
                        </p>
                    </div>

                    {/* Bloque de Visión */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Visión</h2>
                        <p className="text-gray-700 leading-relaxed text-center">
                            Ser un referente académico de excelencia a nivel nacional e internacional en el área de informática, con espíritu innovador, liderazgo y compromiso social.
                        </p>
                    </div>
                </div>

                {/* Bloque de Objetivos */}
                <div className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Objetivos</h2>
                    <ul className="max-w-3xl mx-auto">
                        {objetivos.map(objetivo => (
                            <li key={objetivo.id} className="mb-4 flex items-start">
                                <p className="text-gray-700 leading-relaxed">
                                    {objetivo.texto}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MisionVisionObjetivos;
