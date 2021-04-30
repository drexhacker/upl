import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { listProductCategories, listProducts } from '../actions/productActions';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function AboutScreen(props) {
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
            <NavBar isActive="#about-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>About Us</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="about">
                    <div className="container" data-aos="fade-up">

                        <div className="row about-extra">
                            <div className="col-lg-6" data-aos="fade-right">
                            <iframe frameborder="0" width="100%" style={{ maxHeight: "550px", height: "100%" }} src="https://85f10855-trial.flowpaper.com/UPLCOMPANYPROFILE/" scrolling="no" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
                                <h4>Unique Plumbers Uganda Ltd
                                is a multi-service engineering company.
                </h4>
                                <p>
                                    Specializing in providing our clients with
                                    unique solutions that move beyond the
                                    individual project. We seek to
                                    understand your vision and provide a
                                    thoughtful plan that enhances and
                                    encompasses your corporate
                                    strategies.
            </p>
                                <p>
                                    Established in 2016 as a Plumbing
                                    engineering company for a variety of
                                    industrial and commercial clients,the
                                    Company's' engineering professionals
                                    involved with the planning, design and
                                    installation of building systems related
                                    to plumbing, including water supply and
                                    drainage. We can help you visualize
                                    the entirety of your project from
                                    evaluating utilities with energy impacts
                                    and operating costs to providing
                                    construction documents with
                                    our Plumbing and Process engineering
                                    disciplines.
                                    Unique Plumbers also provides
                                    construction contract administration,
                                    construction cost budgeting, and
                                    scheduling services. A strong team
                                    of Engineers, Revit/AutoCAD designers
                                    support our professional staff.
                                    Unique Plumbers Company’s
                                    dedication to thorough project
                                    management, quality control, cost
                                    accountability, and on-time
                                    delivery has won the company
                                    unparalleled respect from our clients.
                                    In fact, over 80 percent of Unique’s
                                    business is from repeat customers and
                                    direct referrals.
            </p>
                            </div>
                        </div>
                        <div className="m-2 p-2"></div>
                        <div className="row about-container">

                            <div className="col-lg-6 content order-lg-1 order-2">
                                <p>
                                    Unique Plumbers as a company is guided by these principles to reach
                                    company goals every day.
            </p>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="bi bi-card-checklist"></i></div>
                                    <h4 className="title"><a href="">Our Mission</a></h4>
                                    <p className="description">Our mission is to deliver value to our
                                    customer.
                                    Value demands we render high
                                    quality service, with integrity, in a
                                    professional manner, at a fair price.
              </p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="bi bi-brightness-high"></i></div>
                                    <h4 className="title"><a href="">Our Vision</a></h4>
                                    <p className="description">To bring life to plumbing by allowing
                                    our clients to express themselves
                                    and their personalities.
                </p>
                                </div>

                                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="bi bi-check2-circle"></i></div>
                                    <h4 className="title"><a href="">Core Values</a></h4>
                                    <p className="description">
                                        <strong>Customer-Oriented:</strong> Earn customer loyalty by
                    delivering results beyond our customer's
                    expectations.<br />
                                        <strong>Commitment & Accountability:</strong> Be accountable
                    for delivering on your commitments.<br />
                                        <strong>Ownership:</strong> Everyone has responsibility to be
                    proactive and take initiative.<br />
                                        <strong>Quality:</strong> Continuously improve upon quality of the
                    work you deliver everyday.<br />
                                        <strong>Innovation:</strong> Create new value and new satisfaction
                    for the customer.
                    Be creative to make the impossible possible.<br />
                                        <strong>Great place to work:</strong> Strive for professional and
                    personal growth in an enjoyable work environment.
                  </p>
                                </div>

                            </div>

                            <div className="col-lg-6 background order-lg-2" data-aos="zoom-in">
                                <img src="/img/IMG_20190715_184345770.jpg" className="img-fluid h-100" style={{ maxHeight: "550px" }} alt="" />
                            </div>
                        </div>

                    </div>

                </section>
            </main>
        </div>
    );
}
