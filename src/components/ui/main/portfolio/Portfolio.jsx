import PortfolioItem from "./PortfolioItem"
import * as imagesPortfolio from "../../../../index.js";
import style from './Portfolio.module.css'

function Portfolio() {

  const projectOne =  {
    imgProyect: imagesPortfolio.proyectOne,
    title: 'PAGINA CLON DE GETSARK.CO - LIBRARY -',
    technologies: {
      imageTechnologiesOne: imagesPortfolio.html ,
      altImageOne: 'html ',
      imageTechnologiesTwo: imagesPortfolio.css ,
      altImageTwo: 'css',
      imageTechnologiesThree: imagesPortfolio.js ,
      altImageThree: 'js',
    },
    linkDemo: 'https://getstark.netlify.app/',
    linkGitHub: 'https://github.com/MisaelSandovalF/clon-page-getstark.co-library',

  }

  const projectTwo =  {
    imgProyect: imagesPortfolio.proyectTwo,
    title: 'ENCRIPTADOR DE FRASES ',
    technologies: {
      imageTechnologiesOne: imagesPortfolio.html ,
      altImageOne: 'html ',
      imageTechnologiesTwo: imagesPortfolio.css ,
      altImageTwo: 'css',
      imageTechnologiesThree: imagesPortfolio.js ,
      altImageThree: 'js',
    },
    linkDemo: 'https://encriptador-static-page.netlify.app/',
    linkGitHub: 'https://github.com/MisaelSandovalF/Encriptador',

  }


  const projectThree =  {
    imgProyect: imagesPortfolio.proyectThree,
    title: 'API RANDOM USERS',
    technologies: {
      imageTechnologiesOne: imagesPortfolio.html ,
      altImageOne: 'html ',
      imageTechnologiesTwo: imagesPortfolio.tailwind ,
      altImageTwo: 'tailwind',
      imageTechnologiesThree: imagesPortfolio.react ,
      altImageThree: 'react',
    },
    linkDemo: 'https://misaelsandovalf.github.io/RandomUsers/',
    linkGitHub: 'https://github.com/MisaelSandovalF/RandomUsers',

  }
  const projectFour =  {
    imgProyect: imagesPortfolio.proyectFour,
    title: 'ToDo',
    technologies: {
      imageTechnologiesOne: imagesPortfolio.html ,
      altImageOne: 'html ',
      imageTechnologiesTwo: imagesPortfolio.tailwind ,
      altImageTwo: 'tailwind',
      imageTechnologiesThree: imagesPortfolio.react ,
      altImageThree: 'react',
    },
    linkDemo: 'https://misaelsandovalf.github.io/ToDo/',
    linkGitHub: 'https://github.com/MisaelSandovalF/ToDo',

  }


  return (
    <div id="portfolio" className={style.portfolioContainer}>
        <h3>Portfolio</h3>
       <PortfolioItem {...projectOne} />
       <PortfolioItem {...projectTwo} />
       <PortfolioItem {...projectThree} />
       <PortfolioItem {...projectFour} />
    </div>
  )
}

export default Portfolio