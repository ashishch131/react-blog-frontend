import "./singlepost.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Singlepost = () => {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user, dispatch } = useContext(Context);
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${path}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="singleWrapper">
        <img className="singleImg" src={PF + post.photo} alt="" />
        <div className="singleTitleInfo">
          {updateMode ? (
            <input
              className="singleTitleInput"
              autoFocus
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          ) : (
            <h1 className="singleTitle">{post.title} </h1>
          )}
          {post.username === user.username &&

          <div className="singleEdit">
            <i
              class="fa-regular fa-pen-to-square"
              onClick={() => setUpdateMode(true)}
            ></i>
            <i class="fa-solid fa-trash" onClick={handleDelete}></i>
          </div>
}
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
        {updateMode ? (
          <>
            <textarea
              className="singlePostDescInput"
              type="text"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>{" "}
            <br />
            <button className="postUpdateButton" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <p className="singlePostDesc">{post.desc}</p>
        )}
      </div>
    </div>
  );
};

export default Singlepost;
