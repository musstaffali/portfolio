import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mustafa Mustafa',
  subtitle: 'FullStack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.png',
  paragraphOne:
    "Hi all! I'm Mustafa, a Full Stack Software Engineer at Code For America seeking to help make the world a more just and equitable place through the use of beautiful, intuitive, and helpful software. I am also a recent Full Stack Development Graduate Student at UPenn LPS Coding Bootcamp. An intensive 12-week-long bootcamp, dedicated to designing and building web applications. (Grad Nov. 2020). ",
  paragraphTwo:
    "As a Full-Stack Student and aspiring Software Engineer, I'm excited to utilize technology to foster growth, development, and progress while also acknowledging the importance of interpersonal work toward equity and betterment. I'm particularly passionate about AI and Machine Learning--and the many opportunities in pairing them to solve global issues.",
  paragraphThree:
    'Skills: HTML3, CSS3, jQuery, Gatsby, Bootstrap, Firebase, JavaScript, React.js, Angular, Express.js, Handlebars, Node.js, MongoDB, MySQL, and API Integration ',
  resume: 'https://drive.google.com/file/d/1c97EUHREOfwdnz47PdgZRGO8FgO1W-2y/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Garden.png',
    title: 'Food Garden',
    info: "•	Web-tool that maps and provides a rudimentary volunteer management interface for local community gardens.",
    info2: '•	Being developed using React.Js, HTML, CSS, and MySQL',
    url: 'https://github.com/musstaffali/react-Geo-pin#description',
    repo: 'https://github.com/musstaffali/react-Geo-pin#description', // if no repo, the button will not show up
    
  },
  {
    id: nanoid(),
    img: 'covid.png',
    title: 'Fight COVID',
    info: "•	This project's goal is to create a web application that the local public can use to easily find COVID vaccine and testing by locailty in there area.",
    info2: '•	Developing using Nodejs, HTML, CSS, and API',
    url: 'https://musstaffali.github.io/comingsoonpage/'
    
  },
    {
    id: nanoid(),
    img: 'airline.png',
    title: 'Sky Data',
    info: "•	A webpage that engages in trickling out flight routes across the globe",
    info2: '•	Created using Reactjs, CSS, HTML, and Data Base',
    url: 'https://youthful-williams-e2da2e.netlify.app',
    repo: 'https://github.com/musstaffali/airplane-radar', // if no repo, the button will not show up
    
  },
  {
    id: nanoid(),
    img: 'furniture.jpg',
    title: 'Furniture World',
    info: "•	A high-fidelity fully-fledged model eCommerce store",
    info2: '•	Created using Next.js, ReactStrap, and SASS',
    url: 'https://furniturefield.herokuapp.com',
    repo: 'https://github.com/musstaffali/furnitureWorld', // if no repo, the button will not show up
    
  },
  {
    id: nanoid(),
    img: 'cinema.png',
    title: '4 Seasonz Cinema',
    info: "•	A webpage project to replicate the idea of a movie theater website.",
    info2: '•	Developed using Reactjs, CSS, HTML, and API',
    url: 'https://60ad9564bc18270098b0979a--optimistic-ramanujan-7da5b8.netlify.app',
    repo: 'https://github.com/musstaffali/cinema-sites', // if no repo, the button will not show up
    
  },
   {
    id: nanoid(),
    img: 'Barjr.png',
    title: 'Barjr Qatar',
    info: "•	A personalized project created with the intension of being used as a platform for a restaurant",
    info2: '•	Built using Reactjs, YarnPKG, CSS, and Firebase Realtime Database',
    url: 'https://bajr-doha.herokuapp.com/#/',
    repo: 'https://github.com/musstaffali/React-Dine-In', // if no repo, the button will not show up
    
  },
  {
    id: nanoid(),
    img: 'khartoum.jpg',
    title: 'Corinthia Hotel of Khartoum',
    info:
      '• React website from conception that allows for users to search for their perfect suite',
    info2:
      '• Constructed using React.js, Node.js and implemented React Context API for state management',
    url: 'https://cornithiahotel.herokuapp.com',
    repo: 'https://github.com/musstaffali/ReactCornithiaHotel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'newsStation.png',
    title: 'News Station',
    info:
      "•	This application is a Node application that allows users to access the latest current news by searching for a specific topic or subject.",
    info2: '•	Built using Nodejs, HTML, CSS, and NewsAPI',
    url: 'https://news-station.herokuapp.com',
    repo: 'https://github.com/musstaffali/pwa-newsStation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stocks.png',
    title: 'WhatDaStock',
    info:
      '• Group project website designed to allow any beginner to learn about stocks and get more info on trending markets',
    info2:
      '• Created using JavaScript, HTML, CSS, and 4 separate APIs',
    url: ' https://rachelkline.github.io/WhatTheStock/',
    repo: 'https://github.com/musstaffali/StockFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Rest.png',
    title: 'Restaurant Finder',
    info:
      "•	Personal website from conception that allows for users to search for restaurants in their area or globally",
    info2: '•	Built using node.js, Cloudinary API, Express.js, Passport.js, Google Maps API',
    url: 'https://findtherestaurant500.herokuapp.com/',
    repo: 'https://github.com/musstaffali/project-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'savedatamoney.png',
    title: 'Save Dat Money',
    info: '•	Responsive website app that generates dynamic profile cards for employees based off user input',
    info2:
      '•	Developed using Web Manifest, service-worker, Express.js, Morgan, Indexed DB, and Cache',
    url: 'https://savedatcurrency.herokuapp.com/',
    repo: 'https://github.com/musstaffali/save-dat-money', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'staff.jpg',
    title: 'Staff Directory',
    info:
      "•	Responsive web app that can allow user to view their entire employee directory at once, or search for a specific employee",
    info2: '•	Complied using Web Manifest, service-worker, Express.js, Morgan, Indexed DB, and Cache',
    url: 'https://staffdatabase.herokuapp.com',
    repo: 'https://github.com/musstaffali/staffDirectory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Nike.png',
    title: 'Nike Tracker',
    info:
      '•	Responsive web app that allows users to tracker workout data',
    info2:
      '•	Developed using mongoose schema and HTML and API routes are handled using Express.js',
    url: 'https://justdoit-tracker.herokuapp.com/',
    repo: 'https://github.com/musstaffali/nike_Tracker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mamusstaffali@gmai.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/StaffFromAfrica',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mustafa-inc/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/musstaffali',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
