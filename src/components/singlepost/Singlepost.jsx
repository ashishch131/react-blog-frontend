import "./singlepost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Singlepost = () => {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${path}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [path]);

  return (
    <div className="single">
      <div className="singleWrapper">
        <img className="singleImg" src={PF + post.photo} alt="" />
        <div className="singleTitleInfo">
          <h1 className="singleTitle">{post.title} </h1>
          <div className="singleEdit">
            <i class="fa-regular fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
        <div className="singleInfo">
          <Link to={`/?user=${post.username}`}>
            <span className="userInfo">
              Auther: <b>{post.username}</b>
            </span>
          </Link>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default Singlepost;
