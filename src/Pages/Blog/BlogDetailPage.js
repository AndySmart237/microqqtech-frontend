import { useEffect, useState } from 'react';
import { SERVER_URL, getBlogDetailPageBySlug } from '../../UtilitairesEtAPI';
import ImageAPI from '../../components/ImageAPI';
import { useParams, Link } from 'react-router-dom';
import { FaRegCalendar } from "react-icons/fa6";
import { YouTubeEmbed } from 'react-social-media-embed';


function BlogPostPage() {
  const [blogPost, setBlogPost] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    getBlogDetailPageBySlug(slug)
      .then(response => {
        var post = response.data.items;
        var postPage = post[0];
        var postPage_images = [];
        postPage.gallery_images.forEach(element => {
          var img = element.image;
          postPage_images.push({ ...img, ...img.meta });
        });
        postPage.gallery_images = postPage_images;
        setBlogPost(postPage);
      })
      .catch(error => {
        console.log(error);
      })
  });


  return (
    <section className="container py-5">
      <h1> {blogPost.sub_title} </h1>
      <p className="card-text d-flex align-items-center">
        <FaRegCalendar /> <span className='px-2'>Posté le {blogPost.date_formatee}</span>
      </p>
      <div>
        {blogPost.gallery_images ?
          <div className='flex my-4'>
            {blogPost.gallery_images.map((image) => (
              <img className='mx-2' alt={image.title} height="150" width="200" src={SERVER_URL + image.download_url}></img>
            ))}
          </div>
          :
          <></>}
      </div>

      {blogPost.body ?
        <>
          {blogPost.body.map((block, index) => {
            switch (block.type.toLowerCase()) {
              case 'paragraphe':
                return (
                  <div key={index} dangerouslySetInnerHTML={{ __html: block.value }}></div>
                );
              case 'image':
                return (
                  <div className='w-50'>
                    <ImageAPI key={index} id={block.value} />
                  </div>
                );
              case 'lien_pour_contenu_externe':
                return (
                  <div style={{ display: 'flex', justifyContent: 'left' }}>
                    <YouTubeEmbed url={block.value} width={600} height={300} />
                  </div>
                );
              default:
                return null;
            }
          })}
        </>
        :
        <></>
      }

      <div className='py-5'>
        <Link to="/blog" className="btn btn-primary"> Retourner au Blog </Link>
      </div>
    </section>
  );
}

export default BlogPostPage;