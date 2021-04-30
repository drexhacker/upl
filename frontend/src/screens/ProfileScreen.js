import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import { Link, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setImage(user.image);
      if (user.seller) {
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          image,
          password,
          sellerName,
          sellerLogo,
          sellerDescription,
        })
      );
    }
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
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
              <h2>Profile</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/account/profile">Profile</Link></li>
              </ol>
            </div>

          </div>
        </section>
        <section className="inner-page pt-4">
          <div className="container">
            <center>
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <h1>User Profile</h1>
                </div>
                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                  <>
                    {loadingUpdate && <LoadingBox></LoadingBox>}
                    {errorUpdate && (
                      <MessageBox variant="danger">{errorUpdate}</MessageBox>
                    )}
                    {successUpdate && (
                      <MessageBox variant="success">
                        Profile Updated Successfully
                      </MessageBox>
                    )}

                    <div className="card col-lg-10 p-5">
                      <div>
                        <img src={image} alt={name} style={{borderRadius: "50%", width: "150px", height:"150px", border: "5px solid #007bff"}}></img>
                      </div>
                      <br></br>
                      <div>
                          <Link to="/orderhistory" class="btn btn-primary form-control">Your Orders</Link>
                             
                      </div>
                      <div>
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Enter name"
                          value={name}
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
                          label="Choose Image"
                          className="form-control"
                          onChange={uploadFileHandler}
                        ></input>
                        {loadingUpload && <LoadingBox></LoadingBox>}
                        {errorUpload && (
                          <MessageBox variant="danger">{errorUpload}</MessageBox>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="password">Password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          placeholder="Enter password"
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label htmlFor="confirmPassword">confirm Password</label>
                        <input
                          id="confirmPassword"
                          type="password"
                          className="form-control"
                          placeholder="Enter confirm password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        ></input>
                      </div>
                      {user.isSeller && (
                        <>
                          <h2>Seller</h2>
                          <div>
                            <label htmlFor="sellerName">Seller Name</label>
                            <input
                              id="sellerName"
                              type="text"
                              placeholder="Enter Seller Name"
                              value={sellerName}
                              onChange={(e) => setSellerName(e.target.value)}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="sellerLogo">Seller Logo</label>
                            <input
                              id="sellerLogo"
                              type="text"
                              placeholder="Enter Seller Logo"
                              value={sellerLogo}
                              onChange={(e) => setSellerLogo(e.target.value)}
                            ></input>
                          </div>
                          <div>
                            <label htmlFor="sellerDescription">Seller Description</label>
                            <input
                              id="sellerDescription"
                              type="text"
                              placeholder="Enter Seller Description"
                              value={sellerDescription}
                              onChange={(e) => setSellerDescription(e.target.value)}
                            ></input>
                          </div>
                        </>
                      )}
                      <div>
                        <label />
                        <br></br>
                        <button className="btn btn-primary form-control" type="submit">
                          Update
              </button>
                      </div>
                    </div>
                  </>
                )}

              </form>
              <br></br>
            </center>
          </div>
        </section>
      </main>
    </div>
  );
}
