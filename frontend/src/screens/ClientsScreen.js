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

export default function ClientsScreen(props) {
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
            <NavBar isActive="#clients-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Services</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/services">Services</Link></li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section className="inner-page pt-4 service-body">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-7 mx-auto">

                                <ul className="timeline">
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">PLUMBING</h2>
                                        <p className="text-small mt-2 font-weight-light">
                                            Unique Plumbers' is a Ugandan Licensed Plumbing Contractor
                                            specializing in new commercial service, custom residential,
                                            elegant remodeling, design / build and unique special projects.
                                            We pride ourselves with honesty, dependability, quality
                                            workmanship and reasonable pricing. Our concern for the
                                            customer is the key to our success.
                                        </p>
                                    </li>
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">IRRIGATION</h2>
                                        <p className="text-small mt-2 font-weight-light">Unique Plumbers provides Irrigation systems and services
                                        like conducting new sprinkler systems and repairs for both
                                        residential, commercial, and property management
                                        customers. We offer you the best services in all aspects of
                                        the irrigation.
                                        Our Irrigation Services Include: Surface irrigation,Localized
                                        irrigation, Drip irrigation, Sprinkler irrigation, Center pivot
irrigation, Lateral move irrigation, Sub-irrigation.</p>
                                    </li>
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">FIRE FIGHTING SYSTEMS.</h2>
                                        <p className="text-small mt-2 font-weight-light">Unique Plumbers is an emerging leader with engineers &
                                        contractors of the captioned systems listed below. We are well
                                        equipped with fully trained personnel capable of designing and
                                        installing systems up to the requisite standards, in multistory
                                        buildings, industrial buildings, factories, banks, schools,
                                        institutional buildings, commercial complexes, group housing
                                        societies, hotels etc.
                                        We are fully geared to take up the Design, Supply Installation,
                                        Testing and Commissioning of the following systems: Dry Riser/
                                        Down Comer/ Wet Riser Systems, Sprinkler Systems, Fire
                                        Fighting Equipment’s/ Fire Extinguishers & Refilling, Fire
                                        Brackets, Annually Maintenance, Repairing & Services for
Above Systems.</p>
                                    </li>
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">HEATING & GAS</h2>
                                        <p className="text-small mt-2 font-weight-light">Ensuring your heating is working at its’ optimal level is crucial for
                                        both comfort and saving on those all-important bills. We install both
                                        central and distributed heating systems.
                                        Also, we are installers of Solar water heating which is the only
                                        economically viable solar solution for users with access to grid
                                        energy. Works can be extremely dangerous and require a
                                        professional to complete them safely and efficiently. That’s why
                                        our team are fully qualified Gas Safe engineers, which means they
                                        have the expertise to work on all ranges of boilers to make sure
                                        your heating is running smoothly and remaining safe for you and
your family.</p>
                                    </li>
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">SANITARY ENGINEERING</h2>
                                        <p className="text-small mt-2 font-weight-light">As Unique plumbers, we are dedicated to improving public
                                        health through Sanitary & Wastewater engineering.
                                        Revamping sanitation of human communities by providing
                                        the removal and disposal of human waste, and in addition
to the supply of safe potable water.</p>
                                    </li>
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">SWIMMING POOLS, WATERFALLS & FOUNTAINS</h2>
                                        <p className="text-small mt-2 font-weight-light">
                                            What makes our custom designs so much more than just
                                            your basic water feature is that we can do whatever your
                                            imagination desires. We can take your ideas and create a
                                            tangible design that adds to the comfort and relaxation of
                                            your home. Whether you want a custom swimming pool,
                                            fountain to a small waterfall at the front door to a koi pond
                                            or an aquatic flower garden, we can build it to be beautiful
                                            and long-lasting. Our professionals have done it all, and
                                            there is nothing we cannot accomplish for you with our
                                            team of experts and our top-of-the-line equipment. If you
                                            can dream it, we can create it: Swimming pools,
                                            Waterfalls, Fountains big & small, Creeks and riverbeds,
                                            Ponds, Water gardens.
</p>
                                    </li>
                                    <li className="timeline-item bg-blue rounded ml-3 p-4 shadow">
                                        <div className="timeline-arrow"></div>
                                        <h2 className="h5 mb-0">RAIN WATER HARVESTING</h2>
                                        <p className="text-small mt-2 font-weight-light">
                                            Water is probably one of the most valuable resources and
                                            it is in short supply. Yet we continuously waste thousands
                                            of litres of rainwater each time it rains.
                                            Unique Plumbing Services offers an easy, and affordable
                                            solution for individual home owners, industrial or
                                            commercial property owners to take advantage of this free
                                            supply of water.
                                            By collecting the rainwater in either an individual tank or
                                            series of rainwater tanks, rainwater becomes ideal for
                                            watering gardens, topping up swimming pools and ponds,
                                            washing cars and driveways or even plumbed into the
                                            irrigation and supply systems.
                                            We have a range of Rainwater tank options to suit any
                                            application and they come in a variety of sizes, shapes and
                                            colours.
</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
