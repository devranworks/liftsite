
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block group">
              <img 
                src="https://i.hizliresim.com/n8dyvgc.png" 
                alt="Unilift Makina Logo" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Hidrolik lift sistemlerinde güven, kalite ve yenilikçi çözümlerin adresi. Yükünüzü hafifletiyor, işinizi geleceğe taşıyoruz.
            </p>
            <div className="flex space-x-4">
              <Instagram className="text-gray-400 hover:text-unilift-red cursor-pointer transition-colors" size={20} />
              <Facebook className="text-gray-400 hover:text-unilift-red cursor-pointer transition-colors" size={20} />
              <Linkedin className="text-gray-400 hover:text-unilift-red cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-unilift-red text-sm transition-colors">Başlangıç</Link></li>
              <li><Link to="/urunler-projeler" className="text-gray-500 hover:text-unilift-red text-sm transition-colors">Ürünler & Projeler</Link></li>
              <li><Link to="/vizyon-misyon" className="text-gray-500 hover:text-unilift-red text-sm transition-colors">Vizyon & Misyon</Link></li>
              <li><Link to="/galeri" className="text-gray-500 hover:text-unilift-red text-sm transition-colors">Galeri</Link></li>
              <li><Link to="/iletisim" className="text-gray-500 hover:text-unilift-red text-sm transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">Ürün Kategorileri</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm">Panel Van Liftleri</li>
              <li className="text-gray-500 text-sm">Kolon Tipi Liftler</li>
              <li className="text-gray-500 text-sm">Engelli Liftleri</li>
              <li className="text-gray-500 text-sm">Yükleme Rampaları</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-500">
                <MapPin size={18} className="text-unilift-red flex-shrink-0" />
                <span>Dudullu OSB, Des Sanayi Sitesi, B12 Blok 106. Sokak no 16 Ümraniye / İstanbul</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Phone size={18} className="text-unilift-red flex-shrink-0" />
                <span>0537 552 52 69</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-500">
                <Mail size={18} className="text-unilift-red flex-shrink-0" />
                <span>info@uniliftmakina.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-400">
          <p>© 2024 Unilift Makina. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6">
            <span>Gizlilik Politikası</span>
            <span>KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
