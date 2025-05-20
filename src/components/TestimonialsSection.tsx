'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaStarHalf, FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'האווירה בבית קפה אלפא מושלמת לעבודה. הקפה מעולה והאינטרנט מהיר. המקום האידיאלי לפגישות עסקיות או לעבודה מרחוק.'
  },
  {
    id: 2,
    name: 'מיכל לוי',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 4.5,
    text: 'התפריט מגוון ועשיר, והאווירה הטכנולוגית מעניקה השראה. אני מגיעה לכאן כמעט כל יום לעבוד על הפרויקטים שלי.'
  },
  {
    id: 3,
    name: 'אבי גולדשטיין',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'השירות מעולה והצוות תמיד מסביר פנים. המאפים טריים והקפה איכותי. מקום מצוין לפגישות עם לקוחות בתחום ההייטק.'
  },
  {
    id: 4,
    name: 'רונית שמעוני',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 4,
    text: 'האווירה הטכנולוגית והעיצוב המודרני הופכים את בית הקפה למקום מיוחד. אני נהנית במיוחד מהשקעים הרבים ומהאינטרנט המהיר.'
  },
  {
    id: 5,
    name: 'יוסי ברקוביץ',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'המקום האידיאלי לפגישות צוות ולעבודה שקטה. התפריט מגוון והקפה מעולה. הצוות מקצועי ותמיד מוכן לעזור.'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const nextTestimonial = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  const displayedTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];

  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="py-16 px-4 bg-gradient-to-br from-white to-blue-50"
      ref={testimonialsRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-right md:text-center"
            style={{ color: '#588C7E' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            מה הלקוחות שלנו אומרים
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-blue-400 mx-auto md:mx-auto mr-auto"
            style={{ backgroundColor: '#45B7D1' }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7 }}
          ></motion.div>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={prevTestimonial}
              aria-label="הקודם"
            >
              <FaChevronRight className="text-xl" style={{ color: '#588C7E' }} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={nextTestimonial}
              aria-label="הבא"
            >
              <FaChevronLeft className="text-xl" style={{ color: '#588C7E' }} />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg relative"
                >
                  <div className="absolute top-4 left-4 text-3xl opacity-20">
                    <FaQuoteRight style={{ color: '#45B7D1' }} />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-lg" style={{ color: '#588C7E' }}>{testimonial.name}</h3>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-right leading-relaxed">
                    {testimonial.text}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                style={{ backgroundColor: index === currentIndex ? '#45B7D1' : '#e2e8f0' }}
                aria-label={`עבור לחוות דעת ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;