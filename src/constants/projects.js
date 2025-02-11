import Technologies from "./techstack";

const myProjects = [
  {
    projid: 1,
    title: "Reddit-Clone",
    desc: "Reddit is a great platform for sharing and discussing content. ",
    subdesc:
      "This project is a clone of Reddit, built from scratch using React, Tailwind and Convex which is a server side database. It allows users to create posts, upvote and downvote posts, and comment on posts. Also a great way to visually learn React and Tailwind !",
    gitLink: "https://github.com/JoshiArchit/Reddit-Clone",
    shortdescription:
      "This project is a Reddit Clone built using React, Tailwind and Convex.",
    logo: "/assets/reddit-clone.svg",
    hovercolor: "#CC5E5E",
    logoStyle: {
      backgroundColor: "#CC5E5E",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    stack: [
      Technologies.React,
      Technologies.Tailwind,
      Technologies.TypeScript,
      Technologies.Convex,
    ],
  },
  {
    projid: 2,
    title: "MyAnimeList Data Analysis",
    desc: "MyAnimeList is a popular website that allows users to track and rate anime and manga with a large amount of data handy on Kaggle, it makes a great candidate for data analysis !",
    subdesc:
      "This project involved analyzing 80 million records from the MyAnimeList dataset in a team. We optimized schemas in PostgreSQL and MongoDB, analyzed user ratings and preferences with NumPy, and visualized the findings. The Apriori algorithm was applied to derive association rules with 70% confidence, and query optimization was improved by 20-30%.",
    gitLink: "https://github.com/JoshiArchit/MyAnimeList-Data-Analysis",
    shortdescription:
      "Data Analysis of over 80 million records from MyAnimeList dataset using PostgreSQL and MongoDB.",
    logo: "/assets/anime.svg",
    hovercolor: "#5271CA",
    logoStyle: {
      backgroundColor: "#5271CA",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    stack: [
      Technologies.Python,
      Technologies.MongoDb,
      Technologies.PostgreSql,
      Technologies.Numpy,
      Technologies.Pandas,
    ],
  },
  {
    projid: 3,
    title: "Intrusion Detection Systems using Python",
    desc: "Intrusion Detection Systems (IDS) are a crucial part of network security, as they help identify and prevent unauthorized access to computer networks.",
    subdesc:
      "Understanding what an intrusion detection system is crucial before attempting to build one. Using Suricata and Snort as the industry standard IDS, this project involved a study of the various types of IDS, followed by the implementation of a machine learning-based IDS using Python. The model was trained on the NSL-KDD dataset and achieved an accuracy over 90%.",
    gitLink:
      "https://github.com/JoshiArchit/Intrusion-Detection-Systems-in-Python",
    shortdescription:
      "Intrusion Detection Systems built using Python and Machine Learning libraries. Trained on KDD Cup dataset for training.",
    logo: "/assets/intruder.svg",
    hovercolor: "#90DCA0",
    logoStyle: {
      backgroundColor: "#90DCA0",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight3.png",
    stack: [
      Technologies.Python,
      Technologies.Snort,
      Technologies.Suricata,
      Technologies.TensorFlow,
      Technologies.PyTorch,
      Technologies.Pandas,
    ],
  },
  {
    projid: 4,
    title: "Space Invaders !",
    desc: "If you havent run into this game yet, you are missing out !",
    subdesc:
      "To say I'm fascinated by how we can make code interact with the real world is an understatement. This project is a simple Space Invaders game built using Python and Pygame. It's a great way to learn about game development, object-oriented programming, and the Pygame library. Plus it's a lot of fun to play!",
    gitLink: "https://github.com/JoshiArchit/Space-Invaders",
    shortdescription:
      "A Space Invaders game built using Python and Pygame with a complete game loop, level design and score system.",
    logo: "/assets/space-invaders.png",
    hovercolor: "#AB51DE",
    logoStyle: {
      backgroundColor: "#AB51DE",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight4.png",
    stack: [Technologies.Python, Technologies.Pygame],
  },
];

export default myProjects;
