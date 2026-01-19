import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
        { icon: Linkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
        { icon: Mail, url: 'mailto:your.email@example.com', label: 'Email' },
    ];

    return (
        <footer className="bg-dark text-white py-12">
            <div className="container-custom px-6">
                <div className="flex flex-col items-center space-y-6">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="p-3 bg-white/10 rounded-lg hover:bg-primary transition-all duration-300 transform hover:scale-110"
                            >
                                <link.icon size={24} />
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-white/20" />

                    {/* Copyright */}
                    <div className="text-center space-y-2">
                        <p className="text-white/80">
                            © {currentYear} Your Name. {t('footer.rights')}.
                        </p>
                        <p className="text-white/60 flex items-center justify-center gap-2">
                            {t('footer.built')} <Heart size={16} className="text-red-500 fill-current" />
                        </p>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="mt-4 px-6 py-2 bg-primary hover:bg-accent rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
