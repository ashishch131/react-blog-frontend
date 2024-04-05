import { useContext, useState } from "react";
import "./setting.css";
import { Context } from "../../context/Context";
import axios from "axios";

const PF = "http://localhost:5000/images/"
const Setting = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="setting">
      <div className="formWrapper">
        <form className="settingForm" onSubmit={handleSubmit}>
          <div className="fileUpload">
            <img
              className="settingImg"
              src={file ? URL.createObjectURL(file) : PF+ user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i class="fa-regular fa-user"></i>
            </label>
            <input
              type="file"
              style={{ display: "none" }}
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="settingInputBox">
            <label className="inputText">Username</label>
            <input
              type="text"
              className="settingInput"
              autoFocus="true"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="inputText">Email</label>
            <input
              type="email"
              className="settingInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="inputText">Password</label>
            <input
              type="password"
              className="settingInput"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="updatBtn" type="submit">
            Update
          </button>
          {success && (
            <span style={{ color: "tomato", marginTop: "20px" }}>
              Profile has been updated!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Setting;
