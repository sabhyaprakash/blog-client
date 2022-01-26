import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();

  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = () => {
    Axios.post("https://blog-projectly.herokuapp.com/login", {
      username: username,
      password: password
    }).then(response => {
      if (response.data.successStatus) {
        //save the auth token and redirect
        localStorage.setItem("accessToken", response.data.accessToken);
        dispatch(login({ name: response.data.currentUser.username, id: response.data.currentUser._id, loggedin: true }));
        history.push("/");
      } else {
        alert("credentials dont match");
      }
    });
  };
  return (
    <div>
      <>
        <div
          className="card mb-3 hover shadow-lg p-3 mb-5 bg-white rounded"
          style={{
            width: "60%",
            height: "70vh",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <div className="row g-0" style={{ height: "100%" }}>
            <div className="col-md-6">
              <img
                src="https://cdn.stocksnap.io/img-thumbs/960w/business-working_V8SXASKPBO.jpg"
                style={{ height: "100%", width: "100%" }}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className="card-title">
                  <center>
                    <b>LOGIN</b>
                  </center>
                </h1>
                <hr />
                <br />
                <p className="card-text">
                  Username
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Username..."
                    onChange={e => setUsername(e.target.value)}
                  ></input>
                  <br />
                Password
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Password..."
                    onChange={e => setPassword(e.target.value)}
                  ></input>
                </p>
                <input
                  type="button"
                  className="btn btn-outline-dark"
                  value="Login"
                  style={{ width: "100%" }}
                  onClick={onClickHandler}
                />
                <br />
                <br />
                <center>
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >
                    Don't have an account? Create one here
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
