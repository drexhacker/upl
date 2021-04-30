import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { createReview, detailsProduct, listProductCategories } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import Rating from '../components/Rating';
import SearchBox from '../components/SearchBox';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Review Submitted Successfully');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
    dispatch(listProductCategories());
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}&size=${size ? size : product.sizes[0].size + '_' + product.sizes[0].price }`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Please enter comment and rating');
    }
  };
  return (
    <div>

      <NavBar isActive="#products-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
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
                    <h2>Details</h2>
                    <Route
                      render={({ history }) => (
                        <SearchBox history={history}></SearchBox>
                      )}
                    ></Route>
                    <ol>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/products">Products</Link></li>
                      <li>{product.name}</li>
                    </ol>
                  </div>

                </div>
              </section>
              <section className="inner-page pt-4">
                <div className="container py-5">

                  <div className="card">
                    <div className="row">
                      <aside className="col-sm-5 border-right">
                        <article className="gallery-wrap">
                          <div className="img-big-wrap">
                            <div><img src={product.image} alt={product.name} /></div>
                          </div>
                        </article>
                      </aside>
                      <aside className="col-sm-7">
                        <article className="card-body p-5">
                          <h3 className="title mb-3">{product.name}</h3>

                          <p className="price-detail-wrap">
                            <span className="price h3 text-danger">
                              <span className="currency">UGX.</span><span className="num">{product.sizes[0].price + '(' + product.sizes[0].size + ')'}</span>
                            </span>
                          </p>
                          <dl className="item-property">
                            <dt>Description</dt>
                            <dd><p>{product.description}</p></dd>
                          </dl>
                          <dl className="param param-feature">
                            <dt>Rating & Review</dt>
                            <dd>
                              <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                              ></Rating></dd>
                          </dl>
                          {/* <dl className="param param-feature">
                      <dt>Color</dt>
                      <dd>Black and white</dd>
                    </dl>
                    <dl className="param param-feature">
                      <dt>Delivery</dt>
                      <dd>Russia, USA, and Europe</dd>
                    </dl> */}

                          <hr />
                          {product.countInStock > 0 ? (
                            <>
                              <div className="row">
                                <div className="col-sm-5">
                                  <dl className="param param-inline">
                                    <dt>Quantity: </dt>
                                    <dd>
                                      <select className="form-control form-control-sm" value={qty} onChange={(e) => setQty(e.target.value)} style={{ width: "70px" }}>
                                        {[...Array(product.countInStock).keys()].map(
                                          (x) => (
                                            <option key={x + 1} value={x + 1}>
                                              {x + 1}
                                            </option>
                                          )
                                        )}
                                      </select>
                                    </dd>
                                  </dl>
                                </div>
                                <div className="col-sm-7">
                                  <dl className="param param-inline">
                                    <dt>Size: </dt>
                                    <dd>
                                      <select className="form-control" value={ size } onChange={(e) => setSize(e.target.value)}>
                                        {product.sizes.map(
                                          (y) => (
                                            <option key={y._id} value={y.size + '_' + y.price}>
                                              {y.size} --- UGX.{y.price}
                                            </option>
                                          )
                                        )}
                                      </select>
                                    </dd>
                                  </dl>
                                </div>
                              </div>
                              <hr />
                              <a href="tel:+256701897176" className="btn btn-lg btn-primary text-uppercase m-2"> Call to Order </a>
                              <a href="#" onClick={addToCartHandler} className="btn btn-lg btn-outline-primary text-uppercase m-2"> <i className="fas fa-shopping-cart"></i> Add to cart </a>
                            </>
                          ) :
                            (<MessageBox variant="danger">Out of Stock</MessageBox>)}
                        </article>
                      </aside>
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
