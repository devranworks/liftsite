
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Shield, Zap, Award } from 'lucide-react';

const IllustrationBox: React.FC<{ icon: React.ReactNode; color: string }> = ({ icon, color }) => (
  <div className={`relative w-full aspect-square flex items-center justify-center rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100`}>
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className={`p-12 rounded-full bg-white shadow-xl shadow-gray-200/50 text-${color}`}
    >
      {icon}
    </motion.div>
    {/* Abstract shapes */}
    <div className={`absolute top-10 right-10 w-20 h-20 rounded-full bg-${color}/5 blur-2xl`}></div>
    <div className={`absolute bottom-10 left-10 w-32 h-32 rounded-full bg-unilift-blue/5 blur-3xl`}></div>
  </div>
);

const AboutSection: React.FC<{
  title: string;
  subtitle: string;
  content: string;
  illustration?: React.ReactNode;
  image?: string;
  reverse?: boolean;
  color?: string;
}> = ({ title, subtitle, content, illustration, image, reverse, color = "unilift-red" }) => (
  <section className={`py-24 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      <div className={`w-full lg:w-1/2 ${reverse ? 'lg:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={`text-${color} font-bold text-xs tracking-[0.2em] uppercase mb-6 block`}>{subtitle}</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-unilift-blue mb-8 tracking-tight">{title}</h2>
          <div className={`w-20 h-2 bg-${color} mb-10`}></div>
          <p className="text-xl text-gray-500 leading-relaxed font-light whitespace-pre-line">
            {content}
          </p>
        </motion.div>
      </div>
      <div className={`w-full lg:w-5/12 ${reverse ? 'lg:order-1' : ''}`}>
        {illustration ? (
          <IllustrationBox icon={illustration} color={color} />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] border border-gray-100"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Header */}
      <div className="bg-white pt-24 pb-12 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-unilift-red font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Kurumsal Profil</span>
            <h1 className="text-6xl md:text-8xl font-bold text-unilift-blue mb-8 tracking-tighter">
              Yükünüzü <span className="text-unilift-red">Hafifletiyoruz.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main About Section with Image */}
      <AboutSection 
        subtitle="Hikayemiz"
        title="Unilift Makina"
        content="2012 yılından bu yana hidrolik sistemler ve lift teknolojileri üzerine uzmanlaşmış ekibimizle, Türkiye'nin önde gelen lift üreticilerinden biri olmanın gururunu yaşıyoruz. Dudullu Organize Sanayi Bölgesi'ndeki modern tesisimizde, en son teknolojiyi kullanarak yük taşıma süreçlerinizi kolaylaştıran çözümler üretiyoruz.\n\nMühendislik tecrübemizi, müşteri odaklı yaklaşımımızla birleştirerek her sektöre özel, güvenli ve dayanıklı sistemler sunuyoruz."
        image="https://i.hizliresim.com/t7ungpy.png"
      />

      {/* Vision with Illustration */}
      <AboutSection 
        subtitle="Gelecek Planlarımız"
        title="Vizyonumuz"
        reverse
        color="unilift-blue"
        illustration={<Eye size={80} strokeWidth={1.5} />}
        content="Hidrolik lift sektöründe global standartları belirleyen, inovasyon ve teknolojide öncü, dünya çapında tanınan bir marka olmak. Sürdürülebilir üretim tekniklerimizle çevreye duyarlı, teknoloji odaklı çözümlerimizle sektörün geleceğine yön vermeyi hedefliyoruz."
      />

      {/* Mission with Illustration */}
      <AboutSection 
        subtitle="Neden Varız?"
        title="Misyonumuz"
        color="unilift-red"
        illustration={<Target size={80} strokeWidth={1.5} />}
        content="Müşterilerimize en güvenli, en pratik ve en kaliteli yük taşıma çözümlerini sunarak onların iş süreçlerini optimize etmek. Çalışanlarımızın gelişimi ve müşteri memnuniyetini odağımıza alarak, etik değerlerden ödün vermeden topluma ve ekonomiye değer katmak."
      />

      {/* Values Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-unilift-blue mb-4">Değerlerimiz</h2>
            <p className="text-gray-500 font-light">Bizi biz yapan temel prensiplerimiz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={32} />, title: "Güvenlik", text: "Tüm sistemlerimizde kullanıcı güvenliğini en üst seviyede tutuyoruz." },
              { icon: <Zap size={32} />, title: "İnovasyon", text: "Sürekli Ar-Ge çalışmalarıyla teknolojimizi geliştiriyoruz." },
              { icon: <Award size={32} />, title: "Kalite", text: "Uluslararası standartlarda, dayanıklı ve uzun ömürlü üretim." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/30 border border-gray-100"
              >
                <div className="text-unilift-red mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-unilift-blue mb-4">{value.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

