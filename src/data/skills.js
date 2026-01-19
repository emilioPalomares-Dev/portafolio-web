import { FaPython, FaReact, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiArduino, SiRaspberrypi, SiRos } from 'react-icons/si';
import { Code2, Cpu, CircuitBoard, Box, Wrench } from 'lucide-react';

export const skillsData = {
    programming: {
        icon: Code2,
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'C++', icon: SiCplusplus },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'MATLAB', icon: null },
        ],
    },
    robotics: {
        icon: Cpu,
        skills: [
            { name: 'ROS', icon: SiRos },
            { name: 'Control Systems', icon: null },
            { name: 'Kinematics', icon: null },
            { name: 'Path Planning', icon: null },
        ],
    },
    electronics: {
        icon: CircuitBoard,
        skills: [
            { name: 'Arduino', icon: SiArduino },
            { name: 'ESP32', icon: null },
            { name: 'Raspberry Pi', icon: SiRaspberrypi },
            { name: 'Circuit Design', icon: null },
        ],
    },
    simulation: {
        icon: Box,
        skills: [
            { name: 'Gazebo', icon: null },
            { name: 'SolidWorks', icon: null },
            { name: 'MATLAB Simulink', icon: null },
            { name: 'Proteus', icon: null },
        ],
    },
    tools: {
        icon: Wrench,
        skills: [
            { name: 'Git', icon: FaGitAlt },
            { name: 'Linux', icon: FaLinux },
            { name: 'CAD', icon: null },
            { name: 'VS Code', icon: null },
        ],
    },
};
