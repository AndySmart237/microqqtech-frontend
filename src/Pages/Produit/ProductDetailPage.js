import { useEffect, useState } from 'react';
import { SERVER_URL, getProductDetailPageBySlug } from '../../UtilitairesEtAPI';
import { useParams, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FaRegCalendar, FaMoneyBillWave } from "react-icons/fa6";


const ProductDetailPage = () => {
  const [productPost, setProductPost] = useState({});
  const [productPostContent, setProductPostContent] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    getProductDetailPageBySlug(slug)
      .then(response => {
        var post = response.data.items;
        var postPage = post[0];
        var postPage_images = [];
        if (postPage.product_gallery_images) {
          postPage.product_gallery_images.forEach(element => {
            var img = element.image;
            postPage_images.push({ ...img, ...img.meta });
          });
          postPage.product_gallery_images = postPage_images;
        }
        console.log(postPage);
        setProductPost(postPage);
        setProductPostContent(postPage.details);
      })
      .catch(error => {
        console.log(error);
      })
  });


  return (
    <section className="container">
      <div className='header m-0 py-4 pb-1'>
        <h1> {productPost.title} </h1>
        <div className="fs-2" dangerouslySetInnerHTML={{ __html: productPost.description }}></div>
        <p className="mb-0 d-flex align-items-center">
          <FaRegCalendar />
          <span className='px-2'>Posted on {productPost.date_formatee}</span>
        </p>
        <p className="d-flex align-items-center">
          <FaMoneyBillWave />
          <span className='px-2'> {productPost.price} </span>
        </p>
      </div>

      <div className="container p-0 m-0">
        <div className="row">
          <div className="col-md-5 py-2">
            {/* <div style={{ maxWidth: '20rem' }}> */}
            {productPost.product_gallery_images ?
              <Carousel>
                {productPost.product_gallery_images.map((image) => (
                  <Carousel.Item>
                    <img className="d-block w-100" alt={image.title} src={SERVER_URL + image.download_url}></img>
                    <Carousel.Caption>
                      <h3> {image.title} </h3>
                      <p> {productPost.description.slice(0, 80) + (productPost.description.length > 80 ? "..." : "")} </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
              :
              <></>}
          </div>
          <div className="col-md-7">
            {productPostContent[0] ?
              <>
                {productPostContent.map((block, index) => {
                  switch (block.type.toLowerCase()) {
                    case 'paragraph':
                      return (
                        <div key={index} dangerouslySetInnerHTML={{ __html: block.value }}></div>
                      );
                    default:
                      return null;
                  }
                })}
              </>
              :
              <></>
            }
          </div>
        </div>
      </div>

      <div className='py-3'>
        {productPost.product_gallery_images ?
          <div className='flex my-4'>
            {productPost.product_gallery_images.map((image) => (
              <img className='m-2 border border-light-subtle' style={{ maxHeight: '12rem' }} alt={image.title} src={SERVER_URL + image.download_url}></img>
            ))}
          </div>
          :
          <></>}
      </div>
      
      <div className='my-3'>
        <Link to="/produits" className="btn btn-primary"> Retourner à la page Produits </Link>
      </div>
    </section>
  );
}

export default ProductDetailPage;