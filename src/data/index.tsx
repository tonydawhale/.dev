/* eslint-disable react/jsx-key */
import {
  SiAmazonaws,
  SiC,
  SiCloudflare,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const SHELL_COMMANDS = [
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

export const PROGRAMMING_LANGUAGES = [
  <SiTypescript className="text-xl" />,
  <SiJavascript className="text-xl" />,
  <SiReact className="text-xl" />,
  <SiNextdotjs className="text-xl" />,
  <SiPython className="text-xl" />,
  <SiMongodb className="text-xl" />,
  <SiGo className="text-xl" />,
  <SiGit className="text-xl" />,
  <SiDocker className="text-xl" />,
  <SiTailwindcss className="text-xl" />,
  <SiAmazonaws className="text-xl" />,
  <SiC className="text-xl" />,
  <SiCplusplus className="text-xl" />,
  <SiHtml5 className="text-xl" />,
  <SiCss3 className="text-xl" />,
  <SiSvelte className="text-xl" />,
  <SiCloudflare className="text-xl" />,
];

export const PROJECTS = [
  {
    name: 'Portfolio (This site)',
    link: 'https://github.com/tonydawhale/.dev',
    date: 'July 2024',
    description: [
      'A personal portfolio site built with Next.js and Tailwind CSS',
    ],
  },
  {
    name: 'SurfBuddy',
    link: '/SurfBuddyUML.png',
    date: 'December 2024',
    description: [
      'A Java application that poses as an alternative to Surfline, a popular surf forecasting website.',
      'SurfBuddy uses the NOAA API to fetch surf & weather data and displays it in a human-readable format.',
      'Users are able to list all surf spots, look at the surf data for a specific surf spot, and get a recommendation on the best surf spot to go to based on the surf data all from an easy to use command-line interface.',
      'On startup, the SurfBuddy class initializes a series of SurfSpot classes that each contain surf data for a specific surf spot. The SurfBuddy class then fetches the surf data from the NOAA API and stores it in the SurfSpot classes.',
      'Personally, as my contribution to the group project, I designed the HTTP request and response handling, parsing of the data, and the formatting of the data to be displayed to the user.',
      'Technologies Used: Java',
    ],
  },
  {
    name: 'Kuudra API',
    link: 'https://github.com/tonydawhale/kuudra-api',
    date: 'Janurary 2024 --> Present',
    description: [
      'A scalable and self-sufficient api that tracks and stores data regarding Crimson Isle Kuudra items found auction house prices on the Hypixel Skyblock game using the public Hypixel API.',
      'The Golang database worker uses concurrency to request and parse the Hypixel Skyblock Auction House API, parse the NBT data, and store it in MongoDB in under 2 seconds (Approximately 70,000 records).',
      'Technologies Used: TypeScript, Bun, ElysiaJS, Golang, MongoDB, Docker, Cloudflare Tunnels',
    ],
  },
  {
    name: 'Skyzar (No longer maintained)',
    link: 'https://github.com/tonydawhale/skyzar',
    date: 'August 2023',
    description: [
      'A free and open-sourced Hypixel Skyblock bazaar interface',
      'Tracks and saves historical buy and sell data for all items available (currently over 1,250 items) on the Hypixel Skyblock bazaar market every minute',
      'Storage optimized so entire database sites at ~50mb',
      'Technologies Used: Docker, MongoDB, Go, SvelteKit, TailwindCSS',
    ],
  },
];

export const EXPERIENCE = [
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

export const LINKS = [
  {
    label: 'GitHub',
    link: 'https://github.com/tonydawhale',
  },
  {
    label: 'Email',
    link: 'mailto:tonydadev@gmail.com',
  },
  {
    label: 'Discord',
    link: 'https://discord.com/users/244181430085746688',
  },
];
