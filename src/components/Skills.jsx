import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

const Skills = () => {
    const { t } = useTranslation();

    const categories = ['programming', 'robotics', 'electronics', 'simulation', 'tools'];

    return (
        <section id="skills" className="section-padding bg-light">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {t('skills.title')}
                    </h2>
                    <p className="text-xl text-dark/70 max-w-2xl mx-auto">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, catIndex) => {
                        const CategoryIcon = skillsData[category].icon;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <CategoryIcon className="text-primary" size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark">
                                        {t(`skills.${category}`)}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-3">
                                    {skillsData[category].skills.map((skill, skillIndex) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <motion.div
                                                key={skillIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                                className="flex items-center gap-3 p-3 bg-light rounded-lg hover:bg-primary/10 transition-colors"
                                            >
                                                {SkillIcon ? (
                                                    <SkillIcon className="text-primary" size={20} />
                                                ) : (
                                                    <div className="w-5 h-5 bg-primary/30 rounded-full" />
                                                )}
                                                <span className="font-medium text-dark">{skill.name}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
