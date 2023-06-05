import { faBootstrap, faCss3Alt, faGithub, faHtml5, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FaGitAlt } from 'react-icons/fa';
import { SiPug, SiRedux } from 'react-icons/si';
import { images } from './index';

const Skills = [
  {
    "name": "HTML",
    "icon": faHtml5
  },
  {
    "name": "CSS",
    "icon": faCss3Alt
  },
  {
    "name": "Js",
    "icon": faSquareJs
  },
  {
    "name": "Bootstrap",
    "icon": faBootstrap
  },
  {
    "name": "Sass",
    "icon": faSass
  },
  {
    "name": "Git",
    "iconAlt": <FaGitAlt />
  },
  {
    "name": "Github",
    "icon": faGithub
  },

  {
    "name": "Pug",
    "iconAlt": <SiPug />
  },

  {
    "name": "React",
    "icon": faReact
  },
  {
    "name": "Redux",
    "iconAlt": <SiRedux />
  },
];

const projects = [
  {
    "name": "shoppingCart",
    "img": images.project1,
    "github": "https://github.com/khgamal005/shopping-cart-reduxtoolkit-app-firebase-database.git",
    "website": "https://khgamal005.github.io/shopping-cart-reduxtoolkit-app-firebase-database/",
    "small": "small",

  },
  {
    "name": "Dracarys-ecommerce",
    "img": images.project14,
    "github": "https://github.com/khgamal005/dracarys.git",
    "website": "https://khgamal005.github.io/dracarys/",

  },
  {
    "name": "Angora Design",
    "img": images.project2,
    "github": "https://github.com/khgamal005/Angora-html-css.git",
    "website": "https://khgamal005.github.io/Angora-html-css"
  },
  {
    "name": "Colorlib Design",
    "img": images.project3,
    "github": "https://github.com/khgamal005/color-html-css-.git",
    "website": "https://khgamal005.github.io/color-html-css-/"
  },
  {
    "name": "Ecommerce-toolkit",
    "img": images.project4,
    "github": "https://github.com/khgamal005/Ecommerce-reduxtoolkit.git",
    "website": "https://ecommerce-front-main.vercel.app/",
    "small": "small",



  },
  {
    "name": "movie",
    "img": images.project5,
    "github": "https://github.com/khgamal005/movies.git",
    "website": "https://movies-82s46pe45-khgamal005.vercel.app/"
  },
  {
    "name": "Myread",
    "img": images.project6,
    "github": "https://github.com/khgamal005/react-myread.git",
    "website": "https://khgamal005.github.io/udacity-react/"
  },
  {
    "name": "QuizApp",
    "img": images.project7,
    "github": "https://github.com/khgamal005/quiz-app.git",
    "website": "https://khgamal005.github.io/quiz-app/",
    "small": "small",

  },
  {
    "name": "Ecom store",
    "img": images.project8,
    "github": "http://github.com/khgamal005/ecom-store.git",
    "website": "https://khgamal005.github.io/ecom-store/",
  },
  {
    "name": "crud",
    "img": images.project9,
    "github": "https://github.com/khgamal005/crud-redux-toolkit.git",
    "website": "https://crud-redux-toolkit-nvnkkunrq-khgamal005.vercel.app/",
    "small": "small",
  },
  {
    "name": "Add order",
    "img": images.project10,
    "github": "https://github.com/khgamal005/-react-shopping-cart.git",
    "website": "https://khgamal005.github.io/-react-shopping-cart/",
    "small": "small",
  },
  {
    "name": "weather App",
    "img": images.project11,
    "github": "https://github.com/khgamal005/weather-api.git",
    "website": "https://khgamal005.github.io/weather-api/",
    "small": "small",
  },
  {
    "name": "React gym-design",
    "img": images.project12,
    "github": "https://github.com/khgamal005/react-gym-design.git",
    "website": "https://khgamal005.github.io/react-gym-design/",
  },
  {
    "name": "Admin dashbord",
    "img": images.project13,
    "github": "https://github.com/khgamal005/Admin-dashboard.git",
    "website": "https://admin-dashboard-tau-three.vercel.app/",
    "small": "small",

  },
]

export default { Skills, projects };