
import { useEffect, useState } from "react";
import Postitem from "../postitem/Postitem";
import "./post.css";
import axios from 'axios';
import { useLocation } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  const {search} = useLocation();
 

  useEffect(() => {
    const getPost = async () => {
      try {
        
        const res = await axios.get("/posts" + search);
        setPost(res.data);
     
      } catch (error) {
        console.log(error)
      }
    }
    getPost();
  }, [post])
  
  return (
    <div className="post">
      <div className="postWrapper">
        {post.map((item) => (
          
        <Postitem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Post;
