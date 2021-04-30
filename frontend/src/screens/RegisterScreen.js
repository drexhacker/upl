import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { listProductCategories } from '../actions/productActions';
import { register } from '../actions/userActions';
import Axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
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
    if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
    } else {
      dispatch(register(name, image, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }

    dispatch(listProductCategories());
  }, [props.history, redirect, userInfo]);


  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');


  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>

      <NavBar isActive="#home-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Register</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/account/register">Register</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div className="card col-lg-10 p-5">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      className="form-control"
                      required
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="image">Image</label>
                    <input
                      id="image"
                      type="text"
                      className="form-control"
                      placeholder="Enter image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="imageFile">Image File</label>
                    <input
                      type="file"
                      id="imageFile"
                      className="form-control"
                      label="Choose Image"
                      onChange={uploadFileHandler}
                    ></input>
                    {loadingUpload && <LoadingBox></LoadingBox>}
                    {errorUpload && (
                      <MessageBox variant="danger">{errorUpload}</MessageBox>
                    )}
                  </div>
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Enter confirm password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                  <div>
                    <label />
                    <br></br>
                    <button className="btn btn-primary form-control" type="submit">
                      Register
          </button>
                  </div>
                  <div>
                    <label />
                    <div>
                      Already have an account?{' '}
                      <Link to={`/account/signin?redirect=${redirect}`}>Sign-In</Link>
                    </div>
                  </div>
                </div>
              </form>
            </center>
          </div>
          <br></br>
        </section>

      </main>
    </div>
  );
}
