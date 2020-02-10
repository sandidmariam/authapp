import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx';
import MainContainer from '../../ui/containers/MainContainer.jsx'

// pages
import SingupPage from '../../ui/pages/SingupPage.jsx';
import LoginPage from '../../ui/pages/LoginPages.jsx';

export const renderRoutes = () => (
    <Router>
        <div>
            <Route path="/login" component={LoginPage}/>
            <Route path="/signup" component={SingupPage}/>
            <Route exact={true} path="/" component={AppContainer}/>
        </div>
    </Router>
);