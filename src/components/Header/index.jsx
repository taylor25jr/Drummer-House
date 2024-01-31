import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import {  Link} from 'react-router-dom'
import "./Header.css";
import { useEffect, useState } from "react";

//Cambiar color al burger y la ui en mobile

export const Header = () => {

  const [isPC, setIsPC] = useState(window.innerWidth > 768);

useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <>
      {
        <section className="header">
         <Link to="/"><img src="https://pbs.twimg.com/media/GFM--5rXoAA-_Cs?format=png&name=900x900" alt="logo" className="header__logo" /></Link>
          {(!isPC) ? 
          <Dropdown>
            <MenuButton>☰</MenuButton>
            <Menu style={{backgroundColor:"black"}}>
              <MenuItem ><Link to="/servicios" className=" nav__list__item">Servicios</Link></MenuItem>
              <MenuItem><Link to="/sobre-mi" className=" nav__list__item">Sobre mi</Link></MenuItem>
              <MenuItem><Link to="/otros" className=" nav__list__item">Otros</Link></MenuItem>
              <MenuItem><Link to="/contacto" className=" nav__list__item">Contacto</Link></MenuItem>
            </Menu>
          </Dropdown> : 
          <nav className=" nav__list">
          <Link className=" nav__list__item" to="/servicios">Servicios</Link>
          <Link className=" nav__list__item" to="/sobre-mi">Sobre mí</Link>
          <Link className=" nav__list__item" to="/otros">Otros</Link>
          <Link className=" nav__list__item" to="/contacto">Contacto</Link>
        </nav> }
        </section>
      }
    </>
  );
};
