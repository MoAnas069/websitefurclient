import React from 'react';
import { motion } from 'framer-motion';
import storyCraft from '../assets/craft-hands.png';

const ProcessStep = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="border-t border-brand-charcoal/10 pt-8"
    >
        <span className="text-xs font-bold text-brand-wood block mb-4">0{number}</span>
        <h3 className="text-2xl font-serif text-brand-charcoal mb-4">{title}</h3>
        <p className="text-brand-charcoal/60 font-light leading-relaxed max-w-xs">{description}</p>
    </motion.div>
);

const Craftsmanship = () => {
    return (
        <div className="bg-brand-ivory min-h-screen pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-32 max-w-3xl mx-auto"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-8 block">The Process</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-12 leading-tight">
                        By Hand, <br /> With Heart.
                    </h1>
                    <p className="text-lg md:text-xl font-light text-brand-charcoal/70 leading-relaxed">
                        We believe that the soul of furniture comes from the human hand.
                        Our process is slow, deliberate, and uncompromising.
                    </p>
                </motion.div>

                {/* Visual Hero */}
                <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden mb-32">
                    <picture>
                        <source srcSet={storyCraft.replace('.png', '.avif')} type="image/avif" />
                        <source srcSet={storyCraft.replace('.png', '.webp')} type="image/webp" />
                        <img
                            src={storyCraft}
                            alt="Craftsman working"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width="1200"
                            height="800"
                        />
                    </picture>
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                    <ProcessStep
                        number="1"
                        title="Consultation"
                        description="We begin by listening. Understanding your space, your needs, and your aesthetic vision."
                        delay={0.2}
                    />
                    <ProcessStep
                        number="2"
                        title="Selection"
                        description="Sourcing the finest hardwoods, premium leathers, and sustainable fibers from partners globally."
                        delay={0.4}
                    />
                    <ProcessStep
                        number="3"
                        title="Creation"
                        description="Our master craftsmen shape, join, and finish each piece using traditional techniques."
                        delay={0.6}
                    />
                    <ProcessStep
                        number="4"
                        title="Delivery"
                        description="White-glove service ensures your piece arrives pristine and is placed perfectly."
                        delay={0.8}
                    />
                </div>
            </div>
        </div>
    );
};

export default Craftsmanship;
