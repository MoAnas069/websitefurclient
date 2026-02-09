import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import heroBg from '../assets/hero.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source srcSet={`${heroBg.replace('.jpg', '.avif')}`} type="image/avif" />
                    <source srcSet={`${heroBg.replace('.jpg', '.webp')}`} type="image/webp" />
                    <img
                        src={heroBg}
                        alt="Luxury minimalist living room"
                        className="w-full h-full object-cover"
                        width="1920"
                        height="1080"
                        fetchPriority="high" // Critical for LCP
                    />
                </picture>
                {/* Darker Overlay for text visibility */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl"
                >
                    Where Craftsmanship <br /> Meets Timeless Design.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl font-sans text-white/90 mb-12 tracking-wide font-light drop-shadow-lg"
                >
                    Discover furniture designed to last for generations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                >
                    <Link
                        to="/portfolio"
                        className="inline-block border-2 border-white text-white px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-brand-charcoal transition-all duration-500"
                    >
                        Explore Collection
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-brand-charcoal/20 mx-auto overflow-hidden relative">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-brand-charcoal/60 absolute top-[-50%]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
