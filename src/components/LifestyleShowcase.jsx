import React from 'react';
import { motion } from 'framer-motion';
import life1 from '../assets/life-1.jpg';
import life2 from '../assets/showroom.jpg';
import life3 from '../assets/life-3.jpg';

const LifestyleShowcase = () => {
    return (
        <section className="py-24 bg-brand-ivory">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-4">Living With Meachery</h2>
                <p className="text-brand-charcoal/60 font-light text-lg">Real homes. Real stories. Timeless elegance.</p>
            </div>

            {/* Grid Layout - Asymmetric */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 h-auto md:h-[800px]">
                {/* Large Left */}
                <div className="md:col-span-8 h-[400px] md:h-full relative overflow-hidden group">
                    <img
                        src={life1}
                        alt="Modern Living Room"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 text-white z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-light uppercase tracking-widest">The Plantation House</span>
                        <p className="font-serif italic">Munnar, Kerala</p>
                    </div>
                </div>

                {/* Right Column Stack */}
                <div className="md:col-span-4 flex flex-col gap-12 md:gap-6 h-full">
                    <div className="h-[300px] md:h-1/2 relative overflow-hidden group">
                        <img
                            src={life2}
                            alt="Bedroom Detail"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 text-white z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-light uppercase tracking-widest">Colonial Bungalow</span>
                            <p className="font-serif italic">Fort Kochi, Kerala</p>
                        </div>
                    </div>
                    <div className="h-[300px] md:h-1/2 relative overflow-hidden group">
                        <img
                            src={life3}
                            alt="Dining Area"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 text-white z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-light uppercase tracking-widest">Backwater Villa</span>
                            <p className="font-serif italic">Alappuzha, Kerala</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LifestyleShowcase;
