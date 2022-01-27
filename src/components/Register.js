import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import Axios from "axios";
import Alert from "./Alert.js";



export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState(false);




  const onClickHandler = () => {
    Axios.post("https://blog-projectly.herokuapp.com/register", {username: username, email: email, password: password}).then((response)=>{
      console.log(response);
      setAlert(true);

   
    })
  }
    return (
        <div>
            <>
            {alert?
             <Alert message="Account Created Successfully!"></Alert>
             
          :
          ""
          }
           
            <div
          className="card mb-3 hover shadow-lg p-3 mb-5 bg-white rounded"
          style={{
            width: "60%",
            height: "75vh",
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
                <h1
                  className="card-title"
               
                >
                  <center><b>REGISTER</b></center>
                </h1>
                <hr />
                <br />
                <p className="card-text">
                Username
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Username..."
                    onChange={(e) => { setUsername(e.target.value) }}
                  ></input>
                  <br />
                  Email
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email..."
                    onChange={(e) => { setEmail(e.target.value) }}
                  ></input>
                  <br />
             Password
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Password..."
                    onChange={(e) => { setPassword(e.target.value) }}
                  ></input>
                </p>
                <input
                  type="button"
                  className="btn btn-outline-dark"
                  value="Register"
                  style={{ width: "100%" }}
                  onClick={onClickHandler}
                />
                <br />
                <br />
                <center>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "black",
               
                  }}
                >
                  Already have an account? Login here
                </Link>
                </center>
              </div>
            </div>
          </div>
        </div>


            </>
            
        </div>
    )
}
