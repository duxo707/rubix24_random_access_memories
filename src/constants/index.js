import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    aftereffects,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    tshirts,
    jobit,
    tripguide,
    threejs,
    // wind,
    // solar
    
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
      title: "Fullstack Developer",
      icon: backend ,
    },
    {
      title: "Frontend Developer",
      icon: css,
    },
    {
      title: "React ThreeJs Developer",
      icon: reactjs,
    },
    {
      title: "Ui/Ux Designer",
      icon: figma,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
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
      name: "Python",
      icon: python,
    },
    {
      name: "After Effect",
      icon: aftereffects,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Current Source",
      company_name: "Solar Energy",
      // icon: starbucks,
      iconBg: "#0C001E",
      // date: "March 2010 - April 2019",
      points: [
        // "Solar Energy",
        "Produced: 782MW",
        "Deficient: 542MW",
        // "90.2% Ssc Board.",
      ],
    },
    {
      title: "Weather",
      company_name: "Sunny",
      // icon: shopify,
      iconBg: "#0C001E",
      // date: "July 2019 - Aug 2021",
      points: [
        "Wind Energy: 1980MW",
        "Solar Energy: 3948MW",
        "Hydro energy: 920Mw",
      ],
    },
    {
      title: "Anticipation",
      // company_name: "",
      // icon: tesla,
      iconBg: "#0C001E",
      // date: "Jan 2022 - Current",
      points: [
        "Wind Energy can also be used",
        // "DJCSI Video editing and creatives mentee.",
        // "8.33 CGPA -till date",
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
      name: "WIND ENERGY",
      description:
      "The amount of wind energy generated in a day varies widely depending on factors such as location, weather conditions, and the efficiency of wind turbines.",
      // tags: [
      //   {
      //     name: "react",
      //     color: "blue-text-gradient",
      //   },
      //   {
      //     name: "3js",
      //     color: "green-text-gradient",
      //   },
      //   {
      //     name: "tailwind",
      //     color: "pink-text-gradient",
      //   },
      // ],
      image: "src/assets/wind.jpg",
      count: "592 MW"
      // source_code_link: "http://custom-tshirts.great-site.net/?i=2",
    },
    {
      name: "Solar Energy",
      description:
        "Daily solar energy varies based on factors like location, weather, and solar panel efficiency, but on average, Earth receives about 164 watts per square meter.",
      // tags: [
      //   {
      //     name: "react",
      //     color: "blue-text-gradient",
      //   },
      //   {
      //     name: "restapi",
      //     color: "green-text-gradient",
      //   },
      //   {
      //     name: "css",
      //     color: "pink-text-gradient",
      //   },
      // ],
      image: "src/assets/solar.jpg",
      count: "782 MW"
      // source_code_link: "http://moviezone1.great-site.net/?i=2",
    },
    {
      name: "Hydro Power Energy",
      description:
        "The daily hydro power energy output varies widely based on factors such as water flow and infrastructure, making it location-specific and subject to natural conditions.",
      // tags: [
      //   {
      //     name: "react",
      //     color: "blue-text-gradient",
      //   },
      //   {
      //     name: "web-rtc",
      //     color: "green-text-gradient",
      //   },
      //   {
      //     name: "css",
      //     color: "pink-text-gradient",
      //   },
      // ],
      image: "src/assets/hydro.jpg",
      count: "432 MW"
      // source_code_link: "https://github.com/HaardhikK",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };