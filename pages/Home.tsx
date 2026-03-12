
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/BV6UnWAQ7msgVe7vMJUtrIfJz4.png?width=1920&height=1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-5 py-2 mb-8 text-xs font-black tracking-widest uppercase text-unilift-red bg-red-50 rounded-full border border-red-100"
          >
            <ShieldCheck size={14} />
            <span>Endüstriyel Güç & Güven</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-unilift-blue mb-10 leading-[0.9] tracking-tighter"
          >
            Yükünüzü <br /> <span className="text-unilift-red relative inline-block">Hafifletiyoruz!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Ağır işler, güvenli çözümler ister. <span className="text-unilift-blue font-medium">Unilift</span> olarak her sektöre uygun hidrolik lift sistemlerimizle yük taşımanın en pratik ve güvenli yolunu sunuyoruz.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              to="/urunler-projeler" 
              className="group flex items-center space-x-3 bg-unilift-blue text-white px-10 py-5 rounded-2xl font-bold hover:bg-opacity-95 transition-all transform hover:-translate-y-1 shadow-2xl shadow-indigo-200"
            >
              <span>Ürünlerimizi Keşfedin</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/iletisim" 
              className="text-unilift-blue px-10 py-5 rounded-2xl font-bold border-2 border-unilift-blue/10 hover:border-unilift-blue/30 hover:bg-gray-50 transition-all flex items-center space-x-2"
            >
              <span>Teklif Alın</span>
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">Aşağı Kaydır</span>
           <div className="w-px h-12 bg-gradient-to-b from-unilift-red to-transparent"></div>
        </div>
      </section>

      {/* Special Stats Section - Requested Split Area */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 mb-10 tracking-tight">
                Unilift, yük taşımayı zahmet olmaktan çıkarır, <span className="text-unilift-red italic">işinizi güvenle</span> yukarı taşır.
              </h2>
              <div className="space-y-8">
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                  Güçlü, pratik ve dayanıklı lift sistemleriyle her sektöre akıllı çözümler sunar. Sadece bir makine değil, iş akışınızın en güvenilir halkasını üretiyoruz.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <Zap className="text-unilift-red" size={24} />
                    <span className="font-bold text-gray-700">Hızlı Montaj</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <Award className="text-unilift-blue" size={24} />
                    <span className="font-bold text-gray-700">CE Sertifikalı</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image with Luxury Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-red-50 rounded-[3rem] -z-10 rotate-3 translate-x-4"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-3xl border-8 border-white group">
                <img 
                  src="https://framerusercontent.com/images/GeYjRZ6GFL6tIMW4Lul1lX0Ck.jpeg?width=1200&height=1600" 
                  alt="Industrial Excellence" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-unilift-blue text-white p-8 rounded-3xl hidden lg:block shadow-2xl">
                 <p className="text-3xl font-black mb-1">2012</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Kuruluş Yılı</p>
              </div>
            </motion.div>
          </div>

          {/* Clean Stats area */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { number: '100+', label: 'Memnun Müşteri', desc: 'Sektör lideri markalar bizi tercih ediyor.' },
              { number: '12+', label: 'Yıllık Deneyim', desc: 'Hidrolik sistemlerde derin mühendislik bilgisi.' },
              { number: '100+', label: 'Tamamlanan İş', desc: 'Sorunsuz teslimat ve %100 operasyonel başarı.' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group p-8 rounded-3xl bg-transparent hover:bg-gray-50 transition-all border-l-2 border-transparent hover:border-unilift-red"
              >
                <div className="text-6xl font-black text-unilift-blue mb-4 group-hover:text-unilift-red transition-colors">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-900 font-bold mb-3">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500 leading-relaxed font-light">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Call to Action */}
      <section className="py-32 bg-unilift-blue relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(217,49,39,0.5),transparent)]"></div>
         </div>
         <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <h3 className="text-white text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">İhtiyaçlarınıza Özel <br className="hidden md:block" /> Çözümler Üretelim</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                 <Link 
                   to="/vizyon-misyon" 
                   className="bg-unilift-red text-white px-12 py-5 rounded-2xl font-bold hover:bg-white hover:text-unilift-blue transition-all shadow-xl shadow-black/20"
                 >
                   Firma Profilimizi İnceleyin
                 </Link>
                 <Link 
                   to="/iletisim" 
                   className="text-white px-8 py-4 border border-white/20 rounded-2xl font-bold hover:bg-white/5 transition-all"
                 >
                   Bizimle Tanışın
                 </Link>
              </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default Home;
