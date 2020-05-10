import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import HomePage from "./containers/pages/home-page";
import AboutPage from "./containers/pages/about-page";
import ContactPage from "./containers/pages/contact-page";
import NewsPage from "./containers/pages/news-page";
import RegisterPage from "./containers/pages/register-page";
import LoginPage from "./containers/pages/login-page";
import ServicesPage from "./containers/pages/services-page";
import ProfilePage from "./containers/pages/profile-page";
import RequestPage from "./containers/pages/request-page";

const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/home" component={HomePage} />

    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/news" component={NewsPage} />
    <Route path="/blog" component={NewsPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/request" component={RequestPage} />

    <Redirect to="/home" />
  </Switch>
);

export default AppRouter;
