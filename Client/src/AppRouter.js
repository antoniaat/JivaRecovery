import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import HomePage from './containers/pages/home-page';
import AboutPage from './containers/pages/about-page';
import ContactPage from './containers/pages/contact-page';
import NewsPage from './containers/pages/news-page';
import RegisterPage from './containers/pages/register-page';
import LoginPage from './containers/pages/login-page';
import AutoListingPage from './containers/pages/auto-listing-page';

const AppRouter = () => (
  <div>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/home" component={HomePage} />

      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/blog" component={NewsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/auto-listing" component={AutoListingPage} />
      <Route path="/all" component={AutoListingPage} />

      {/* <Route component={NotFoundPage} /> */}
      <Redirect to="/home" />
    </Switch>
  </div>
);

export default AppRouter;
