import { IconBrandMantine } from '@tabler/icons';
import {
    SiDocker,
    SiGit,
    SiGo,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiTypescript,
} from 'react-icons/si';

const iconWidth = 35;
const iconHeight = 35;

export const icons = [
    {
        label: 'TypeScript',
        icon: <SiTypescript width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'JavaScript',
        icon: <SiJavascript width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'React',
        icon: <SiReact width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'Next.js',
        icon: <SiNextdotjs width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'Python',
        icon: <SiPython width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'MongoDB',
        icon: <SiMongodb width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'Mantine',
        icon: <IconBrandMantine width={24} height={24} />,
    },
    {
        label: 'Go',
        icon: <SiGo width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'Git',
        icon: <SiGit width={iconWidth} height={iconHeight} />,
    },
    {
        label: 'Docker',
        icon: <SiDocker width={iconWidth} height={iconHeight} />,
    },
];
export const projects = [
    {
        name: 'Portfolio (This Site)',
        link: 'https://github.com/tonydawhale/.dev',
        date: 'November 2023',
        description: [
            'A personal portfolio website',
            'Technologies Used: TypeScript, React, Next.js, & Mantine',
        ],
    },
    {
        name: 'Skyzar',
        link: 'https://skyzar.app',
        date: 'August 2023',
        description: [
            'A free and open-sourced Hypixel Skyblock bazaar interface',
            'Tracks and saves historical buy and sell data for all items available (currently over 1,250 items) on the Hypixel Skyblock bazaar market every minute',
            'Storage optimized so entire database sites at ~50mb',
            'Technologies Used: Docker, MongoDB, Go, SvelteKit, Chart.js, TypeScript, Bun',
        ],
    },
];
export const commands = [
    {
        command: 'about',
        description: 'Displays information about me',
    },
    {
        command: 'projects',
        description: 'Displays a list of all of my projects',
    },
    {
        command: 'experience',
        description: 'Displays a list of all of my work experience',
    },
    {
        command: 'links',
        description: 'Displays a list of all of my links',
    },
    {
        command: 'help',
        description: 'List all available commands',
    },
    {
        command: 'init',
        description: 'Displays the welcome message',
    },
    {
        command: 'clear',
        description: 'Clears the terminal',
    },
];
export const experience = [
    {
        company: 'tvScientific',
        position: 'Software Engineering Intern',
        location: 'Los Angeles, CA',
        startDate: 'June 2023',
        endDate: 'August 2023',
        description: [
            'Contributed work to DevOps, Frontend, and Backend teams',
            'Created a user billing page based on work completed with the product team and Figma designs',
            'Contributed to CICD integration for data science services',
            'Created an AI-powered search engine backed by our company’s data for a company-wide hackathon and won 1st place',
        ],
    },
    {
        company: 'tvScientific',
        position: 'Software Engineering Intern',
        location: 'Los Angeles, CA',
        startDate: 'June 2022',
        endDate: 'August 2022',
        description: [
            'Contributed work to Frontend and Backend teams',
            'Setup status page and application alert bars for customers and employees to be notified when services are down, maintenance is occurring, or any other announcements',
            'My Keynote project was the creation of a content distribution network using AWS S3 to allow employees to upload images to be used on our frontend application',
        ],
    },
];
export const links = [
    {
        label: 'GitHub',
        link: 'https://github.com/tonydawhale',
    },
    {
        label: 'Email',
        link: 'mailto:tonydawhale@gmail.com',
    },
    {
        label: 'Discord',
        link: 'https://discord.com/users/244181430085746688',
    },
];
