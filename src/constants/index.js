import { p } from "framer-motion/client";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    projid:1,
    title: "Reddit-Clone",
    desc: "Reddit is a great platform for sharing and discussing content. ",
    subdesc:
      "This project is a clone of Reddit, built from scratch using React, Tailwind and Convex which is a server side database. It allows users to create posts, upvote and downvote posts, and comment on posts. Also a great way to visually learn React and Tailwind !",
    gitLink: "https://github.com/JoshiArchit/Reddit-Clone",
    logo: "/assets/reddit-clone.svg",
    logoStyle: {
      backgroundColor: "#CC5E5E",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    stack: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Convex",
        path: "/assets/convex.svg",
      },
    ],
  },
  {
    projid:2,
    title: "MyAnimeList Data Analysis",
    desc: "MyAnimeList is a popular website that allows users to track and rate anime and manga with a large amount of data handy on Kaggle, it makes a great candidate for data analysis !",
    subdesc: "This project involved analyzing 80 million records from the MyAnimeList dataset in a team. We optimized schemas in PostgreSQL and MongoDB, analyzed user ratings and preferences with NumPy, and visualized the findings. The Apriori algorithm was applied to derive association rules with 70% confidence, and query optimization was improved by 20-30%.",
    gitLink: "https://github.com/JoshiArchit/MyAnimeList-Data-Analysis",
    logo: "/assets/anime.svg",
    logoStyle: {
      backgroundColor: "#5271CA",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    stack: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "assets/mongo.png",
      },
      {
        id: 3,
        name: "PostGreSQL",
        path: "/assets/postgresql.png",
      },
      {
        id: 4,
        name: "Numpy",
        path: "/assets/numpy.svg",
      },
      {
        id: 5,
        name: "Pandas",
        path: "/assets/pandas.png",
      }
    ],
  },
  {
    projid:3,
    title: "Intrusion Detection Systems using Python and Machine Learning",
    desc: "Intrusion Detection Systems (IDS) are a crucial part of network security, as they help identify and prevent unauthorized access to computer networks.",
    subdesc: "Understanding what an intrusion detection system is crucial before attempting to build one. Using Suricata and Snort as the industry standard IDS, this project involved a thorough analysis and literature review of the various types of IDS, followed by the implementation of a machine learning-based IDS using Python and ML frameworks. The model was trained on the NSL-KDD dataset and achieved an accuracy over 90%.",
    gitLink: "https://github.com/JoshiArchit/Intrusion-Detection-Systems-in-Python",
    logo: "/assets/intruder.svg",
    logoStyle: {
      backgroundColor: "#90DCA0",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    stack: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
      {
        id: 2,
        name: "Snort",
        path: "assets/tools.svg",
      },
      {
        id: 3,
        name: "Suricata",
        path: "/assets/tools.svg",
      },
      {
        id: 4,
        name: "TensorFlow",
        path: "/assets/tensorflow.svg",
      },
      {
        id: 5,
        name: "PyTorch",
        path: "/assets/pytorch.svg",
      },
      {
        id: 6,
        name: "Pandas",
        path: "/assets/pandas.png",
      }
    ],
  },
  {
    projid:4,
    title: "Space Invaders !",
    desc: "If you havent run into this game yet, you are missing out !",
    subdesc: "To say I'm fascinated by how we can make code interact with the real world is an understatement. This project is a simple Space Invaders game built using Python and Pygame. It's a great way to learn about game development, object-oriented programming, and the Pygame library. Plus it's a lot of fun to play!",
    gitLink: "https://github.com/JoshiArchit/Space-Invaders",
    logo: "/assets/space-invaders.png",
    logoStyle: {
      backgroundColor: "#AB51DE",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    stack: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
      {
        id: 2,
        name: "PyGame",
        path: "assets/game.png",
      }
    ],
  }
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workTimelineItems = [
  {
    id: 1,
    title: "Full Stack Developer Co-op",
    location: "Saint Paul, MN",
    company: "Ecolab",
    buttonText: "Details",
    date: "Aug 2024 - Present",
    icon: "work",
    color: "green",
    description: [
      "Angular",
      "TypeScript",
      "C# .NET",
      "Snowflake",
      "Azure",
      "REST API",
      "Git",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Course Assistant",
    location: "Rochester, NY",
    company: "Rochester Institute of Technology",
    buttonText: "Details",
    date: "August 2023-2024",
    icon: "work",
    color: "red",
    description: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Linux",
      "Git",
      "Jupyter Notebook",
    ],
  },
  {
    id: 3,
    title: "System Architect",
    location: "Pune, India",
    company: "IBM",
    buttonText: "Details",
    date: "August 2019 - July 2022",
    icon: "work",
    color: "purple",
    description: [
      "Python",
      "SAP",
      "Networking",
      "Security",
      "IBM Cloud",
      "System Architecture",
    ],
  },
  {
    id: 4,
    title: "Web Developer Intern",
    location: "Pune, India",
    company: "SRV Media Pvt. Ltd.",
    buttonText: "Details",
    date: "May 2017 - July 2017",
    icon: "work",
    color: "orange",
    description: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "PHP",
      "MySQL",
      "MongoDB",
      "SEO",
    ],
  },
];

export const educationTimelineItems = [
  {
    id: 1,
    title: "Master of Science in Computer Science",
    location: "Rochester, NY",
    school: "Rochester Institute of Technology",
    date: "August 2022 - Present",
    icon: "school",
    color: "orange",
    description: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "NoSQL / NewSQL Databases",
      "Big Data Analytics",
      "Web Services and Service Oriented Computing",
    ],
  },
  {
    id: 2,
    title: "Bachelor of Technology in Information Technology",
    location: "Pune, India",
    school: "Symbiosis Institute of Technology",
    date: "August 2018 - May 2022",
    icon: "/assets/school.svg",
    color: "blue",
    description: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Database Management",
      "Software Development",
      "Computer Architecture",
    ],
  },
];
