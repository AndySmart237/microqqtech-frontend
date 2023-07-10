// MICROQQTECH

import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { SERVER_URL } from '../../UtilitairesEtAPI';
import { Link } from 'react-router-dom';
import { FaRegCalendar } from "react-icons/fa6";


function PostPageCard({ post }) {
    const [blogDetailPageIcon, setBlogDetailPageIcon] = useState([]);

    useEffect(() => {
        var logoObject = post.icone;
        logoObject = { ...logoObject, ...logoObject.meta };
        if (logoObject.download_url) {
            logoObject.url = logoObject.download_url;
        }
        logoObject.url = SERVER_URL + logoObject.url;
        setBlogDetailPageIcon(logoObject);
    });


    return (
        <Card className="card shadow m-3 px-0">
            <img className="card-img-top" alt={blogDetailPageIcon.title} src={blogDetailPageIcon.url} style={{ maxHeight: '20rem', width: '100%' }}></img>
            <div className="card-body py-4 pb-5">
                <h5 className="card-title"> {post.title} </h5>
                <p className="card-text"> {post.sub_title} </p>
                <p className="card-text">
                    <span className="d-flex align-items-center"><FaRegCalendar /><span className='px-2'>{post.date_formatee}</span></span>
                </p>
                <Link to={"/blog/" + post.meta.slug} className="stretched-link"></Link>
            </div>
        </Card>
    );
}

export default PostPageCard;



const Card = styled.div`    
    .theme-clair & {
        color: black;
        background-color: white;
    }
    .theme-sombre & {
        color: white;
        background-color: #1E2F46;
    }
`;