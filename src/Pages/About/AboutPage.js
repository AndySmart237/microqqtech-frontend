import React, { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { getAboutPage } from '../../UtilitairesEtAPI';
import ImageAPI from '../../components/ImageAPI';
import { FaCircleInfo } from "react-icons/fa6";


const AboutPage = () => {
    const [aboutPage, setAboutPage] = useState({});

    useEffect(() => {
        getAboutPage()
            .then(response => {
                var aboutPageItems = response.data.items;
                var page = aboutPageItems[0];
                setAboutPage(page);
            })
            .catch(error => {
                console.log(error);
            })
    });

    return (
        <section className='container'>
            <div className='header'>
                <h1 className="display-5 my-5 d-flex align-items-center">
                    <span style={{ opacity: '0.75' }}> <FaCircleInfo /> </span>
                    <span className='px-3'> {aboutPage.title} </span>
                </h1>
            </div>

            {aboutPage.presentation && aboutPage.presentation.length > 1 ?
                <div className="container pb-5 pt-0">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-6 border-bottom pb-2"> Présentation </h1>
                            <p className="mb-0 py-2" style={{ fontSize: '24px' }}>
                                <div dangerouslySetInnerHTML={{ __html: aboutPage.presentation[0].value }}></div>
                            </p>
                        </div>
                        <div className="col-md-6 px-3">
                            <ImageAPI id={aboutPage.presentation[1].value} className="img-fluid" width='80%' />
                        </div>
                    </div>
                </div>
                : <></>
            }
            <br />
            {aboutPage.vision && aboutPage.vision.length > 1 ?
                <div className="container py-5">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6">
                            <ImageAPI id={aboutPage.vision[1].value} className="img-fluid" width='80%' />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-6 border-bottom pb-2"> Vision & Missions </h1>
                            <p className="mb-0 py-2" style={{ fontSize: '24px' }}>
                                <div dangerouslySetInnerHTML={{ __html: aboutPage.vision[0].value }}></div>
                            </p>
                        </div>
                    </div>
                </div>
                : <></>
            }

            {aboutPage.history && aboutPage.history.length > 1 ?
                <div className="container py-5">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-6 border-bottom pb-2"> Historique </h1>
                            <p className="mb-0 py-2" style={{ fontSize: '24px' }}>
                                <div dangerouslySetInnerHTML={{ __html: aboutPage.history[0].value }}></div>
                            </p>
                        </div>
                        <div className="col-md-6 px-3">
                            <ImageAPI id={aboutPage.history[1].value} className="img-fluid" width='80%' />
                        </div>
                    </div>
                </div>
                : <></>
            }

            {aboutPage.departments &&
                <div className="container py-5">
                    <h1 className="display-6 border-bottom pb-2"> Equipe membre </h1>
                    <div className="row">
                        {aboutPage.departments.map((department) => (
                            <div className='mb-5 shadow-sm py-3'>
                                <h3 className="pb-2 border-bottom" style={{ opacity: 0.6 }}> Département de {department.name} </h3>
                                <div className='row'>
                                    <Card class="card text-center border-0 shadow m-3 px-0" style={{ width: "18rem;" }}>
                                        <div class="card-header fs-4">
                                            {department.responsible}
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title"> Département de <br /> {department.name} </h5>
                                            {department.deputy && <p class="card-text"> Adjoint: {department.deputy} </p>}
                                        </div>
                                    </Card>
                                    {department.deputy.length > 1 &&
                                        <Card class="card text-center border-0 shadow m-3 px-0" style={{ width: "18rem;" }}>
                                            <div class="card-header fs-4">
                                                {department.deputy}
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title"> Département de <br /> {department.name} </h5>
                                            </div>
                                        </Card>
                                    }
                                    {department.divisions && department.divisions.map((division) => (
                                        <div className='p-0 ps-4'>                                            
                                            <div className='row'>
                                                <Card class="card text-center border-0 shadow m-3 px-0" style={{ width: "18rem;" }}>
                                                    <div class="card-header fs-4">
                                                        {division.responsible}
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title"> {division.name} </h5>                                                        
                                                    </div>
                                                </Card>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </section>
    );
};

export default AboutPage;

const Card = styled.div`
    .theme-clair & {
        color: black;
        background-color: white;
    }
    .theme-sombre & {
        color: black;
        background-color: #DDDDDD;
    }
`;
