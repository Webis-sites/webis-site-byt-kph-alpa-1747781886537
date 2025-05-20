'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaCoffee, FaUsers, FaAward, FaClock } from 'react-icons/fa';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <div className="text-primary-500 mb-2 text-3xl">{icon}</div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-4 border-secondary-400">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gray-50"
      ref={sectionRef}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-600">אודות בית קפה אלפא</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
          </p>
        </motion.div>

        {/* Main content with image */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/2 text-right">
            <h3 className="text-3xl font-bold mb-4 text-primary-600">הסיפור שלנו</h3>
            <p className="mb-4 text-lg">
              בית קפה אלפא נוסד בשנת 2010 מתוך אהבה לקפה איכותי וטכנולוגיה. המייסדים שלנו, שהגיעו מעולם ההייטק, רצו ליצור מקום שמשלב את התשוקה שלהם לקפה משובח עם סביבת עבודה מעוררת השראה.
            </p>
            <p className="mb-4 text-lg">
              כיום, אנו גאים להיות מקום המפגש המועדף על אנשי טכנולוגיה, יזמים ואנשי עסקים בעיר, המציע לא רק קפה מעולה אלא גם חוויה ייחודית המשלבת טכנולוגיה וקולינריה.
            </p>
            <motion.button 
              className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-6 rounded-full mt-4 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              קרא עוד
            </motion.button>
          </div>
          <div className="md:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="בית קפה אלפא - אווירה"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-primary-600">המספרים שלנו</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem 
              icon={<FaCoffee />} 
              value="15,000+" 
              label="כוסות קפה בחודש" 
            />
            <StatItem 
              icon={<FaUsers />} 
              value="5,000+" 
              label="לקוחות קבועים" 
            />
            <StatItem 
              icon={<FaAward />} 
              value="12" 
              label="פרסים ואותות הוקרה" 
            />
            <StatItem 
              icon={<FaClock />} 
              value="13" 
              label="שנות ניסיון" 
            />
          </div>
        </motion.div>

        {/* Team */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-8 text-center text-primary-600">הצוות שלנו</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="דניאל כהן" 
              role="מייסד ומנכ\"ל" 
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            />
            <TeamMember 
              name="מיכל לוי" 
              role="שף ראשי" 
              imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            />
            <TeamMember 
              name="יוסי אברהם" 
              role="בריסטה ראשי" 
              imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            />
            <TeamMember 
              name="רונית שרון" 
              role="מנהלת שיווק" 
              imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;