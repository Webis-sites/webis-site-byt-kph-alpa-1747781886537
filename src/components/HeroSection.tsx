'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: [0.2, 1, 0.2],
      y: [0, 10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      className="relative h-screen w-full overflow-hidden"
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="בית קפה אלפא"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-[#588C7E] bg-opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1
            className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl text-right mx-auto max-w-4xl"
            variants={itemVariants}
          >
            בית קפה מוביל בישראל
          </motion.h1>
          
          <motion.p
            className="mb-8 text-lg md:text-xl lg:text-2xl text-right mx-auto max-w-2xl"
            variants={itemVariants}
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
          >
            <Link 
              href="#booking" 
              className="inline-block rounded-lg bg-[#45B7D1] px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-offset-2"
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <FaChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
};

export default HeroSection;