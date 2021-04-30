import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { listProductCategories, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import Axios from 'axios';
import SearchBox from '../components/SearchBox';

export default function ContactScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const [loadingSend, setLoadingSend] = useState(false);
    const [errorSend, setErrorSend] = useState('');
    const [successSend, setSuccessSend] = useState('');
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
            <NavBar isActive="#contact-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Contact Us</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="contact">
                    <div className="container-fluid" data-aos="fade-up">

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
                                        <p>MAKANGA BUILDING, NALUKOLONGO - MASAKA ROAD</p>
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
