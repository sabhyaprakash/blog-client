import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';






export default function DetailView({match}) {
    let {id} = useParams();
    const [details, setDetails] = useState({});


    useEffect(() => {
        Axios.get(`https://blog-projectly.herokuapp.com/post/${id}`).then((response) => {
    
        console.log(response)
        setDetails(response.data);

        })
     
      } ,[])

  return <div>
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
   {details.title}...
 </h1>

  

 <div
   className="shadow p-3 mb-5 bg-white"
   style={{
  
     borderRadius: "24px",

     borderColor: "white",
     borderStyle: "solid",
 
   }}

 >
         <div class="row">
 
         <div class="col-md-5">
             <div class="row">
                <div class="col-md-12">

             
         <img
                    src={`/Images/${details.thumbnail}`}
                    style={{
                      borderRadius: "24px 24px 24px 24px",
                      height: "40vh",
                      width: '100%'

                    }}
                    className="img-fluid"
                    alt="..."
                  />
                     </div>
                     <div class="col-md-7"  style={{
     fontFamily: "Dongle , sans-serif",
     fontSize: "60px",
     color: "black",
  
   }}>
                      
                     </div>
             </div>

                  
      
     </div>
     <div class="col-md-6"  style={{
     fontFamily: "Dongle , sans-serif",
     fontSize: "30px",

   }}>
         {details.content}
     </div>
     
     
     



   </div>
   

 </div>
</>
  </div>
}
