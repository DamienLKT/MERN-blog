import "./createform.css";
import {React} from 'react';
import axios from 'axios';

const Createform = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    const Post_Title = e.target.title.value;
    const Post_Description = e.target.content.value;
    const Post_image = e.target.image.value;
    const id = "61e91caefa9c4421158141a8";
    console.log(Post_Title);
    console.log(Post_Description);
    console.log(Post_image);
    
    try{
      axios.post('http://localhost:5000/api/posts', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        'Post_ID': id, 
        'Post_Description': Post_Description,
        'Post_Title': Post_Title,
        'Post_image': Post_image
      }
      }).then((resp) => {
        alert(JSON.stringify(resp));
      }).catch(err => {
        alert(JSON.stringify(err));
    })

    }catch{
        console.log('Error: ${err.message}');
    }

  }


  return (
    <div className="createForm">
      <div className="createFormTitle">
        <span className="createFormTitleLg">Create Post</span>
      </div>
      
      
      <div className="inputbox">
        <form onSubmit={handleSubmit} method='POST'>
        <span className="createFormTitleSm">Title</span>
        <br></br>
        <input type="text" name="title"/>
        <br></br>
        <br></br>
        <span className="createFormTitleSm">Post content</span>
        <br></br>
         <input type="text" name="content"/>
         <br></br>
         <br></br>
         <span className="createFormTitleSm">Image Link</span>
         <br></br>

         <input type="text" name="image"/>
         <br></br>
         <br></br>
         <button type="submit" className="button" onSubmit={handleSubmit}>
          <span className="createFormSm">Post</span>
        </button>

        </form>
        
      </div>

      <div className = "buttons-createpost">
        <button 
        type="button" 
        className="button">
          <span className="createFormSm">Add Image</span>
        </button>

        <button 
        type="button" 
        className="button">
          <span className="createFormSm">Return Home</span>
        </button>
      </div>

      <img
        className="backgroundImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      
    </div>
  );
};

export default Createform;