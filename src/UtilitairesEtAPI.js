// Ce fichier source regroupe toutes des fonctions utilisables par tous les composants React 
// pour les pages du site; Il s'agit surtout des fonctions permettant la récupération des données
// à travers des requettes API avec "axios"; d'autres fonctions utilitaires sont aussi définies ici

import axios from "axios";
import { useEffect, useState } from 'react';

const LOCAL_SERVER_URL = "http://localhost:8000";
//const REMOTE_SERVER_URL = "http://microqqtech.pythonanywhere.com";
export const SERVER_URL = LOCAL_SERVER_URL;

const BACKEND_API_BASE_URL = SERVER_URL + "/api/v2/";
const url_Images = BACKEND_API_BASE_URL + "images/";
const url_HomePage = BACKEND_API_BASE_URL + "pages/?type=home.HomePage&fields=*";
const url_AboutPage = BACKEND_API_BASE_URL + "pages/?type=about.AboutPage&fields=*";
const url_blogIndexPage = BACKEND_API_BASE_URL + "pages/?type=blog.BlogIndexPage&fields=*";
const url_blogDetailPage = BACKEND_API_BASE_URL + "pages/?type=blog.BlogDetailPage&fields=*&order=-post_date";
const url_productIndexPage = BACKEND_API_BASE_URL + "pages/?type=produits.ProductIndexPage&fields=*";
const url_productDetailPage = BACKEND_API_BASE_URL + "pages/?type=produits.ProductDetailPage&fields=*&order=-post_date";
const url_serviceIndexPage = BACKEND_API_BASE_URL + "pages/?type=services.ServiceIndexPage&fields=*";
const url_serviceDetailPage = BACKEND_API_BASE_URL + "pages/?type=services.ServiceDetailPage&fields=*&order=-post_date";
//const url_categorie_blog = BACKEND_API_BASE_URL + "blog-category/?fields=*";
// const url_images = BACKEND_API_BASE_URL + "images/";
// const url_images_blog = BACKEND_API_BASE_URL + "blog-gallery/";


export const getHomePage = () => {
    return axios.get(url_HomePage);
}

export const getAboutPage = () => {
    return axios.get(url_AboutPage);
}

export const getImageByID = (id) => {
    return axios.get(url_Images + id);
}

export const getBlogIndexPage = () => {
    return axios.get(url_blogIndexPage);
}


export const getBlogDetailPages = () => {
    return axios.get(url_blogDetailPage);
}

export const getBlogDetailPageBySlug = (slug) => {
    return axios.get(url_blogDetailPage + "&slug=" + slug);
}

export const getProductIndexPage = () => {
    return axios.get(url_productIndexPage);
}

export const getProductDetailPages = () => {
    return axios.get(url_productDetailPage);
}

export const getProductDetailPageBySlug = (slug) => {
    return axios.get(url_productDetailPage + "&slug=" + slug);
}

export const getServiceIndexPage = () => {
    return axios.get(url_serviceIndexPage);
}


export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

