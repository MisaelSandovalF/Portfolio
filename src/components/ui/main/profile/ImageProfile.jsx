import { PropTypes } from "prop-types";
import style from "./ImageProfile.module.css";


function ImageProfile({ image }) {
  return (
    <div className={style.imageContainer}>
      <img className={style.imageContainer__image} src={image} alt="foto-misael" />
     <div className={style.imageContainer__professionText}>
     <h1>Desarrollador web</h1>
     </div>
    </div>
  );
}

ImageProfile.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageProfile;
