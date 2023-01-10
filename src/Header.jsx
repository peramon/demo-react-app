import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
     Navbar,
     NavbarBrand,
     NavbarText
} from "reactstrap";

const urlImage  = 'https://cdn-icons-png.flaticon.com/512/7656/7656400.png';
const urlImageSalir = 'https://cdn-icons-png.flaticon.com/512/4400/4400828.png';
const Header = () => {

    return (
        <Navbar
            className="my-2"
            color="dark"
            dark
        >
            <NavbarBrand href="/">
                <img
                src={urlImage} width="32px"
                 />
                 {" "}
                CIELO | Control de Empleados
            </NavbarBrand>
          <NavbarText>Paul Ramón { " "} |  { " " }<img src={ urlImageSalir } width="26px"/></NavbarText>
        </Navbar>
    )
}


export default Header;