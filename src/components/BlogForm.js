import React, {useState} from 'react';
import Axios from "axios";


function BlogForm() {



    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Experiences");
    const [myFile, setMyFile] = useState();

    const submitBlog = () => {
      const data = new FormData();
 
      data.append("file", myFile);
      data.append("upload_preset", "hpixc0wx")
      Axios.post("https://api.cloudinary.com/v1_1/sabhya/image/upload", data ).then((response)=>{
  
       

        Axios.post("https://blog-projectly.herokuapp.com/addblog",
        {content: content, title: title, category: category, imgurl: response.data.url}
        , {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            }
        }).then((response) => {
            if(response.data.successStatus){
                console.log("success")
            }
            else{
           
            }
        })


      })


    }
    return (
        <div>
              <h1
          style={{
            fontFamily: "Dongle , sans-serif",
            fontSize: "60px",
            color: "white",
         
  position: 'sticky',
  top: 0,
          }}
        >
         Write Your Blog...
        </h1>

         
  
        <div
          className="shadow p-3 mb-5 bg-white"
          style={{
         
            borderRadius: "24px",

            borderColor: "white",
            borderStyle: "solid",
        
          }}
        >
           <h5>Thumbnail</h5>
          <input type="file" id="file" onChange={(e) => {
            const file = e.target.files[0];
            setMyFile(file);

          }} />
          
          <br/>
          <br/>
            <h5>Category</h5>
            <select value={category} onChange={(e)=> setCategory(e.target.value)} className="form-select" aria-label="Default select example">
 
  <option value="Experiences">Experiences</option>
  <option value="Opinions">Opinions</option>
  <option value="News">News</option>
</select>
<br/>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label"><h5>Title</h5></label>
  <input type="text" value={title}  onChange={(e)=> setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Title goes here..."/>
</div>
<br/>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h5>Content</h5></label>
  <textarea className="form-control" value={content} onChange={(e)=> setContent(e.target.value)} id="exampleFormControlTextarea1" placeholder="Content goes here..." rows="20"></textarea>
</div>
<button className="btn btn-primary" onClick={submitBlog}>Submit Post</button>

        </div>
        </div>
    )
}

export default BlogForm
