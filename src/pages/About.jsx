import React from 'react';
import { motion } from 'framer-motion';
// Using placeholders if specific about assets aren't downloaded yet. 
// Can repurpose life-3 or similar.
const aboutImg = '/assets/story-craft-new.png';

const About = () => {
    return (
        <div className="min-h-screen bg-brand-ivory pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section 1: Intro */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-8 block">Our Heritage</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-10 leading-none">
                            Quiet <br /> Confidence.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <p className="text-lg md:text-xl font-light text-brand-charcoal/70 leading-relaxed max-w-lg">
                            Founded on the principle that home should be a sanctuary.
                            For over three decades, Meachery Furniture has quietly defined the standard for contemporary luxury,
                            favoring reduction over embellishment and substance over style.
                        </p>
                    </motion.div>
                </section>

                {/* Section 2: Image + Editorial */}
                <section className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="aspect-[16/9] w-full bg-brand-beige/20 overflow-hidden relative"
                    >
                        <img src={aboutImg} alt="Studio Atmosphere" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out" />
                    </motion.div>
                </section>

                {/* Section 3: Values */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-brand-charcoal/10 pt-24">
                    <div>
                        <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Indigenous <br /> Timber</h3>
                        <p className="text-brand-charcoal/60 font-light leading-relaxed text-sm">
                            We honor our roots. From the legendary Nilambur Teak to the rich grain of Kerala Rosewood (Eetti), every plank tells the story of our soil.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Designed for <br /> Life</h3>
                        <p className="text-brand-charcoal/60 font-light leading-relaxed text-sm">
                            Beauty must serve function. Our pieces are designed to be lived in, aged with, and passed down. They are not precious objects, but backdrops for life.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Radical <br /> Transparency</h3>
                        <p className="text-brand-charcoal/60 font-light leading-relaxed text-sm">
                            We believe you should know who made your furniture. We honor our makers and their traditions, ensuring fair practices at every step.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
