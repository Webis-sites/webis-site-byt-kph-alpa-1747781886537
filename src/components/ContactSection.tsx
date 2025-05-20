'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp 
} from 'react-icons/fa';
import Image from 'next/image';

type BusinessHour = {
  day: string;
  hours: string;
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const businessHours: BusinessHour[] = [
    { day: 'ראשון', hours: '08:00 - 22:00' },
    { day: 'שני', hours: '08:00 - 22:00' },
    { day: 'שלישי', hours: '08:00 - 22:00' },
    { day: 'רביעי', hours: '08:00 - 22:00' },
    { day: 'חמישי', hours: '08:00 - 22:00' },
    { day: 'שישי', hours: '08:00 - 16:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="contact-section" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-right"
            style={{ color: '#588C7E' }}
          >
            צור קשר
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto text-right"
          >
            אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-right"
              style={{ color: '#588C7E' }}
            >
              פרטי התקשרות
            </motion.h3>
            
            <motion.div variants={itemVariants} className="flex items-center mb-4 justify-end">
              <div className="text-right">
                <p className="font-medium">03-1234567</p>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: '#45B7D1' }}
              >
                <FaPhone className="text-white" />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center mb-4 justify-end">
              <div className="text-right">
                <p className="font-medium">info@alphacafe.co.il</p>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: '#45B7D1' }}
              >
                <FaEnvelope className="text-white" />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center mb-4 justify-end">
              <div className="text-right">
                <p className="font-medium">רחוב הרצל 123, תל אביב</p>
              </div>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: '#45B7D1' }}
              >
                <FaMapMarkerAlt className="text-white" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
              <h4 className="text-xl font-bold mb-4 text-right" style={{ color: '#588C7E' }}>עקבו אחרינו</h4>
              <div className="flex space-x-4 space-x-reverse justify-end">
                <motion.a 
                  href="#" 
                  aria-label="פייסבוק"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#588C7E' }}
                >
                  <FaFacebook className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  aria-label="אינסטגרם"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#588C7E' }}
                >
                  <FaInstagram className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  aria-label="טוויטר"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#588C7E' }}
                >
                  <FaTwitter className="text-white" />
                </motion.a>
                <motion.a 
                  href="#" 
                  aria-label="וואטסאפ"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#588C7E' }}
                >
                  <FaWhatsapp className="text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Business Hours */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-right"
              style={{ color: '#588C7E' }}
            >
              שעות פעילות
            </motion.h3>
            
            <div className="flex items-center justify-end mb-6">
              <h4 className="text-lg font-medium">שעות הפעילות שלנו</h4>
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center ml-4"
                style={{ backgroundColor: '#45B7D1' }}
              >
                <FaClock className="text-white" />
              </div>
            </div>
            
            <motion.div variants={containerVariants} className="space-y-3">
              {businessHours.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <span className="font-medium">{item.hours}</span>
                  <span className="font-bold">{item.day}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 relative h-40 overflow-hidden rounded-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="בית קפה אלפא"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-right"
              style={{ color: '#588C7E' }}
            >
              שלח לנו הודעה
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={itemVariants} className="text-right">
                <label htmlFor="name" className="block mb-2 font-medium">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-right"
                  style={{ focusRing: '#588C7E' }}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-right">
                <label htmlFor="email" className="block mb-2 font-medium">
                  דוא"ל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-right"
                  style={{ focusRing: '#588C7E' }}
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-right">
                <label htmlFor="message" className="block mb-2 font-medium">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-right"
                  style={{ focusRing: '#588C7E' }}
                  required
                />
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all"
                style={{ backgroundColor: '#588C7E' }}
              >
                שלח הודעה
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg overflow-hidden shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-right" style={{ color: '#588C7E' }}>
            המיקום שלנו
          </h3>
          <div className="h-96 w-full relative">
            <iframe
              title="מפת מיקום בית קפה אלפא"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27025.985380769533!2d34.76383035!3d32.0852999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1655000000000!5m2!1sen!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;