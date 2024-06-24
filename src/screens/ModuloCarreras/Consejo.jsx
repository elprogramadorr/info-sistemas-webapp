import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Consejo = () => {
  const councilMembers = [
    {
      name: 'María Rodríguez',
      position: 'Presidenta del Consejo',
      phone: '+123456789',
      email: 'maria.rodriguez@example.com',
    },
    {
      name: 'Juan Pérez',
      position: 'Vicepresidente',
      phone: '+987654321',
      email: 'juan.perez@example.com',
    },
    {
        name: 'Juane Pérez',
        position: 'Vicepresidente',
        phone: '+987654321',
        email: 'juan.perez@example.com',
      },
      {
        name: 'Juane Pérez',
        position: 'Consejero',
        phone: '+987654321',
        email: 'juan.perez@example.com',
      },
      {
        name: 'Juane Pérez',
        position: 'Consejero',
        phone: '+987654321',
        email: 'juan.perez@example.com',
      },
      {
        name: 'Juane Pérez',
        position: 'Consejero',
        phone: '+987654321',
        email: 'juan.perez@example.com',
      },
    // Agrega más miembros según sea necesario
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-5xl font-bold text-center mb-8">Consejo de Carrera</h1>
      <div className="flex-grow grid grid-rows-5 sm:grid-cols-3 gap-12">
        {councilMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-950 font-extrabold">{'Est. ' + member.name}</h2>
            <p className="text-lg text-gray-700 mb-2">{member.position}</p>
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
  );
};

export default Consejo;
