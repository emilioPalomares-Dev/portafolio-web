import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            // Navbar
            nav: {
                projects: 'Projects',
                skills: 'Skills',
                contact: 'Contact',
            },
            // Hero Section
            hero: {
                title: 'Robotics & Automation Engineer',
                subtitle: 'Mechatronics Engineering Student | UAG',
                cta1: 'View Projects',
                cta2: 'Download CV',
            },
            // About Section
            about: {
                title: 'About Me',
                bio1: 'I am a passionate Mechatronics Engineering student at Universidad Autónoma de Guadalajara (UAG), specializing in robotics, automation, and embedded systems.',
                bio2: 'My expertise spans from programming autonomous drones with computer vision to designing collaborative robotic production lines. I thrive on creating innovative solutions that bridge software and hardware.',
                bio3: 'Currently seeking opportunities to apply my skills in robotics and automation at leading technology companies.',
                interests: 'Areas of Interest',
                interest1: 'Autonomous Robotics',
                interest2: 'Computer Vision',
                interest3: 'IoT & Embedded Systems',
                interest4: 'ROS & Control Systems',
            },
            // Projects Section
            projects: {
                title: 'Featured Projects',
                subtitle: 'Explore my latest work in robotics and automation',
                viewDetails: 'View Details',
                github: 'GitHub',
                project1: {
                    title: 'Autonomous Drone with Raspberry Pi',
                    description: 'Autonomous drone for agricultural and surveillance missions using computer vision and real-time processing',
                    tags: ['Raspberry Pi', 'Python', 'OpenCV', 'Linux', 'Brushless Motors'],
                },
                project2: {
                    title: 'Robotic Arms Production Line',
                    description: 'Scalable production system with 2 collaborative robotic arms, vision-based quality control, and automated workflow',
                    tags: ['ROS', 'Python', 'Computer Vision', 'Motors', 'Sensors'],
                },
                project3: {
                    title: 'IoT Access Control System',
                    description: 'Smart laboratory access management with ESP32, real-time web dashboard, and sensor integration',
                    tags: ['ESP32', 'IoT', 'HTML/CSS/JS', 'MQTT', 'Sensors'],
                },
            },
            // Skills Section
            skills: {
                title: 'Technical Skills',
                subtitle: 'Tools and technologies I work with',
                programming: 'Programming',
                robotics: 'Robotics',
                electronics: 'Electronics',
                simulation: 'Simulation',
                tools: 'Tools',
            },
            // Contact Section
            contact: {
                title: 'Get In Touch',
                subtitle: 'Let\'s discuss robotics, automation, or opportunities',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Error sending message. Please try again.',
            },
            // Footer
            footer: {
                rights: 'All rights reserved',
                built: 'Designed with React & Tailwind CSS',
            },
        },
    },
    es: {
        translation: {
            // Navbar
            nav: {
                projects: 'Proyectos',
                skills: 'Habilidades',
                contact: 'Contacto',
            },
            // Hero Section
            hero: {
                title: 'Ingeniero en Robótica y Automatización',
                subtitle: 'Estudiante de Ingeniería Mecatrónica | UAG',
                cta1: 'Ver Proyectos',
                cta2: 'Descargar CV',
            },
            // About Section
            about: {
                title: 'Sobre Mí',
                bio1: 'Soy un estudiante apasionado de Ingeniería Mecatrónica en la Universidad Autónoma de Guadalajara (UAG), especializado en robótica, automatización y sistemas embebidos.',
                bio2: 'Mi experiencia abarca desde programar drones autónomos con visión artificial hasta diseñar líneas de producción con brazos robóticos colaborativos. Me apasiona crear soluciones innovadoras que integren software y hardware.',
                bio3: 'Actualmente busco oportunidades para aplicar mis habilidades en robótica y automatización en empresas tecnológicas líderes.',
                interests: 'Áreas de Interés',
                interest1: 'Robótica Autónoma',
                interest2: 'Visión Artificial',
                interest3: 'IoT y Sistemas Embebidos',
                interest4: 'ROS y Sistemas de Control',
            },
            // Projects Section
            projects: {
                title: 'Proyectos Destacados',
                subtitle: 'Explora mi trabajo más reciente en robótica y automatización',
                viewDetails: 'Ver Detalles',
                github: 'GitHub',
                project1: {
                    title: 'Dron Autónomo con Raspberry Pi',
                    description: 'Dron autónomo para misiones agrícolas y de vigilancia con visión artificial y procesamiento en tiempo real',
                    tags: ['Raspberry Pi', 'Python', 'OpenCV', 'Linux', 'Motores Brushless'],
                },
                project2: {
                    title: 'Línea de Producción con Brazos Robóticos',
                    description: 'Sistema de producción escalable con 2 brazos robóticos colaborativos, control de calidad por visión y flujo automatizado',
                    tags: ['ROS', 'Python', 'Visión Artificial', 'Motores', 'Sensores'],
                },
                project3: {
                    title: 'Sistema de Control de Acceso IoT',
                    description: 'Gestión inteligente de acceso a laboratorio con ESP32, dashboard web en tiempo real e integración de sensores',
                    tags: ['ESP32', 'IoT', 'HTML/CSS/JS', 'MQTT', 'Sensores'],
                },
            },
            // Skills Section
            skills: {
                title: 'Habilidades Técnicas',
                subtitle: 'Herramientas y tecnologías que domino',
                programming: 'Programación',
                robotics: 'Robótica',
                electronics: 'Electrónica',
                simulation: 'Simulación',
                tools: 'Herramientas',
            },
            // Contact Section
            contact: {
                title: 'Ponte en Contacto',
                subtitle: 'Hablemos sobre robótica, automatización u oportunidades',
                name: 'Nombre',
                email: 'Correo Electrónico',
                message: 'Mensaje',
                send: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje enviado exitosamente!',
                error: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
            },
            // Footer
            footer: {
                rights: 'Todos los derechos reservados',
                built: 'Diseñado con React & Tailwind CSS',
            },
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
