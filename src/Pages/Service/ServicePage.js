// MICROQQTECH - ServicePage
// Composant de la page Services

import { useEffect, useState } from 'react';
import { getServiceIndexPage } from '../../UtilitairesEtAPI';
import ServiceCard from './ServiceCard';
import CardListPagination from '../../components/CardListPagination';
import { FaUsersGear } from "react-icons/fa6";


const ServicePage = ({ pageSource }) => {
  const [serviceIndexPage, setServiceIndexPage] = useState({});
  //const [serviceDetailPages, setServiceDetailPages] = useState([]);

  useEffect(() => {
    getServiceIndexPage()
      .then((response) => {
        var serviceItems = response.data.items;
        setServiceIndexPage(serviceItems[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  // useEffect(() => {
  //     getProductDetailPages()
  //         .then((response) => {
  //             var productPostList = response.data.items;
  //             setProductDetailPages(productPostList);
  //         })
  //         .catch((err) => console.error(err));
  // }, []);


  return (
    <section className="container my-5">
      <div className='header'>
        <h1 className="display-5 my-3 d-flex align-items-center">
          <span style={{ opacity: '0.75' }}> <FaUsersGear /> </span>
          <span className='px-3'> {serviceIndexPage.title} </span>
        </h1>
        <div className='fs-2' dangerouslySetInnerHTML={{ __html: serviceIndexPage.intro }}></div>
      </div>      

      {/* {pageSource === 'home' ?
        <>
          {productDetailPages.length > 0 && <CardListPagination data={productDetailPages} pageType='Service' />}
        </>
        :
        <div className="row">
          {productDetailPages.map((post) => (
            <ServiceCard post={post} />
          ))}
        </div>
      } */}
    </section>
  );
}

export default ServicePage;
