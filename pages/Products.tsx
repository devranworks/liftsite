
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const products = [
  {
    name: "Standart Tip Panel Van Liftleri",
    image: "https://framerusercontent.com/images/f0uPD2Px6yHRDJSzcY8Z8UcRxs.jpeg?width=1200&height=1600",
    description: "Kompakt tasarımı ve hafif gövde yapısıyla panel van araçlarda maksimum verimlilik sağlayan yükleme çözümleri."
  },
  {
    name: "Kolon Tipi Liftler",
    image: "https://i.hizliresim.com/5si6tax.jpeg",
    description: "Ağır sanayi yüklerinin dikey transferinde sarsıntısız ve güvenli taşıma sunan, yüksek kapasiteli dikey lift sistemleri."
  },
  {
    name: "Slider Serisi Liftler",
    image: "https://muleengineering.com.au/wp-content/uploads/2019/07/Slider-Lift-Image-5.jpg",
    description: "Araç şasisi altına gizlenen kayar mekanizması ile kullanılmadığında yer kaplamayan, modern ve pratik lift modelleri."
  },
  {
    name: "Engelli Liftleri",
    image: "https://i.hizliresim.com/iixcb8d.jpeg",
    description: "Erişilebilirlik odaklı tasarlanan, tam güvenli ve sessiz çalışan konforlu tekerlekli sandalye taşıma platformları."
  },
  {
    name: "Yükleme Rampaları",
    image: "https://www.onuryapiotomasyon.com/uploads/FILE-20210923-0731MHPCTW8MM6ZA.jpeg",
    description: "Lojistik süreçlerde araç ve depo arasındaki yükseklik farkını ortadan kaldıran, yüksek tonaj dayanımlı rampa sistemleri."
  }
];

const Products: React.FC = () => {
  return (
    <div className="pt-32 pb-32">
      {/* Intro Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-unilift-red bg-red-50 rounded-lg">Portfolyo & Üretim</span>
          <h1 className="text-5xl md:text-7xl font-bold text-unilift-blue mb-10 tracking-tight leading-tight">Ürünler & <span className="text-unilift-red">Projeler</span></h1>
          <div className="w-24 h-2 bg-unilift-red mb-12"></div>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-10">
            Unilift Makina olarak, mühendislik harikası hidrolik lift sistemlerimizle her türlü yük taşıma ihtiyacınıza profesyonel çözümler üretiyoruz. Ürün kalitemiz, dayanıklılık testimizden tam not almış malzemeler ve inovatif tasarımlarımızla sektörde fark yaratıyoruz. Her bir projemiz, güvenliğin ve performansın kusursuz birleşimidir.
          </p>
        </motion.div>
      </section>

      {/* Quality Highlights Grid */}
      <section className="bg-gray-50 py-24 mb-32 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Yüksek Kalite", text: "CE ve ISO standartlarında, uzun ömürlü ve en dayanıklı malzemelerin seçimiyle üretim yapıyoruz." },
              { title: "Güvenlik Odaklı", text: "Hidrolik kilitler, acil durum stop mekanizmaları ve aşırı yük koruması ile tam emniyet." },
              { title: "Esnek Tasarım", text: "Standart modellerimizin yanı sıra, her araç tipine ve mekan ölçüsüne özel mühendislik çözümleri." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col space-y-4"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-unilift-red shadow-lg shadow-red-100">
                   <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-unilift-blue">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/40 border border-gray-50 transition-all hover:-translate-y-2"
            >
              <div className="h-[400px] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-unilift-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                  <div className="text-white">
                     <p className="text-sm font-bold uppercase tracking-widest text-indigo-200 mb-2">Unilift Makina Çözümü</p>
                     <h4 className="text-3xl font-bold">{product.name}</h4>
                  </div>
                </div>
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-bold text-unilift-blue mb-5">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed font-light">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
