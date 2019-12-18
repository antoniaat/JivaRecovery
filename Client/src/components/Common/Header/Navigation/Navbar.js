import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

// Import services
import { UserContext } from "../../../Context-Wrapper/ContextWrapper.js";
import userService from "../../../../services/user-service.js";

// Import styles
import "./Navbar.scss";

// Import images and assets
import logo from "../../../../assets/logo.png";
import { toast } from "react-toastify";

const Navbar = () => {
  // const { setUser, isLogged } = useContext(UserContext);
  const { user, setUser, isLogged, isAdmin } = useContext(UserContext);

  const handleLogoutClick = useCallback(async () => {
    await userService.logout();
    setUser(null);
    toast.success("Logged out successfully!");
  }, [setUser]);

  return (
    <div>
      {/* <UserContext.Consumer>{value => console.log(value)}</UserContext.Consumer> */}

      <div className="Navbar-main-navigation">
        <section>
          <img src={logo} alt="logo"></img>
        </section>
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/auto-listing">Auto Listing</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              {!isLogged ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : null}
              {console.log(isLogged)}

              {isLogged ? (
                <li>
                  <Link onClick={handleLogoutClick} to="/home">
                    Logout
                  </Link>
                </li>
              ) : null}

              <li>
                <Link to="/contact">
                  <button className="button">Contact</button>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
