import PropTypes from "prop-types";

import style from "./NavBarItem.module.css";


function NavBarItem({ url, nombre }) {
  return (
    
    <a href={url} className={style.link}>{nombre}</a>
  );
}

NavBarItem.propTypes = {
  nombre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavBarItem;
