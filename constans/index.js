import placeholderIMG from './images/placeholderIMG.png';
import blackjack from './images/blackjack.png';
import solaris from './images/solaris.png';
import weatherapp from './images/weatherapp.png';
import portfolio from './images/portfolio.png';

export const HERO_CONTENT = `As an aspiring full-stack developer, I am currently immersed in a comprehensive JavaScript Developer program at Folkuniversitetet. This educational journey is equipping me with a robust foundation in both frontend and backend technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. My growing passion for web development drives me to continuously expand my knowledge and skills in creating responsive, user-centric applications. With each project and challenge, I strive to blend aesthetic design with efficient functionality, aiming to craft digital experiences that are both visually appealing and intuitively navigable`;

export const ABOUT_TEXT = `My background in customer service, gained through roles at Pressbyrån and Mathem, has instilled in me valuable soft skills that complement my technical abilities. These experiences have honed my problem-solving aptitude, adaptability, and interpersonal communication—attributes I now apply to my development projects and collaborative efforts. Working in fast-paced environments has taught me the importance of teamwork and clear communication, skills that prove invaluable in group coding projects. As I continue to develop my technical expertise, I am equally committed to fostering these collaborative abilities, recognizing their crucial role in the development process. I approach each new learning opportunity with enthusiasm, eager to contribute my growing skills and fresh perspective to meaningful projects in the dynamic field of web development`;

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
    link: 'Link',
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
