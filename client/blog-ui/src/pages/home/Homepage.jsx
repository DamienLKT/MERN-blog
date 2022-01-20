import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useEffect, useState } from "react";
import { publicRequest} from "../../axios/posts";
import { useLocation } from "react-router-dom";

const Hompage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await publicRequest.get("/posts");
      setPosts(res.data);
      console.log(res)
    };
    fetchPosts();
  },[]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
};

export default Hompage;
