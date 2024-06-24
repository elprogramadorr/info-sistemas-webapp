import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaInfoCircle } from 'react-icons/fa';
import imagenIA from '../../assets/autoridades/autoridad1.jpg'; // Importa tu imagen de Inteligencia Artificial

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '80%',
        maxHeight: '80%',
        overflow: 'auto',
        padding: '20px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};

const LineasDeEstudio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedLinea, setSelectedLinea] = useState(null);

    const openModal = (linea) => {
        setSelectedLinea(linea);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedLinea(null);
        setModalIsOpen(false);
    };

    const lineasDeEstudio = [
        {
            titulo: 'Inteligencia Artificial',
            descripcion:
                'Estudio de técnicas que permiten a las máquinas aprender y realizar tareas que requieren inteligencia humana.',
            imagen: imagenIA,
        },
        {
            titulo: 'Redes y SW de Base',
            descripcion:
                'Diseño y administración de sistemas de red, protocolos de comunicación y software de infraestructura.',
            imagen: imagenIA,
        },
        {
            titulo: 'Teoría de la Computación',
            descripcion:
                'Estudio de modelos abstractos y fundamentales que subyacen a la computación y sus límites teóricos.',
            imagen: imagenIA,
        },
        {
            titulo: 'Base de Datos',
            descripcion:
                'Diseño, implementación y gestión de sistemas de almacenamiento y recuperación de datos.',
            imagen: imagenIA,
        },
        {
            titulo: 'Desarrollo e Ing. de Software',
            descripcion:
                'Proceso de creación y mantenimiento de software de calidad, aplicando metodologías y buenas prácticas.',
            imagen: imagenIA,
        },
    ];

    return (
        <div className="min-h-screen py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8">Líneas de Estudio</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {lineasDeEstudio.map((linea, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                            onClick={() => openModal(linea)}
                        >
                            <div className="px-4 py-2 flex justify-between items-center bg-indigo-500">
                                <h2 className="text-xl font-bold text-white">{linea.titulo}</h2>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 leading-relaxed">{linea.descripcion}</p>
                            </div>
                            <div className="relative">
                                <img src={linea.imagen} alt={linea.titulo} className="w-full h-auto" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity">
                                    <div className="flex items-center justify-center h-full">
                                        <FaInfoCircle className="text-white h-8 w-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Información Adicional"
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{selectedLinea?.titulo}</h2>
                        <div className="mb-4">
                            <img src={selectedLinea?.imagen} alt={selectedLinea?.titulo} className="w-full h-auto rounded-lg" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{selectedLinea?.descripcion}</p>
                    </div>
                    <button
                        onClick={closeModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
                    >
                        Cerrar
                    </button>
                </Modal>
            </div>
        </div>
    );
};

export default LineasDeEstudio;
