import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    const navLinks = [
        { id: 'projects', label: t('nav.projects') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'contact', label: t('nav.contact') },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20 px-6">
                    {/* Logo */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-white'
                            }`}
                    >
                        <span className="text-gradient">Portfolio</span>
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.id)}
                                className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-dark' : 'text-white'
                                    }`}
                            >
                                {link.label}
                            </motion.button>
                        ))}

                        {/* Language Toggle */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            onClick={toggleLanguage}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${isScrolled
                                    ? 'bg-light text-dark hover:bg-primary hover:text-white'
                                    : 'bg-white/20 text-white hover:bg-white hover:text-primary'
                                }`}
                        >
                            <Globe size={18} />
                            <span>{i18n.language.toUpperCase()}</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-dark' : 'text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden"
                        >
                            <div className="flex flex-col space-y-4 p-6">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-dark hover:text-primary font-medium text-left transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center space-x-2 px-4 py-2 bg-light rounded-lg hover:bg-primary hover:text-white font-medium transition-all"
                                >
                                    <Globe size={18} />
                                    <span>{i18n.language.toUpperCase()}</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
