import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
const showroomImg = '/assets/gall-living.jpg';

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
                                    <p className="text-brand-charcoal/60 font-light">SH58, Vallanghi<br />Palakkad, Kerala 678508</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 text-brand-wood">
                                    <Clock size={24} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif text-brand-charcoal mb-2">Opening Hours</h4>
                                    <p className="text-brand-charcoal/60 font-light">All Days: 7:30am - 7:30pm</p>
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
                        <iframe
                            title="Meachery Furniture Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4735393086745!2d76.5818!3d10.5539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMzJzE0LjAiTiA3NsKwMzQnNTQuNSJF!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin&q=Mechery+Furniture+Vallanghi+Palakkad"
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisitShowroom;
