import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';
import { listProductCategories } from '../actions/productActions';
import CheckoutSteps from '../components/CheckoutSteps';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('Airtel');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    
  }, [dispatch]);
  return (
    <div>
      <NavBar isActive="#home-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Payment Method</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
                <li><Link to="/payment">Payment</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              {/* <CheckoutSteps step1 step2 step3></CheckoutSteps> */}
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>Payment Method</h1>
                </div>

                <div className="card col-lg-10 p-5">
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="airtel"
                        value="Airtel"
                        name="paymentMethod"
                        required
                        checked
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                      <label htmlFor="airtel">Airtel Money</label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="mtn"
                        value="MTN"
                        name="paymentMethod"
                        required
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                      <label htmlFor="mtn">MTN Mobile Money</label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <input
                        type="radio"
                        id="paypal"
                        value="PayPal"
                        name="paymentMethod"
                        required
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      ></input>
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                  </div>
                  <div>
                  </div>
                  <div>
                    <br></br>
                    <label />
                    <button className="btn btn-primary form-control" type="submit">
                      Continue
          </button>
                  </div>
                </div>
              </form>
              <br></br>
            </center>
          </div>
        </section>
      </main>
    </div>
  );
}
