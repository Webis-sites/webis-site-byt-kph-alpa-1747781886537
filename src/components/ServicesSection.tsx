'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUtensils, FaGlassCheers, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, imageUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-primary text-white p-3 rounded-bl-lg">
          {icon}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-right text-primary">{title}</h3>
        <p className="text-gray-700 text-right">{description}</p>
      </div>
      <div className="px-6 pb-4">
        <motion.button
          className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors text-right"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          לפרטים נוספים
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <FaUtensils size={24} />,
      title: "שירותי קייטרינג",
      description: "אנו מציעים שירותי קייטרינג איכותיים לאירועים עסקיים, כנסים וישיבות. התפריט שלנו משלב מנות בריאות וטעימות המותאמות לדרישות הלקוח.",
      imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaGlassCheers size={24} />,
      title: "אירועים פרטיים",
      description: "המרחב המעוצב שלנו מתאים לאירוח אירועים פרטיים כמו ימי הולדת, מסיבות ומפגשים משפחתיים. אנו דואגים לכל הפרטים כדי שהאירוע שלכם יהיה מושלם.",
      imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaLaptopCode size={24} />,
      title: "מרחב עבודה משותף",
      description: "בית הקפה שלנו מציע סביבת עבודה נוחה עם חיבור אינטרנט מהיר, שקעים רבים ואווירה שקטה. מקום מושלם לפרילנסרים ואנשי היי-טק.",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaUsers size={24} />,
      title: "מפגשי טכנולוגיה",
      description: "אנו מארחים מפגשים וסדנאות בנושאי טכנולוגיה, פיתוח תוכנה ויזמות. הצטרפו לקהילה שלנו והתחברו לאנשים בעלי תחומי עניין דומים.",
      imageUrl: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            בית קפה אלפא מציע מגוון שירותים המותאמים לצרכים העסקיים והחברתיים שלכם, עם דגש על חדשנות וטכנולוגיה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-primary text-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-right md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">מעוניינים באחד השירותים שלנו?</h3>
              <p className="text-white text-opacity-90">
                צרו איתנו קשר עוד היום כדי לתאם פגישה או לקבל הצעת מחיר מותאמת אישית לצרכים שלכם
              </p>
            </div>
            <motion.button
              className="bg-white text-primary py-3 px-6 rounded-md font-bold hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <MdEventAvailable size={20} className="ml-2" />
                <span>הזמינו עכשיו</span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;