import "./App.css";
import {useEffect} from 'react';
import Item from "./components/Item";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

import Register from "./components/Register";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./features/user";
import BlogForm from "./components/BlogForm";
import DetailView from "./components/DetailView";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    Axios.get("https://blog-projectly.herokuapp.com/auth", {
      headers :{
        accessToken : localStorage.getItem('accessToken')
      }
    } ).then((response) => {
 if(response.data.error){

 }
 else{
  dispatch(login({name: response.data.username, id: response.data.id, loggedin: true}))

 }
   

    })

  })
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <div className="row">
              <div className="col-md-1" style={{ marginTop: "10vh" }}></div>
              <div className="col-md-10" style={{ marginTop: "11vh" }}>
                <Item></Item>
              </div>
              <div className="col-md-1" style={{ marginTop: "10vh" }}></div>
            </div>
          </Route>

          <Route exact path="/login">
            <div className="row">
              <div className="col-md-12" style={{ marginTop: "10vh" }}>
                <Login></Login>
              </div>
            </div>
          </Route>

          <Route exact path="/register">
            <div className="row">
              <div className="col-md-12" style={{ marginTop: "10vh" }}>
                <Register></Register>
              </div>
            </div>
          </Route>
          <Route exact path="/addblog">
          <div className="row">
              <div className="col-md-1" style={{ marginTop: "10vh" }}></div>
              <div className="col-md-10" style={{ marginTop: "11vh" }}>
                <BlogForm></BlogForm>
              </div>
              <div className="col-md-1" style={{ marginTop: "10vh" }}></div>
            </div>
          </Route>

          <Route exact path="/post/:id">
          <div className="row">
              <div className="col-md-1" style={{ marginTop: "10vh" }}></div>
              <div className="col-md-10" style={{ marginTop: "11vh" }}>
                <DetailView></DetailView>
              </div>
              <div className="col-md-1" style={{ marginTop: "10vh" }}></div>
            </div>
          </Route>

  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
