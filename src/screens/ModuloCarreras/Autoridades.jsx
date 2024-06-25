import React from 'react';
import AuthorityCard from '../../components/AuthorityCard';

// Importa las imágenes locales
import autoridad1 from '../../assets/autoridades/autoridad1.jpg';
import autoridad2 from '../../assets/autoridades/autoridad3.jpg';
import autoridad3 from '../../assets/autoridades/autoridad2.jpg';
import autoridad4 from '../../assets/autoridades/autoridad4.jpg';

const autoridades = [
  {
    image: autoridad1,
    name: 'Lic. Boris Materco Calancha Navia',
    position: 'Director de Carrera de Ingeniería Informática',
    officeNumber: '(4) 4233719',
    cellNumber: '(+591) 67454555',
    email: 'boris@fcyt.umss.edu.bo'
  },
  {
    image: autoridad2,
    name: 'Lic. Henrry Frank Villarroel Tapia',
    position: 'Jefe del Departamento de Informática y Sistemas',
    officeNumber: '(4) 4233719',
    cellNumber: '(+591) 67683111',
    email: 'henrryvillarroel.t@fcyt.umss.edu.bo'
  },
  {
    image: autoridad3,
    name: 'Alina Cortez Mitma',
    position: 'Secretaría',
    officeNumber: '123-456-7892',
    cellNumber: '098-765-4323',
    email: 'carlos.lopez@example.com'
  },
  {
    image: autoridad4,
    name: 'Hermitanio Ortega Huatia',
    position: 'Portero Mensajero',
    officeNumber: '123-456-7893',
    cellNumber: '098-765-4324',
    email: 'maria.rodriguez@example.com'
  }
];

const Autoridades = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-algin text-5xl text-rose-50 font-bold'>Autoridades de la Carrera de Ingeriería Informática</h2>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {autoridades.map((autoridad, index) => (
          <AuthorityCard
            key={index}
            image={autoridad.image}
            name={autoridad.name}
            position={autoridad.position}
            officeNumber={autoridad.officeNumber}
            cellNumber={autoridad.cellNumber}
            email={autoridad.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Autoridades;
