import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { FaChevronDown } from "react-icons/fa6";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import noImage from "../../assets/images.png";
import { MdMenu } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../utils/apiRequest";

const Navbar = () => {
  const [Active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const { currentUser, updateUser } = useContext(AuthContext);
  const isLargeScreen = useMediaQuery("(min-width: 1506px)");

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={Active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link to="/" className="linkss">
              <span className="text">PinPoint</span>
            </Link>
            <span className="dot">.</span>
          </div>
          {isLargeScreen && (
            <div className="links">
              <span>Home</span>
              <span>Features</span>
              <span>Contact</span>
              {!currentUser && <Link to="/login" className="linkss">Login</Link>}
              {!currentUser && <Link to="/register"><button className={Active || pathname !== "/" ? "buttonChange" : ""}>Join</button></Link>}
              {currentUser && (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src={currentUser.img || noImage} alt="" />
                  <div className="dropdown">
                    <span>{currentUser.username}</span>
                    <span>
                      <FaChevronDown />
                    </span>
                  </div>
                  {open && (
                    <div className="options">
                      <Link to="/list" className="linkss op_links">
                        Customers List
                      </Link>
                      <Link to="/add" className="linkss op_links">
                        Add Customer Pin
                      </Link>
                      <Link to="/plan" className="linkss op_links">
                        Package Plan
                      </Link>
                      <Link
                        to="/"
                        className="linkss op_links"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          {!isLargeScreen && (
            <div onClick={() => setMenu(!menu)}>
              <MdMenu className="icon" />
            </div>
          )}
        </div>
      </div>
      {/* Smaller screen menu */}
      {!isLargeScreen && (
        <div className="Small_screen">
          <div className={menu ? "menu toggle" : "menu"}>
            <span>
              <MdOutlineCancel
                className="icon"
                onClick={() => setMenu(!menu)}
              />
            </span>
            <Link
              to="/list"
              className="linkss"
              onClick={() => setMenu(!menu)}
            >
              Customers List
            </Link>
            <hr />
            <Link to="/add" className="linkss" onClick={() => setMenu(!menu)}>
              Add Customer Pin
            </Link>
            <hr />
            <Link to="/plan" className="linkss" onClick={() => setMenu(!menu)}>
              Package Plan
            </Link>
            <hr />
            {!currentUser && (
              <>
                <Link to="/register" className="linkss" onClick={() => setMenu(!menu)}>
                  Signup
                </Link>
                <hr />
              </>
            )}
            {!currentUser && (
              <>
                <Link to="/login" className="linkss" onClick={() => setMenu(!menu)}>
                  Login
                </Link>
                <hr />
              </>
            )}
            {currentUser && (
              <Link to="/" className="linkss" onClick={handleLogout}>
                Logout
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
