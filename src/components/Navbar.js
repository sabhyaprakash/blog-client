import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { login } from "../features/user";

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);
  console.log(user)


  let history = useHistory();

  const onHandleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(login( {name: "", id: 0, loggedin: false}));
    

   

    history.push("/login");
  };
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-md navbar-dark"
        style={{
          backgroundColor: "#36454F"
        }}
      >
        <div className="container-fluid">
          <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                >
                  All
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                >
                  Experiences
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                >
                  Opinions
                </Link>
              </li>

              <li className="nav-item active">
                <Link
                  className="nav-link"
                  to="/"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-auto">
            <Link
              className="navbar-brand mx-auto"
              to="/"
              style={{
                fontFamily: "Dongle , sans-serif",
                fontSize: "40px"
              }}
            >
              Projectly
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".dual-collapse2"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ms-auto">
            {user.loggedin && user.name==="kitti" ? <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/addblog"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                >
                  <i className="fa fa-plus" style={{fontSize: '15px'}} aria-hidden="true"></i>&nbsp;
                  Add Blog
                </Link>
              </li> : 
              "" }
             {user.loggedin? <li
                className="nav-item dropdown"
                style={{
                  marginRight: "5vh"
                }}
              >
                <Link
                  className="nav-link"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Profile
                </Link>
                <div
                  className="dropdown-menu"
                  style={{
                    padding: "15px"
                  }}
                  aria-labelledby="navbarDropdown"
                >
                  <h6
                    className="dropdown-item"
                    style={{
                      fontFamily: "Dongle , sans-serif",
                      fontSize: "30px"
                    }}
                  >
                    Name: {user.name}
                  </h6>
                </div>
              </li> : ""}
             {!user.loggedin? <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  style={{
                    fontFamily: "Dongle , sans-serif",
                    fontSize: "30px"
                  }}
                >
                  Login
                </Link>
              </li> : 
              <li className="nav-item">
              <Link
             
                className="nav-link"
                onClick={onHandleLogout}
                style={{
                  fontFamily: "Dongle , sans-serif",
                  fontSize: "30px"
                }}
              >
                Logout
              </Link>
            </li> }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
