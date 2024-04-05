import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../../context/Context";
import axios from 'axios';

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [categories, setCategories] = useState([])
  const { user } = useContext(Context);

  const handleSubmit =async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    }
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/")
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="write">
      <div className="writeWrapper">
        {file && 
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
        }
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeGroup">
            <label htmlFor="fileInput">
              <i class="fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=> setFile(e.target.files[0])}/>
            <input
              className="writeInput"
              type="text"
              placeholder="Title"
              autoFocus={true}
              onChange={e=> setTitle(e.target.value)}
            />
          </div>
          <div className="writeGroup">
            <textarea
              className="writeInput"
              type="text"
              autoFocus={true}
              placeholder="Tell  your story.."
              onChange={e=> setDesc(e.target.value)}
            ></textarea>
          </div>
          <select name="Categories" onChange={(e)=> setCategories(e.target.value)} className="catSelect">
          <option disabled selected >Categories</option>
            <option value="Music">Music</option>
            <option value="Fashion">Fashion</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Coding">Coding</option>
            <option value="Sports">Sports</option>
            <option value="Culture">Culture</option>
            </select>
         
   
          <button className="publishBtn" type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default Write;
