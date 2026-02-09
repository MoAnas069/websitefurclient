import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import gallDining from '../assets/gall-dining.jpg';

import gallTable from '../assets/gall-table.jpg';
import gallOffice from '../assets/gall-office.jpg';


import accentSideChair from '../assets/accent side chair.png';
import featChair from '../assets/feat-chair-new.png';
import loungeChair from '../assets/lounge-chair.png';
import oakConsole from '../assets/oak-console.png';
import teakArmchair from '../assets/teak-armchair.png';
import mahoganyCoffeeTable from '../assets/mahogany-coffee-table.png';
import heritageBookshelf from '../assets/heritage-bookshelf.png';
import rattanBedFrame from '../assets/rattan-bed-frame.png';
import roundDiningTable from '../assets/round-dining-table.png';
import writingDesk from '../assets/writing-desk.png';
import walnutDresser from '../assets/walnut-dresser.png';
import farmhouseDiningSet from '../assets/farmhouse-dining-set.png';
import modernistStool from '../assets/modernist-stool.png';
import executiveCredenza from '../assets/executive-credenza.png';
import minimalistNightstand from '../assets/minimalist-nightstand.png';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    // Scroll top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Office'];


    const items = [
        {
            id: 1,
            category: 'Living',
            title: 'Kochi Lounge Chair',
            image: loungeChair,
            aspect: 'aspect-[3/4] md:aspect-[4/5]',
            description: "Deep-seated solid walnut chair with hand-woven rattan back."
        },
        {
            id: 2,
            category: 'Dining',
            title: 'Rosewood Dining Table',
            image: gallDining,
            aspect: 'aspect-[4/3] md:aspect-[16/9]',
            description: "Solid Kerala Rosewood (Eetti) with hand-rubbed oil finish."
        },
        {
            id: 3,
            category: 'Bedroom',
            title: 'Solid Oak Console',
            image: oakConsole,
            aspect: 'aspect-[3/4]',
            description: "Minimalist solid oak storage with dovetail detailing."
        },
        {
            id: 4,
            category: 'Living',
            title: 'Jackfruit Wood Table',
            image: gallTable,
            aspect: 'aspect-[4/3] md:aspect-[1/1]',
            description: "Golden-hued Plavu wood, celebrated for its durability."
        },
        {
            id: 5,
            category: 'Office',
            title: 'Heritage Writing Desk',
            image: gallOffice,
            aspect: 'aspect-[3/4]',
            description: "Reclaimed colonial-era teak with brass detailing."
        },
        {
            id: 6,
            category: 'Dining',
            title: 'Charu Kera Chair',
            image: featChair, // Upgrading to high-res wood chair
            aspect: 'aspect-[3/4]',
            description: "Modern interpretation of the traditional Kerala resting chair."
        },
        {
            id: 7,
            category: 'Living',
            title: 'Teak Armchair',
            image: teakArmchair,
            aspect: 'aspect-[3/4]',
            description: "Mid-century modern inspired teak armchair with ergonomic design."
        },
        {
            id: 8,
            category: 'Living',
            title: 'Mahogany Coffee Table',
            image: mahoganyCoffeeTable,
            aspect: 'aspect-[4/3]',
            description: "Low-profile mahogany table with a rich, dark finish."
        },
        {
            id: 9,
            category: 'Office',
            title: 'Heritage Bookshelf',
            image: heritageBookshelf,
            aspect: 'aspect-[3/4]',
            description: "Floor-to-ceiling wooden bookshelf with adjustable shelving."
        },
        {
            id: 10,
            category: 'Bedroom',
            title: 'Rattan Bed Frame',
            image: rattanBedFrame,
            aspect: 'aspect-[16/9]',
            description: "Hand-woven rattan headboard with a solid wood frame."
        },
        {
            id: 11,
            category: 'Dining',
            title: 'Round Dining Table',
            image: roundDiningTable,
            aspect: 'aspect-[1/1]',
            description: "Circular dining table perfect for intimate gatherings."
        },
        {
            id: 12,
            category: 'Office',
            title: 'Writing Desk',
            image: writingDesk,
            aspect: 'aspect-[3/4]',
            description: "Compact writing desk ideal for home offices."
        },
        {
            id: 13,
            category: 'Living',
            title: 'Accent Side Chair',
            image: accentSideChair,
            aspect: 'aspect-[3/4]',
            description: "Statement side chair with unique joinery details."
        },
        {
            id: 14,
            category: 'Bedroom',
            title: 'Walnut Dresser',
            image: walnutDresser,
            aspect: 'aspect-[4/3]',
            description: "Six-drawer walnut dresser with soft-close mechanisms."
        },
        {
            id: 15,
            category: 'Dining',
            title: 'Farmhouse Dining Set',
            image: farmhouseDiningSet,
            aspect: 'aspect-[16/9]',
            description: "Rustic farmhouse table with matching benches."
        },
        {
            id: 16,
            category: 'Living',
            title: 'Modernist Stool',
            image: modernistStool,
            aspect: 'aspect-[3/4]',
            description: "Versatile wooden stool that doubles as a side table."
        },
        {
            id: 17,
            category: 'Office',
            title: 'Executive Credenza',
            image: executiveCredenza,
            aspect: 'aspect-[16/9]',
            description: "Spacious credenza for executive office storage."
        },
        {
            id: 18,
            category: 'Bedroom',
            title: 'Minimalist Nightstand',
            image: minimalistNightstand,
            aspect: 'aspect-[3/4]',
            description: "Floating nightstand with integrated cable management."
        }
    ];

    const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="pt-32 pb-32 bg-brand-ivory px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-8"
                >
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-6 block">Our Work</span>
                        <h1 className="text-4xl md:text-7xl font-serif text-brand-charcoal leading-tight">Selected <br /> Works</h1>
                    </div>

                    {/* Mobile: Horizontal Scroll, Desktop: Wrap */}
                    <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
                        <div className="flex md:flex-wrap gap-8 md:gap-12 min-w-max">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`text-xs uppercase tracking-[0.2em] pb-2 transition-all duration-500 border-b whitespace-nowrap ${filter === cat
                                        ? 'text-brand-charcoal border-brand-charcoal'
                                        : 'text-brand-charcoal/40 border-transparent hover:text-brand-charcoal hover:border-brand-charcoal/20'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-12 md:gap-24 space-y-24">
                    <AnimatePresence>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="break-inside-avoid group cursor-pointer mb-24 md:mb-0"
                                onClick={() => setSelectedImage(item)}
                            >
                                <div className={`relative overflow-hidden bg-brand-beige/20 mb-8 ${item.aspect}`}>
                                    <picture>
                                        <source srcSet={item.image.replace(/\.(png|jpg)$/, '.avif')} type="image/avif" />
                                        <source srcSet={item.image.replace(/\.(png|jpg)$/, '.webp')} type="image/webp" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                            loading="lazy"
                                            width="500"
                                            height="600"
                                        />
                                    </picture>
                                    {/* Mobile: Tap hint, Desktop: Hover overlay */}
                                    <div className="absolute inset-0 bg-brand-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>

                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="font-serif text-2xl text-brand-charcoal border-b border-transparent group-hover:border-brand-charcoal transition-all duration-500 pb-1">{item.title}</h3>
                                        <span className="text-[10px] uppercase tracking-widest text-brand-gray">{item.category}</span>
                                    </div>
                                    <p className="text-brand-charcoal/60 font-light text-sm line-clamp-2">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Full Screen Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[60] bg-brand-ivory flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        >
                            <picture>
                                <source srcSet={selectedImage.image.replace(/\.(png|jpg)$/, '.avif')} type="image/avif" />
                                <source srcSet={selectedImage.image.replace(/\.(png|jpg)$/, '.webp')} type="image/webp" />
                                <motion.img
                                    layoutId={`image-${selectedImage.id}`}
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="max-w-full max-h-full object-contain shadow-2xl"
                                />
                            </picture>
                            <button className="absolute top-6 right-6 text-brand-charcoal">
                                <span className="sr-only">Close</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <div className="absolute bottom-10 left-0 w-full text-center">
                                <h3 className="text-3xl font-serif text-brand-charcoal mb-2">{selectedImage.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
