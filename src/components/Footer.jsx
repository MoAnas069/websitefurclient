import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-charcoal text-brand-ivory pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
                    <div className="max-w-md">
                        <Link to="/" className="block mb-8">
                            <img
                                src="/vite.svg"
                                alt="Meachery Group"
                                className="h-14 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                            />
                        </Link>
                        <p className="text-brand-ivory/60 font-light text-base leading-relaxed tracking-wide">
                            Timeless furniture for modern living. Designed with intention, crafted with care, and built to last generations.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-12 md:gap-20 text-sm w-full md:w-auto">
                        <div>
                            <h4 className="font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 text-brand-beige text-xs">Explore</h4>
                            <ul className="space-y-4 font-light text-brand-ivory/70 tracking-widest text-xs">
                                <li><Link to="/portfolio" className="hover:text-brand-ivory transition-colors duration-300">COLLECTION</Link></li>
                                <li><Link to="/craftsmanship" className="hover:text-brand-ivory transition-colors duration-300">CRAFTSMANSHIP</Link></li>
                                <li><Link to="/about" className="hover:text-brand-ivory transition-colors duration-300">ABOUT</Link></li>
                                <li><Link to="/visit" className="hover:text-brand-ivory transition-colors duration-300">VISIT</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 text-brand-beige text-xs">Connect</h4>
                            <ul className="space-y-4 font-light text-brand-ivory/70 tracking-widest text-xs">
                                <li><a href="#" className="hover:text-brand-ivory transition-colors duration-300">INSTAGRAM</a></li>
                                <li><a href="#" className="hover:text-brand-ivory transition-colors duration-300">PINTEREST</a></li>
                                <li><a href="mailto:hello@meacheryfurniture.com" className="hover:text-brand-ivory transition-colors duration-300">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-brand-ivory/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-widest text-brand-ivory/30 font-light text-center md:text-left">
                        © 2026 Meachery Furniture.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
