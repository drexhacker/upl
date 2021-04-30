import React from 'react';
import Route from 'react-router';

export default (
    <Route>
        <Route path="/"></Route>
        <Route path="/services"></Route>
        <Route path="/about"></Route>
        <Route path="/team"></Route>
        <Route path="/contact"></Route>
        <Route path="/clients"></Route>
        <Route path="/projects"></Route>
        <Route path="/projects/:id"></Route>
        <Route path="/products"></Route>
        <Route path="/product/:id"></Route>
        <Route path="/account/signin"></Route>
        <Route path="/account/register"></Route>
        <Route path="/shipping"></Route>
        <Route path="/payment"></Route>
        <Route path="/placeorder"></Route>
        <Route
            path="/search/name/"
        ></Route>
        <Route
            path="/search/category/:category"
        ></Route>
    </Route>
);