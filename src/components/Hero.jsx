import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

const Hero = () => {
    const { t, i18n } = useTranslation();

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadCV = () => {
        const cvPath = i18n.language === 'en' ? '/assets/resume/CV_EN.pdf' : '/assets/resume/CV_ES.pdf';
        const link = document.createElement('a');
        link.href = cvPath;
        link.download = `CV_${i18n.language.toUpperCase()}.pdf`;
        link.click();
    };

    return (
        <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container-custom relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Avatar Placeholder */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="mx-auto w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-5xl font-bold">
                            R
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold text-white"
                    >
                        Emilio Palomares
                    </motion.h1>

                    {/* Title */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl md:text-3xl text-white/90 font-medium"
                    >
                        {t('hero.title')}
                    </motion.p>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg md:text-xl text-white/80"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="bg-white text-primary hover:bg-light font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                        >
                            {t('hero.cta1')}
                            <ArrowDown size={20} />
                        </button>
                        <button
                            onClick={handleDownloadCV}
                            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            <Download size={20} />
                            {t('hero.cta2')}
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown className="text-white" size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
