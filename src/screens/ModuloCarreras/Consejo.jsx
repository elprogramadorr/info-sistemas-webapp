import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Consejo = () => {
  const councilMembers = [
    {
      category: 'Director de Carrera',
      members: [
        {
          name: 'Lic. Boris Materco Calancha Navia',
          phone: '(4) 4233719',
          email: 'boris@fcyt.umss.edu.bo',
        },
      ],
    },
    {
      category: 'Docentes',
      members: [
        {
          name: 'María Rodríguez',
          phone: '+123456789',
          email: 'maria.rodriguez@example.com',
        },
        {
          name: 'Juan Pérez',
          phone: '+987654321',
          email: 'juan.perez@example.com',
        },
        {
          name: 'Ana Gómez',
          phone: '+987654321',
          email: 'ana.gomez@example.com',
        },
      ],
    },
    {
      category: 'Estudiantes',
      members: [
        {
          name: 'Carlos Martínez',
          phone: '+123456789',
          email: 'carlos.martinez@example.com',
        },
        {
          name: 'Laura Sánchez',
          phone: '+987654321',
          email: 'laura.sanchez@example.com',
        },
        {
          name: 'Mateo Valdivia',
          phone: '+987654321',
          email: 'laura.sanchez@example.com',
        },
      ],
    },
    // Puedes agregar más categorías y miembros según sea necesario
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-5xl font-bold text-center mb-8 text-white">Consejo de Carrera</h1>

      {councilMembers.map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-rose-300">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.members.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-950">{member.name}</h3>
                <div className="flex items-center mb-2">
                  <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
                  <span className="text-lg text-gray-600">{member.phone}</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
                  <a href={`mailto:${member.email}`} className="text-lg text-gray-600">{member.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Consejo;
