// MICROQQTECH - NewsPostSlide
// Composant de la page Produits

import { useEffect, useState } from 'react';
import { useWindowWidth, SERVER_URL, getNewsPostPages } from '../../UtilitairesEtAPI';
import Carousel from 'react-bootstrap/Carousel';



const NewsPostSlide = () => {
    const [newsPostPages, setNewsPostPages] = useState([]);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        getNewsPostPages()
            .then((response) => {
                var newsPostList = response.data.items;
                setNewsPostPages(newsPostList);
            })
            .catch((err) => console.error(err));
    }, []);


    return (
        <section className="m-0 p-0">
            {newsPostPages.length > 0 &&
                windowWidth > 900 ?
                <Carousel style={{ maxHeight: '500px' }}>
                    {newsPostPages.map((post) => (
                        <Carousel.Item style={{ maxHeight: '500px', backgroundColor: '#1E2F46' }}>
                            <img className="d-block w-100" style={{ opacity: 0.4 }} alt={post.title} src={SERVER_URL + post.image.meta.download_url}></img>
                            <Carousel.Caption>
                                <div className='row'>
                                    <div className='col-8' style={{ textAlign: 'left' }}>
                                        <p className='display-4' style={{ fontWeight: 400 }}> {post.title} </p>
                                        <div className='fs-4' dangerouslySetInnerHTML={{ __html: post.description }}></div>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
                :
                <Carousel className='pt-4' style={{color: 'white', backgroundColor: '#1E2F46' }}>
                    {newsPostPages.map((post) => (
                        <Carousel.Item className='border'>
                            <div className='row'>
                                <div className='col-md-6' style={{ textAlign: 'left' }}>
                                    <p className='display-6' style={{ fontWeight: 400 }}> {post.title} </p>
                                    <div className='fs-4' dangerouslySetInnerHTML={{ __html: post.description }}></div>
                                </div>
                                <div className='col-md-6'>
                                    <img style={{maxHeight: '400px'}} className="d-block w-100" alt={post.title} src={SERVER_URL + post.image.meta.download_url}></img>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>                
            }
        </section>
    );
}

export default NewsPostSlide;
