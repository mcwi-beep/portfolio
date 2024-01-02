import fullStackImg from "../images/fullStackImg.png";
import jQueryImg from "../images/jQueryImg.png";
import pythonImg from "../images/PythonImg.png";
import phpImg from "../images/PHPImg.png";
import bootstrapImg from "../images/BootstrapImg.png";
import gazetteerImg from "../images/gazzetteerImg.png";
import directoryImg from "../images/companydirectoryImg.png";

export const Bio = {
  name: "Mark Owusu",
  roles: [
    "Full Stack Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am an enthusiastic and adaptable developer based in the UK. To facilitate my skills, I recently graduated from a Coding Traineeship where I completed real world projects. Fueled by a love for acquiring new knowledge, I am committed to producing top-notch outcomes. Armed with an innate problem-solving prowess and a mindset geared towards continuous growth, I am prepared to make a significant impact and attain remarkable achievements.",
  github: "https://github.com/mcwi-beep",
  resume:
    "https://drive.google.com/file/d/1YlKxpyu0L9XB9mblH7qRgGg2kLCUV8S0/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/markwilliamsowusu/",
  twitter: "https://twitter.com/RishavChanda",
  insta: "https://www.instagram.com/rishav_chanda/",
  facebook: "https://www.facebook.com/rishav.chanda.165/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "JQuery",
        image:
          "https://cdn.iconscout.com/icon/free/png-256/free-jquery-10-1175155.png",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Leaflet",
        image:
          "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-q.cdn.bubble.io%2Ff1628613062972x583148037293412100%2F8y-GChEY.jpg?w=&h=&auto=compress&dpr=1&fit=max",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      // {
      //   name: "Graph Ql",
      //   image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      // },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "PHP",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  // {
  //   title: "Android",
  //   skills: [
  //     {
  //       name: "Java",
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  //     },
  //     {
  //       name: "Kotlin",
  //       image:
  //         "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  //     },
  //     {
  //       name: "XML",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
  //     },
  //     {
  //       name: "Android Studio",
  //       image:
  //         "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  //     },
  //   ],
  // },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Xampp",
        image: "https://www.svgrepo.com/show/354575/xampp.svg",
      },
      {
        name: "Hostinger",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
      {
        name: "Jest",
        image:
          "https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png",
      },
      {
        name: "Mocha",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mocha_logo.svg/2048px-Mocha_logo.svg.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "data:image/png;base64,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",
    role: "Full Stack Engineering Career Path",
    company: "IT Career Switch |Codecademy",
    date: "Aug 2023 - July 2023",
    desc: "This training exposed me to both frontend development and backend development and how they work together to develop web apps",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Nodejs",
      "Express",
      "SQL",
    ],
    docImg: fullStackImg,
    doc: "https://drive.google.com/file/d/1CA_BK-AzotuIYFBFOI0POMaKQWu-7aJM/view?usp=drive_link",
  },
  {
    id: 0,
    img: "data:image/png;base64,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",
    role: "JQuery",
    company: "IT Career Switch |Codecademy",
    date: "June 2023 - Present",
    desc: "Learn the basics of jQuery, a JavaScript library that allows you to easily add dynamic behavior to static web pages.",
    skills: ["DOM Manipulation", "Event Handling", "AJAX Calls"],
    docImg: jQueryImg,
    doc: "https://drive.google.com/file/d/1NfU5PHJF4dlZAL3-8kNMI_Lx7ICf7Hyz/view?usp=drive_link",
  },
  {
    id: 1,
    img: "data:image/png;base64,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",
    role: "Bootstrap",
    company: "IT Career Switch |Codecademy",
    date: "June 2023 - July 2023",
    desc: "Explored how Bootstrap ,CSS framework , makes it easy to layout and create interactive and responsive sites.",
    skills: [
      "Responsive Web Design",
      "CSS Framework",
      "Mobile-First Approach",
      "UI Components",
    ],
    docImg: bootstrapImg,
    doc: "https://drive.google.com/file/d/1LjFDy_la7LC26tWDcG1070iqPZ9UKJTL/view?usp=drive_link",
  },
  {
    id: 2,
    img: "data:image/png;base64,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",
    role: "Python",
    company: "IT Career Switch |Codecademy",
    date: "May 2023 - Present",
    desc: "Learnt python which is one of most powerful languages for back-development",
    docImg: pythonImg,
    doc: "https://drive.google.com/file/d/1GzSONv8gdIDFm1DwT4nbfOEdASQShRmI/view?usp=drive_link",
  },
  {
    id: 3,
    img: "data:image/png;base64,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",
    role: "PHP",
    company: "IT Career Switch |Codecademy",
    date: "Nov2021 - Present",
    desc: "Learnt PHP server-side programming language to be able to connect with databases and web services ",
    skills: [
      "Database Interaction",
      "Server-Side Scripting",
      "API Development",
    ],
    docImg: phpImg,
    doc: "https://drive.google.com/file/d/1C0bzME9MPShNKfuS4Qoi0y72yHgL6pOp/view?usp=drive_link",
  },
];

