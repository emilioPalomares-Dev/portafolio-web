import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Rocket, Eye, Cpu, Zap } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    const interests = [
        { icon: Rocket, label: t('about.interest1') },
        { icon: Eye, label: t('about.interest2') },
        { icon: Cpu, label: t('about.interest3') },
        { icon: Zap, label: t('about.interest4') },
    ];

    return (
        <section id="about" className="section-padding bg-light">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
                        {t('about.title')}
                    </h2>

                    <div className="space-y-6 text-lg text-dark/80 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {t('about.bio1')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {t('about.bio2')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            {t('about.bio3')}
                        </motion.p>
                    </div>

                    {/* Interests */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-12"
                    >
                        <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                            {t('about.interests')}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                                >
                                    <interest.icon className="mx-auto mb-3 text-primary" size={40} />
                                    <p className="font-medium text-dark">{interest.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
