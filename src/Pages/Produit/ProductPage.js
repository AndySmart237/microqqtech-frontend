// MICROQQTECH
// Composant de la page Produits

import { useEffect, useState } from 'react';
import { getProductIndexPage, getProductDetailPages } from '../../UtilitairesEtAPI';
import ProductCard from './ProductCard';
import CardListPagination from '../../components/CardListPagination';
import { FaCube } from "react-icons/fa6";


const ProductPage = ({ pageSource }) => {
    const [productIndexPage, setProductIndexPage] = useState({});
    const [productDetailPages, setProductDetailPages] = useState([]);

    useEffect(() => {
        getProductIndexPage()
            .then((response) => {
                var productItems = response.data.items;
                setProductIndexPage(productItems[0]);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        getProductDetailPages()
            .then((response) => {
                var productPostList = response.data.items;
                setProductDetailPages(productPostList);
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <section className="container my-5">
            <div className='header'>
                <h1 className="my-3 d-flex align-items-center">
                    <FaCube /> <span className='px-3'>{productIndexPage.title}</span>
                </h1>
                <div className='fs-2' dangerouslySetInnerHTML={{ __html: productIndexPage.intro }}></div>
            </div>
            
            {pageSource === 'home' ?
                <>
                    {productDetailPages.length > 0 && <CardListPagination data={productDetailPages} pageType='Produit' />} 
                </>
                :
                <div className="row">
                    {productDetailPages.map((post) => (
                        <ProductCard post={post} />
                    ))}
                </div>
            }
        </section>
    );
}

export default ProductPage;
