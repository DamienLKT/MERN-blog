import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <img className="postImg" src={post.post_image} alt="" />
      <div className="postInfo">
        {/* <div className="postCats"> */}
          {/* <span className="postCat">            
              Music            
          </span>
          <span className="postCat">            
              Life            
          </span> */}
        {/* </div> */}
        <span className="postTitle">          
            {post.post_title}        
        </span>
        <hr />
        {/* <span className="postDate">1 hour ago</span> */}
      </div>
      <p className="postDesc">
        {post.post_description}
      </p>
    </div>
  );
}
