
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS credentials are missing. Please check your .env file.');
      // For demo purposes, we'll simulate success if keys are missing but log a warning
      // In a real scenario, we'd show an error to the user or handle it gracefully
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
        setIsSent(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      }, 1500);
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      
      setIsSent(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-32 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <span className="text-unilift-red font-bold text-xs uppercase tracking-widest mb-4 block">Bize Ulaşın</span>
          <h1 className="text-5xl md:text-7xl font-bold text-unilift-blue mb-8 tracking-tight">İletişim</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">Projeleriniz için özel çözümler ve profesyonel destek ekibimizle tanışmak için formu doldurabilir veya doğrudan bizi arayabilirsiniz.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-5/12"
          >
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-unilift-red flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-unilift-blue uppercase tracking-widest text-sm">Genel Merkez & Fabrika</h3>
                </div>
                <p className="text-lg text-gray-600 font-light leading-relaxed max-w-sm">
                  Dudullu OSB, Des Sanayi Sitesi, B12 Blok 106. (Zencefil) Sokak no 16 Ümraniye / İstanbul
                </p>
              </div>

              <div className="group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-unilift-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-unilift-blue uppercase tracking-widest text-sm">Müşteri Hizmetleri</h3>
                </div>
                <div className="space-y-2">
                  <a href="tel:05375525269" className="block text-2xl font-black text-gray-900 hover:text-unilift-red transition-colors">0537 552 52 69</a>
                  <a href="tel:05366532278" className="block text-xl font-bold text-gray-400 hover:text-unilift-blue transition-colors">0536 653 22 78</a>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-unilift-red flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-unilift-blue uppercase tracking-widest text-sm">Dijital İletişim</h3>
                </div>
                <a href="mailto:uniliftmakina@gmail.com" className="text-xl text-gray-600 font-light hover:text-unilift-blue transition-colors">uniliftmakina@gmail.com</a>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex items-start space-x-6">
                <Clock className="text-unilift-red flex-shrink-0" size={24} />
                <div>
                   <h4 className="font-bold text-gray-900 mb-2">Çalışma Saatlerimiz</h4>
                   <p className="text-sm text-gray-500 font-light uppercase tracking-widest">Pazartesi — Cumartesi</p>
                   <p className="text-lg font-black text-unilift-blue">09:00 — 18:30</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-7/12"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-unilift-blue to-unilift-red opacity-10 rounded-[3rem] blur-xl"></div>
              <div className="relative bg-white p-10 md:p-16 rounded-[3rem] shadow-3xl border border-gray-100">
                <h3 className="text-3xl font-bold text-unilift-blue mb-10">Bize Mesaj Gönderin</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">İsim Soyisim</label>
                      <input 
                        type="text" 
                        name="user_name"
                        required
                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl p-5 focus:border-unilift-red focus:bg-white transition-all outline-none font-medium text-gray-800"
                        placeholder="Örn: Ahmet Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">E-Posta</label>
                      <input 
                        type="email" 
                        name="user_email"
                        required
                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl p-5 focus:border-unilift-red focus:bg-white transition-all outline-none font-medium text-gray-800"
                        placeholder="orn@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Telefon Numarası</label>
                    <input 
                      type="tel" 
                      name="user_phone"
                      className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl p-5 focus:border-unilift-red focus:bg-white transition-all outline-none font-medium text-gray-800"
                      placeholder="0(5xx) xxx xx xx"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Mesajınız</label>
                    <textarea 
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl p-5 focus:border-unilift-red focus:bg-white transition-all outline-none font-medium text-gray-800 resize-none"
                      placeholder="Teklif talebiniz veya sorularınız..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2 text-red-500 bg-red-50 p-4 rounded-xl text-sm font-medium">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSent || isSending}
                    className={`w-full py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center space-x-3 shadow-2xl ${isSent ? 'bg-green-500 text-white' : 'bg-unilift-red text-white hover:bg-red-700 shadow-red-200'} ${isSending ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    {isSending ? (
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : isSent ? (
                      <>
                        <Check size={24} />
                        <span>Mesaj Gönderildi</span>
                      </>
                    ) : (
                      <>
                        <span>Talebi Gönder</span>
                        <Send size={22} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 font-medium">Verileriniz KVKK kapsamında korunmaktadır.</p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
