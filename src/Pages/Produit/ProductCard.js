// MICROQQTECH

import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { SERVER_URL } from '../../API_Et_Utilitaires';
import { Link } from 'react-router-dom';
import { FaRegCalendar, FaMoneyBillWave } from "react-icons/fa6";


const Card = styled.div`
    width: 24rem;
`;


function ProductCard({ post }) {
    const [productIcon, setProductIcon] = useState([]);

    useEffect(() => {
        var logoObject = post.icone;
        logoObject = { ...logoObject, ...logoObject.meta };
        if (logoObject.download_url) {
            logoObject.url = logoObject.download_url;
        }
        logoObject.url = SERVER_URL + logoObject.url;
        setProductIcon(logoObject);
    });


    return (
        <Card className="card shadow m-2 px-0">
            <img className="card-img-top" alt={productIcon.title} src={productIcon.url} style={{ maxHeight: '20rem' }}></img>
            <div className="card-body">
                <h5 className="card-title"> {post.title} </h5>
                <p className="card-text"> {post.sub_title} </p>
                <p className="card-text ">
                    <span className="d-flex align-items-center"><FaRegCalendar /><span className='px-2'>{post.date_formatee}</span></span>
                    <span className="d-flex align-items-center"><FaMoneyBillWave /><span className='px-2'>{post.price}</span></span>
                </p>
                <Link to={"/produits/" + post.meta.slug} className="stretched-link"></Link>
            </div>
        </Card>
    );
}

export default ProductCard;