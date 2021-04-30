import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions';
import { detailsService, detailsservice } from '../actions/serviceActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function ServiceScreen(props) {
    const dispatch = useDispatch();
    const serviceId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const serviceDetails = useSelector((state) => state.serviceDetails);
    const { loading, error, service } = serviceDetails;
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
        dispatch(detailsService(serviceId));
        dispatch(listProductCategories());
    }, [dispatch, serviceId]);
    return (
        <div>

            <NavBar isActive="#services-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
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
                                        <h2>Service Details</h2>
                                        <Route
                                            render={({ history }) => (
                                                <SearchBox history={history}></SearchBox>
                                            )}
                                        ></Route>
                                        <ol>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/#services">Services</Link></li>
                                            <li>{service.name}</li>
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
                                                        <img src={service.image} className="img-fluid" alt={service.name} />
                                                    </div>
                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="portfolio-description">
                                                <h2 className="text-uppercase">{service.name}</h2>
                                                <p>
                                                    {service.description}
                                                </p>
                                            </div>
                                            <div className="portfolio-info">
                                                  <a href="tel:+256701897176" class="btn btn-lg btn-primary m-2">Call Us Now</a>
                                                  <Link to="/contact" class="btn btn-lg btn-primary m-2">Contact Us</Link>
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
