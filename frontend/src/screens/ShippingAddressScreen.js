import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { saveShippingAddress } from '../actions/cartActions';
import { listProductCategories } from '../actions/productActions';
import CheckoutSteps from '../components/CheckoutSteps';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  // const [lat, setLat] = useState(shippingAddress.lat);
  // const [lng, setLng] = useState(shippingAddress.lng);
  // const userAddressMap = useSelector((state) => state.userAddressMap);
  // const { address: addressMap } = userAddressMap;

  if (!userInfo) {
    props.history.push('/account/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // const newLat = addressMap ? addressMap.lat : lat;
    // const newLng = addressMap ? addressMap.lng : lng;
    // if (addressMap) {
    //   setLat(addressMap.lat);
    //   setLng(addressMap.lng);
    // }
    let moveOn = true;
    // if (!newLat || !newLng) {
    //   moveOn = window.confirm(
    //     'You did not set your location on map. Continue?'
    //   );
    // }
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          address,
          city,
          postalCode,
          country,
          // lat: newLat,
          // lng: newLng,
        })
      );
      props.history.push('/payment');
    }
  };
  // const chooseOnMap = () => {
  //   dispatch(
  //     saveShippingAddress({
  //       fullName,
  //       address,
  //       city,
  //       postalCode,
  //       country,
  //       // lat,
  //       // lng,
  //     })
  //   );
  //   props.history.push('/map');
  // };
  useEffect(() => {
    
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <div>
      <NavBar isActive="#home-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Shipping Address</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              {/* <CheckoutSteps step1 step2></CheckoutSteps> */}
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>Shipping Address</h1>
                </div>
                <div className="card col-lg-10 p-5">
                  <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="Enter full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Enter address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      className="form-control"
                      placeholder="Enter city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      className="form-control"
                      placeholder="Enter postal code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      className="form-control"
                      placeholder="Enter country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    ></input>
                  </div>
                  {/* <div>
          <label htmlFor="chooseOnMap">Location</label>
          <button type="button" onClick={chooseOnMap}>
            Choose On Map
          </button>
        </div> */}
                  <div>
                    <label />
                    <br></br>
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
