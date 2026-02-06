import React from 'react';
import { motion } from 'framer-motion';
import showroomImg from '../assets/feat-table.jpg';

const Visit = () => {
    return (
        <div className="min-h-screen bg-brand-ivory pt-32">
            {/* Full Width visual */}
            <div className="w-full h-[60vh] relative overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={showroomImg}
                    alt="Showroom Exterior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-6xl md:text-8xl font-serif text-white tracking-widest text-center drop-shadow-lg">
                        THE GALLERY
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-32 bg-brand-ivory -mt-20 relative z-10 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-4 block">Location</span>
                            <p className="text-2xl font-serif text-brand-charcoal mb-2">Kochi Flagship</p>
                            <p className="text-brand-charcoal/60 font-light text-lg">
                                Panampilly Nagar Ave<br />
                                Kochi, Kerala 682036
                            </p>
                        </div>

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-4 block">Inquiries</span>
                        <div className="flex flex-col gap-2">
                            <a href="tel:9744491254" className="text-brand-charcoal/60 font-light text-lg hover:text-brand-wood transition-colors">9744491254</a>
                            <a href="tel:7012234821" className="text-brand-charcoal/60 font-light text-lg hover:text-brand-wood transition-colors">7012234821</a>
                            <a href="mailto:hello@meacheryfurniture.com" className="text-brand-charcoal/60 font-light text-lg hover:text-brand-wood transition-colors mt-2 block">hello@meacheryfurniture.com</a>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-4 block">Hours</span>
                            <div className="flex justify-between border-b border-brand-charcoal/10 pb-4 mb-4">
                                <span className="text-brand-charcoal font-serif">Monday - Friday</span>
                                <span className="text-brand-charcoal/60 font-light">10:00 am — 7:00 pm</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-charcoal/10 pb-4 mb-4">
                                <span className="text-brand-charcoal font-serif">Saturday</span>
                                <span className="text-brand-charcoal/60 font-light">11:00 am — 6:00 pm</span>
                            </div>
                            <div className="flex justify-between border-b border-brand-charcoal/10 pb-4 mb-4">
                                <span className="text-brand-charcoal font-serif">Sunday</span>
                                <span className="text-brand-charcoal/60 font-light">Closed</span>
                            </div>
                        </div>

                        <p className="text-sm italic text-brand-charcoal/40">
                            *Private appointments available upon request.
                        </p>
                    </div>
                </div>
            </div>

            {/* Map placeholder or simple texture */}
            <div className="h-96 w-full bg-brand-beige/20 flex items-center justify-center">
                <span className="text-brand-wood/40 font-serif text-2xl tracking-widest">[ MAP VIEW ]</span>
            </div>
        </div>
    );
};

export default Visit;
