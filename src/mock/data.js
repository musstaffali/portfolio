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
    "Hi all! I'm Mustafa, a Full Stack Development Graduate Student at UPenn LPS Coding Bootcamp. An intensive 12-week-long bootcamp, dedicated to designing and building web applications. (Grad Nov. 2020). ",
  paragraphTwo:
    "As a Full-Stack Student and aspiring Software Engineer, I'm excited to utilize technology to foster growth, development, and progress while also acknowledging the importance of interpersonal work toward equity and betterment. I'm particularly passionate about AI and Machine Learning--and the many opportunities in pairing them to solve global issues.",
  paragraphThree:
    'Skills: HTML3, CSS3, jQuery, Gatsby, Bootstrap, Firebase, JavaScript, React.js, Angular, Express.js, Handlebars, Node.js, MongoDB, MySQL, and API Integration ',
  resume: 'https://drive.google.com/file/d/1xFwNa40E6CTMJdkIDdSu1sPjqI8SmsHZ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'stocks.png',
    title: 'WhatDaStock',
    info:
      '•	Responsive website that allows any beginner to learn about stocks and get more info on trending markets',
    info2:
      '•	Developed using JavaScript, HTML, CSS, and 4 different APIs',
    url: ' https://rachelkline.github.io/WhatTheStock/',
    repo: 'https://github.com/musstaffali/StockFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Rest.png',
    title: 'Restaurant Finder',
    info:
      "•	Personal website from conception that allows for users to search for restaurants in their area or globally",
    info2: '•	Developed using node.js, Cloudinary API, Express.js, Passport.js, Google Maps API',
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
    info2: '•	Developed using Web Manifest, service-worker, Express.js, Morgan, Indexed DB, and Cache',
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
  {
    id: nanoid(),
    img: 'khartoum.jpg',
    title: 'Corinthia Hotel of Khartoum',
    info:
      '• Responsive website from conception that allows for users to search for their perfect hotel room',
    info2:
      '• Developed using React.js, Node.js and implemented React Context API for state management',
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
