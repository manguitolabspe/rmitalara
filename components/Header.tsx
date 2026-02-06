
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Directorio', path: '/directorio' },
  { name: 'Vive Talara', path: '/vivetalara' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'B2B', path: '/b2b' },
  { name: 'Noticias', path: '/noticias' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const headerVariants = {
    top: { backgroundColor: 'rgba(74, 20, 140, 0)', backdropFilter: 'blur(0px)' },
    scrolled: { backgroundColor: 'rgba(74, 20, 140, 0.85)', backdropFilter: 'blur(10px)' }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: -15 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      variants={headerVariants}
      initial="top"
      animate={scrolled || isOpen ? 'scrolled' : 'top'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <NavLink to="/" className="flex-shrink-0 text-white">
            <span className="text-2xl font-bold font-serif">RMI Talara</span>
            <p className="text-xs font-light tracking-wider opacity-80 uppercase">Red de Soberanía Productiva</p>
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-2">
                {NavLinks.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
                >
                    {location.pathname === link.path && (
                    <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white/10 rounded-md"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    )}
                    <span className="relative z-10">{link.name}</span>
                </NavLink>
                ))}
            </div>
            
            <div className="w-px h-6 bg-white/20"></div>

            <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors"><span className="sr-only">Facebook</span><i className="fab fa-facebook-f text-lg"></i></a>
                <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors"><span className="sr-only">Instagram</span><i className="fab fa-instagram text-lg"></i></a>
                <NavLink to="/intranet" className="px-4 py-2 text-sm font-medium text-brand-secondary border border-brand-secondary rounded-md hover:bg-brand-secondary hover:text-brand-primary transition-colors duration-200">
                    Intranet
                </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-secondary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
                  className="block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out"
                  style={{ top: '25%' }}
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out"
                  style={{ top: '50%' }}
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
                  className="block absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out"
                  style={{ top: '75%' }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {[...NavLinks].map((link) => (
                <motion.div key={link.name} variants={mobileLinkVariants}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `block px-3 py-3 rounded-md text-base font-medium text-white ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVariants}>
                <NavLink
                    to="/intranet"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `block w-full text-left mt-4 px-3 py-3 rounded-md text-base font-medium bg-brand-secondary text-brand-primary ${isActive ? 'ring-2 ring-white' : ''}`}
                  >
                    Intranet de Socias
                </NavLink>
              </motion.div>

              <motion.div variants={mobileLinkVariants} className="pt-6 px-3">
                 <div className="border-t border-white/20 pt-4 flex items-center justify-center space-x-6">
                    <a href="#" className="text-gray-200 hover:text-brand-secondary transition-colors"><span className="sr-only">Facebook</span><i className="fab fa-facebook-f text-2xl"></i></a>
                    <a href="#" className="text-gray-200 hover:text-brand-secondary transition-colors"><span className="sr-only">Instagram</span><i className="fab fa-instagram text-2xl"></i></a>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
