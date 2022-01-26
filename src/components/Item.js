import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';
import {useHistory} from 'react-router-dom';


export default function Item() {
  let history = useHistory();
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    Axios.get("https://blog-projectly.herokuapp.com/allblogs").then((response) => {
      console.log(response);
      setAllPosts(response.data.reverse());
      

    
    })
 
  } ,[])
  return (
    <div>
      <>
   
          <h1
          style={{
            fontFamily: "Dongle , sans-serif",
            fontSize: "60px",
            color: "white",
         
  position: 'sticky',
  top: 0,
          }}
        >
          trending........
        </h1>

         
  
        <div
          className="shadow p-3 mb-5 bg-white"
          style={{
         
            borderRadius: "24px",

            borderColor: "white",
            borderStyle: "solid",
        
          }}
      
        >
         
              {
              allPosts.map((post)=> {
            return (
        
              
            
              <div
              className="card mb-2 hover shadow-lg p-0 mb-5 bg-white"
              key = {post._id}
              onClick={()=> {history.push(`/post/${post._id}`)}}
              style={{
                borderRadius: "24px"
              }}
            >
              
              <div className="row">
                <div className="col-md-3">
                  <img
                         src={post.thumbnail}
                    style={{
                      borderRadius: "24px 0px 0px 24px",
                  height: '20vh',
                  width: '100%'
                   
              
                    }}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5
                      className="card-title"
                      style={{
                        fontFamily: "Dongle , sans-serif",
                        fontSize: "35px"
                      }}
                    >
                      {post.title}
                    </h5>
  <br/><br/>
                    <p className="card-text">
                      <small className="text-muted">
                        Published on {post.date}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          
            
            )



          })}
  
          
  
        </div>
      </>
      
    </div>
    
  );
}
