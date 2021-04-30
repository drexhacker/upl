import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h2>UNIQUE PLUMBERS UGANDA LTD</h2>
                            <p>Unique Plumbers as a company is guided by these principles to reach
company goals every day.<br />

                                <strong>Mission:</strong> Our mission is to deliver value to our
customer.
Value demands we render high
quality service, with integrity, in a
professional manner, at a fair price.<br />
                                <strong>Vision:</strong> To bring life to plumbing by allowing
our clients to express themselves
and their personalities.<br />

                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                WANKULUKUKU ROAD, OPPOSITE TOTAL KABUUSU SERVICE STATION,<br />
                  P.O. BOX 16365, KAMPALA<br />
                  KAMPALA, UGANDA<br />
                                <strong>Phone:</strong> +256 701 897 176 Ι +256 784 618 467 Ι +256 703 535 592<br />
                                <strong>Email:</strong> info@uniqueplumbersug.com, uniqueplumbersug@gmail.com<br />
                            </p>

                            <div className="social-links">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="https://www.facebook.com/uniqueplumbersUG" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/uniqueplumbers/" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Subscribe to our newsletter to receive the latest updates and offers right in your inbox.</p>

                            <div id="mc_embed_signup">
                                <form action="https://uniqueplumbersug.us1.list-manage.com/subscribe/post?u=562717767f7ed371a1cdb97fb&amp;id=4352ee0658" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                    <div id="mc_embed_signup_scroll">
                                        <div className="mc-field-group">
                                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                        </div>
                                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text" name="b_562717767f7ed371a1cdb97fb_4352ee0658" tabIndex="-1" /></div>
                                        <div className="clear"></div>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>UNIQUE PLUMBERS UGANDA LTD</strong>. All Rights Reserved
      </div>
            </div>
        </footer>
    );
}