import { useEffect, useState } from 'react';
import { getHomePage, SERVER_URL } from '../../UtilitairesEtAPI';
import BlogPage from '../Blog/BlogPage';
import ProductPage from '../Produit/ProductPage';


const HomePage = () => {
  const [homePage, setHomePage] = useState({});
  const [homePageContents, setHomePageContents] = useState([]);
  const [homePageLogo, setHomePageLogo] = useState([]);

  function getAllParagraphsOf(blockObject) {
    var contenuObjet = [];
    blockObject.body.forEach(contenu => {
      if (contenu.type === 'paragraph') {
        contenuObjet.push(contenu.value);
      }
    });
    return contenuObjet;
  }

  useEffect(() => {
    getHomePage()
      .then(response => {
        var homePageItems = response.data.items;
        var page = homePageItems[0];
        setHomePage(page);
        setHomePageContents(getAllParagraphsOf(page));
        var logoObject = page.logo;
        logoObject = { ...logoObject, ...logoObject.meta };
        setHomePageLogo(logoObject);
      })
      .catch(error => {
        console.log(error);
      })
  });

  return (
    <section className='container-flex'>
      <div className='mqqt-home header row py-4 px-5'>
        <div className='col-md-2 mb-4'>
          <img alt={homePageLogo.title} height="100" width="100" src={SERVER_URL + homePageLogo.download_url}></img>
        </div>
        <div className='col-md-10'>
          <h1> {homePage.name} </h1>
          <span className='text-info fs-3'> {homePage.slogan} </span>
        </div>
      </div>
      <div className='container py-4'>
        <div className="fs-3 mb-4" dangerouslySetInnerHTML={{ __html: homePage.intro }}></div>
        {homePageContents.map((content) => (
          <div key={content.id} className="fs-2" dangerouslySetInnerHTML={{ __html: content }}></div>
        ))}

        <div className='py-3 mqqt-glass'>
          <BlogPage pageSource='home' />
        </div>

        <div className='py-3'>
          <ProductPage pageSource='home' />
        </div>
        
      </div>
    </section>
  );
}

export default HomePage;