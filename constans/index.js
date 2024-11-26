import blackjack from './images/blackjack.png';
import solaris from './images/solaris.png';
import weatherapp from './images/weatherapp.png';
import portfolio from './images/portfolio.png';

export const HERO_CONTENT = `I am an aspiring full-stack developer of 23 years who is currently in an intensive education program as a JavaScript developer at Folkuniversitetet. While the training was intensive, it gave me an excellent grasp of both the backend and frontend development. I learned HTML, CSS, JavaScript, and the React framework as well as Node.js, MongoDB, and AWS, all with agile working methods such as Kanban and SEO-based web development.`;

export const ABOUT_TEXT = `I’m really curious about diving deeper into frontend development, I want to create websites that aren’t just functional but also visually striking and engaging. At the same time, I’m excited to keep building my backend skills so I can handle the full stack with confidence. I enjoy being part of a team where ideas flow freely, feedback is valued, and every project is an opportunity to learn and grow.`;

export const PROJECTS = [
  {
    title: 'Blackjack Game',
    image: blackjack,
    description:
      'A digital implementation of the classic casino game Blackjack, allowing users to play against a computer dealer in a browser-based environment.',
    link: 'https://egeeoz.github.io/Blackjack/',
    skills: ['HTML', 'CSS', 'React', 'Typescript'],
  },
  {
    title: 'Weather Application',
    image: weatherapp,
    description:
      'An application that displays the current weather based on user searches, using an API to fetch the data.',
    link: 'https://weatherappege.surge.sh',
    skills: ['HTML', 'CSS', 'Javascript'],
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    link: 'https://egeeoz.github.io/Portfolio/',
    skills: ['HTML', 'CSS', 'React', 'Tailwind'],
  },
  {
    title: 'School Project Solaris',
    image: solaris,
    description:
      'A simple project showcasing our solar system, where clicking on a planet displays information about it using an API.',
    link: 'https://egeeoz.github.io/Individuella_Solaris/index.html',
    skills: ['HTML', 'CSS', 'Javascript'],
  },
];

export const CONTACT = {
  address: 'Sweden, Stockholm',
  phone: '072 018 25 03',
  email: 'ozakdemirege@hotmail.com',
};
