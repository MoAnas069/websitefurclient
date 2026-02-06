import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 50) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Collection', path: '/portfolio' },
        { name: 'Craftsmanship', path: '/craftsmanship' },
        { name: 'About', path: '/about' },
        { name: 'Visit', path: '/visit' },
    ];

    // Determine text color based on background state
    const isHome = location.pathname === '/';
    const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;
    const textColorClass = isTransparent ? 'text-white' : 'text-brand-charcoal';
    const hoverColorClass = isTransparent ? 'hover:text-white/80' : 'hover:text-brand-wood';

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out will-change-transform ${isScrolled || isMobileMenuOpen ? 'bg-brand-ivory/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo - Only visible when scrolled */}
                <Link to="/" className="flex items-center gap-2 group z-50 relative">
                    <img
                        src="/vite.svg"
                        alt="Meachery Group"
                        className={`h-11 md:h-16 w-auto object-contain transition-all duration-500 ease-out will-change-transform ${isScrolled || isMobileMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                            }`}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        // Active color: Wood on light bg, Beige on dark/transparent bg
                        const activeColor = isTransparent ? 'text-brand-beige' : 'text-brand-wood';
                        const normalColor = `${textColorClass} ${hoverColorClass}`;

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-500 relative group ${isActive ? activeColor : normalColor
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-2 left-0 w-full h-[1px] ${isTransparent ? 'bg-brand-beige' : 'bg-brand-wood'} transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-50 relative">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`${textColorClass} focus:outline-none transition-colors duration-300`}
                    >
                        {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div
                className={`absolute top-full left-0 w-full bg-brand-ivory border-t border-brand-charcoal/10 shadow-xl flex flex-col p-6 gap-6 transition-all duration-300 ease-out md:hidden ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="text-sm font-bold uppercase tracking-[0.25em] text-brand-charcoal hover:text-brand-wood transition-colors duration-300 text-center py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
