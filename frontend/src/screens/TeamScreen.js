import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { listProductCategories, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import Product from '../components/Product';
import Rating from '../components/Rating';
import SearchBox from '../components/SearchBox';
import { prices, ratings } from '../utils';

export default function TeamScreen(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, error } = cart;
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(listProductCategories());
    }, [dispatch]);

    return (
        <div>
            <NavBar isActive="#team-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Team</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/team">Team</Link></li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="team">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <p>Unique’s professionals
                            manage large and small projects with
                            professional expertise and offer
                            personalized service while providing
                            innovative solutions to any challenge
with accuracy and enthusiasm.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
                                <div className="member">
                                    <img src="/img/eng-benard.jpg" className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>ENG. BENARD LWANYAGA</h4>
                                            <span>Chief Executive Officer</span>
                                            <div className="social">
                                                <a href=""><i className="bi bi-twitter"></i></a>
                                                <a href=""><i className="bi bi-facebook"></i></a>
                                                <a href=""><i className="bi bi-instagram"></i></a>
                                                <a href=""><i className="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>

            </main>
        </div>
    );
}
