import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const { t } = useTranslation();
    const projectKey = `project${project.id}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card overflow-hidden group"
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <motion.img
                    src={project.image}
                    alt={t(`projects.${projectKey}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                    {t(`projects.${projectKey}.title`)}
                </h3>
                <p className="text-dark/70 line-clamp-2">
                    {t(`projects.${projectKey}.description`)}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                    {t(`projects.${projectKey}.tags`, { returnObjects: true }).map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-dark text-white py-2 px-4 rounded-lg hover:bg-dark/80 transition-all duration-300 transform hover:scale-105"
                    >
                        <Github size={18} />
                        {t('projects.github')}
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105"
                        >
                            <ExternalLink size={18} />
                            {t('projects.viewDetails')}
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
