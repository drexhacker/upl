import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { deliverOrder, detailsOrder, payOrder, payOrderMTN, payOrderAirtel } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
import { listProductCategories } from '../actions/productActions';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';
import { numberWithCommas } from '../utils';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  // const [email, setEmail] = useState('');
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderPayMTN = useSelector((state) => state.orderPayMTN);
  const {
    loading: loadingPayMTN,
    error: errorPayMTN,
    paymentInfoMTN
  } = orderPayMTN;

  const orderPayAirtel = useSelector((state) => state.orderPayAirtel);
  const {
    loading: loadingPayAirtel,
    error: errorPayAirtel,
    paymentInfoAirtel
  } = orderPayAirtel;


  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    if (paymentInfoAirtel) {
      window.location.href = paymentInfoAirtel.meta.authorization.redirect;
    }
    if (paymentInfoMTN) {
      window.location.href = paymentInfoMTN.meta.authorization.redirect;
    }
    // if (order.paymentMethod === 'PayPal') {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }

      }
    }
    // }
    dispatch(listProductCategories());
  }, [dispatch, orderId, paymentInfoMTN, paymentInfoAirtel, sdkReady, successPay, successDeliver, order]);

  const ug_mobile_money = () => {
    if (order.paymentMethod === 'Airtel') {
      dispatch(payOrderAirtel(order, mobileNumber));
    } else if (order.paymentMethod === 'MTN') {
      dispatch(payOrderMTN(order, mobileNumber));
    }
  }

  const verify = async () => {
    if (!order.isPaid) {

      var urlData = window.location.search === "" ? '?resp={"status":"noResponse"}' : window.location.search;
      var decodedUrl = decodeURIComponent(urlData);
      var serverRes = decodedUrl.split('=')[1] || { "status": "noResponse" };
      var finalRes = JSON.parse(serverRes);
      if (finalRes.status === 'success') {
        try {
          const { paymentId } = finalRes.data.id;
          const response = await Axios.get(`/api/orders/${order._id}/payment/verify`, {
            data: { paymentId: paymentId },
            headers: { Authorization: `Bearer ${userInfo.token}` }
          });
          console.log(response);
          dispatch(payOrder(order, response));
        } catch (error) {
          console.log(error);
        }
      } else if (finalRes.status === 'noResponse') {
        console.log('No Response from currently');
      }

    }

  }

  const submitMobileHandler = (e) => {
    e.preventDefault();
    ug_mobile_money();
  }

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div onLoad={verify}>
      <NavBar isActive="#home-nav" cartItems={order.orderItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Order Details</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/orderhistory">Orders</Link></li>
                <li><Link to={"/order/" + order._id}>{order._id}</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              <div className="row top">
                <div className="col-lg-8">
                  <ul>
                    <li>
                      <div className="card card-body">
                        <h2>Shipping</h2>
                        <p>
                          <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                          <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                          {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                        </p>
                        {order.isDelivered ? (
                          <MessageBox variant="success">
                            Delivered at {order.deliveredAt}
                          </MessageBox>
                        ) : (
                          <MessageBox variant="danger">Not Delivered</MessageBox>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="card card-body">
                        <h2>Payment</h2>
                        <p>
                          <strong>Method:</strong> {order.paymentMethod}
                        </p>
                        {order.isPaid ? (
                          <MessageBox variant="success">
                            Paid at {order.paidAt}
                          </MessageBox>
                        ) : (
                          <MessageBox variant="danger">Not Paid</MessageBox>
                        )}
                      </div>
                    </li>
                    <li>
                      <div className="card card-body">
                        <h2>Order Items</h2>
                        <ul>
                          {order.orderItems.map((item) => (
                            <div className="product card" key={Math.random()}>
                            <div className="row">
                              <div className="col-md-1">
                                <img className="img-fluid mx-auto d-block image" src={item.image} />
                              </div>
                              <div className="col-md-8">
                                <div className="info">
                                  <div className="row">
                                    <div className="col-md-3 product-name">
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
                                    <div className="col-md-5 price">
                                      <span>UGX.{numberWithCommas(item.size.price)} x {item.qty} = {numberWithCommas(item.size.price * item.qty)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          ))}
                        </ul>
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
                        <p><strong>Items: </strong>UGX.{order.itemsPrice}<br />
                            <strong>Shipping: </strong>UGX.{order.shippingPrice}<br />
                            <strong>Tax: </strong>UGX.{order.taxPrice}<br />
                            <strong>Order Total: </strong>
                            <strong><b className="text-primary">UGX.{order.totalPrice}</b></strong>
                          </p>
                        </div>
                      </li>
                      {!order.isPaid && order.paymentMethod === 'PayPal' && (
                        <li>
                          {!sdkReady ? (
                            <LoadingBox></LoadingBox>
                          ) : (
                            <>
                              {errorPay && (
                                <MessageBox variant="danger">{errorPay}</MessageBox>
                              )}
                              {loadingPay && <LoadingBox></LoadingBox>}

                              <PayPalButton
                                amount={order.totalPrice}
                                onSuccess={successPaymentHandler}
                              ></PayPalButton>
                            </>
                          )}
                        </li>
                      )}
                      {
                        !order.isPaid && order.paymentMethod === 'Airtel' && (
                          <li>
                            {errorPayAirtel && (
                              <MessageBox variant="danger">{errorPayAirtel}</MessageBox>
                            )}
                            {loadingPayAirtel && <LoadingBox></LoadingBox>}

                            <form className="form" onSubmit={submitMobileHandler}>
                              <div>
                                <h3>Pay with Airtel Money</h3>
                              </div>
                              <div>
                                <label htmlFor="mobileNumber">Airtel Number</label>
                                <input id="mobileNumber" name="mobileNumber" className="form-control" type="number" placeholder="256-7XX-XXXXXX" required onChange={(e) => setMobileNumber(e.target.value)}></input>
                              </div>
                              <br/>
                              <button className="btn btn-primary form-control" type="submit">
                                Submit Payment
                          </button>
                            </form>
                          </li>
                        )}

                      {
                        !order.isPaid && order.paymentMethod === 'MTN'
                        && (
                          <li>
                            {errorPayMTN && (
                              <MessageBox variant="danger">{errorPayMTN}</MessageBox>
                            )}
                            {loadingPayMTN && <LoadingBox></LoadingBox>}
                            <form className="form" onSubmit={submitMobileHandler}>
                              <div>
                                <h3>Pay with MTN Mobile Money</h3>
                              </div>
                              <div>
                                <label htmlFor="mobileNumber">MTN Number</label>
                                <input id="mobileNumber" name="mobileNumber" type="number" placeholder="256-7XX-XXXXXX" required onChange={(e) => setMobileNumber(e.target.value)}></input>
                              </div>
                              <button className="primary block" type="submit">
                                Submit Payment
                          </button>
                            </form>
                          </li>
                        )}
                      {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <li>
                          {loadingDeliver && <LoadingBox></LoadingBox>}
                          {errorDeliver && (
                            <MessageBox variant="danger">{errorDeliver}</MessageBox>
                          )}
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={deliverHandler}
                          >
                            Deliver Order
                  </button>
                        </li>
                      )}
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
