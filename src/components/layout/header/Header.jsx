import { NavBarContextProvider } from "../../../context/NavBarContext.jsx";
import * as logo from "../../../index.js";
import Button from "../../ui/header/Button";
import style from "./Header.module.css";
import Navbar from "./NavBar.jsx";


function Header() {


  return (
    <NavBarContextProvider >
      <div className={style.header}>
       <div className={style.header__wrapper}>
      
       <img src={logo.logo} alt="logo-dev" />
       
     
        <Button />
      
        </div>
        <Navbar />
      </div>
    
      
     
      </NavBarContextProvider>
  );
}

export default Header;
