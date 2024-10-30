import style from "./Button.module.css";
import { useContext } from "react";
import { NavBarContext } from "../../../context/NavBarContext";

function Button() {
  const { isActive, handleToggle } = useContext(NavBarContext);

  return (
    <div
      onClick={handleToggle}
      className={`${style.menu} ${isActive ? style.active : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      <div className={style.menu__boxIcon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Button;
