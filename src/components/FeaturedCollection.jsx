import React from 'react';
import { motion } from 'framer-motion';
const featChair = '/assets/feat-chair-new.png';
const featTable = '/assets/feat-table-new.png';

const FeaturedCollection = () => {
    // Unsplash IDs for luxury furniture
    const items = [
        {
            id: 1,
            name: "The Sculpted Chair",
            category: "Seating",
            image: featChair,
            description: "Hand-carved walnut with premium woven leather."
        },
        {
            id: 2,
            name: "Carved Wood Table",
            category: "Living",
            image: featTable,
            description: "Solid sculptural timber with organic honing."
        }
    ];

    return (
        <section id="collection" className="py-24 md:py-32 bg-brand-ivory px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-wood block mb-4">Curated Pieces</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Featured Collection</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                        >
                            <div className="overflow-hidden mb-8 relative bg-brand-beige/20 aspect-[4/5] w-full">
                                <picture>
                                    <source srcSet={item.image.replace(/\.(png|jpg)$/, '.avif')} type="image/avif" />
                                    <source srcSet={item.image.replace(/\.(png|jpg)$/, '.webp')} type="image/webp" />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                        width="600"
                                        height="750"
                                    />
                                </picture>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                            <div className="text-right md:text-left">
                                <span className="text-xs uppercase tracking-[0.15em] text-brand-gray mb-2 block">{item.category}</span>
                                <h3 className="text-2xl font-serif text-brand-charcoal mb-2 whitespace-nowrap">{item.name}</h3>
                                <div className="w-12 h-[1px] bg-brand-wood mb-4 ml-auto md:ml-0 opacity-50 group-hover:w-24 transition-all duration-300" />
                                <p className="text-brand-charcoal/70 font-light">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollection;
