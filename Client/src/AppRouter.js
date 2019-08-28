import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import HomePage from './containers/Pages/HomePage.js';
import AboutPage from './containers/Pages/AboutPage.js';
import ContactPage from './containers/Pages/ContactPage.js';
import NewsPage from './containers/Pages/NewsPage.js';
import NotFoundPage from './containers/Pages/NotFoundPage.js';

const AppRouter = () => (
    <div>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/home' component={HomePage} />

            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/news' component={NewsPage} />
            <Route path='/blog' component={NewsPage} />

            {/* <Route component={NotFoundPage} /> */}
            <Redirect to='/home'></Redirect>
        </Switch>
    </div>
)

export default AppRouter;