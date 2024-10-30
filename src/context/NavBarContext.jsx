import { createContext, useRef, useState } from "react";
import PropTypes from "prop-types";


export const NavBarContext = createContext();

export function NavBarContextProvider(props) {

  const [isActive, setIsActive] = useState(false);
  const navBar = useRef(null);



  const handleToggle = () => {
    
    setIsActive((prevState) => {
      const newState = !prevState;
      if (navBar.current) {
        navBar.current.style.display = newState ? 'flex' : 'none';
      }
      return newState;
    });
  };

  return (
    <NavBarContext.Provider value={{ isActive, handleToggle, navBar }}>
      {props.children}
    </NavBarContext.Provider>
  );
}
NavBarContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
