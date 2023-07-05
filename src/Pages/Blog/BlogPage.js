// MICROQQTECH
// Composant de la page de Blog

import { useEffect, useState } from 'react';
import { getBlogIndexPage, getBlogDetailPages } from '../../API_Et_Utilitaires';
import PostPageCard from './PostPageCard';
import { FaBook } from "react-icons/fa6";


function BlogPage() {
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
        <>
            <section className="container my-5">
                <div className='header'>                    
                    <h1 className="my-3 d-flex align-items-center">
                        <FaBook /> <span className='px-3'>{blogIndexPage.title}</span>
                    </h1>
                    <div className='fs-2' dangerouslySetInnerHTML={{ __html: blogIndexPage.intro }}></div>
                </div>
                                
                <div class="row p-2">
                    {blogDetailPages.map((post) => (
                        <PostPageCard post={post} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default BlogPage;
