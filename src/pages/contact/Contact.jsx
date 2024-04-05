import { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [display, setDisplay] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/contact", { name, email, message });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="contact">
      <div className="contactWrapper">
        <div className="contactLeft">
          <img
            className="cntImg"
            src="https://cdn.dribbble.com/users/1162650/screenshots/14571630/media/39bf67c601edd9bb835189dbea352b56.jpg?resize=768x576&vertical=center"
            alt=""
          />
        </div>
        <div className="contactRight">
          <h1>
            Thanks for taking the time to reach out. How can I help you today?
          </h1>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="contactSubmit">Submit</button>
          </form>

          {error && <span style={{ color: "red" }}>Something went wrong!</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
