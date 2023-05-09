import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  ntua,
  iccs,
  gsna,
  shopify,
  carrent,
  oldportfolio,
  nimts,
  jobit,
  tripguide,
  threejs,
  black,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MEng in Electrical Engineering & Computer Scinece",
    company_name: "National Technical University of Athens",
    icon: ntua,
    iconBg: "white",
    date: "Oct 2016 - Oct 2022",
    points: [
      "Grade: 8.95 /10",
      "Key Modules: Distributed Systems (10/10), Advanced Databases (9.0/10), Computer Architecture (10/10), Programming Languages (8.0/10), Software Engineering (8.0/10), Discrete Mathematics (9.0/10), Human-Computer Interaction (9.0/10), Knowledge Systems and Technologies (10/10), Project Organization & Management (10/10)",
      "Thesis: ‘Study and optimization of Ethereum Blockchain clients’ storage level’ (10/10)",
    ],
  },
  {
    title: "Research Intern",
    company_name: "ICCS NTUA",
    icon: iccs,
    iconBg: "grey",
    date: "Oct 2021 - Jan 2022",
    points: [
      "Participating in the M-Sec EU&JP R&D Project under the H2020 programme..",
      "Developing frontend web applications using HTML, CSS, JavaScript & React JS",
      "Implementing Blockchain Technology to create a Smart City Marketplace with Secure Multi-layer Technologies",
    ],
  },
  {
    title: "Compulsory Military Service",
    company_name: "401 General Military Hospital of Athens",
    icon: gsna,
    iconBg: "white",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Serving as part of the Computer Science Research branch",
      "Liaising daily with officers from low ranking to Major Generals",
      "Developing web applications using HTML,CSS & JavaScript",
      "Assisting in IT Support regarding hospital applications",
    ],
  },
  {
    title: "Compulsory Military Service",
    company_name: "417 Medical Institution Military Shareholder Fund",
    icon: nimts,
    iconBg: "grey",
    date: "Jul 2022 - Mar 2023",
    points: [
      "Serving my second stint as part of the Computer Science Research branch",
      "Developing web applications using HTML,CSS, JavaScript & Python",
      "Providing IT Support regarding hospital applications",
      "Liaising daily with officers from low ranking to Major Generals",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: oldportfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
