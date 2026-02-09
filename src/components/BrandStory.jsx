import React from 'react';
import { motion } from 'framer-motion';
const storyCraft = '/assets/story-craft.jpg';

const BrandStory = () => {
    return (
        <section id="story" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image Grid */}
                <div className="relative">
                    <div className="relative z-10">
                        <img
                            src={storyCraft}
                            alt="Craftsman working on wood"
                            className="w-full h-auto object-cover shadow-xl aspect-[4/5]"
                        />
                    </div>
                    {/* Decorative element */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border border-brand-wood/30 -z-0 hidden md:block"
                    />
                </div>

                {/* Content */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-wood mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
                            Honoring Materials,<br /> Celebrating Craft.
                        </h2>
                        <div className="w-16 h-[2px] bg-brand-wood mb-8" />
                        <p className="text-brand-charcoal/70 mb-6 text-lg leading-relaxed font-light">
                            Every piece in our collection tells a story of patience and precision. We believe that true luxury lies not in excess, but in the integrity of materials and the hands that shape them.
                        </p>
                        <p className="text-brand-charcoal/70 mb-10 text-lg leading-relaxed font-light">
                            From sustainably sourced hardwoods to organic linens, we carefully select materials that age gracefully, ensuring your furniture becomes more beautiful with time.
                        </p>

                        <a href="#portfolio" className="text-brand-charcoal uppercase tracking-[0.15em] text-sm border-b border-brand-charcoal pb-1 hover:text-brand-wood hover:border-brand-wood transition-colors duration-300">
                            Read Our Story
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
