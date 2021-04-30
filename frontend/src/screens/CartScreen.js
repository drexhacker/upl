import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { listProductCategories } from '../actions/productActions';
import MessageBox from '../components/MessageBox';
import NavBar from '../components/NavBar';
import { numberWithCommas } from '../utils';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1].split('&')[0])
    : 1;
  const sizeRes = props.location.search && props.location.search.split('=');
  const size = {
    size: sizeRes && sizeRes[2].split('_')[0].replace('%20', ' '),
    price: sizeRes && Number(sizeRes[2].split('_')[1])
  }
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, size));
    }
    dispatch(listProductCategories());
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/account/signin?redirect=/shipping');
  };
  return (
    <div>
      <NavBar isActive="#products-nav" cartItems={cartItems} categories={categories} loadingCategories={loadingCategories} errorCategories={errorCategories}></NavBar>
      <main id="main">

        <section className="breadcrumbs">
          <div className="container">

            <div className="d-flex justify-content-between align-items-center">
              <h2>Shopping Cart</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li>Cart</li>
              </ol>
            </div>

          </div>
        </section>
        <section className="shopping-cart">
          <div className="container mt-4">
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  {error && <MessageBox variant="danger">{error}</MessageBox>}
                  {cartItems.length === 0 ? (
                    <MessageBox>
                      Cart is empty. <Link to="/">Go Shopping</Link>
                    </MessageBox>
                  ) : (
                    <div className="items">
                      {cartItems.map((item) => (
                        <div className="product" key={Math.random()}>
                          <div className="row">
                            <div className="col-md-2">
                              <img className="img-fluid mx-auto d-block image" src={item.image} />
                            </div>
                            <div className="col-md-8">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-4 product-name">
                                    <div className="product-name">
                                      <a href="#">{item.name}</a>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <label style={{ fontWeight: "bold" }}>Size</label><br></br>
                                    <span>{item.size.size}</span>
                                  </div>
                                  <div className="col-md-2 quantity">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <select
                                      className="form-control"
                                      value={item.qty}
                                      onChange={(e) =>
                                        dispatch(
                                          addToCart(item.product, Number(e.target.value), item.size)
                                        )
                                      }
                                    >
                                      {[...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                          {x + 1}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                  <div className="col-md-3 price">
                                    <span>UGX.{item.size.price}</span>
                                  </div>
                                  <div className="col-md-1">
                                    <a href="#" onClick={() => removeFromCartHandler(item.product)} className="btn btn-lg btn-danger text-uppercase m-2"><i className="bi bi-archive"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="summary">
                    <h3>Summary ({cartItems.reduce((a, c) => a + c.qty, 0)} items)</h3>
                    <div className="summary-item"><span className="text">Subtotal</span><span className="price">UGX.{numberWithCommas(cartItems.reduce((a, c) => a + c.size.price * c.qty, 0))}</span></div>
                    <div className="summary-item"><span className="text">Tax Fees</span><span className="price">UGX.{numberWithCommas(Number(0.09 * cartItems.reduce((a, c) => a + c.size.price * c.qty, 0)))}</span></div>
                    <div className="summary-item"><span className="text">Shipping</span><span className="price">UGX.{numberWithCommas(Number(0.05 * cartItems.reduce((a, c) => a + c.size.price * c.qty, 0)))}</span></div>
                    <div className="summary-item"><span className="text">Total</span><span className="price">UGX.{numberWithCommas(Number(cartItems.reduce((a, c) => a + c.size.price * c.qty, 0) + Number(0.15 * cartItems.reduce((a, c) => a + c.size.price * c.qty, 0))) + Number(0.09 * cartItems.reduce((a, c) => a + c.size.price * c.qty, 0)))}</span></div>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={checkoutHandler} disabled={cartItems.length === 0}>Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
