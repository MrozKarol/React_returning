import React from 'react';
import { Route , Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductsPage';
import ProductListPage from '../pages/ProductListPage'
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';


const Page = () => {
    return (
        <>
            <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contacts" component={ContactPage} />
            <Route path="/products" component={ProductListPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={ErrorPage} />
            </Switch>
            
        </>
    );
}

export default Page;