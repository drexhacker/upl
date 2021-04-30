import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import {
  createService,
  deleteService,
  listServices,
} from '../actions/serviceActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import SearchBox from '../components/SearchBox';
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from '../constants/productConstants';

export default function ServiceListScreen(props) {
  const { pageNumber = 1 } = useParams();

  const sellerMode = props.match.path.indexOf('/seller') >= 0;
  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services, page, pages } = serviceList;

  const serviceCreate = useSelector((state) => state.serviceCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdService,
  } = serviceCreate;

  const serviceDelete = useSelector((state) => state.serviceDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = serviceDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      listServices()
    );
  }, [
    createdService,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (service) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteService(service._id));
    }
  };
  const createHandler = () => {
    props.history.push('/admin/services/create');
  };
  return (
    <div>
      <NavBar isActive="#admin-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Services Admin</h2>
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
              <ol>
                <li><Link to="/admin">Admin</Link></li>
                <li>Services</li>
              </ol>
            </div>

          </div>
        </section>
        <div className="row">
          <button type="button" className="btn btn-primary" onClick={createHandler}>
            Create Service
        </button>
        </div>

        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

        {loadingCreate && <LoadingBox></LoadingBox>}
        {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>DESCRIPTION</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service._id}>
                    <td>{service.name}</td>
                    <td>{service.description}</td>
                    <td>
                      
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() =>
                          props.history.push(`/admin/service/${service._id}/edit`)
                        }
                      >
                        <i className="bi bi-pencil-square"></i>
                    </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteHandler(service)}
                      >
                        <i className="bi bi-archive"></i>
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="row center pagination">
              {[...Array(pages).keys()].map((x) => (
                <Link
                  className={x + 1 === page ? 'active' : ''}
                  key={x + 1}
                  to={`/admin/services/pageNumber/${x + 1}`}
                >
                  {x + 1}
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
