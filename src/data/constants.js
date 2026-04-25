import { FaJava } from 'react-icons/fa';
import {
  SiArduino,
  SiCplusplus,
  SiExpress,
  SiGit, SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPython, SiReact, SiTailwindcss
} from 'react-icons/si';
  
  export const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certs' },
    { id: 'contact', label: 'Contact' },
  ];
  
  export const SOCIAL_LINKS = {
    github: 'https://github.com/ajaygill04',
    linkedin: 'https://www.linkedin.com/in/ajay-gill-524a71230/',
  };
  
  export const SKILLS = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
        { name: 'C++', icon: SiCplusplus, level: 80, color: '#00599C' },
        { name: 'Java', icon: FaJava, level: 75, color: '#ED8B00' },
        { name: 'Python', icon: SiPython, level: 70, color: '#3776AB' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', icon: SiReact, level: 92, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: SiReact, level: 90, color: '#1572B6' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: SiNodedotjs, level: 88, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 85, color: '#888888' },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: SiGit, level: 88, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, level: 90, color: '#888888' },
        { name: 'Postman', icon: SiPostman, level: 82, color: '#FF6C37' },
        { name: 'Arduino', icon: SiArduino, level: 70, color: '#00979D' },
      ],
    },
  ];
  
  export const PROJECTS = [
    {
      id: 1,
      title: 'Wanderlust',
      subtitle: 'Full Stack Travel Listing Platform',
      category: 'fullstack',
      description: 'An Airbnb-inspired web application enabling users to discover, list, and manage travel accommodations worldwide with full CRUD operations.',
      longDescription: 'Wanderlust is a full-stack Airbnb-inspired travel platform where users can discover, list, and manage travel accommodations worldwide. Features complete CRUD operations for property listings with image support, dynamic pricing, and location-based categorization. Built with secure user authentication using Passport.js with session management, ensuring only registered owners can modify their listings. Deployed on Render with MongoDB Atlas cloud database supporting real-time data persistence and multi-user access.',
      image: '/projects/wanderlust.jpg',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'Passport.js', 'Bootstrap 5', 'Render'],
      github: 'https://github.com/ajaygill04/wanderlust',
      live: 'https://project-wanderlust-2ru7.onrender.com',
      features: ['Full CRUD for property listings', 'Passport.js authentication and authorization', 'Image support with fallback handling', 'Dynamic pricing and location categorization', 'Flash notifications and form validations', 'RESTful API with MVC architecture'],
    },
    {
      id: 2,
      title: 'JobFinder',
      subtitle: 'Full Stack Job Portal',
      category: 'fullstack',
      description: 'A complete job portal where employers can post jobs and manage applications, while job seekers can search, filter, and apply for jobs.',
      longDescription: 'JobFinder is a full-featured job portal built with the MERN stack. Employers can create job listings and manage incoming applications. Job seekers can search jobs with advanced filters, view details, and apply seamlessly. Features JWT authentication with role-based access control for employers and job seekers, a beautiful responsive UI, and cloud deployment.',
      image: '/projects/jobfinder.jpg',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'Vercel'],
      github: 'https://github.com/ajaygill04/job-finder-MERN-',
      live: 'https://jobfinder-frontend-mu.vercel.app',
      features: ['Employer job posting and management', 'Job seeker search and apply', 'JWT authentication with role-based access', 'Advanced job filtering', 'Application tracking system', 'Responsive modern UI'],
    },
    {
      id: 3,
      title: 'Smart Gate Pass Management System',
      subtitle: 'Full Stack Hostel Management Tool',
      category: 'fullstack',
      description: 'A comprehensive hostel gate pass management system that digitizes the entire workflow — from student application to warden approval and guard verification with QR code scanning.',
      longDescription: 'A full-stack web application that digitizes the entire hostel gate pass workflow. Students can apply for day, night, weekend, or emergency passes. Wardens review, approve, or reject requests through a dedicated dashboard. Guards verify passes using QR code scanning with check-in and check-out functionality. Features role-based access control for three user types, auto-generated QR codes, real-time status tracking, and a responsive glassmorphism UI. Cloud-deployed on Render with MongoDB Atlas for persistent data storage.',
      image: '/projects/gatepass.jpg',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'EJS', 'JWT', 'bcrypt', 'QR Code', 'Render'],
      github: 'https://github.com/ajaygill04/smart-gate-pass-management-system',
      live: 'https://smart-gate-pass-management-system.onrender.com',
      features: ['Role-based access for Student, Warden, and Guard', 'Day, night, weekend, and emergency pass types', 'Warden dashboard for approving or rejecting requests', 'Guard panel with check-in and check-out', 'Auto-generated QR codes for verification', 'Real-time pass status tracking with progress indicators'],
    },
    {
      id: 4,
      title: 'Smart Waste Management System',
      subtitle: 'IoT-Powered Solution',
      category: 'iot',
      description: 'IoT-based waste management using Arduino sensors to monitor bin levels and optimize collection routes.',
      longDescription: 'Leverages Arduino ultrasonic sensors to monitor bin fill levels in real-time with a web dashboard for visualization and route optimization.',
      image: '/projects/smartwaste.jpg',
      tech: ['Arduino', 'IoT Sensors', 'Node.js', 'MongoDB', 'React.js', 'MQTT'],
      github: 'https://github.com/ajaygill04/smart-waste',
      live: '',
      features: ['Real-time bin monitoring', 'Live data dashboard', 'Threshold alerts', 'Route optimization', 'Historical analytics', 'Low-power sensor nodes'],
    },
  ];
  
  export const EXPERIENCE = [
    {
      id: 1,
      role: 'Software Engineering Virtual Experience',
      company: 'JPMorgan Chase & Co. (via Forage)',
      period: '2024',
      description: [
        'Completed job simulation on backend engineering practices',
        'Built and consumed RESTful APIs for financial data',
        'Worked with Apache Kafka for event streaming',
        'Integrated backend microservices with frontend dashboards',
        'Applied clean code principles and design patterns',
      ],
      tech: ['REST APIs', 'Apache Kafka', 'Python', 'Git'],
    },
  ];
  
  export const CERTIFICATIONS = [
    { id: 1, title: 'Full Stack Web Development', issuer: 'Udemy / Coursera', date: '2024', type: 'certification' },
    { id: 2, title: 'Data Structures and Algorithms', issuer: 'GeeksforGeeks / LeetCode', date: '2024', type: 'certification' },
    { id: 3, title: 'Smart Waste Management Using IoT', issuer: 'IEEE / Conference Publication', date: '2024', type: 'publication' },
  ];