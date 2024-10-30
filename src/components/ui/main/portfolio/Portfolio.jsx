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
    linkDemo: 'https://github.com/MisaelSandovalF/ClonGetstark.co-library-',
    linkGitHub: 'https://github.com/MisaelSandovalF/ClonGetstark.co-library-',

  }

  const projectTwo =  {
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
    linkDemo: 'https://github.com/MisaelSandovalF/ClonGetstark.co-library-',
    linkGitHub: 'https://github.com/MisaelSandovalF/ClonGetstark.co-library-',

  }



  return (
    <div id="portfolio" className={style.portfolioContainer}>
        <h3>Portfolio</h3>
       <PortfolioItem {...projectOne} />
       <PortfolioItem {...projectTwo} />
    </div>
  )
}

export default Portfolio