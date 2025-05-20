'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaUtensils, FaBirthdayCake, FaEgg } from 'react-icons/fa';
import Image from 'next/image';

// Define types for menu items and categories
type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'breakfast' | 'lunch' | 'dessert';
};

type Category = {
  id: 'coffee' | 'breakfast' | 'lunch' | 'dessert';
  name: string;
  icon: React.ReactNode;
};

// Sample menu data
const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'אספרסו',
    description: 'אספרסו איטלקי מסורתי עם קרמה עשירה',
    price: 12,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'coffee',
  },
  {
    id: '2',
    name: 'קפוצ׳ינו',
    description: 'אספרסו עם חלב מוקצף וקינמון',
    price: 16,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'coffee',
  },
  {
    id: '3',
    name: 'לאטה',
    description: 'אספרסו עם חלב מוקצף וסירופ וניל',
    price: 18,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'coffee',
  },
  {
    id: '4',
    name: 'שקשוקה',
    description: 'ביצים ברוטב עגבניות עם פלפלים וחלה',
    price: 48,
    image: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'breakfast',
  },
  {
    id: '5',
    name: 'מוזלי',
    description: 'יוגורט עם גרנולה, פירות טריים ודבש',
    price: 38,
    image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'breakfast',
  },
  {
    id: '6',
    name: 'כריך סלמון',
    description: 'סלמון מעושן, גבינת שמנת, בצל סגול ועגבניה',
    price: 52,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'lunch',
  },
  {
    id: '7',
    name: 'סלט יווני',
    description: 'עגבניות, מלפפונים, פלפלים, זיתים וגבינת פטה',
    price: 45,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'lunch',
  },
  {
    id: '8',
    name: 'טירמיסו',
    description: 'קינוח איטלקי קלאסי עם קפה ומסקרפונה',
    price: 32,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'dessert',
  },
  {
    id: '9',
    name: 'עוגת שוקולד',
    description: 'עוגת שוקולד חמה עם גלידת וניל',
    price: 36,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'dessert',
  },
];

// Define categories
const categories: Category[] = [
  { id: 'coffee', name: 'קפה', icon: <FaCoffee /> },
  { id: 'breakfast', name: 'ארוחת בוקר', icon: <FaEgg /> },
  { id: 'lunch', name: 'ארוחת צהריים', icon: <FaUtensils /> },
  { id: 'dessert', name: 'קינוחים', icon: <FaBirthdayCake /> },
];

const CafeMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('coffee');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    setFilteredItems(
      selectedCategory === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category === selectedCategory)
    );
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section id="cafe-menu" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-right mb-4 text-gray-800 font-playful">
            התפריט שלנו
          </h2>
          <p className="text-lg text-gray-600 text-right max-w-2xl mx-auto">
            תפריט עשיר ומגוון של מאכלים ומשקאות איכותיים, מוכנים מחומרי גלם טריים ומקומיים
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#588C7E] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-[#45B7D1]">₪{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-right mb-4">{item.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 px-4 bg-[#588C7E] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                  >
                    הוסף להזמנה
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CafeMenu;