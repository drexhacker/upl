import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsService, updateService } from '../actions/serviceActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { SERVICE_UPDATE_RESET } from '../constants/serviceConstants';
import NavBar from '../components/NavBar';
import { Route } from 'react-router';
import SearchBox from '../components/SearchBox';
import { Link } from 'react-router-dom';

export default function ServiceEditScreen(props) {
  const serviceId = props.match.params.id;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const serviceDetails = useSelector((state) => state.serviceDetails);
  const { loading, error, service } = serviceDetails;

  const serviceUpdate = useSelector((state) => state.serviceUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = serviceUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/admin/services');
    }
    if (!service || service._id !== serviceId || successUpdate) {
      dispatch({ type: SERVICE_UPDATE_RESET });
      dispatch(detailsService(serviceId));
    } else {
      setName(service.name);
      setImage(service.image);
      setDescription(service.description);
    }
  }, [service, dispatch, serviceId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateService({
        _id: serviceId,
        name,
        image,
        description,
      })
    );
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
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
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
      <NavBar isActive="#admin-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Service Edit</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Admin</Link></li>
                <li><Link to="/admin/services">Services</Link></li>
                <li>Edit</li>
              </ol>
            </div>

          </div>
        </section>
        <section className="innerpage">
          <div className="container">

            <center>
              <form className="form" onSubmit={submitHandler}>
                {loadingUpdate && <LoadingBox></LoadingBox>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                  <>
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
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        rows="3"
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <br />
                    <div>
                      <label></label>
                      <button className="btn btn-primary w-100" type="submit">
                        Update Service
                      </button>
                    </div>
                    <br />
                  </>
                )}
              </form>
            </center>
          </div>
        </section>
      </main>
    </div>
  );
}
