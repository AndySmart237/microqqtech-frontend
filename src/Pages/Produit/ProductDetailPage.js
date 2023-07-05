import { useEffect, useState } from 'react';
import { SERVER_URL, getProductDetailPageBySlug } from '../../API_Et_Utilitaires';
import { useParams, Link } from 'react-router-dom';


function ProductDetailPage() {
  const [productPost, setProductPost] = useState({});
  const [productPostContent, setProductPostContent] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    getProductDetailPageBySlug(slug)
      .then(response => {
        var post = response.data.items;
        var postPage = post[0];        
        var postPage_images = [];
        if(postPage.product_gallery_images) {
          postPage.product_gallery_images.forEach(element => {
            var img = element.image;
            postPage_images.push({ ...img, ...img.meta });
          });
          postPage.product_gallery_images = postPage_images;   
        }            
        setProductPost(postPage);        
        setProductPostContent(postPage.description);       
      })
      .catch(error => {
        console.log(error);
      })
  });


  return (
    <section className="container">
      <div className='header py-4'>        
        <h1> {productPost.title} </h1>        
        <div className="fs-1" dangerouslySetInnerHTML={{ __html: productPost.sub_title }}></div>
        <p> Posté le {productPost.date_formatee} </p>
      </div>      
      
      <div>
        {productPost.gallery_images ?
          <div className='flex my-4'>
            {productPost.gallery_images.map((image) => (
              <img  className='mx-2' alt={image.title} height="150" width="200" src={SERVER_URL + image.download_url}></img>
            ))}
          </div>
          :
          <></>}
      </div>

      <div dangerouslySetInnerHTML={{ __html: productPostContent }}></div>
      
      <div>
        <Link to="/produits" className="btn btn-primary"> Retourner à la page Produits </Link>
      </div>
    </section>
  );
}

export default ProductDetailPage;