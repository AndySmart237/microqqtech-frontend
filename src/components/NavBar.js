import React from "react";
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { getHomePage, SERVER_URL } from '../UtilitairesEtAPI';
import { FaEnvelope, FaSun, FaMoon } from "react-icons/fa6";


const NavbarStyle = { color: "white", backgroundColor: "#002340" };

const NavBar = ({ onThemeChange, theme }) => {
    const [homePageLogo, setHomePageLogo] = useState([]);

    useEffect(() => {
        getHomePage()
            .then(response => {
                var homePageItems = response.data.items;
                var page = homePageItems[0];
                var logoObject = page.logo;
                logoObject = { ...logoObject, ...logoObject.meta };
                setHomePageLogo(logoObject);
            })
            .catch(error => {
                console.log(error);
            })
    });


    return (
        <Navbar variant="dark" expand="lg" className="px-5 py-4" style={NavbarStyle}>
            <NavLink className="navbar-brand" to='/'>
                <img alt={homePageLogo.title} height="65" width="65" src={SERVER_URL + homePageLogo.download_url} className="d-inline-block align-center"></img>
            </NavLink>
            <div className="ms-auto">
                <button className="navbar-toggler border-0 fs-2 px-3" onClick={onThemeChange}>
                    {theme === 'theme-clair' ? <FaSun /> : <FaMoon />}
                </button>
                <Navbar.Toggle aria-controls="navbar-deroulant" />
                <Navbar.Collapse id="navbar-deroulant">
                    <Nav>
                        <NavLink className="nav-link px-4 fs-4" to='/'> Accueil </NavLink>
                        <NavLink className="nav-link px-4 fs-4" to='/produits'> Produits </NavLink>
                        <NavLink className="nav-link px-4 fs-4" to='/services'> Services </NavLink>
                        <NavLink className="nav-link px-4 fs-4" to='/blog'> Blog </NavLink>
                        <NavLink className="nav-link px-4 fs-4" to='/about'> About </NavLink>

                        <NavLink className="nav-link px-4 pe-1 fs-3 d-flex align-items-center" to='/mail'> <FaEnvelope /> </NavLink>
                        <div className="nav-link d-none d-lg-block">
                            <button className="nav-link d-flex align-items-center fs-3 " onClick={onThemeChange}>
                                {theme === 'theme-clair' ? <FaSun /> : <FaMoon />}
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavBar;
