import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import showroomImg from '../assets/gall-living.jpg';

const VisitShowroom = () => {
    return (
        <section id="visit" className="py-24 bg-brand-ivory">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-wood mb-4 block">Visit Us</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8">Experience the <br /> Collection.</h2>
                        <p className="text-brand-charcoal/70 mb-10 text-lg font-light leading-relaxed max-w-md">
                            We invite you to visit our showroom to feel the textures, see the craftsmanship, and envision these pieces in your home.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="mt-1 text-brand-wood">
                                    <MapPin size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif text-brand-charcoal mb-2">Showroom Location</h4>
                                    <p className="text-brand-charcoal/60 font-light">Panampilly Nagar Ave<br />Kochi, Kerala 682036</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 text-brand-wood">
                                    <Clock size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif text-brand-charcoal mb-2">Opening Hours</h4>
                                    <p className="text-brand-charcoal/60 font-light">Mon - Fri: 10am - 7pm<br />Sat - Sun: 11am - 5pm</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 text-brand-wood">
                                    <Phone size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif text-brand-charcoal mb-2">Contact</h4>
                                    <div className="flex flex-col">
                                        <a href="tel:9744491254" className="text-brand-charcoal/60 font-light hover:text-brand-wood transition-colors">9744491254</a>
                                        <a href="tel:7012234821" className="text-brand-charcoal/60 font-light hover:text-brand-wood transition-colors">7012234821</a>
                                        <a href="mailto:hello@meacheryfurniture.com" className="text-brand-charcoal/60 font-light hover:text-brand-wood transition-colors mt-1">hello@meacheryfurniture.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map / Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-[500px] bg-brand-beige/30 relative overflow-hidden"
                    >
                        {/* Using an image as a "Map" visual or just a showroom shot because a real map is complex */}
                        <img
                            src={showroomImg}
                            alt="Showroom Interior"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white/90 p-6 shadow-xl text-center backdrop-blur-sm">
                                <span className="font-serif text-xl tracking-wide text-brand-charcoal">MEACHERY</span>
                                <p className="text-xs uppercase tracking-widest mt-2 text-brand-wood">Showroom</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisitShowroom;
