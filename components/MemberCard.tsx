
import React from 'react';
import { Member } from '../types';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col group">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={member.logoUrl} alt={`Logo de ${member.name}`} />
        <div className="absolute top-2 right-2 bg-brand-secondary text-brand-primary text-xs font-bold px-3 py-1 rounded-full flex items-center shadow-md">
            <i className="fas fa-check-circle mr-1.5"></i>
            Socia Verificada
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-primary mb-2 font-serif group-hover:text-brand-accent transition-colors">{member.name}</h3>
        <p className="text-brand-accent font-semibold mb-4">{member.category}</p>
        <div className="flex-grow"></div>
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="mt-4 block w-full bg-brand-cta text-white text-center font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform group-hover:scale-105"
        >
          Ver Perfil en Vive Talara
        </a>
      </div>
    </div>
  );
};

export default MemberCard;
