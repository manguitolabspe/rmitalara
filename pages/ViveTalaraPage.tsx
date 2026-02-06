
import React from 'react';
import { motion } from 'framer-motion';
// FIX: The `ViveTalaraCategory` enum is a type and should be imported from `../types` to maintain consistency with other components.
import { VIVE_TALARA_BUSINESSES } from '../constants';
import { ViveTalaraCategory } from '../types';
import ViveTalaraCard from '../components/ViveTalaraCard';

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

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const categoryLinks = [
    { name: ViveTalaraCategory.GASTRONOMIA, icon: 'fas fa-utensils', id: 'gastronomia' },
    { name: ViveTalaraCategory.ARTESANIA_Y_COMPRAS, icon: 'fas fa-shopping-bag', id: 'artesania' },
    { name: ViveTalaraCategory.HOSPEDAJE, icon: 'fas fa-bed', id: 'hospedaje' },
    { name: ViveTalaraCategory.SERVICIOS_Y_TOURS, icon: 'fas fa-car', id: 'servicios' },
];

const ViveTalaraPage: React.FC = () => {
    
    const businessesByCategory = (category: ViveTalaraCategory) => {
        return VIVE_TALARA_BUSINESSES.filter(b => b.category === category);
    };
    
    const handleCategoryScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
        <section className="relative h-[60vh] flex items-center justify-center text-white">
            <img 
            src="https://picsum.photos/seed/vive-talara-hero/1920/1080" 
            alt="Paisaje de Talara" 
            className="absolute z-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-black mb-4 font-serif drop-shadow-lg">
                    Conoce el corazón emprendedor
                    <br/>
                    de nuestra provincia
                </h1>
                <p className="text-xl md:text-2xl font-light drop-shadow-md">
                    La guía curada por RMI Talara con lo mejor de nuestra red.
                </p>
            </div>
        </section>
        
        <div className="bg-brand-light">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Category Navigation */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categoryLinks.map(link => (
                            <button 
                                key={link.id} 
                                type="button"
                                onClick={() => handleCategoryScroll(link.id)}
                                className="group flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm text-brand-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
                            >
                                <i className={`${link.icon} text-2xl mb-2 text-brand-accent`}></i>
                                <span className="font-bold text-center text-sm">{link.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Business Sections */}
                {categoryLinks.map(category => {
                    const businesses = businessesByCategory(category.name);
                    return (
                        <motion.section 
                            key={category.id} 
                            id={category.id} 
                            className="mb-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={sectionVariants}
                        >
                            <h2 className="text-3xl font-bold text-brand-primary mb-8 font-serif flex items-center">
                                <i className={`${category.icon} text-brand-accent mr-4`}></i>
                                {category.name}
                            </h2>
                            {businesses.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {businesses.map(business => (
                                    <ViveTalaraCard key={business.id} business={business} />
                                ))}
                                </div>
                            ) : (
                                <div className="text-center py-10 px-6 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <i className="fas fa-hourglass-start text-4xl text-gray-400 mb-4"></i>
                                    <h3 className="text-lg font-semibold text-brand-dark">Próximamente en esta sección</h3>
                                    <p className="text-gray-500 mt-1 max-w-md mx-auto">Estamos validando y preparando a las mejores emprendedoras de este rubro. ¡Vuelve pronto para descubrir sus propuestas!</p>
                                </div>
                            )}
                        </motion.section>
                    );
                })}
            </div>
        </div>

    </motion.div>
  );
};

export default ViveTalaraPage;
