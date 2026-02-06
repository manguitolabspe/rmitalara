
import React from 'react';
import { motion } from 'framer-motion';

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

const IntranetPage: React.FC = () => {
    
    // In a real app, this would be protected by authentication.
    const user = { name: 'Maria Rodriguez', role: 'Socia Activa' };

  return (
    <motion.div 
      className="bg-brand-light min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
        {/* Intranet Hero */}
        <div className="relative bg-brand-primary pt-32 pb-16 text-white text-center">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold font-serif">Oficina Digital de la Socia</h1>
                <p className="mt-4 text-lg md:text-xl">
                    Bienvenida, <span className="font-bold text-brand-secondary">{user.name}</span>. Este es tu centro de operaciones.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Centro de Capacitación */}
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center"><i className="fas fa-graduation-cap text-brand-accent mr-3"></i>Centro de Capacitación</h2>
                        <p className="mb-6 text-gray-600">Accede a videos y guías de la Academia Manguito sobre ventas y digitalización.</p>
                        <div className="space-y-4">
                            <a href="#" className="group flex items-center p-4 bg-gray-50 rounded-lg hover:bg-brand-accent/10 transition-colors duration-300">
                                <i className="fas fa-video text-brand-accent mr-4 text-2xl w-8 text-center"></i>
                                <span className="text-gray-700 group-hover:text-brand-primary font-medium">Video: Cómo tomar fotos profesionales de tus productos con tu celular</span>
                                <i className="fas fa-arrow-right text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </a>
                            <a href="#" className="group flex items-center p-4 bg-gray-50 rounded-lg hover:bg-brand-accent/10 transition-colors duration-300">
                                <i className="fas fa-file-pdf text-brand-accent mr-4 text-2xl w-8 text-center"></i>
                                <span className="text-gray-700 group-hover:text-brand-primary font-medium">Guía PDF: Estrategias de venta por WhatsApp Business</span>
                                <i className="fas fa-arrow-right text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </a>
                        </div>
                    </motion.div>

                    {/* Documentación Legal */}
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-bold text-brand-primary mb-4 flex items-center"><i className="fas fa-gavel text-brand-accent mr-3"></i>Documentación Legal</h2>
                        <p className="mb-6 text-gray-600">Acceso fácil a los nuevos decretos y guías de formalización.</p>
                        <div className="space-y-4">
                            <a href="#" className="group flex items-center p-4 bg-gray-50 rounded-lg hover:bg-brand-accent/10 transition-colors duration-300">
                                <i className="fas fa-file-alt text-red-500 mr-4 text-2xl w-8 text-center"></i>
                                <span className="text-gray-700 group-hover:text-brand-primary font-medium">Decreto Mincetur (DS 001-2026) - Resumen y Puntos Clave</span>
                                <i className="fas fa-arrow-right text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </a>
                            <a href="#" className="group flex items-center p-4 bg-gray-50 rounded-lg hover:bg-brand-accent/10 transition-colors duration-300">
                                <i className="fas fa-file-alt text-red-500 mr-4 text-2xl w-8 text-center"></i>
                                <span className="text-gray-700 group-hover:text-brand-primary font-medium">Guía paso a paso: Cómo obtener tu RUC como persona natural con negocio</span>
                                <i className="fas fa-arrow-right text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"></i>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Sidebar Column */}
                <motion.div 
                    className="space-y-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Calendario de Ferias y Eventos */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-brand-primary mb-6 flex items-center"><i className="fas fa-calendar-alt text-brand-accent mr-3"></i>Calendario de Eventos</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                                <i className="fas fa-store text-yellow-500 mt-1"></i>
                                <div>
                                    <p className="font-bold text-yellow-800">Perú Mucho Gusto</p>
                                    <p className="text-sm text-gray-600">Agosto 15-18, 2026</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                                <i className="fas fa-flag text-blue-500 mt-1"></i>
                                <div>
                                    <p className="font-bold text-blue-800">Feria Municipal de Talara</p>
                                    <p className="text-sm text-gray-600">Septiembre 5, 2026</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 p-3 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                                <i className="fas fa-users text-green-500 mt-1"></i>
                                <div>
                                    <p className="font-bold text-green-800">Reunión Mensual RMI</p>
                                    <p className="text-sm text-gray-600">Último jueves de cada mes</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    </motion.div>
  );
};

export default IntranetPage;
