import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

const NotFound = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-brand-ivory relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-beige/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-wood/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-wood/60 mb-6 block font-medium">
                    Error 404
                </span>

                <h1 className="text-5xl md:text-7xl font-light text-brand-charcoal mb-8 tracking-tight">
                    Page Not Found
                </h1>

                <p className="text-brand-charcoal/60 font-light text-lg leading-relaxed mb-12 max-w-lg mx-auto">
                    The page you are looking for does not exist or has been moved.
                    Let's guide you back to our collection.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-wood text-brand-ivory uppercase tracking-widest text-xs hover:bg-brand-wood/90 transition-all duration-300 group"
                >
                    <LayoutGrid size={16} className="text-brand-ivory/70 group-hover:text-brand-ivory transition-colors" />
                    <span>Return Home</span>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
