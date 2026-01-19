import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, Loader } from 'lucide-react';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate email sending (replace with EmailJS or actual backend)
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);

        // Example EmailJS integration (uncomment and configure):
        // try {
        //   await emailjs.send(
        //     'YOUR_SERVICE_ID',
        //     'YOUR_TEMPLATE_ID',
        //     formData,
        //     'YOUR_PUBLIC_KEY'
        //   );
        //   setStatus('success');
        //   setFormData({ name: '', email: '', message: '' });
        // } catch (error) {
        //   setStatus('error');
        // }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
                <label htmlFor="name" className="block text-dark font-medium mb-2">
                    {t('contact.name')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder={t('contact.name')}
                />
            </div>

            {/* Email Input */}
            <div>
                <label htmlFor="email" className="block text-dark font-medium mb-2">
                    {t('contact.email')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder={t('contact.email')}
                />
            </div>

            {/* Message Input */}
            <div>
                <label htmlFor="message" className="block text-dark font-medium mb-2">
                    {t('contact.message')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-light rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder={t('contact.message')}
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === 'sending' ? (
                    <>
                        <Loader className="animate-spin" size={20} />
                        {t('contact.sending')}
                    </>
                ) : (
                    <>
                        <Send size={20} />
                        {t('contact.send')}
                    </>
                )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 font-medium text-center"
                >
                    {t('contact.success')}
                </motion.p>
            )}
            {status === 'error' && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 font-medium text-center"
                >
                    {t('contact.error')}
                </motion.p>
            )}
        </form>
    );
};

export default ContactForm;
