
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NewsTicker from '../components/NewsTicker';
import ImpactChart from '../components/ImpactChart';
import MemberCard from '../components/MemberCard';
import { Category } from '../types';
import { MEMBERS } from '../constants';

const categoryDetails = {
    [Category.ARTESANIA]: { icon: 'fas fa-palette' },
    [Category.GASTRONOMIA]: { icon: 'fas fa-utensils' },
    [Category.SERVICIOS]: { icon: 'fas fa-briefcase' },
};

const featuredMembers = MEMBERS.slice(0, 3);

const heroImages = [
    'https://picsum.photos/seed/hero-artesania/1920/1080',
    'https://picsum.photos/seed/hero-gastronomia/1920/1080',
    'https://picsum.photos/seed/hero-comunidad/1920/1080',
    'https://picsum.photos/seed/hero-talara/1920/1080',
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
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

const titleContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const titleWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds
        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    const handleSearch = (category: Category) => {
        navigate(`/directorio?categoria=${encodeURIComponent(category)}`);
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
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute z-0 w-full h-full object-cover"
              alt="Fondo de RMI Talara"
            />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="z-10 text-center p-4 flex flex-col items-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-black mb-4 font-serif drop-shadow-lg"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {"Forjando el Futuro".split(" ").map((word, index) => (
                <motion.span key={index} variants={titleWordVariants} className="inline-block mr-3">{word}</motion.span>
            ))}
            <br/>
            {"de Talara".split(" ").map((word, index) => (
                <motion.span key={index} variants={titleWordVariants} className="inline-block mr-3">{word}</motion.span>
            ))}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl font-light drop-shadow-md max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Mujeres Líderes. Negocios que Inspiran. Calidad que Trasciende.
          </motion.p>
          <motion.button
            onClick={() => navigate('/directorio')}
            className="bg-brand-cta text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(236, 64, 122, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Descubre la Red
          </motion.button>
        </div>
        <motion.div 
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <i className="fas fa-chevron-down text-3xl text-white opacity-70"></i>
        </motion.div>
      </section>

      {/* News Ticker */}
      <NewsTicker news="ÚLTIMA HORA: RMI Talara se prepara para la feria 'Perú Mucho Gusto' edición Agosto 2026. ¡Visítanos! --- " />

      {/* Value Proposition */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div className="flex flex-col items-center">
                      <i className="fas fa-medal text-5xl text-brand-secondary mb-4"></i>
                      <h3 className="text-2xl font-bold font-serif text-brand-primary mb-2">Calidad Verificada</h3>
                      <p className="text-gray-600">Cada socia pasa por un riguroso estándar de calidad, garantizando productos y servicios excepcionales. Compra con la confianza que solo nuestra red puede ofrecer.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <i className="fas fa-hands-helping text-5xl text-brand-secondary mb-4"></i>
                      <h3 className="text-2xl font-bold font-serif text-brand-primary mb-2">Impacto Social Directo</h3>
                      <p className="text-gray-600">Tu compra empodera directamente a una mujer líder y a su familia. Sé parte del motor que impulsa la economía local y genera un cambio real en Talara.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <i className="fas fa-map-marker-alt text-5xl text-brand-secondary mb-4"></i>
                      <h3 className="text-2xl font-bold font-serif text-brand-primary mb-2">Conexión Auténtica</h3>
                      <p className="text-gray-600">Descubre la verdadera esencia de Talara a través de sus emprendedoras. Ofrecemos experiencias y productos con historia, tradición y corazón.</p>
                  </div>
              </div>
          </div>
      </motion.section>

      {/* Featured Members */}
      <motion.section 
        className="py-20 bg-brand-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif">Conoce a Nuestras Líderes</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Este mes, destacamos el talento y la dedicación de estas extraordinarias emprendedoras.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMembers.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Buscador Inteligente */}
      <motion.section 
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif">Explora Nuestra Red</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Encuentra exactamente lo que necesitas. Filtra por rubro y conecta con la experta ideal para ti.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(Object.values(Category)).map(category => (
                <div 
                    key={category} 
                    onClick={() => handleSearch(category)}
                    className="group bg-brand-light p-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-brand-accent cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
                >
                    <i className={`${categoryDetails[category].icon} text-5xl text-brand-primary group-hover:text-white transition-colors duration-300`}></i>
                    <h3 className="mt-4 text-2xl font-bold text-brand-primary group-hover:text-white transition-colors duration-300 font-serif">{category}</h3>
                </div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials */}
      <motion.section 
        className="py-20 bg-brand-primary text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif">Lo que Dicen de Nosotras</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 shadow-lg">
              <i className="fas fa-quote-left text-brand-secondary text-3xl mb-4"></i>
              <p className="text-lg mb-4">"Trabajar con RMI Talara para nuestros regalos corporativos fue un acierto. Calidad impecable y un impacto social que enorgullece a nuestra empresa. Son socias estratégicas para el desarrollo local."</p>
              <p className="font-bold text-right">- Jefe de RSE, Empresa Petrolera XYZ</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20 shadow-lg">
              <i className="fas fa-quote-left text-brand-secondary text-3xl mb-4"></i>
              <p className="text-lg mb-4">"La experiencia gastronómica que encontré a través del portal fue inolvidable. Auténtico, delicioso y con una historia detrás de cada plato. ¡Totalmente recomendado!"</p>
              <p className="font-bold text-right">- Ana García, Turista de Lima</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mapa de Impacto */}
      <motion.section 
        className="py-20 bg-brand-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary mb-4 font-serif">Juntas Multiplicamos el Éxito</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestro crecimiento es el de toda una comunidad. Este es el alcance de nuestra red en la provincia.
            </p>
          </div>
          <ImpactChart />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