export const education = [
  {
    id: 0,
    img: "https://yt3.googleusercontent.com/Hr2Je3VGHQNVqXopM9NHaR8pgJHz9UmhWn6lVpqn0v7KBB3Jf46UL0AIv_llIHkuhiq5uyVvWQ=s900-c-k-c0x00ffffff-no-rj",
    school: "IT Career Switch, London",
    date: "December 2022 - December 2023",
    desc: "I have completed IT Career Switch Coding Traineeship program in which I was exposed to principles and technologies behind Full Stack Development",
    degree: "Coding Traineeship",
  },
  {
    id: 1,
    img: "https://aseanop.com/wp-content/uploads/2020/06/CS50s-Web-Programming-with-Python-and-JavaScript.jpg",
    school: "Havard Online Course",
    date: "2021",
    desc: "I have partaken in Havard free Online Courses CS50x, CS50w where i learnt the foundamentals of programming and the frontend-development",
    degree: "CS50's Web Programming with Python and JavaScript",
  },
  {
    id: 2,
    img: "https://branditechture.agency/brand-logos/wp-content/uploads/2022/06/t_kwame-nkrumah-university-of-science-and-technology7703.jpg",
    school: "Kwame Nkrumah University of Science and Technology",
    date: "Oct 2017 - Sep 2021",
    grade: "69.50 CWA",
    desc: "I have graduate a Bachelor's degree in Telecommunication Engineering at Kwame Nkrumah University of Science and Technology. I have partaken in courses like Computer Networking, C Programming, Micropressors among others",
    degree: "Bachelor of Telecommunication Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Gazetteer",
    date: "Oct 2023 - September 2023",
    description:
      " Gazetteer is a geolocations app that fetch country information such as weather, country details, airports ,currency etc from external Web APIs. Preferably using a framework, to then develop HTML, CSS, and JavaScript with jQuery modules that use PHP server-based components to source data from third-party APIs (Leaflet.js, Geonames, WeatherAPI, and various other APIs). The solution is assessed on its delivery to specification, functionality, and usability.",
    image: gazetteerImg,
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery",
      "AJAX",
      "PHP",
      "LeafletJS",
    ],
    category: "web app",
    // github: "https://github.com/rishavchanda/Trackify",
    webapp: "https://gazetteerproject1.markowusu.co.uk",
  },
  {
    id: 1,
    title: "Company Directory",
    date: "September 2023 - November 2023",
    description:
      "The web application is to manipulate a database that consists of employee information. This application will run on CRUD functionality (create, read, update, and delete). The interface allows for user input which will retrieve data through backend requests and displayed in the interface for the user. The data is to be presented in a directory that allows for easy searching of staff, departments, and locations by single or multiple criteria. This system will have a responsive interface and designed with mobile-first in mind.",
    image: directoryImg,
    tags: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery",
      "AJAX",
      "PHP",
      "MySQL",
      "XAMPP",
    ],
    category: "web app",
    // github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://companydirectory.markowusu.co.uk",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
