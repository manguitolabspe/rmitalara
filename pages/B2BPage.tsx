
import React from 'react';
import { motion } from 'framer-motion';
import { B2B_PRODUCTS } from '../constants';

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

const B2BPage: React.FC = () => {
    
    const handleQuoteClick = () => {
        const message = encodeURIComponent("Hola, estoy interesado en una cotización para regalos corporativos de RMI Talara.");
        const whatsappUrl = `https://wa.me/51987654321?text=${message}`; // Replace with actual number
        window.open(whatsappUrl, '_blank');
    };

  return (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {/* Hero Section */}
        <section className="bg-brand-primary py-20 text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold font-serif">B2B & Regalos Corporativos</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">
                    El regalo perfecto que cuenta una historia. Sorprende a tus clientes y colaboradores con productos únicos hechos por manos talareñas.
                </p>
            </div>
        </section>

        {/* Social Responsibility Badge */}
        <section className="bg-brand-secondary py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-primary">
                <h2 className="text-2xl font-bold flex items-center justify-center">
                    <i className="fas fa-leaf text-3xl mr-3"></i>
                    Insignia de Responsabilidad Social
                </h2>
                <p className="mt-2 text-lg">
                    "Al comprar aquí, impulsas directamente la economía de la mujer talareña y fortaleces el tejido social de nuestra comunidad."
                </p>
            </div>
        </section>

        {/* Premium Catalog */}
        <section className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-brand-primary mb-12 font-serif">Catálogo Premium</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {B2B_PRODUCTS.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-primary font-serif">{product.name}</h3>
                                <p className="text-gray-500">{product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-brand-primary mb-4 font-serif">¿Listo para hacer un pedido?</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Contáctanos para pedidos al por mayor y personalizaciones. Nuestro equipo te atenderá de inmediato para preparar la cotización perfecta para tu empresa.
                </p>
                <button 
                    onClick={handleQuoteClick}
                    className="bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center mx-auto shadow-lg transform hover:scale-105"
                >
                    <i className="fab fa-whatsapp text-2xl mr-3"></i>
                    Cotización Directa por WhatsApp
                </button>
            </div>
        </section>
    </motion.div>
  );
};

export default B2BPage;
