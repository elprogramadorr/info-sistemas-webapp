import React, { useState } from 'react';
import Modal from 'react-modal';
import IconIA from '../../assets/Lineas/IA.png';
import IS from '../../assets/Lineas/IS.jpg'; // Importar la imagen IS
import DB from '../../assets/Lineas/DB.jpg'; // Importar la imagen DB
import CS from '../../assets/Lineas/CS.png'; // Importar la imagen CS
import NET from '../../assets/Lineas/NET.jpg'; // Importar la imagen NET
// Estilos personalizados para el modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%', // Ancho del modal
        maxWidth: '800px', // Máximo ancho del modal
        maxHeight: '80%',
        overflow: 'auto',
        padding: '20px',
        border: 'none', // Para eliminar el borde del modal
        borderRadius: '8px', // Borde redondeado
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' // Sombra ligera
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};

const LineasDeEstudio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedLinea, setSelectedLinea] = useState(null);

    // Datos de las líneas de estudio, incluyendo materias específicas y la imagen correspondiente
    const lineasDeEstudio = [
        { 
            id: 1,
            nombre: 'Inteligencia Artificial',
            imagen: IconIA, // Usar la imagen de IconIA
            materias: [
                'Álgebra I',
                'Álgebra II',
                'Lógica',
                'Programación Funcional',
                'Inteligencia Artificial I',
                'Inteligencia Artificial II',
                'Interacción Humano Computador'
            ]
        },
        { 
            id: 2, 
            nombre: 'Redes y SW de base', 
            imagen: NET, // Usar la imagen de IS
            materias: ['Cálculo I', 'Cálculo II', 'Cálculo Numérico', 'Probabilidad Estadística', 'Taller de Sistemas Operativos', 'Redes de Computadoras', 'Tecnología de Redes Avanzadas'] 
        },
        { id: 3, nombre: 'Teoría de la Computación', imagen: CS, materias: ['Física General', 'Arquitectura de Computadoras I', 'Arquitectura de Computadoras II', 'Taller de Programación a Bajo Nivel', 'Teoría de Autómatas y Lenguajes Formales', 'Estructura y Semántica de Lenguajes de Programción'] },
        { id: 4, nombre: 'Base de Datos', imagen: DB, materias: ['Ingles I', 'Ingles II', 'Organización y Métodos', 'Base de Datos I', 'Base de Datos II', 'Taller de Base de Datos'] },
        { id: 5, nombre: 'Desarrollo e Ing. de Software', imagen: IS, materias: ['Programación', 'Graficación por Computadora','Sistemas de Información I', 'Sistemas de Información II', 'Programación Web', 'Arquitectura de Software', 'Taller de Ingeniería de Software'] },
    ];

    // Función para abrir el modal y mostrar la información de la línea seleccionada
    const openModal = (linea) => {
        setSelectedLinea(linea);
        setModalIsOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedLinea(null);
        setModalIsOpen(false);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-5xl font-bold text-center mb-8 text-white">Líneas de Estudio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {lineasDeEstudio.map((linea) => (
                    <div key={linea.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer col-span-2 md:col-auto"
                         onClick={() => openModal(linea)}>
                        <img src={linea.imagen} alt={`Icono de ${linea.nombre}`} className="w-24 h-24" />
                        <h2 className="text-2xl font-bold mt-4 text-center text-black">{linea.nombre}</h2>
                    </div>
                ))}
            </div>

            {/* Modal para mostrar información adicional */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Información de Línea de Estudio"
            >
                <div className="">
                    <h2 className="text-4xl font-bold mb-4 text-black text-center">{selectedLinea?.nombre}</h2>
                    
                    <img src={selectedLinea?.imagen} alt={`Icono de ${selectedLinea?.nombre}`} className="w-24 h-24 mx-auto mt-4" />
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        {selectedLinea?.materias.map((materia, index) => (
                            <li key={index}>{materia}</li>
                        ))}
                    </ul>
                    <button
                        onClick={closeModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4 text-center w-full"
                    >
                        Cerrar
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default LineasDeEstudio;
