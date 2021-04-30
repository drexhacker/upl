import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProjectScreen from './screens/ProjectScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import SearchScreen from './screens/SearchScreen';
import { listProductCategories } from './actions/productActions';
import ProductsCenterScreen from './screens/ProductsCenterScreen';
import ServiceScreen from './screens/ServiceScreen';
import AboutScreen from './screens/AboutScreen';
import TeamScreen from './screens/TeamScreen';
import ContactScreen from './screens/ContactScreen';
import ClientsScreen from './screens/ClientsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import CompletedProjectsScreen from './screens/CompletedProjectsScreen';
import OngoingProjectsScreen from './screens/OngoingProjectsScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import Footer from './actions/footer';
import ServiceListScreen from './screens/ServiceListScreen';
import ServiceEditScreen from './screens/ServiceEditScreen';
import ProjectListScreen from './screens/ProjectListScreen';
import ServiceCreateScreen from './screens/ServiceCreateScreen';
import ProjectEditScreen from './screens/ProjectEditScreen';
import ProjectCreateScreen from './screens/ProjectCreateScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div>

        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/project/:id" component={ProjectScreen}></Route>
        <Route path="/service/:id" component={ServiceScreen}></Route>
        <Route path="/about" component={AboutScreen} exact></Route>
        <Route path="/team" component={TeamScreen} exact></Route>
        <Route path="/contact" component={ContactScreen} exact></Route>
        <Route path="/clients" component={ClientsScreen} exact></Route>
        <Route path="/projects" component={ProjectsScreen} exact></Route>
        <Route path="/projects/ongoing" component={OngoingProjectsScreen} exact></Route>
        <Route path="/projects/completed" component={CompletedProjectsScreen} exact></Route>
        <Route path="/products" component={ProductsCenterScreen} exact></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/account/signin" component={SigninScreen}></Route>
        <Route path="/account/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <PrivateRoute
          path="/account/profile"
          component={ProfileScreen}
        ></PrivateRoute>
        <Route
          path="/search/name/:name?"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name"
          component={SearchScreen}
          exact
        ></Route>
        <Route
          path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
          component={SearchScreen}
          exact
        ></Route>
        <AdminRoute
          path="/admin/products"
          component={ProductListScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/projects"
          component={ProjectListScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/projects/create"
          component={ProjectCreateScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/project/:id/edit"
          component={ProjectEditScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/services"
          component={ServiceListScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/services/create"
          component={ServiceCreateScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/service/:id/edit"
          component={ServiceEditScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/products/pageNumber/:pageNumber"
          component={ProductListScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/product/:id/edit"
          component={ProductEditScreen}
          exact
        ></AdminRoute>
        <AdminRoute
          path="/admin/orders"
          component={OrderListScreen}
          exact
        ></AdminRoute>
        <AdminRoute path="/admin/users" component={UserListScreen}></AdminRoute>
        <AdminRoute
          path="/admin/user/:id/edit"
          component={UserEditScreen}
        ></AdminRoute>

        {/* ###############----------- FOOTER SECTION -------------################## */}
        <Footer></Footer>

        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      </div>
    </BrowserRouter>
  );
}

export default App;
