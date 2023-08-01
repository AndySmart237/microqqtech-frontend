// MICROQQTECH
// Composant de la page de Blog

import { useEffect, useState } from 'react';
import { getBlogIndexPage, getBlogDetailPages } from '../../UtilitairesEtAPI';
import PostPageCard from './PostPageCard';
import CardListPagination from '../../components/CardListPagination';
import { FaBook } from "react-icons/fa6";


const BlogPage = ({ pageSource }) => {
    const [blogIndexPage, setBlogIndexPage] = useState({});
    const [blogDetailPages, setBlogDetailPages] = useState([]);

    useEffect(() => {
        getBlogIndexPage()
            .then((response) => {
                var blogItems = response.data.items;
                setBlogIndexPage(blogItems[0]);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        getBlogDetailPages()
            .then((response) => {
                var blogPostList = response.data.items;
                setBlogDetailPages(blogPostList);
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <section className="container my-5">
            <div className='header'>
                <h1 className="display-5 my-3 d-flex align-items-center">
                    <span style={{opacity: '0.75'}}> <FaBook /> </span> 
                    <span className='px-3'>{blogIndexPage.title}</span>
                </h1>
                <div className='fs-2' dangerouslySetInnerHTML={{ __html: blogIndexPage.intro }}></div>
            </div>

            {pageSource === 'home' ?
                <>
                    {blogDetailPages.length > 0 && <CardListPagination data={blogDetailPages} pageType='Blog' />}
                </>
                :
                <div className="row">
                    {blogDetailPages.map((post) => (
                        <PostPageCard post={post} />
                    ))}
                </div>
            }


        </section>
    );
}

export default BlogPage;
