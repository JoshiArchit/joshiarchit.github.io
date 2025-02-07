import { p, path } from "framer-motion/client";

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
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
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
    hovercolor: "#CC5E5E",
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
        documentation: "https://react.dev/"
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
        documentation: "https://tailwindcss.com/docs/installation/using-vite"
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
        documentation: "https://www.typescriptlang.org/docs/"
      },
      {
        id: 4,
        name: "Convex",
        path: "/assets/convex.svg",
        documentation: "https://convex.dev/docs"
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
    hovercolor: "#5271CA",
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
        documentation: "https://docs.python.org/3/"
      },
      {
        id: 2,
        name: "MongoDB",
        path: "assets/mongo.png",
        documentation: "https://docs.mongodb.com/"
      },
      {
        id: 3,
        name: "PostGreSQL",
        path: "/assets/postgresql.png",
        documentation: "https://www.postgresql.org/docs/"
      },
      {
        id: 4,
        name: "Numpy",
        path: "/assets/numpy.svg",
        documentation: "https://numpy.org/doc/stable/"
      },
      {
        id: 5,
        name: "Pandas",
        path: "/assets/pandas.png",
        documentation: "https://pandas.pydata.org/docs/"
      }
    ],
  },
  {
    projid:3,
    title: "Intrusion Detection Systems using Python",
    desc: "Intrusion Detection Systems (IDS) are a crucial part of network security, as they help identify and prevent unauthorized access to computer networks.",
    subdesc: "Understanding what an intrusion detection system is crucial before attempting to build one. Using Suricata and Snort as the industry standard IDS, this project involved a study of the various types of IDS, followed by the implementation of a machine learning-based IDS using Python. The model was trained on the NSL-KDD dataset and achieved an accuracy over 90%.",
    gitLink: "https://github.com/JoshiArchit/Intrusion-Detection-Systems-in-Python",
    logo: "/assets/intruder.svg",
    hovercolor: "#90DCA0",
    logoStyle: {
      backgroundColor: "#90DCA0",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight3.png",
    stack: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
        documentation: "https://docs.python.org/3/"
      },
      {
        id: 2,
        name: "Snort",
        path: "assets/tools.svg",
        documentation: "https://www.snort.org/documents"
      },
      {
        id: 3,
        name: "Suricata",
        path: "/assets/tools.svg",
        documentation: "https://suricata-ids.org/docs/"
      },
      {
        id: 4,
        name: "TensorFlow",
        path: "/assets/tensorflow.svg",
        documentation: "https://www.tensorflow.org/guide"
      },
      {
        id: 5,
        name: "PyTorch",
        path: "/assets/pytorch.svg",
        documentation: "https://pytorch.org/docs/stable/index.html"
      },
      {
        id: 6,
        name: "Pandas",
        path: "/assets/pandas.png",
        documentation: "https://pandas.pydata.org/docs/"
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
    hovercolor: "#AB51DE",
    logoStyle: {
      backgroundColor: "#AB51DE",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight4.png",
    stack: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
        documentation: "https://docs.python.org/3/"
      },
      {
        id: 2,
        name: "PyGame",
        path: "assets/game.png",
        documentation: "https://www.pygame.org/docs/"
      }
    ],
  }
  
];

export const workExp = [
  {
    id: 1,
    title: "Full Stack Developer Co-op",
    location: "Saint Paul, MN",
    company: "Ecolab",
    duration: "Aug 2024 - Present",
    hovercolor: "#5271CA",
    spotlight: "/assets/spotlight2.png",
    technology : [
      {
        id: 1,
        name: "Angular",
        path: "/assets/python.png",
        documentation: "https://angular.io/docs"
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.png",
        documentation: "https://www.typescriptlang.org/docs/"
      },
      {
        id: 3,
        name: "C# .NET",
        path: "/assets/dotnet.png",
        documentation: "https://docs.microsoft.com/en-us/dotnet/"
      },
      {
        id: 4,
        name: "Snowflake",
        path: "/assets/snowflake.png",
        documentation: "https://docs.snowflake.com/en/"
      },
      {
        id: 5,
        name: "Azure",
        path: "/assets/azure.png",
        documentation: "https://docs.microsoft.com/en-us/azure/"
      },
      {
        id: 6,
        name: "REST API",
        path: "/assets/restapi.png",
        documentation: "https://restfulapi.net/"
      },
    ],
    description : [
      "Co-led feature development for Ecolab's Insitutional division solution penetration dashboard, enhancing data visualization for North American sales teams.",
      "Engineered reusable Angular components to construct an Analytics dashboard for Ecolab's Institutional product and sales data, enhancing user experience and efficiency.",
      "Created interactive charts (bar, doughnut, line) using Chart.js for intuitive data visualization and incorporated Mixpanel to track dashboard usage analytics.",
      "Streamlined API endpoints with C# .NET Core, leveraging Azure Redis Caching and LINQ to minimize load times and optimize data retrieval efficiency.",
      "Optimized Snowflake queries, achieving a 20% improvement in API performance and enabling seamless front-end integration.",
      "Conducted End-to-End in-sprint BDD QA testing with Microsoft Playwright and SpecFlow for UI and API validation, ensuring high-quality deliverables.",
      "Authored front-end unit tests using Karma, enhancing application reliability.",
      "Facilitated daily scrum meetings and collaborated in an Agile environment through retrospectives and bi-weekly sprint deliveries, ensuring consistent project success.",
      "Leveraged Git for version control and code collaboration, ensuring seamless integration and deployment of features.",
      "Leveraged Azure Feature Manager, Redis Cache, and Application Insights to monitor and optimize application performance.",
    ]
  },
  {
    id: 2,
    title: "Machine Learning Course Assistant",
    location: "Rochester, NY",
    company: "Rochester Institute of Technology",
    duration: "August 2023-2024",
    hovercolor: "#5271CA",
    spotlight: "/assets/spotlight2.png",
    technology : [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
        documentation: "https://docs.python.org/3/"
      },
      {
        id: 2,
        name: "PyTorch",
        path: "/assets/pytorch.svg",
        documentation: "https://pytorch.org/docs/stable/index.html"
      },
      {
        id: 3,
        name: "TensorFlow",
        path: "/assets/tensorflow.svg",
        documentation: "https://www.tensorflow.org/guide"
      },
      {
        id: 4,
        name: "Linux",
        path: "/assets/linux.png",
        documentation: "https://www.linux.org/docs/"
      },
      {
        id: 5,
        name: "Git",
        path: "/assets/git.png",
        documentation: "https://git-scm.com/doc"
      },
      {
        id: 6,
        name: "Jupyter Notebook",
        path: "/assets/jupyter.png",
        documentation: "https://jupyter.org/documentation"
      },
    ],
    description : [

    ]
  },
]

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
