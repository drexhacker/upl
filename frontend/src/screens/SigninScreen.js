import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    dispatch(listProductCategories());
  }, [dispatch, props.history, redirect, userInfo]);
  return (
    <div>

      <NavBar isActive="#home-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Signin</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/account/signin">Signin</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div className="card col-lg-10 p-5">
                  <div>
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label />
                    <br></br>
                    <button className="btn btn-primary form-control" type="submit">
                      Sign In
          </button>
                  </div>
                  <div>
                    <label />
                    <div>
                      New customer?{' '}
                      <Link to={`/account/register?redirect=${redirect}`}>
                        Create your account
            </Link>
                    </div>
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
