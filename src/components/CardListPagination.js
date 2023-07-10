import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import PostPageCard from '../Pages/Blog/PostPageCard';
import ProductCard from '../Pages/Produit/ProductCard';
import { useWindowWidth } from '../UtilitairesEtAPI';
import '../styles/pagination.css'


const CardListPagination = ({ data, pageType }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        setCardData(data);
    }, []);

    const windowWidth = useWindowWidth();
    const itemsPerPage = windowWidth < 1210 ? 1 : 2;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(cardData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="row">
                {currentItems.map((post) => {
                    switch (pageType) {
                        case 'Produit':
                            return <ProductCard post={post} />;
                        case 'Blog':
                            return <PostPageCard post={post} />;
                        default:
                            return <PostPageCard post={post} />;
                    }
                }
                )}
            </div>

            <Pagination className="justify-content-left">
                <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className='paginationStyle'
                />
                <Pagination.Next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className='paginationStyle'
                />
                
                <li class="page-item mx-5" id='lien'>
                    <span>
                        {pageType === 'Produit' && <Link to="/produits" className="page-item-link fs-2"> Voir tous les produits </Link> }
                        {pageType === 'Blog' && <Link to="/blog" className="page-item-link fs-2"> Voir tous les articles </Link> }                                               
                    </span>
                </li>
            </Pagination>
        </>
    );
};

export default CardListPagination;
