
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: "https://i.hizliresim.com/iixcb8d.jpeg", title: "Engelli Erişim Platformu" },
  { url: "https://i.hizliresim.com/78ftn5q.jpeg", title: "Panel Van Hidrolik Lift" },
  { url: "https://i.hizliresim.com/ahzupo5.jpeg", title: "Yükleme Rampası Uygulaması" },
  { url: "https://i.hizliresim.com/p2mocyp.jpeg", title: "Dikey Yük Taşıma Sistemi" },
  { url: "https://i.hizliresim.com/np96vh7.jpeg", title: "Kamyonet Tipi Arka Lift" },
  { url: "https://i.hizliresim.com/oe5yxuc.jpeg", title: "Endüstriyel Platform Lift" },
  { url: "https://i.hizliresim.com/7mnoqd1.jpeg", title: "Depo İçi Yükleme Çözümü" },
  { url: "https://i.hizliresim.com/9pyrd9m.jpeg", title: "Hareketli Yükleme Rampası" },
  { url: "https://i.hizliresim.com/5si6tax.jpeg", title: "Kolon Tipi Ağır Yük Lifti" }
];

const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-unilift-red font-bold text-xs uppercase tracking-widest mb-4 block">Portfolyo</span>
          <h1 className="text-4xl md:text-6xl font-bold text-unilift-blue mb-8">Uygulama <span className="text-unilift-red">Galerisi</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">Tamamladığımız projelerden ve ürün uygulamalarımızdan kesitler.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer border border-gray-100"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-unilift-blue/90 via-unilift-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10 text-white">
                <h4 className="font-bold text-2xl mb-2 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                <p className="text-sm text-indigo-200 uppercase tracking-widest translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75">Unilift Mühendisliği</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
