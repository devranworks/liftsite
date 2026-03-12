
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Başlangıç', path: '/' },
    { name: 'Ürünler & Projeler', path: '/urunler-projeler' },
    { name: 'Vizyon & Misyon', path: '/vizyon-misyon' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg py-3 shadow-xl shadow-gray-200/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="group flex items-center">
            <img 
              src="https://i.hizliresim.com/n8dyvgc.png" 
              alt="Unilift Makina Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-all hover:text-unilift-red relative ${location.pathname === link.path ? 'text-unilift-red' : 'text-gray-800'}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-unilift-red"
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:05375525269"
              className="flex items-center space-x-2 bg-unilift-blue text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-unilift-red transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-100"
            >
              <Phone size={16} fill="currentColor" />
              <span>0537 552 52 69</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-unilift-blue hover:text-unilift-red transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 text-lg font-semibold transition-colors rounded-xl ${location.pathname === link.path ? 'bg-red-50 text-unilift-red' : 'text-gray-800 hover:bg-gray-50'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t mt-4">
                <a
                  href="tel:05375525269"
                  className="flex items-center justify-center space-x-3 bg-unilift-red text-white p-5 rounded-2xl font-bold shadow-lg shadow-red-100"
                >
                  <Phone size={22} fill="white" />
                  <span className="text-lg">0537 552 52 69</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
