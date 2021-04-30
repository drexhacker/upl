import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import { listProductCategories } from '../actions/productActions';
import SearchBox from '../components/SearchBox';
import { numberWithCommas } from '../utils';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(0)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.size.price, 0)
  );
  cart.shippingPrice =  toPrice(0.05 * cart.itemsPrice);
  cart.taxPrice = toPrice(0.08 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    localStorage.removeItem('cartItems');
  };
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
    dispatch(listProductCategories());
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <NavBar isActive="#home-nav" cartItems={cart.cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Place Order</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><Link to="/placeorder">Place Order</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              {/* <CheckoutSteps step1 step2 step3 step4></CheckoutSteps> */}
              <div className="row top">
                <div className="col-lg-8">
                  <ul>
                    <li>
                      <div className="card card-body">
                        <h2>Shipping</h2>
                        <p>
                          <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                          <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="card card-body">
                        <h2>Payment</h2>
                        <p>
                          <strong>Method:</strong> {cart.paymentMethod}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="card card-body items">
                        <h2>Order Items</h2>
                        {cart.cartItems.map((item) => (
                          <div className="product card" key={Math.random()}>
                            <div className="row">
                              <div className="col-md-1">
                                <img className="img-fluid mx-auto d-block image" src={item.image} />
                              </div>
                              <div className="col-md-8">
                                <div className="info">
                                  <div className="row">
                                    <div className="col-md-5 product-name">
                                      <div className="product-name">
                                        <a href="#">{item.name}</a>
                                      </div>
                                    </div>
                                    <div className="col-md-2 quantity">
                                      <p>{item.qty}</p>
                                    </div>
                                    <div className="col-md-2 quantity">
                                      <p>{item.size.size}</p>
                                    </div>
                                    <div className="col-md-3 price">
                                      <span>UGX.{numberWithCommas(item.size.price)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <h2>Order Summary</h2>
                      </li>
                      <li>
                        <div className="row">
                          <p><strong>Items: </strong>UGX.{numberWithCommas(cart.itemsPrice)}<br />
                            <strong>Shipping: </strong>UGX.{numberWithCommas(cart.shippingPrice)}<br />
                            <strong>Tax: </strong>UGX.{numberWithCommas(cart.taxPrice)}<br />
                            <strong>Order Total: </strong>
                            <strong><b className="text-primary">UGX.{numberWithCommas(cart.totalPrice)}</b></strong>
                          </p>
                        </div>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={placeOrderHandler}
                          className="btn btn-primary form-control"
                          disabled={cart.cartItems.length === 0}
                        >
                          Place Order
                </button>
                      </li>
                      {loading && <LoadingBox></LoadingBox>}
                      {error && <MessageBox variant="danger">{error}</MessageBox>}
                    </ul>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </section>
      </main>
    </div>
  );
}
