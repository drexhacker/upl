import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';
import { getMobileMenu } from '../utils';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

export default function NavBar(props) {
  const { isActive, categories, loadingCategories, errorCategories, cartItems } = props;
  const addActive = () => {
    document.querySelector(isActive).classList.add('active');
  }

  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const signoutHandler = () => {
    dispatch(signout());
  };
  useEffect(() => {
    addActive();
  }, [addActive])
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <Link to="/">
          <img src="/logo.svg" alt="" className="img-fluid" style={{ maxHeight: "70px", maxWidth: "70px" }}/>
          </Link>
          <nav id="navbar" className="navbar navbary">
            <ul>
              <li><Link id="home-nav" className="nav-link scrollto" to="/">Home</Link></li>
              <li><Link id="about-nav" className="nav-link" to="/about">About</Link></li>
              <li><Link id="services-nav" className="nav-link" to="/services">Services</Link></li>
              <li className="dropdown"><Link id="projects-nav" to="/projects"><span>Projects</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li><Link to="/projects/completed">Completed</Link></li>
                <li><Link to="/projects/ongoing">Ongoing</Link></li>
              </ul></li>
              <li><Link id="team-nav" className="nav-link" to="/team">Team</Link></li>
              <li className="dropdown"><Link id="products-nav" to="/products"><span>Products</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  {
                    loadingCategories ? (<li><a href="#">loading</a></li>)
                      : errorCategories ? (<li><a href="#">{errorCategories}</a></li>)
                        : (
                          <>
                            {categories.length === 0 && <li><a>No Product Category Found</a></li>}
                            {categories.map((category) => (
                              <li key={category._id}><Link to={"/search/category/" + category._id}>{category.name}</Link></li>
                            ))}
                          </>
                        )
                  }
                </ul>
              </li>
              <li><Link id="contact-nav" className="nav-link" to="/contact">Contact</Link></li>
              { userInfo && userInfo.isAdmin ? <li className="dropdown"><Link id="admin-nav" to="/">Admin <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li><Link to="/admin/projects">Projects</Link></li>
                <li><Link to="/admin/products">Products</Link></li>
                <li><Link to="/admin/services">Services</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
                <li><Link to="/admin/orders">Orders</Link></li>
              </ul>
              </li> : <></> }

              <Link to="/cart" className="nav-link p-2"><i className="bi bi-cart2 cart-icon"></i>{
                cartItems.length > 0 && (
                  <span className="cart-flag">{cartItems.length}</span>
                )}</Link>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={getMobileMenu}></i>
          </nav>

        </div>
      </header>
      <div className='user-panel'>
        {userInfo ? (
          <>
            <Link to="/account/profile">
              <img src={userInfo.image} alt="" className="img-circle" />
            </Link>
            <Link to="/account/profile">
              {userInfo.name}
          </Link> |
          <a href="#"  onClick={signoutHandler}>
              Logout
          </a>
          </>) : (
          <>
            <Link to="/account/register">
              Register
          </Link> |
          <Link to="/account/signin">
              Signin
          </Link>
          </>
        )}
      </div>
    </div>
  );
}