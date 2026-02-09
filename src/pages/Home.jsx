import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import LifestyleShowcase from '../components/LifestyleShowcase';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const storyCraft = '/assets/story-craft-new.png';

const CraftsmanshipStrip = () => {
    return (
        <section className="py-32 md:py-40 bg-brand-charcoal text-brand-ivory overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 filter grayscale blur-[2px]">
                <picture>
                    <source srcSet={storyCraft.replace('.png', '.avif')} type="image/avif" />
                    <source srcSet={storyCraft.replace('.png', '.webp')} type="image/webp" />
                    <img src={storyCraft} className="w-full h-full object-cover" alt="Texture" width="1920" height="1080" loading="lazy" />
                </picture>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                            The Art of <br /> Permanent Things.
                        </h2>
                        <p className="text-brand-ivory/70 font-light text-lg tracking-wide leading-relaxed">
                            In a world of fast furniture, we choose to slow down.
                            Every curve is intentional, every joint is hand-fitted,
                            and every piece is built to outlast its maker.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:flex gap-8 md:gap-16 w-full md:w-auto">
                        <div className="col-span-1">
                            <span className="block text-3xl font-serif mb-2 text-brand-beige">100%</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-brand-ivory/50">Handmade</span>
                        </div>
                        <div className="col-span-1">
                            <span className="block text-3xl font-serif mb-2 text-brand-beige">50+</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-brand-ivory/50">Artisans</span>
                        </div>
                        <div className="col-span-2 md:col-span-1 text-center md:text-left">
                            <span className="block text-3xl font-serif mb-2 text-brand-beige">Lifetime</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-brand-ivory/50">Warranty</span>
                        </div>
                    </div>
                </div>

                <div className="mt-20 border-t border-brand-ivory/10 pt-10 text-right">
                    <Link to="/craftsmanship" className="text-sm uppercase tracking-[0.25em] hover:text-brand-beige transition-colors duration-500 inline-flex items-center gap-4 group">
                        Discover Our Process
                        <span className="w-8 h-[1px] bg-brand-ivory/50 group-hover:w-16 transition-all duration-500" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

const SoftVisit = () => {
    return (
        <section className="py-40 bg-brand-ivory text-center">
            <div className="max-w-2xl mx-auto px-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-6 block">The Showroom</span>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-charcoal mb-8 leading-tight">
                    Experience it <br /> in person.
                </h2>
                <p className="text-brand-charcoal/60 text-lg font-light leading-relaxed mb-12">
                    Online images can only convey so much. We invite you to touch the materials
                    and test the comfort of our collection at our flagship gallery.
                </p>
                <Link to="/visit" className="inline-block border-b border-brand-charcoal pb-1 text-sm uppercase tracking-[0.2em] hover:text-brand-wood hover:border-brand-wood transition-colors duration-500">
                    Plan Your Visit
                </Link>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedCollection />
            <CraftsmanshipStrip />
            <LifestyleShowcase />
            <SoftVisit />
        </>
    );
};

export default Home;
