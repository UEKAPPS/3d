import {
  mobile,
  backend,
  it,
  web,
  javascript,
  typescript,
  cyberops,
  archlinux,
  sql,
  reactjs,
  android,
  tailwind,
  nodejs,
  sqlserver,
  git,
  diya,
  itjoint,
  tbim,
  yakinegitim,
  bookstore,
  spaceWebsite,
  nuxtWebsite,
  threejs,
  logo,
  java,
  kali,
  vuejs,
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
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Specialist",
    icon: it,
  },
  {
    title: "CyberOps Associate",
    icon: cyberops,
  },
  {
    title: "SQL Developer",
    icon: sql,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "Android",
    icon: android,
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
    name: "Vue JS",
    icon: vuejs,
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
    name: "SQL Server",
    icon: sqlserver,
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
    name: "archlinux",
    icon: archlinux,
  },
  {
    name: "kali",
    icon: kali,
  },
];

const experiences = [
  {
    title: "Systems Administrator",
    company_name: "IT Joint Bilişim AŞ",
    icon: itjoint,
    iconBg: "#ffffff",
    date: "Sep 2023 - March 2024",
    points: [
      "I provided management of replications between DC servers, management of the site structure.",
      "Organizing and managing security groups, DNS definitions and zones.",
      "Hardware and software installation, control, backup and problem solving of servers.",
      "Providing technical and system support, local and remote end user support.",
      "I optimized data center infrastructure to reduce costs and increase efficiency.",
      "I resolved issues for more than 100 servers, desktops, and laptop configurations.",
      "I maintained a constant level of availability to the servers by patching, updating, and restarting them",
    ],
  },
  {
    title: "IT Specialist",
    company_name: "TBIM Bilişim Teknolojileri",
    icon: tbim,
    iconBg: "#ffffff",
    date: "Jan 2023 - Sep 2023",
    points: [
      "I provided management of replications between DC servers, management of the site structure.",
      "Organizing and managing security groups, DNS definitions and zones.",
      "Hardware and software installation, control, backup and problem solving of servers.",
      "Providing technical and system support, local and remote end user support.",
      "I managed the IT infrastructure in the department, including network and server hardware, security updates, OS patches, drivers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "YAKIN EĞİTİM",
    icon: yakinegitim,
    iconBg: "#ffffff",
    date: "2021 - 2022",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "I have built and published a wide variety of web-based applications using PHP, HTML, CSS and JavaScript.",
      "I worked in partnership with designers and other developers to ensure projects were delivered on time.",
      "I created unit tests to ensure the correctness of the code.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Diya Grup",
    icon: diya,
    iconBg: "#ffffff",
    date: "2019 - 2020",
    points: [
      "Developing and maintaining web applications using Wordpress and other related technologies.",
      "I have developed SQL databases for a range of applications that ensure accuracy and performance.",
      "I created complex SQL queries designed and optimized for reporting and data analysis tasks.",
      "I implemented various database objects, including tables, views, stored procedures and triggers.",
      "I have developed and maintained .NET applications using C#, ASP.NET and SQL Server.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "UEKAPPS",
    icon: logo,
    iconBg: "#915EFF",
    date: "2015 - Present",
    points: [
      "I have successfully developed and published 5 Android apps on Google Play Store.",
      "I have maintained, secured and updated my existing Android applications.",
      "I used Java, XML and Android Studio to develop Android applications.",
      "I have developed several highly functional Android apps with a clean and intuitive interface.",
      "I used Git for version control and bug tracking for Android projects.",
      "I have developed and published corporate websites, including updating content and improving the user experience.",
      "I developed and maintained content management systems for corporate websites.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Throughout our time working together, UEKAPPS has been an incredible web software developer. His in-depth technical knowledge and problem-solving ability have allowed us to complete our projects on time and within budget. UEKAPPS has a broad knowledge of both front-end and back-end development, which makes him an invaluable team member. It was a pleasure to work with him, and I would highly recommend him for any web development project.",
    name: "Ufuk KURT",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "UEKAPPS is a true expert in mobile application development. His experience with Java and the Android SDK has ensured that our applications are user-friendly and impressive in terms of performance. UEKAPPS also did an excellent job of ensuring that projects were completed on time and within budget. It was a pleasure to work with him, and I would highly recommend him for any mobile application development project.",
    name: "Enes KURT",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "UEKAPPS is an extraordinary professional in IT and IT security. His technical knowledge and strategic thinking were critical in securing and optimizing our company’s IT infrastructure. UEKAPPS did an excellent job of dealing with emergencies and developing long-term security strategies. It was a pleasure to work with him, and I would highly recommend him for any IT or IT security project.",
    name: "Ufuk Enes KURT",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Book Store MVC",
    description:
      "A bookstore web application allows users to view, add to cart and purchase various books. This type of application usually integrates with a database and stores book information (author, title, price, etc.). It also provides user accounts and login functionality.",
    tags: [
      {
        name: ".NET 8",
        color: "blue-text-gradient",
      },
      {
        name: "MSSQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/UEKAPPS/BookStoreWeb",
  },
  {
    name: "Space Theme Portfolio",
    description:
      "This project is built with Next.js and automatically optimizes and installs Inter, a Google Font. It emphasizes building apps with modern technologies and not missing tasks, deadlines or ideas.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: spaceWebsite,
    source_code_link: "https://github.com/UEKAPPS/Space-theme-portfolio",
  },
  {
    name: "Nuxt Mini Portfolio",
    description:
      "This site, called Nuxt Mini Portfolio, is a portfolio website. This site serves as a platform for users to showcase their projects and talents.",
    tags: [
      {
        name: "Nuxt.js",
        color: "blue-text-gradient",
      },
      {
        name: "Pinia",
        color: "green-text-gradient",
      },
      {
        name: "Contentful",
        color: "pink-text-gradient",
      },
    ],
    image: nuxtWebsite,
    source_code_link: "https://github.com/UEKAPPS/nuxt-mini-portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };