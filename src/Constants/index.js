import {
  mobile,
  backend,
  creator,
  web,
  javascript,

  html,
  css,
  reactjs,
  redux,
  tailwind,

  git,
  figma,

  carrent,
  jobit,
  tripguide,
  threejs,
  ricoz,
  cognizant,
  cobol,
  canva,
  wordpress,
  nextjs,
  kunal,
  rajesh,
  adobe,
  fastx,
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
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "Wordpress Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "NextJS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  
  
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Cobol",
    icon: cobol,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Adobe",
    icon: adobe,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Ricoz",
    icon: ricoz,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mainframe Developer",
    company_name: "Cognizant Technology Solutions",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Developing and maintaining Mainframes using COBOL , DB2 and other related technologies.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a database as beautiful as our product, but Jeevesh proved me wrong.",
    name: "Ravi Kumar S",
    designation: "CEO",
    company: "Cognizant Technology Solutions",
    image: "https://cognizant.scene7.com/is/image/cognizant/ravi-kumar-s-cognizant?fmt=png-alpha&",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jeevesh does.",
    name: "Rajesh Kumar",
    designation: "CEO",
    company: "Ricoz",
    image: rajesh,
  },
  {
    testimonial:
      "After Jeevesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kunal Vashisht",
    designation: "CTO",
    company: "Ricoz",
    image: kunal,
  },
];

const projects = [
  {
    name: "FastX",
    description:
      "FastX.com is a website designed to connect customers with reliable and efficient courier services.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },

    ],
    image: fastx,
    source_code_link: "",
    deploy_link: "https://myfastx.com/",
  },
  {
    name: "Spotify Clone",
    description:
      "Developed Spotify clone which is simple, easy user friendly interactive interface features such as play, pause and seek songs that have been added.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],

    image: "https://user-images.githubusercontent.com/93731220/279587656-bd623a51-a3b7-45cd-969f-cc8dd7ae486b.png",
    source_code_link: "https://github.com/Jeeveshmahato/Spotify-clone",
    deploy_link: "https://jeeveshmahato.github.io/Spotify-clone/",
  },
  {
    name: "Cynthia ugwu Clone",
    description:
      "Develoed a Award-wining website from scratch.Here you will witness the fusion HTML,CSS and Javascript as an awe-inspring forent-end project, adorned with mesmerizing animation powered by GSAP.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/93731220/279599982-bdaa29a4-3106-4873-b664-d94dc348971d.png",
    source_code_link: "https://github.com/Jeeveshmahato/cynthiaugwu-Clone",
    deploy_link: "https://jeeveshmahato.github.io/cynthiaugwu-Clone/",
  },
  {
    name: "Currency Convertor",
    description:
      "Developed a Currency Convertor website.Here you can see the current value of any currency as compared to the USD. I this project I have used a live api to get the current data of all the currencies and give the real time value of your currency..",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },

    ],
    image: "https://user-images.githubusercontent.com/93731220/279603535-b8a900c0-2fbe-4145-8585-14976dfd2223.png",
    source_code_link: "https://github.com/Jeeveshmahato/Currency_convertor",
    deploy_link: "https://brilliant-mermaid-d27c80.netlify.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
