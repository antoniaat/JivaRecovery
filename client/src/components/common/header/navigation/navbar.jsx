import "./navbar.scss";

import React, { useContext } from "react";
import AuthorizedNav from "./authorized/authorized-nav";
import UnauthorizedNav from "./unauthorized/UnauthorizedNav";
import { AuthContext } from "../../../../ContextWrapper";

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return <>{auth ? <AuthorizedNav /> : <UnauthorizedNav />}</>;
};

export default Navbar;
