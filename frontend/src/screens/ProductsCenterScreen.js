import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import SearchBox from '../components/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProductCategories, listProducts, listPopularProducts, listTopRatedProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function ProductsCenterScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productListPopular = useSelector((state) => state.productListPopular);
    const { loading: loadingPopularProducts, error: errorPopularProducts, popularProducts } = productListPopular;

    const productListTopRated = useSelector((state) => state.productListTopRated);
    const { loading: loadingTopRatedProducts, error: errorTopRatedProducts, topRatedProducts } = productListTopRated;

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(listProducts({}));
        dispatch(listPopularProducts());
        dispatch(listTopRatedProducts());
        dispatch(listProductCategories());
    }, [dispatch]);
    return (
        <div>
            <NavBar isActive="#products-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
            <main id="main">
                <section className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Products</h2>
                            <Route
                                render={({ history }) => (
                                    <SearchBox history={history}></SearchBox>
                                )}
                            ></Route>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Products</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section className="inner-page pt-4">
                    <div className="container py-5">
                        <header className="text-center mb-5">
                            <h1 className="display-4 font-weight-bold">Best Plumbing Products</h1>
                            <p className="font-italic text-muted mb-0">Find high quality and affordable plumbing products are directly provided by manuacturers and kept in our
                            stores, then delivered to you upon order confirmation.
                        and delivery.</p>
                        </header>

                        <h2 className="font-weight-bold mb-2">Featured Products</h2>
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

                        <h2 className="font-weight-bold mb-2">Most Popular Products</h2>

                        <div className="d-flex flex-wrap pb-5 mb-4">
                            {
                                loadingPopularProducts ? (<LoadingBox></LoadingBox>)
                                    : errorPopularProducts ? (<MessageBox variant="danger">{errorPopularProducts}</MessageBox>)
                                        : (
                                            <>
                                                {popularProducts.length === 0 && <MessageBox>No Product Found</MessageBox>}
                                                {popularProducts.map((product) => (
                                                    <Product key={product._id} product={product}></Product>
                                                ))}
                                            </>
                                        )
                            }
                        </div>

                        <h2 className="font-weight-bold mb-2">All Products</h2>
                        <div className="d-flex flex-wrap pb-5 mb-4">
                            {
                                loading ? (<LoadingBox></LoadingBox>)
                                    : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                                        : (
                                            <>
                                                {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                                                {products.map((product) => (
                                                    <Product key={product._id} product={product}></Product>
                                                ))}
                                            </>
                                        )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
