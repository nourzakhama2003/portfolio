export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Npur was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Nour s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Nour. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Nour was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];
export const myProjects = [
    {
        title: "Platana - Group Food Ordering Platform",
        desc: "A full-stack web application that simplifies group lunch orders. Users can create shared orders, add dishes, include restaurants, and split delivery fees fairly.",
        subdesc:
            "Developed during my internship at Platana, this platform integrates a map-based restaurant locator, real-time order tracking, and Keycloak-secured authentication for a seamless group ordering experience.",
        href: "/textures/project/restaurantclips.mp4", // 🎥 Replace with your demo video
        texture: "/textures/project/restaurantclips.mp4",
        logo: "/assets/logo-wrappixel.svg", // custom logo or placeholder
        logoStyle: {
            backgroundColor: "#2E3A59",
            border: "0.2px solid #1F2B40",
            boxShadow: "0px 0px 60px 0px #2E3A594D",
        },
        spotlight: "/assets/spotlight.webp",

        tags: [
            { id: 1, name: "Angular", path: "/assets/angular.svg" },
            { id: 2, name: "Spring Boot", path: "/assets/spring.webp" },
            { id: 3, name: "Keycloak", path: "/assets/keycloak.png" },
            { id: 4, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
        ],
    },
    {
        title: "Codeveda - E-commerce Marketplace",
        desc: "A seller-driven e-commerce platform where users can create shops, manage products, and offer a personalized shopping experience.",
        subdesc:
            "Built as a scalable marketplace with React, Redux, and Tailwind on the frontend, Node.js/Express/MongoDB backend, and secure JWT-based authentication with bcrypt password hashing.",
        href: "/textures/project/shopclips.mp4", // 🎥 Replace with shop demo video
        texture: "/textures/project/shopclips.mp4",
        logo: "/assets/codeveda.png",
        logoStyle: {
            backgroundColor: "#2A1816",
            border: "0.2px solid #36201D",
            boxShadow: "0px 0px 60px 0px #AA3C304D",
        },
        spotlight: "/assets/spotlight.webp",
        tags: [
            { id: 1, name: "React.js", path: "/assets/react.svg" },
            { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },

        ],
    },
    {
        title: "Event Management Web App",
        desc: "A modern platform for managing events, assigning staff, tracking registrations, and ensuring role-based access control.",
        subdesc:
            "Built with Next.js and NestJS, featuring Clerk authentication, Tailwind styling, and Axios-powered APIs. The project emphasized clean architecture, performance, and teamwork.",
        href: "/textures/project/eventclips.mp4", // 🎥 Replace with event demo video
        texture: "/textures/project/eventclips.mp4",
        logo: "/assets/event.png",
        logoStyle: {
            backgroundColor: "#1C1A43",
            border: "0.2px solid #252262",
            boxShadow: "0px 0px 60px 0px #635BFF4D",
        },
        spotlight: "/assets/spotlight.webp",
        tags: [
            { id: 1, name: "Next.js", path: "/assets/nextjs.svg" },

            { id: 2, name: "Clerk", path: "/assets/clerk.png" },
            { id: 3, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
            { id: 4, name: "React.js", path: "/assets/react.svg" },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        laptopPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 6] : isMobile ? [10, -3, 6] : isTablet ? [5, -5, 6] : [9, -5, 7],
        reactLogoPosition: isSmall ? [1, 3, 0] : isMobile ? [5, 2, 0] : isTablet ? [5, 3, 0] : [7, 3, 0],
        reactLPosition: isSmall ? [4, 0, 0] : isMobile ? [12, 0, 3] : isTablet ? [12, 0, 3] : [12, 0, 3],
        ringPosition: isSmall ? [-20, -2, 0] : isMobile ? [-20, -2, 0] : isTablet ? [-20, -2, 0] : [-26, -2, 0],
        targetPosition: isSmall ? [-10, -7, 3] : isMobile ? [-10, -7, 3] : isTablet ? [-10, -7, 3] : [-10, -7, 3],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Group Food Ordering Platform',
        pos: 'Full Stack Developer',
        duration: '2024',
        title:
            "Built with Angular & Spring Boot, this platform enables users to create group food orders, join as participants, and track real-time countdowns until deadlines. Implemented Keycloak for authentication and secure role-based access.",
        icon: '/assets/angular.svg', // 👉 replace with a logo (Angular+Spring)
        animation: 'victory',
    },
    {
        id: 2,
        name: 'E-Commerce Platform (MERN)',
        pos: 'Full Stack Developer',
        duration: '2023',
        title:
            "Developed a multi-vendor e-commerce app using the MERN stack. Allowed users to create their own shops, add/manage products, and handle orders. Integrated JWT & bcrypt for secure authentication.",
        icon: '/assets/react.svg', // 👉 replace with MERN logo
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Event Management App',
        pos: 'Full Stack Developer',
        duration: '2022',
        title:
            "Built with Next.js and Spring Boot, this platform helps users create, manage, and participate in events. Implemented event registration, ticketing, and email notifications with a clean UI and scalable backend.",
        icon: '/assets/nextjs.svg', // 👉 replace with Next.js/Spring logo
        animation: 'salute',
    },
];
