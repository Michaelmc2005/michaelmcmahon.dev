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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  sentinus,
  regen,
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "3D Modeller",
    icon: mobile,
  },
  {
    title: "Music Producer",
    icon: backend,
  },
  {
    title: "Visual Effects Creator",
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
    title: "Generation Innovation Work Experience",
    company_name: "Catalyst / Titanic Quarter - Belfast",
    icon: starbucks,
    iconBg: "#fff",
    date: "June 2022",
    points: [
      "Over a five-day work experience opportunity, me, and a team of six other young innovators designed a solution to the problem “Raise Awareness for Deforestation” that was given by a partner company ",
      "My team planned, developed, and pitched our project to a set of judges”",
      "Our project included an app that was designed and rendered in 3D software, a functioning Website that was programmed in HTML, CSS and JavaScript, and a snapchat augmented reality filter that I developed.",
      "My Team completed all the stages and won the pitch-competition at the end of the week. We were also invited to the Catalyst Invent 2022 Awards night",
    ],
  },
  {
    title: "Young Innovators 2022",
    company_name: "Sentinus",
    icon: sentinus,
    iconBg: "#fff",
    date: "October 2022",
    points: [
      "I was accepted to pitch a project of mine that showcased the use of Virtual Reality technology at 'Young Innovators 2022'",
      "I presented throughout the day to pairs of judges how i developed the software that was running in a Virtual Environment, and all the 3D Models",
      "I was selected as the winner for Young Innovators, which entitled me to compete at 'Regeneron ISEF 2023'",
    ],
  },
  {
    title: "Finalist - Grand Award Winner",
    company_name: "Regeneron ISEF",
    icon: regen,
    iconBg: "#fff",
    date: "May 2023",
    points: [
      "Flew from Dublin to Dallas to Compete",
      "Pitching an original VR App Project, Judged against 1600 other students. From over 80 Countries",
      "Winner of a Grand Award in the 'Systems Software' category",
      "I was the only Grand Award winner from the UK or Ireland, and I placed in the Top 5 in the World for Software!",
    ],
  },
  {
    title: "Software Engineer - Full Time",
    company_name: "Options Technology",
    icon: meta,
    iconBg: "#fff",
    date: "September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Socratique",
    description:
      "A Web-based platform that allows users to learn about any topic through a variety of artificial intelligence supported services",
    tags: [
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Michaelmc2005/SOCRATIQUE",
  },
  {
    name: "EverTree",
    description:
      "Web application and Snapchat filter that uses promotional marketing and branding strategies to encourage awareness for deforestation.",
    tags: [
      {
        name: "lensStudio",
        color: "blue-text-gradient",
      },
      {
        name: "ARkit",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/michaelmc2005/evertree",
  },
  {
    name: "Virtual Academic Insight Aid",
    description:
      "A Virtual Reality Education app that creates an immersive Mixed Reality Classroom for students using innovative depth-tracking-informed spatial positioning software",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "cSharp",
        color: "green-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://projectboard.world/isef/project/soft005-vaia",
  },
];

export { services, technologies, experiences, testimonials, projects };
