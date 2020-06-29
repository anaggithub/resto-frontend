import React from "react";
import "./index.scss";
import APILogo from "../api-logo"
import { Link } from "react-router-dom"

const Header = () => {

  const handleHamburger = () => {
    const burger = document.getElementsByClassName('header--burger')
    const nav = document.getElementsByClassName('header--nav--list')
    console.log(burger)
    nav[0].classList.contains('active') ? nav[0].classList.remove('active') : nav[0].classList.add('active')
  }

  return (
    <header className="header">
      <nav className="header--nav container" >
        <APILogo className="header--logo" />

        <ul className="header--nav--list">
          <li>
            <Link to="/"> <i className="fas fa-home"></i>Inicio</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/about">Acerca de </Link>
          </li>
        </ul>
        <div className="header--burger" onClick={handleHamburger} ><i className="fas fa-bars"></i></div>
      </nav>
    </header>
  );

}

export default Header;

  //   const handleMenu = () => {
  //   let menuCollection = document.getElementsByClassName('header--nav--list')
  // //  console.log(menuCollection)
  //   if (menuCollection[0].style.display === "block") {
  //     menuCollection[0].style.display = "none";
  //   }
  //   else {
  //     menuCollection[0].style.display = "block";
  //   }
  // }

// return (
//     <header className="header">
//       <APILogo />
//       <nav className="header--nav" >
//         <i className="header--nav--icon fas fa-bars" onClick={handleMenu}></i>
//         <ul className="header--nav--list">
//           <li className="header--nav--list--item">
//             <Link to="/"> <i className="fas fa-home"></i>Inicio</Link>
//           </li>
//           <li className="header--nav--list--item">
//             <Link to="/contact">Contacto</Link>
//           </li>
//           <li className="header--nav--list--item">
//             <Link to="/about">Acerca de </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );

