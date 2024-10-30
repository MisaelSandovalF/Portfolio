import { useInView } from "react-intersection-observer";
import SkillItem from "../profile/SkillItem";
import style from "./PortfolioItem.module.css";
import { PropTypes } from "prop-types";
function PortfolioItem({
  imgProyect,
  title,
  technologies,
  linkDemo,
  linkGitHub,
}) {

const {ref, inView} = useInView({
  threshold: 0.1,
});

  return (
    <div ref={ref} className={style.wrapperPortfolioItem}>
      
      <div  className={style.wrapperPortfolioItem__box}>
        <img
          className={style.wrapperPortfolioItem__box__image}
          src={imgProyect}
        />
        <div  className={`${style.wrapperPortfolioItem__box__wrapperText} ${inView ? style.visible : style.hidden}`}>
          <p className={style.wrapperPortfolioItem__box__wrapperText__text}>
            {title}
          </p>
        </div>
      </div>

      <div className={style.wrapperPortfolioItem__boxLinks}>
        <SkillItem
          image={technologies.imageTechnologiesOne}
          alt={technologies.altImageOne}
        />
        <SkillItem
          image={technologies.imageTechnologiesTwo}
          alt={technologies.altImageTwo}
        />
        <SkillItem
          image={technologies.imageTechnologiesThree}
          alt={technologies.altImageThree}
        />
        <a href={linkDemo}>Linkedin</a>
        <a href={linkGitHub}>GitHub</a>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  imgProyect: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.shape({
    imageTechnologiesOne: PropTypes.string.isRequired,
    altImageOne: PropTypes.string.isRequired,

    imageTechnologiesTwo: PropTypes.string.isRequired,
    altImageTwo: PropTypes.string.isRequired,

    imageTechnologiesThree: PropTypes.string.isRequired,
    altImageThree: PropTypes.string.isRequired,
  }).isRequired,
  linkDemo: PropTypes.string.isRequired,
  linkGitHub: PropTypes.string.isRequired,
};

export default PortfolioItem;
