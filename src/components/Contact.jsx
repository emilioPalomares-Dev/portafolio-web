import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
    const { t } = useTranslation();

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            url: 'https://github.com/emilioPalomares-Dev',
            color: 'hover:text-gray-800',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            color: 'hover:text-blue-600',
        },
        {
            icon: Mail,
            label: 'Email',
            url: 'emilio_palomares@outlook.com',
            color: 'hover:text-red-600',
        },
    ];

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {t('contact.title')}
                    </h2>
                    <p className="text-xl text-dark/70 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-dark mb-6">Connect With Me</h3>
                        <div className="space-y-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, x: 10 }}
                                    className={`flex items-center gap-4 p-4 bg-light rounded-lg transition-all duration-300 ${link.color}`}
                                >
                                    <link.icon size={28} />
                                    <span className="text-lg font-medium">{link.label}</span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl"
                        >
                            <p className="text-dark/70 leading-relaxed">
                                I'm always interested in discussing robotics projects, collaboration opportunities, or job offers. Feel free to reach out!
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-light p-8 rounded-xl shadow-lg"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
