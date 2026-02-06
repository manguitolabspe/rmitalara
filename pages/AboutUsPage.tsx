
import React from 'react';
import { motion } from 'framer-motion';

const team = [
    { name: 'Rosanita Burgos', role: 'Presidenta', imageUrl: 'https://picsum.photos/seed/rosanita/300' },
    { name: 'Directiva 1', role: 'Vicepresidenta', imageUrl: 'https://picsum.photos/seed/directiva1/300' },
    { name: 'Directiva 2', role: 'Secretaria', imageUrl: 'https://picsum.photos/seed/directiva2/300' },
    { name: 'Directiva 3', role: 'Tesorera', imageUrl: 'https://picsum.photos/seed/directiva3/300' },
];

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const AboutUsPage: React.FC = () => {
  return (
    <motion.div 
      className="bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero */}
      <div className="relative bg-brand-primary h-80 flex items-center justify-center">
        <img src="https://picsum.photos/seed/about-hero/1920/1080" alt="Equipo RMI Talara" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <h1 className="text-5xl font-black text-white z-10 font-serif">Nuestra Identidad</h1>
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Nuestra Historia */}
        <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif flex items-center"><i className="fas fa-book-open text-brand-accent mr-4"></i>Nuestra Historia</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        RMI Talara nació del sueño colectivo de mujeres emprendedoras que buscaron unir fuerzas para superar desafíos comunes. Inspiradas por la Red Regional de Piura, decidimos crear un espacio propio, un ecosistema de apoyo mutuo para fortalecer nuestros negocios y tener una voz unificada en la provincia.
                    </p>
                    <p className="text-lg text-gray-600">
                        Desde nuestros inicios en pequeñas ferias locales hasta hoy, hemos crecido hasta convertirnos en un referente de asociatividad y resiliencia, demostrando que juntas somos imparables.
                    </p>
                </div>
                <img src="https://picsum.photos/seed/historia/600/400" alt="Socias fundadoras" className="rounded-lg shadow-lg" />
            </div>
        </section>

        {/* Misión de Soberanía */}
        <section className="mb-20 bg-brand-light p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src="https://picsum.photos/seed/mision/600/400" alt="Mujer emprendedora" className="rounded-lg shadow-lg order-last md:order-first" />
                <div>
                    <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif flex items-center"><i className="fas fa-lightbulb text-brand-accent mr-4"></i>Misión de Soberanía</h2>
                    <p className="text-lg font-semibold text-gray-700 mb-4">La Filosofía Manguito</p>
                    <p className="text-lg text-gray-600 mb-4">
                        Creemos en la soberanía productiva. Esto significa que cada mujer debe ser la dueña absoluta de su negocio, sus decisiones y, fundamentalmente, sus datos. En la era digital, los datos son el activo más valioso.
                    </p>
                    <p className="text-lg text-gray-600">
                        Nuestra "Filosofía Manguito" se basa en que, al igual que un manguito protege el fruto, nosotras protegemos la autonomía de nuestras socias, dándoles las herramientas para controlar su presencia online sin intermediarios que se apropien de su información o sus clientes.
                    </p>
                </div>
            </div>
        </section>
        
        {/* Estructura Organizativa */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary font-serif">Conoce a Nuestra Directiva</h2>
            <p className="text-lg text-gray-600 mt-4">Liderando con pasión y compromiso el futuro de RMI Talara.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <img className="mx-auto h-48 w-48 rounded-full object-cover shadow-lg" src={person.imageUrl} alt={person.name} />
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-brand-primary font-serif">{person.name}</h3>
                  <p className="text-brand-accent">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutUsPage;
