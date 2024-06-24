import React from 'react';

const AuthorityCard = ({ image, name, position, officeNumber, cellNumber, email }) => {
  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden m-4" style={{ minHeight: '250px' }}>
      <div className="w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(${image || defaultImage})` }}>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
            <h1 className="text-2xl font-bold truncate text-gray-900">{name}</h1>
            <p className="text-lg text-gray-600">{position}</p>
            <p className="text-lg text-gray-600">{officeNumber}</p>
            <p className="text-lg text-gray-600">{cellNumber}</p>
            <p className="text-lg text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorityCard;
