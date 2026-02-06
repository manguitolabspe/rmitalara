
import React from 'react';
import { ViveTalaraBusiness } from '../types';

interface ViveTalaraCardProps {
  business: ViveTalaraBusiness;
}

const ViveTalaraCard: React.FC<ViveTalaraCardProps> = ({ business }) => {

  const whatsappMessage = encodeURIComponent(`Hola ${business.name}, vengo de parte del portal de RMI Talara y quisiera más información.`);
  const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={business.imageUrl} alt={`Foto de ${business.name}`} />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-brand-primary font-serif">{business.name}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-4 flex-grow">{business.description}</p>
        <div className="mt-auto space-y-2">
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center text-sm font-bold py-2 px-3 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
                <i className="fab fa-whatsapp mr-2"></i>Contactar
            </a>
            <a 
                href={business.viveTalaraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-brand-secondary text-brand-primary text-center text-sm font-bold py-2 px-3 rounded-md hover:bg-amber-400 transition-colors duration-200"
            >
                Ver más en Vive Talara
            </a>
        </div>
      </div>
    </div>
  );
};

export default ViveTalaraCard;
