import React from 'react';
import { useEffect, useState } from 'react';
import { getHomePage, SERVER_URL } from '../UtilitairesEtAPI';
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaRegCopyright, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

const Footer = () => {
    const [homePage, setHomePage] = useState({});
    const [homePageLogo, setHomePageLogo] = useState([]);

    useEffect(() => {
        getHomePage()
            .then(response => {
                var homePageItems = response.data.items;
                var page = homePageItems[0];
                var logoObject = page.logo;
                logoObject = { ...logoObject, ...logoObject.meta };
                setHomePage(page);
                setHomePageLogo(logoObject);
            })
            .catch(error => {
                console.log(error);
            })
    });


    return (
        <div className='mqqt-footer pt-5 mt-5'>
            <footer>
                <div className="row container ps-5">
                    <div className="col-6 col-md-3 mb-3" style={{ textAlign: 'center' }}>
                        <div className='pb-2'>
                            <img alt={homePageLogo.title} width="25%" src={SERVER_URL + homePageLogo.download_url}></img>
                        </div>
                        <p className='text-info px-3'> {homePage.slogan} </p>
                    </div>

                    <div className="col-6 col-md-2 mb-3 px-3">
                        <ul className="nav flex-column fs-5">
                            <li className="nav-item mb-2">
                                <NavLink className="nav-link p-0 text-reset" to='/'> Accueil </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink className="nav-link p-0 text-reset" to='/produits'> Produits </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink className="nav-link p-0 text-reset" to='/services'> Services </NavLink>
                            </li>
                            <li className="nav-item mb-2">
                                <NavLink className="nav-link p-0 text-reset" to='/blog'> Blog </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3 ps-3">
                        <ul className="nav flex-column fs-6">                            
                            <li className="nav-item mb-2">
                                <span className='nav-link p-0 text-reset d-flex align-items-center'>
                                    <FaWhatsapp />
                                    <span className='px-2'> +237 6 74 89 23 93 </span>
                                </span>
                            </li>
                            <li className="nav-item mb-2">                            
                                <span className='nav-link p-0 text-reset d-flex align-items-center'>
                                    <FaEnvelope />
                                    <span className='px-2'> stephaneboris@yahoo.fr </span>
                                </span>
                            </li>                                                   
                        </ul>
                    </div>

                    <div className="col-md-4 offset-md-1 mb-3">
                        <form>
                            <h5> Abonnez-vous à notre newsletter </h5>
                            <p> Résumé mensuel de nouveautés passionnantes. </p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden"> Email </label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Votre adresse email" />
                                <button className="btn btn-primary" type="button"> S'inscrire </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center py-0 my-0" style={{ backgroundColor: '#002340' }}>
                    <p className='fs-5 pt-2 d-flex align-items-center ps-4'>
                        <FaRegCopyright /> <span className='px-2'> {currentYear} MICROQQTECH GROUP </span>
                    </p>
                    <div>
                        <ul className="list-unstyled d-flex fs-3 px-5">
                            <li className="ms-4">
                                <NavLink className="nav-link" to='https://www.linkedin.com/in/st%C3%A9phane-boris-tabeu-7656863a'> <FaLinkedin /> </NavLink>
                            </li>
                            <li className="ms-4">
                                <NavLink className="nav-link" to='https://www.facebook.com/MICROQQTECH'> <FaFacebook /> </NavLink>
                            </li>
                            <li className="ms-4">
                                <NavLink className="nav-link" to='/'> <FaInstagram /> </NavLink>
                            </li>
                            <li className="ms-4">
                                <NavLink className="nav-link" to='/'> <FaTwitter /> </NavLink>
                            </li>
                            <li className="ms-4">
                                <NavLink className="nav-link" to='/'> <FaEnvelope /> </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
