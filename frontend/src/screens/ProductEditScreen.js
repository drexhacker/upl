import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, listProductCategories, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import { Link, Route } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import NavBar from '../components/NavBar';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [sizes, setSizes] = useState([{}]);
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProductCategories());
    if (successUpdate) {
      props.history.push('/admin/products');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setSizes(product.sizes);
      setImage(product.image);
      setCategory(product.category._id);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        image,
        category,
        countInStock,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');
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
      <NavBar
        isActive="#admin-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Product Edit</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/">Admin</Link></li>
                <li><Link to="/admin/products">Products</Link></li>
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
                      <br></br>
                      {/* TODO: IMPLEMENT SIZES... USE JOINED INPUT TO CREATE AN ARRAY OF SIZES. #HINT: Use a sub form then use js to monitor form on change */}
                      <div className="dropdown">
                        {/* <legend>Size List</legend> */}
                        <button class="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Size List</button>
                        <ul className="dropdown-menu">
                          {
                            sizes.map((size) => <li className="dropdown-item">
                              {size.size + ' ==> UGX.' + size.price}
                            </li>)
                          }
                        </ul>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="image">Image</label>
                      <input
                        id="image"
                        type="text"
                        className="form-control"
                        placeholder="Enter image"
                        readOnly
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
                      <label htmlFor="category">Category</label>
                      <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                        { loadingCategories ? <LoadingBox></LoadingBox> :
                          errorCategories ? (<MessageBox variant="danger">{errorCategories}</MessageBox>) :
                          categories.map((cat) => <option value={cat._id}>{cat.name}</option>)
                        }
                        
                      </select>
                    </div>
                    <div>
                      <label htmlFor="countInStock">Count In Stock</label>
                      <input
                        id="countInStock"
                        type="text"
                        className="form-control"
                        placeholder="Enter countInStock"
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                      ></input>
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
                    <div>
                      <br></br>
                      <label></label>
                      <button className="btn btn-primary w-100" type="submit">
                        Update Product
              </button>
                    </div>
                      <br></br>
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
