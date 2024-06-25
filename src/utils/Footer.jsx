// src/components/Footer.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import universityLogo from '../assets/universityLogo.png'; // Asegúrate de que esta ruta sea correcta
import departmentLogo from '../assets/departmentLogo.png'; // Asegúrate de que esta ruta sea correcta
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="container px-4 flex flex-col md:flex-row justify-between items-center mx-auto">
        <div className='flex flex-row items-center gap-5'>
            <img src={departmentLogo} alt="University Logo" className="w-21 h-auto mb-4" />
            <img src={universityLogo} alt="University Logo" className="w-100 h-60" />
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 gap-3">
                <p className="text-center md:text-left">Departamento de Informática y Sistemas</p>
                <p className="text-center md:text-left">Dirección de la universidad</p>
                <p className="text-center md:text-left">Teléfono: (591)-(4)233719</p>
                <p className="text-center md:text-left">Email: dir.inf@umss.edu.bo</p>
            </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <p className="mb-4">Síguenos en nuestras redes sociales:</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/DptoInformaticaSistemas/" className="text-white hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com/umssfcyt?lang=es" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/umssboloficial/?hl=es" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/school/umssboloficial/?originalSubdomain=bo" className="text-white hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
