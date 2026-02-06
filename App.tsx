
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DirectoryPage from './pages/DirectoryPage';
import AboutUsPage from './pages/AboutUsPage';
import B2BPage from './pages/B2BPage';
import IntranetPage from './pages/IntranetPage';
import NewsPage from './pages/NewsPage';
import ViveTalaraPage from './pages/ViveTalaraPage';

const AppContent: React.FC = () => {
    const location = useLocation();
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="bg-brand-light font-sans text-brand-dark">
            <Header />
            <main>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/directorio" element={<DirectoryPage />} />
                        <Route path="/vivetalara" element={<ViveTalaraPage />} />
                        <Route path="/nosotros" element={<AboutUsPage />} />
                        <Route path="/b2b" element={<B2BPage />} />
                        <Route path="/intranet" element={<IntranetPage />} />
                        <Route path="/noticias" element={<NewsPage />} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};


const App: React.FC = () => {
  return (
    <HashRouter>
        <AppContent />
    </HashRouter>
  );
};

export default App;
