import PropTypes from "prop-types";

import style from "./NavBarItem.module.css";
import { HashLink } from "react-router-hash-link";


function NavBarItem({ url, nombre }) {
  return (
    
    <HashLink to={url} className={style.link}>{nombre}</HashLink>
    
      
  );
}

NavBarItem.propTypes = {
  nombre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavBarItem;
