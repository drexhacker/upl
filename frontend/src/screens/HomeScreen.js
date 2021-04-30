import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategories, listTopRatedProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import HomeNavBar from '../components/HomeNavBar';
import { listProjects } from '../actions/projectActions';
import { listServices } from '../actions/serviceActions';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const [loadingSend, setLoadingSend] = useState(false);
  const [errorSend, setErrorSend] = useState('');
  const [successSend, setSuccessSend] = useState('');

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;


  const serviceList = useSelector((state) => state.serviceList);
  const {
    loading: loadingServices,
    error: errorServices,
    services,
  } = serviceList;

  const productListTopRated = useSelector((state) => state.productListTopRated);
  const { loading: loadingTopRatedProducts, error: errorTopRatedProducts, topRatedProducts } = productListTopRated;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(listTopRatedProducts());
    dispatch(listProductCategories());
    dispatch(listServices());
  }, [dispatch]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setLoadingSend(true);
    try {
      const { data } = await Axios.post('/api/mails/send', { name, email, subject, message }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSuccessSend(data.message);
      setLoadingSend(false);
    } catch (error) {
      setErrorSend(error.message);
      setLoadingSend(false);
    }
  };
  return (
    <div>
      <HomeNavBar isActive="#home-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></HomeNavBar>
      <section id="hero" className="clearfix" style={{ background: "blue" }}>
        <div className="containerx" data-aos="fade-up">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/banners/banner1.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/banners/banner2.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/banners/banner3.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/banners/banner4.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/banners/banner5.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/banners/banner6.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/img/banners/banner7.webp" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </section>

      <main id="main">

        <section id="about">
          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h3>About Us</h3>
            </header>
            <div className="row about-extra">
              <div className="col-lg-6" data-aos="fade-right">
                <iframe frameborder="0" width="100%" style={{ maxHeight: "550px", height: "100%" }} src="https://85f10855-trial.flowpaper.com/UPLCOMPANYPROFILE/" scrolling="no" marginWidth="0" marginHeight="0" allowFullScreen></iframe>
                {/* <img src="/img/20201026_170040.jpg" className="img-fluid h-100" style={{ maxHeight: "550px" }} alt="" /> */}
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
            <div className="m-2 p-2"><hr /></div>
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
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Our Services</h3>
              <p>We are a multi-service engineering company
              specializing in providing our clients with
              unique solutions that move beyond the
              individual project.
              </p>
            </header>
            {/* USE EVEN AND ODD INDEX TO DETERMINE */}
            <div class="d-flex flex-wrap">
              {
                loadingServices ? <LoadingBox></LoadingBox>
                  : errorServices ? <MessageBox variant="danger">Services not found</MessageBox>
                    : services.map((service) =>
                      services.indexOf(service) === 0 ? <>
                      <div class="col-12 mb-1">
                        <Link to={"/service/" + services[0]._id}>
                          <div class="hover hover-3 text-white rounded"><img src={services[0].image} alt={services[0].name} className="h-100" />
                            <div class="hover-overlay"></div>
                            <div class="hover-3-content px-5 py-4">
                              <h3 class="hover-3-title text-uppercase font-weight-bold mb-1">{services[0].name}</h3>
                              <p class="hover-3-description small text-uppercase mb-0">{services[0].description}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      </> :
                        <>
                          <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 mb-1" key={service._id}>
                            <Link to={"/service/" + service._id}>
                              <div class="hover hover-3 text-white rounded">
                                <img src={service.image} alt={service.name} className="h-100" />
                                <div class="hover-overlay"></div>
                                <div class="hover-3-content px-5 py-4">
                                  <h3 class="hover-3-title text-uppercase font-weight-bold mb-1">{service.name}</h3>
                                  <p class="hover-3-description small text-uppercase mb-0">{service.description}</p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>)
              }
            </div>
          </div>
        </section>
        <section id="why-us" style={{ backgroundImage: "url('/img/DSC_0049.JPG')" }} className="upl-parallax">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>Before you even think of which plumbing company to choose, first take a look at our qualities then make a choice if you are satisfied.</p>
            </header>

            <div className="row row-eq-height justify-content-center">

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <i className="bi bi-calendar4-week"></i>
                  <div className="card-body">
                    <h5 className="card-title">Time Consciousness</h5>
                    <p className="card-text">We are time conscious which means we are always punctual, just give us a call and we will be there in no time.</p>
                    <a href="tel:+256701897176" className="readmore"> Call Us Now! </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="200">
                  <i className="bi bi-star"></i>
                  <div className="card-body">
                    <h5 className="card-title">Plumbing Accuracy</h5>
                    <p className="card-text">At Unique Plumbers, accuracy is our hobby. We do things with great dedication and great hopes of being accurate at our works.</p>
                    <a href="tel:+256701897176" className="readmore"> Call Us Now! </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="300">
                  <i className="bi bi-chat-square-text"></i>
                  <div className="card-body">
                    <h5 className="card-title">Customer Care</h5>
                    <p className="card-text">With our great team of experienced, versatile customer care agents who are always here for you at any time. You won't regret.</p>
                    <a href="tel:+256701897176" className="readmore"> Call Us Now! </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section id="products" className="section-bg">
          <div className="container">
            <h2 className="font-weight-bold mb-3 mt-5 text-center">Featured Products</h2>
            <div className="row pb-5 mb-4">
              {
                loadingTopRatedProducts ? (<LoadingBox></LoadingBox>)
                  : errorTopRatedProducts ? (<MessageBox variant="danger">{errorTopRatedProducts}</MessageBox>)
                    : (
                      <>
                        {topRatedProducts.length === 0 && <MessageBox>No Product Found</MessageBox>}
                        {topRatedProducts.map((product) => (
                          <Product key={product._id} product={product}></Product>
                        ))}
                      </>
                    )
              }
            </div>
          </div>
        </section>
        <section id="projects" className="clearfix">
          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h3 className="section-title">Our Projects</h3>
            </header>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="p-card m-2">
                <Link to="/projects/completed">
                  <img src="/img/DSC_0045.JPG" alt="Completed Projects" className="p-image h-100"></img>
                  <div className="p-overlay">Completed Projects</div>
                </Link>
              </div>
              <div className="p-card m-2">
                <Link to="/projects/ongoing">
                  <img src="/img/Seguku.jpg" alt="Ongoing Projects" className="p-image h-100"></img>
                  <div className="p-overlay">Ongoing Projects</div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery">

        </section>
        <section id="contact">
          <div className="container-fluid" data-aos="fade-up">

            <div className="section-header">
              <h3>Contact Us</h3>
            </div>

            <div className="row">

              <div className="col-lg-6">
                <div className="map mb-4 mb-lg-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.765587023309!2d32.544496581924506!3d0.2945805747304677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd1398067df1%3A0xde158ae85f9314af!2sUNIQUE%20PLUMBERS%20UGANDA%20LTD!5e0!3m2!1sen!2sug!4v1617367076861!5m2!1sen!2sug" style={{ border: "0", width: "100%", height: "400px", }} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-5 info">
                    <i className="bi bi-geo-alt"></i>
                    <p>WANKULUKUKU ROAD, OPPOSITE TOTAL KABUUSU SERVICE STATION</p>
                  </div>
                  <div className="col-md-4 info">
                    <i className="bi bi-envelope"></i>
                    <p>info@uniqueplumbersug.com, uniqueplumbersug@gmail.com</p>
                  </div>
                  <div className="col-md-3 info">
                    <i className="bi bi-phone"></i>
                    <p>+256701897176, +256784618467, +256703535592</p>
                  </div>
                </div>

                <div className="form">
                  <form onSubmit={sendMessageHandler} className="php-email-form">
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Your Name" required />
                      </div>
                      <div className="form-group col-lg-6 mt-3 mt-lg-0">
                        <input type="email" className="form-control" name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Your Email" required />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" onChange={(e) => setSubject(e.target.value)} id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" onChange={(e) => setMessage(e.target.value)} rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3">
                      {loadingSend && <LoadingBox></LoadingBox>}
                      {errorSend && (
                        <MessageBox variant="danger">{errorSend}</MessageBox>
                      )}
                      {successSend && (
                        <MessageBox variant="success">
                          {successSend}. Thank you!
                        </MessageBox>
                      )}
                    </div>
                    <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
