
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MEMBERS } from '../constants';
import { Category, District } from '../types';
import MemberCard from '../components/MemberCard';

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

const DirectoryPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | 'todos'>(searchParams.get('categoria') as Category || 'todos');
    const [selectedDistrict, setSelectedDistrict] = useState<District | 'todos'>('todos');

    useEffect(() => {
        const categoryParam = searchParams.get('categoria');
        if (categoryParam && Object.values(Category).includes(categoryParam as Category)) {
            setSelectedCategory(categoryParam as Category);
        }
    }, [searchParams]);

    const filteredMembers = useMemo(() => {
        return MEMBERS.filter(member => {
            const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'todos' || member.category === selectedCategory;
            const matchesDistrict = selectedDistrict === 'todos' || member.district === selectedDistrict;
            return matchesSearch && matchesCategory && matchesDistrict;
        });
    }, [searchTerm, selectedCategory, selectedDistrict]);

  return (
    <motion.div 
      className="bg-brand-light min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
        {/* Hero Section */}
        <div className="relative bg-brand-primary py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
            <img 
                src="https://picsum.photos/seed/directory-hero/1920/400" 
                alt="Taller de artesanas" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold font-serif">Directorio de Socias</h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Conoce a las mujeres líderes que impulsan la economía de Talara.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-10 sticky top-24 z-40 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Search Input */}
                    <div className="relative">
                        <i className="fas fa-search text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
                        <input
                            type="text"
                            placeholder="Buscar por nombre..."
                            className="w-full bg-gray-100 p-3 pl-12 border-2 border-transparent rounded-md focus:ring-2 focus:ring-brand-accent focus:border-transparent focus:bg-white transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {/* Category Select */}
                    <div className="relative">
                        <i className="fas fa-tag text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
                        <select
                            className="w-full bg-gray-100 p-3 pl-12 pr-10 border-2 border-transparent rounded-md appearance-none focus:ring-2 focus:ring-brand-accent focus:border-transparent focus:bg-white transition-all"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as Category | 'todos')}
                        >
                            <option value="todos">Todos los Rubros</option>
                            {Object.values(Category).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                         <i className="fas fa-chevron-down text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                    </div>
                    {/* District Select */}
                    <div className="relative">
                        <i className="fas fa-map-marker-alt text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>
                        <select
                            className="w-full bg-gray-100 p-3 pl-12 pr-10 border-2 border-transparent rounded-md appearance-none focus:ring-2 focus:ring-brand-accent focus:border-transparent focus:bg-white transition-all"
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value as District | 'todos')}
                        >
                            <option value="todos">Todos los Distritos</option>
                            {Object.values(District).map(dist => <option key={dist} value={dist}>{dist}</option>)}
                        </select>
                         <i className="fas fa-chevron-down text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                    </div>
                </div>
            </div>

            {/* Member Cards Grid */}
            {filteredMembers.length > 0 ? (
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: { transition: { staggerChildren: 0.05 } }
                    }}
                >
                {filteredMembers.map(member => (
                    <motion.div 
                        key={member.id} 
                        variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
                        layout
                    >
                        <MemberCard member={member} />
                    </motion.div>
                ))}
                </motion.div>
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                    <i className="fas fa-exclamation-circle text-5xl text-gray-400 mb-4"></i>
                    <h3 className="text-xl font-bold text-brand-primary">No se encontraron resultados</h3>
                    <p className="text-gray-500 mt-2">Intenta ajustar tus filtros de búsqueda.</p>
                </div>
            )}
        </div>
    </motion.div>
  );
};

export default DirectoryPage;
