import { PropTypes } from "prop-types";
import style from "./CompetenciesItem.module.css";

function CompetenciesItem({ image, title, text }) {
  return (
    <div className={style.competenceContainer}>
      <div className={style.competenceContainer__wrapperImage}>
        <img
          className={style.competenceContainer__wrapperImage__image}
          src={image}
          alt={title}
        />
        <h3 className={style.competenceContainer__title}>{title}</h3>
      </div>

      <p className={style.competenceContainer__text}>{text}</p>
    </div>
  );
}

CompetenciesItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CompetenciesItem;
