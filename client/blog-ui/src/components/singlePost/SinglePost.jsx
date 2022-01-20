import "./singlePost.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../../axios/posts";

const SinglePost = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getPost = async () => {
      const res = await publicRequest.get("/posts/" + path);
      setPost(res.data);
      console.log(res)
      // setTitle(res.data.title);
      // setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={post.Post_image}
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.Post_Title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {post.User_ID}
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.Post_Description}
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
