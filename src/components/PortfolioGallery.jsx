import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gallLiving from '../assets/gall-living.jpg';
import gallDining from '../assets/gall-dining.jpg';
import gallBed from '../assets/gall-bed.jpg';
import gallTable from '../assets/gall-table.jpg';
import gallOffice from '../assets/gall-office.jpg';
import gallChair from '../assets/gall-chair.jpg';

const PortfolioGallery = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Office'];

    const items = [
        {
            id: 1,
            category: 'Living',
            title: 'The Cloud Sofa',
            image: gallLiving,
            aspect: 'aspect-[3/4]',
        },
        {
            id: 2,
            category: 'Dining',
            title: 'Oak Heritage Table',
            image: gallDining,
            aspect: 'aspect-[4/3]',
        },
        {
            id: 3,
            category: 'Bedroom',
            title: 'Linen Sanctuary Bed',
            image: gallBed,
            aspect: 'aspect-[3/4]',
        },
        {
            id: 4,
            category: 'Living',
            title: 'Travertine Coffee Table',
            image: gallTable,
            aspect: 'aspect-[4/3]',
        },
        {
            id: 5,
            category: 'Office',
            title: 'Executive Walnut Desk',
            image: gallOffice,
            aspect: 'aspect-[3/4]',
        },
        {
            id: 6,
            category: 'Dining',
            title: 'Woven Leather Chair',
            image: gallChair,
            aspect: 'aspect-[3/4]',
        },
    ];

    const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

    return (
        <section id="portfolio" className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl font-serif text-brand-charcoal mb-4">Design Portfolio</h2>
                        <p className="text-brand-charcoal/60 font-light max-w-sm">Exploring the intersection of form, function, and enduring beauty.</p>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-sm tracking-[0.1em] uppercase pb-1 transition-all duration-300 border-b ${filter === cat
                                    ? 'text-brand-wood border-brand-wood'
                                    : 'text-brand-charcoal/50 border-transparent hover:text-brand-wood'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="break-inside-avoid"
                            >
                                <div className={`relative group overflow-hidden bg-brand-beige/10 ${item.aspect}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/90 px-6 py-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="block text-xs uppercase tracking-widest text-brand-gray mb-1">{item.category}</span>
                                            <h3 className="font-serif text-lg text-brand-charcoal">{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
