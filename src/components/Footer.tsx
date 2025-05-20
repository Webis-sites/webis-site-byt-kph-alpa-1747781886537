'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your API
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'פייסבוק' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'אינסטגרם' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'טוויטר' },
    { icon: <FaWhatsapp />, url: 'https://whatsapp.com', label: 'וואטסאפ' }
  ];

  const quickLinks = [
    { name: 'דף הבית', url: '/' },
    { name: 'תפריט', url: '/menu' },
    { name: 'אודות', url: '/about' },
    { name: 'אירועים', url: '/events' },
    { name: 'צור קשר', url: '/contact' }
  ];

  return (
    <footer 
      id="main-footer" 
      className="bg-gradient-to-b from-[#588C7E]/90 to-[#588C7E] text-white"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and About */}
          <motion.div variants={itemVariants} className="text-right">
            <div className="flex justify-end mb-4">
              <Image 
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="בית קפה אלפא לוגו" 
                width={120} 
                height={120} 
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">בית קפה אלפא</h3>
            <p className="mb-4 text-sm leading-relaxed">
              אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} passHref>
                    <motion.span 
                      className="inline-block cursor-pointer hover:text-[#45B7D1] transition-colors duration-300"
                      whileHover={{ x: -5 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end gap-2">
                <span>רחוב הרצל 123, תל אביב</span>
                <FaMapMarkerAlt className="text-[#45B7D1]" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>03-1234567</span>
                <FaPhone className="text-[#45B7D1]" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>info@alphacafe.co.il</span>
                <FaEnvelope className="text-[#45B7D1]" />
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mt-6 mb-4">שעות פעילות</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between">
                <span>8:00 - 22:00</span>
                <span>ראשון - חמישי:</span>
              </li>
              <li className="flex justify-between">
                <span>8:00 - 23:00</span>
                <span>שישי:</span>
              </li>
              <li className="flex justify-between">
                <span>סגור</span>
                <span>שבת:</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-bold mb-4">הרשמה לעדכונים</h3>
            <p className="mb-4 text-sm">הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים ואירועים מיוחדים</p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="הכנס את האימייל שלך"
                  className="px-4 py-2 rounded text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#45B7D1]"
                  aria-label="כתובת אימייל"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-[#45B7D1] hover:bg-[#3a9cb3] px-4 py-2 rounded font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {subscribed ? 'תודה על ההרשמה!' : 'הרשם'}
                </motion.button>
              </div>
            </form>

            {/* Social Media */}
            <h3 className="text-xl font-bold mb-4">עקבו אחרינו</h3>
            <div className="flex justify-end space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white hover:text-[#45B7D1] text-xl transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Site Map */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-6 border-t border-white/20 text-center"
        >
          <h3 className="text-lg font-bold mb-4">מפת האתר</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.url} passHref>
                <motion.span 
                  className="text-sm hover:text-[#45B7D1] transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <Link href="/privacy" passHref>
              <motion.span 
                className="text-sm hover:text-[#45B7D1] transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                מדיניות פרטיות
              </motion.span>
            </Link>
            <Link href="/terms" passHref>
              <motion.span 
                className="text-sm hover:text-[#45B7D1] transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                תנאי שימוש
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 text-center text-sm"
        >
          <p>© {currentYear} בית קפה אלפא. כל הזכויות שמורות.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;