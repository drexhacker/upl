import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { createReview, detailsProduct, listProductCategories } from '../actions/productActions';
import { detailsProject } from '../actions/projectActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import Rating from '../components/Rating';
import SearchBox from '../components/SearchBox';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProjectScreen(props) {
    const dispatch = useDispatch();
    const projectId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const projectDetails = useSelector((state) => state.projectDetails);
    const { loading, error, project } = projectDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(detailsProject(projectId));
        dispatch(listProductCategories());
    }, [dispatch, projectId]);
    return (
        <div>

            <NavBar isActive="#projects-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                {
                    loading ? (
                        <LoadingBox></LoadingBox>
                    ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                        <>
                            <section className="breadcrumbs">
                                <div className="container">

                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2>Project Details</h2>
                                        <Route
                                            render={({ history }) => (
                                                <SearchBox history={history}></SearchBox>
                                            )}
                                        ></Route>
                                        <ol>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/#projects">Projects</Link></li>
                                            <li>{project.name}</li>
                                        </ol>
                                    </div>

                                </div>
                            </section>
                            <section id="portfolio-details" className="portfolio-details">
                                <div className="container">

                                    <div className="row gy-4">

                                        <div className="col-lg-8">
                                            <div className="portfolio-details-slider swiper-container">
                                                <div className="swiper-wrapper align-items-center">
                                                        <div className="swiper-slide">
                                                            <img src={project.thumbnail} className="img-fluid" alt="" />
                                                        </div>
                                                        {/* IMPLEMENT MULTIPLE IMAGES */}
                                                    {/* {
                                                        project.images.length === 0 ? (
                                                        <div className="swiper-slide">
                                                            <img src="/img/noimage.jpg" alt="" />
                                                        </div>
                                                        ) : project.images.map((image) => {
                                                            <div className="swiper-slide">
                                                                <img src={image} alt={project.name} />
                                                            </div>
                                                        })

                                                    } */}
                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="portfolio-description">
                                                <h2>{project.name}</h2>
                                                <p>
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="portfolio-info">
                                                <p>
                                                    <strong>Client</strong>: {project.client}<br/>
                                                    <strong>Contractor</strong>: {project.contractor}<br/>
                                                    <strong>Location</strong>: {project.location}<br/>
                                                    <strong>Remarks</strong>: {project.remarks}<br/>
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>
                        </>
                    )
                }

            </main>
        </div>
    );
}
