
import React from 'react';
import { motion } from 'framer-motion';
import { NEWS_ARTICLES, LOCAL_EVENTS } from '../constants';

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

const NewsPage: React.FC = () => {
  return (
    <motion.div 
      className="bg-brand-light"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* News Hero */}
      <div className="relative bg-brand-primary pt-32 pb-16 text-white text-center">
        <img 
          src="https://picsum.photos/seed/news-hero/1920/400" 
          alt="Comunidad de Talara" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold font-serif">Radar 2026 y Noticias</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Mantente al día con las últimas novedades de RMI Talara y los eventos que mueven nuestra provincia.
            </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Blog de Actualidad */}
        <motion.section 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-brand-primary mb-8 font-serif">Blog de Actualidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map(article => (
              <motion.div 
                key={article.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.2 }}
              >
                <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <h3 className="text-xl font-bold text-brand-primary mb-2 flex-grow font-serif">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                  <a href="#" className="mt-auto text-brand-accent font-semibold hover:text-brand-primary transition-colors duration-200">Leer más &rarr;</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Efemérides de Talara */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-brand-primary mb-8 font-serif">Efemérides de Talara</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="divide-y divide-gray-200">
                {LOCAL_EVENTS.map(event => (
                    <div key={event.id} className="py-5">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 bg-brand-accent text-white rounded-lg h-16 w-16 flex flex-col items-center justify-center font-bold">
                                <span className="text-xs uppercase tracking-wider">{event.date.split(' ')[0].substring(0,3)}</span>
                                <span className="text-2xl">{event.date.split(' ')[1]}</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-brand-primary">{event.name}</h4>
                                <p className="text-gray-600 mt-1">{event.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default NewsPage;
