import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                        {t('projects.title')}
                    </h2>
                    <p className="text-xl text-dark/70 max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
