import { useEffect, useState } from 'react';
import { getHomePage, SERVER_URL } from '../../API_Et_Utilitaires';

function HomePage() {
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
          logoObject = {...logoObject, ...logoObject.meta};   
          setHomePageLogo(logoObject);
        })
        .catch(error => {
          console.log(error);
        })
    });
    
    return (
      <section className='container py-4'>
        <div className='header row py-4'>
          <div className='col-2'>
            <img alt={homePageLogo.title} height="100" width="100" src={SERVER_URL + homePageLogo.download_url}></img>
          </div>          
          <div className='col-10'>
            <h1> {homePage.name} </h1>
            <span className='text-info fs-3'> {homePage.slogan} </span>
          </div>
        </div>        
        
        <div className="fs-3 mb-4" dangerouslySetInnerHTML={{ __html: homePage.intro }}></div>
        
        {homePageContents.map((content) => (          
          <div key={content.id} className="fs-2" dangerouslySetInnerHTML={{ __html: content }}></div>
        ))}           
      </section>
    );
  }

  export default HomePage;