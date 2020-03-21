import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import HomePage from "./containers/pages/HomePage.js";
import AboutPage from "./containers/pages/AboutPage.js";
import ContactPage from "./containers/pages/ContactPage.js";
import NewsPage from "./containers/pages/NewsPage.js";
import RegisterPage from "./containers/pages/RegisterPage.js";
import LoginPage from "./containers/pages/LoginPage.js";
import AutoListingPage from "./containers/pages/AutoListingPage.js";

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
      <Redirect to="/home"></Redirect>
    </Switch>
  </div>
);

export default AppRouter;
