'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { FaUtensils, FaCoffee, FaUsers, FaRegBuilding } from 'react-icons/fa';

// Define types for our gallery items
type Category = 'all' | 'food' | 'drinks' | 'people' | 'interior';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Category[];
  description: string;
  width: number;
  height: number;
}

// Sample gallery data
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    alt: 'קפה לאטה מעוצב',
    category: ['drinks'],
    description: 'קפה לאטה מעוצב עם אמנות לאטה מיוחדת',
    width: 800,
    height: 600
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    alt: 'עוגת שוקולד',
    category: ['food'],
    description: 'עוגת שוקולד עשירה עם פירות טריים',
    width: 800,
    height: 1000
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    alt: 'אווירת בית הקפה',
    category: ['interior'],
    description: 'האווירה החמימה בבית הקפה שלנו',
    width: 800,
    height: 600
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
    alt: 'קפה וספר',
    category: ['drinks'],
    description: 'רגע של שלווה עם קפה וספר טוב',
    width: 800,
    height: 800
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c',
    alt: 'סלט טרי',
    category: ['food'],
    description: 'סלט טרי עם ירקות עונתיים',
    width: 800,
    height: 600
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1517231925375-bf2cb42917a5',
    alt: 'לקוחות נהנים',
    category: ['people'],
    description: 'לקוחות נהנים מהאווירה הנעימה',
    width: 800,
    height: 700
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
    alt: 'עיצוב פנים',
    category: ['interior'],
    description: 'העיצוב המודרני של בית הקפה',
    width: 800,
    height: 900
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
    alt: 'כריך מיוחד',
    category: ['food'],
    description: 'כריך מיוחד של השף',
    width: 800,
    height: 600
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b',
    alt: 'קפה קר',
    category: ['drinks'],
    description: 'קפה קר מרענן לימי הקיץ',
    width: 800,
    height: 1000
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    alt: 'אירוע מיוחד',
    category: ['people', 'interior'],
    description: 'אירוע מיוחד שנערך בבית הקפה',
    width: 800,
    height: 600
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    alt: 'קפה בוקר',
    category: ['drinks'],
    description: 'קפה בוקר מושלם לפתיחת היום',
    width: 800,
    height: 800
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    alt: 'מאפים טריים',
    category: ['food'],
    description: 'מאפים טריים מהתנור',
    width: 800,
    height: 700
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
    alt: 'פינת ישיבה',
    category: ['interior'],
    description: 'פינת ישיבה נעימה לעבודה ולימודים',
    width: 800,
    height: 600
  },
  {
    id: '14',
    src: 'https://images.unsplash.com/photo-1515215316771-2742baa337f4',
    alt: 'קינוח מיוחד',
    category: ['food'],
    description: 'קינוח מיוחד של בית הקפה',
    width: 800,
    height: 900
  },
  {
    id: '15',
    src: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a',
    alt: 'צוות בית הקפה',
    category: ['people'],
    description: 'הצוות המקצועי שלנו',
    width: 800,
    height: 600
  }
];

// Filter categories with icons
const filterCategories = [
  { id: 'all', label: 'הכל', icon: <FaRegBuilding /> },
  { id: 'food', label: 'אוכל', icon: <FaUtensils /> },
  { id: 'drinks', label: 'משקאות', icon: <FaCoffee /> },
  { id: 'people', label: 'אנשים', icon: <FaUsers /> },
  { id: 'interior', label: 'עיצוב פנים', icon: <FaRegBuilding /> }
];

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter gallery items based on selected category
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category.includes(selectedCategory));

  // Handle click outside modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedImage]);

  return (
    <section id="gallery-section" dir="rtl" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-right mb-4 text-gray-800">הגלריה שלנו</h2>
          <p className="text-lg text-right text-gray-600 mb-8">
            צפו בתמונות מבית הקפה שלנו - אוכל, משקאות, אווירה ואנשים
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filterCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category.id 
                    ? 'bg-[#588C7E] text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => setSelectedImage(item)}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-w-1 aspect-h-1 relative h-64">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div 
                        className="bg-[#45B7D1] text-white px-4 py-2 rounded-md"
                        whileHover={{ scale: 1.1 }}
                      >
                        צפה בתמונה
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <h3 className="text-lg font-medium text-right text-gray-800">{item.alt}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for enlarged image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md"
                  aria-label="סגור חלון"
                >
                  <FiX size={24} />
                </button>
                
                <div className="relative w-full md:w-2/3 h-64 md:h-auto">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 w-full md:w-1/3 overflow-y-auto">
                  <h3 id="modal-title" className="text-2xl font-bold text-right mb-4">{selectedImage.alt}</h3>
                  <p className="text-gray-700 text-right">{selectedImage.description}</p>
                  
                  <div className="mt-6 flex flex-wrap gap-2 justify-end">
                    {selectedImage.category.map((cat) => (
                      <span 
                        key={cat} 
                        className="bg-[#588C7E] bg-opacity-20 text-[#588C7E] px-3 py-1 rounded-full text-sm"
                      >
                        {filterCategories.find(c => c.id === cat)?.label}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;