import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  sce,
  stanford,
  sjsu,
  mission,
  swc,
  boba,
  cards,
  linkin,
  carpool,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiSocketdotio,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiNumpy,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiPostgresql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiNodedotjs,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiDocker,
  SiPandas,
  SiExpress,
  SiMongodb,
  SiKotlin,
  SiSpringboot,
  SiAndroid
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1mSqodZRkxCxpcyHxM72-r3Ow3p5CD7Cq/view?usp=sharing";
export const repoLink = "https://github.com/jask1m/Jason-Personal-Portfolio";

export const callToAction = "https://www.linkedin.com/in/jasonkimbusiness";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Coursework",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: sjsu,
    title: "San Jose State University",
    degree: "B.S. Computer Science",
    duration: "expected graduation: Dec. 2027",
    content1: "Activities & societies: SJSU Software & Computer Engineering",
    content2: "Cumulative gpa: 4.0",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: swc,
    event: "Discrete Structures",
    position: "Math-265 (Southwestern College)",
    content1: "Learned something new: 4/5",
    content2: "Enjoyed the class: 2.5/5",
    content3: "Difficulty: 3.5/5",
  },
  {
    id: "a-2",
    icon: mission,
    event: "Intro to Data Structures & Algorithms",
    position: "CIS-044 (Mission College)",
    content1: "Learned something new: 4/5",
    content2: "Enjoyed the class: 4/5",
    content3: "Difficulty: 2/5",
  },
  {
    id: "a-3",
    icon: sjsu,
    event: "Data Structures & Algorithms",
    position: "CS-146 (SJSU)",
    content1: "Learned something new: 3/5",
    content2: "Enjoyed the class: 3/5",
    content3: "Difficulty: 5/5",
  },
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiKotlin,
        name: "Kotlin",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        id: "f-1",
        icon: SiNextdotjs,
        name: "NextJS",
      },
      {
        id: "f-1",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "f-1",
        icon: SiAndroid,
        name: "Android",
      },
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-8",
        icon: SiPandas,
        name: "Pandas",
      },
      {
        id: "t-9",
        icon: SiNumpy,
        name: "Numpy",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "SJSU Computer Engineering Dept.",
    logo: sjsu,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Distributed Systems Researcher & Developer",
        duration: "Jul. 2024 - Present",
        content: [
          {
            text: "Developing a mobile Android/Spring Boot infrastructure for data exchange in remote regions",
            link: "",
          },
          {
            text: "Implemented delay-tolerant networking with gRPC/Kotlin, ensuring reliable end-to-end encrypted delivery",
            link: "",
          },
          {
            text: "Automated build and testing workflows with GitHub Actions CI/CD to improve development time by 20%",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "SJSU Undergraduate Research Opportunity Program",
    logo: sjsu,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Undergraduate Research Assistant",
        duration: "Aug. 2024 - Present",
        content: [
          {
            text: "Developing a fitness-tracking application with interactive migrant narratives to promote social awareness",
            link: "",
          },
          {
            text: "Built RESTful APIs and SSEs to support event-driven updates in MongoDB, Express, React, and Node.js",
            link: "",
          },
          {
            text: "Oversaw full development-cycle, from incorporating Agile sprints, unit testing, code reviews, and deployment",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "SJSU Project Engineering Success",
    logo: sjsu,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "AI/ML Researcher & Developer",
        duration: "Aug. 2024 - Present",
        content: [
          {
            text: "Researching ML solutions in healthcare through developing computer-vision models to classify cancerous tumors",
            link: "",
          },
          {
            text: "Converted large datasets into insightful visuals to understand the problem using Pandas, Matplotlib, and NumPy",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "SJSU Software & Computer Engineering",
    logo: sce,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Software Engineer Intern",
        duration: "Jul. 2024 - Aug. 2024",
        content: [
          {
            text: "Improved API security by refactoring JWT token transmission from URL body to HTTP Authorization header.",
            link: "",
          },
          {
            text: "Wrote frontend unit-tests, speeding production workflows by 30% and ensuring a seamless CI/CD pipeline.",
            link: "",
          },
          {
            text: "Involved in API design, tested JWT token behavior with Postman, and added frontend functionality for admins.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "Boba Talks",
    logo: boba,
    link: "https://bobatalks.com/",
    positions: [
      {
        title: "Technology Career Exploration Program",
        duration: "Apr. 2024 - Jun. 2024",
        content: [
          {
            text: "Selected to join a cohort of 20 students to learn tech industry standards across Software Engineering, UI/UX Design, and Product Management.",
            link: ""
          },
          {
            text: "Designed a project from ideation, to prototyping, then presented a product pitch throgh Figma design documents.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Stanford University",
    logo: stanford,
    link: "https://averlon.ai/",
    positions: [
      {
        title: "Student Instructor",
        duration: "Apr. 2024 - Jun. 2024",
        content: [
          {
            text: "Conducted Stanford’s Code In Place intro-to-coding course to students globally, taken by 1,600+ students.",
            link: ""
          },
          {
            text: "Educated students in Python leveraging beginner-friendly libraries such as Stanford’s Karel and Tkinter.",
            link: ""
          }
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  // {
  //   id: "os-1",
  //   organisation: "PublicLab",
  //   logo: publiclab,
  //   repo: "plots2",
  //   type: "pull-request",
  //   status: "merged",
  //   title:
  //     "Move _wiki to old table look, common template for email and settings digest only",
  //   link: "https://github.com/publiclab/plots2/pull/10731",
  //   number: "#10731",
  //   date: "Feb 24 2022",
  //   linesAdded: "101",
  //   linesDeleted: "48",
  // },
];

export const projects = [
  {
    id: "project-1",
    title: "Ludere Gaming",
    github: "https://github.com/jask1m",
    link: "https://github.com/jask1m",
    image: cards,
    content:
      "Multiplayer poker application built with SocketIO to simulate realtime communcation between clients and the server",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "NodeJS"
      },
      {
        id: "icon-5",
        icon: SiSocketdotio,
        name: "SocketIO"
      },
    ],
  },
  {
    id: "project-2",
    title: "EZ Database Notes",
    github: "https://github.com/jask1m/EZ-Database",
    // link: "https://github.com/jask1m",
    image: greentrust,
    content:
      "EZ Database Notes is a full-stack application that enables users to create, store, and organize digital notes securely and efficiently. This application combines the power of Django on the backend with the dynamic user interface capabilities of React on the frontend.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiDjango,
        name: "Django"
      },
      {
        id: "icon-4",
        icon: SiPostgresql,
        name: "PostgreSQL"
      },
    ],
  },
  {
    id: "project-3",
    title: "LinkedIn Post Decryptor",
    github: "https://github.com/jask1m/LinkedIn-TimeStamp-Decryptor",
    link: "https://linkedintimestampgenerator.vercel.app/",
    image: linkin,
    content:
      "Developed an algorithm to parse a LinkedIn post’s URL to extract, then decode the ID into it’s publication date. Built a fullstack application with React, Node.js, allowing users to paste URLs for decrypted timestamps.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiExpress,
        name: "Express"
      },
    ],
  },
  {
    id: "project-4",
    title: "University Carpool Coordinator",
    github: "https://github.com/jask1m/FindCarpool",
    // link: "https://github.com/jask1m",
    image: carpool,
    content:
      "Programmed a carpool coordination application for San Jose State University, utilizing Express to build a RESTful API for the backend and a React frontend for an intuitive user interaction",
    stack: [
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "TypeScript"
      },
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiExpress,
        name: "React"
      },
      {
        id: "icon-4",
        icon: SiMongodb,
        name: "MongoDB"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  // {
  //   organisation: "Boba Talks",
  //   title: "Technology Career Exploration Program",
  //   duration: "May 2024 - Jul. 2024",
  //   content: [
  //     {
  //       text: "Selected to join a cohort of 20 students to learn tech industry standards across Software Engineering, UI/UX Design, and Product Management.",
  //       link: "https://bobatalks.com/",
  //     },
  //     {
  //       text: "Designed a project from ideation, to prototyping, then presented a product pitch throgh Figma design documents.",
  //     },
  //   ],
  //   logo: boba,
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/jasonkimbusiness",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/jask1m",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:jason.kim02@sjsu.edu",
  },
];

export const aboutMe = {
  name: "Jason Kim",
  tagLine: "Compter Science student at San Jose State University",
  intro: "Aspiring Software Engineering interested in fullstack development roles."
}
