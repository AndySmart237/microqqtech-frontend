import axios from "axios";

const LOCAL_SERVER_URL = "http://localhost:8000";
const REMOTE_SERVER_URL = "http://microqqtech.pythonanywhere.com";
export const SERVER_URL = REMOTE_SERVER_URL;

const BACKEND_API_BASE_URL = SERVER_URL + "/api/v2/";
const url_HomePage = BACKEND_API_BASE_URL + "pages/?type=home.HomePage&fields=*";
const url_blogIndexPage = BACKEND_API_BASE_URL + "pages/?type=blog.BlogIndexPage&fields=*";
const url_blogDetailPage = BACKEND_API_BASE_URL + "pages/?type=blog.BlogDetailPage&fields=*&order=-post_date";
const url_productIndexPage = BACKEND_API_BASE_URL + "pages/?type=produits.ProductIndexPage&fields=*";
const url_productDetailPage = BACKEND_API_BASE_URL + "pages/?type=produits.ProductDetailPage&fields=*&order=-post_date";
//const url_categorie_blog = BACKEND_API_BASE_URL + "blog-category/?fields=*";
// const url_images = BACKEND_API_BASE_URL + "images/";
// const url_images_blog = BACKEND_API_BASE_URL + "blog-gallery/";


export const getHomePage = () => {    
    return axios.get(url_HomePage);
}

export const getBlogIndexPage = () => {
    return axios.get(url_blogIndexPage);
}


export const getBlogDetailPages = () => {
    return axios.get(url_blogDetailPage);
}

export const getBlogDetailPageBySlug = (slug) => {
    return axios.get(url_blogDetailPage + "&slug=" +slug);
}

export const getProductIndexPage = () => {
    return axios.get(url_productIndexPage);
}


export const getProductDetailPages = () => {
    return axios.get(url_productDetailPage);
}

export const getProductDetailPageBySlug = (slug) => {
    return axios.get(url_productDetailPage + "&slug=" +slug);
}

