import { useContext } from "react";
import NavBarItem from "../../ui/header/NavBarItem";
import style from "./NavBar.module.css";
import { NavBarContext } from "../../../context/NavBarContext";
import Curriculum from "../../ui/header/Curriculum";




export default function NavBar() {
  const { navBar } = useContext(NavBarContext);

  return (
 

    <ul ref={navBar} className={style.navBarList} >
      <li>
        <NavBarItem nombre={"Inicio"} url={"#inicio"}  />
      </li>
      <li>
        <NavBarItem nombre={"Sobre mí"} url={"#sobre-mi"}/>
      </li>
      <li>
        <NavBarItem nombre={"Proyectos"} url={"#portfolio"} />
      </li>
      <li>
        <NavBarItem nombre={"Contacto"} url={"#footer"}/>
      </li>
      <li >
        <Curriculum nombre={"CV"} url={"/CV"}/>
      </li>
    </ul>
  );
}
