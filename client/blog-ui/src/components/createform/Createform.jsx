import "./createform.css";

const Createform = () => {
  return (
    <div className="createForm">
      <div className="createFormTitle">
        <span className="createFormTitleLg">Create Post</span>
      </div>
      
      <div className="inputbox">
        <input type="text"/>
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
          <span className="createFormSm">Post</span>
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