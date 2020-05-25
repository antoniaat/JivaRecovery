import "./navbar.scss";

import React, { useContext } from "react";

import { AuthContext } from "../../../../ContextWrapper";
import NavHeader from "./nav-header/nav-header";
import AuthorizedNav from "./authorized/authorized-nav";
import UnauthorizedNav from "./unauthorized/unauthorized-nav";
import PageContentWrapper from "components/common/page-content-wrapper/page-content-wrapper";

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <PageContentWrapper>
        <div className="navbar-wrapper">
          <NavHeader />
          {auth ? <AuthorizedNav /> : <UnauthorizedNav />}
        </div>
      </PageContentWrapper>
    </nav>
  );
};

export default Navbar;
