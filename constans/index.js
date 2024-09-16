import blackjack from './images/blackjack.png';
import solaris from './images/solaris.png';
import weatherapp from './images/weatherapp.png';
import portfolio from './images/portfolio.png';

export const HERO_CONTENT = `My name is Ege and I am 23 years old, as an upcomming fullstack developer, I am currently immersed in a Javascript developer progam at Folkuniversitetet. This education has equipped me with a great foundation in both backend and frontend development. I have learned HTML, CSS, Javacript, Javascript framework React, Node.js, MongoDB and AWS. I have also learned agile working methods, like Kanban and creating website that are search engine optimized (SEO)`;

export const ABOUT_TEXT = `My background in customer service, gained through roles at Pressbyrån and Mathem, has created valuable skills that I also use in my Javascript developer career, I have learned to tackle issues and improve my problemsolving methods. I have learned how to be a leader and be lead by someone, my skills in communication and planning with other team members have improved. I have learned to adapt and become more flexible. I use all of these valuable skill in my solo and team projects. I am always eager to learn something new and develop my skills even more with each project`;

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
