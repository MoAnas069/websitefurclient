import React from 'react';
import { motion } from 'framer-motion';
const showroomImg = '/assets/feat-table.jpg';

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
                            <p className="text-2xl font-serif text-brand-charcoal mb-2">Palakkad Showroom</p>
                            <p className="text-brand-charcoal/60 font-light text-lg">
                                SH58, Vallanghi<br />
                                Palakkad, Kerala 678508
                            </p>
                        </div>

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-4 block">Inquiries</span>
                        <div className="flex flex-col gap-2">
                            <a href="tel:9744491254" className="text-brand-charcoal/60 font-light text-lg hover:text-brand-wood transition-colors">9744491254</a>
                            <a href="tel:7012234821" className="text-brand-charcoal/60 font-light text-lg hover:text-brand-wood transition-colors">7012234821</a>
                            <a href="mailto:meacherytradingcompany@gmail.com" className="text-brand-charcoal/60 font-light text-lg hover:text-brand-wood transition-colors mt-2 block">meacherytradingcompany@gmail.com</a>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-wood mb-4 block">Hours</span>
                            <div className="flex justify-between border-b border-brand-charcoal/10 pb-4 mb-4">
                                <span className="text-brand-charcoal font-serif">All Days</span>
                                <span className="text-brand-charcoal/60 font-light">7:30 am — 7:30 pm</span>
                            </div>
                        </div>

                        <p className="text-sm italic text-brand-charcoal/40">
                            *Private appointments available upon request.
                        </p>
                    </div>
                </div>
            </div>

            {/* Map View */}
            <div className="h-96 w-full bg-brand-beige/20 flex items-center justify-center relative">
                <iframe
                    title="Meachery Furniture Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4735393086745!2d76.5818!3d10.5539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMzJzE0LjAiTiA3NsKwMzQnNTQuNSJF!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin&q=Mechery+Furniture+Vallanghi+Palakkad"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Visit;
