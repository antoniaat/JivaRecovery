import React, { useContext } from "react";
import AuthorizedNav from "./authorized/AuthorizedNav";
import UnauthorizedNav from "./unauthorized/UnauthorizedNav";
import { AuthContext } from "../../../../ContextWrapper";
import "./Navbar.scss";

const Navbar = () => {
  const { auth } = useContext(AuthContext);

  return <>{auth ? <AuthorizedNav /> : <UnauthorizedNav />}</>;
};

export default Navbar;
