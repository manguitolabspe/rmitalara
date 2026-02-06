
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-3xl font-bold font-serif text-white">RMI Talara</h2>
            <p className="text-gray-300 text-base">
              Red de Soberanía Productiva. Empoderando a la mujer emprendedora de Talara.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors"><span className="sr-only">Facebook</span><i className="fab fa-facebook-f text-2xl"></i></a>
              <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors"><span className="sr-only">Instagram</span><i className="fab fa-instagram text-2xl"></i></a>
              <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors"><span className="sr-only">LinkedIn</span><i className="fab fa-linkedin-in text-2xl"></i></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navegación</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/directorio" className="text-base text-gray-300 hover:text-brand-secondary">Directorio</Link></li>
                  <li><Link to="/nosotros" className="text-base text-gray-300 hover:text-brand-secondary">Nosotros</Link></li>
                  <li><Link to="/b2b" className="text-base text-gray-300 hover:text-brand-secondary">Regalos Corporativos</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Recursos</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/noticias" className="text-base text-gray-300 hover:text-brand-secondary">Noticias</Link></li>
                  <li><Link to="/intranet" className="text-base text-gray-300 hover:text-brand-secondary">Intranet Socias</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                 <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contacto</h3>
                 <ul className="mt-4 space-y-4 text-gray-300">
                    <li>Dirección: Talara, Piura, Perú</li>
                    <li>Email: contacto@rmitalara.org</li>
                    <li>Teléfono: +51 987 654 321</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} RMI Talara. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
