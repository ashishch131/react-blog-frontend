import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
const PF = "http://localhost:5000/images/";
const Navbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* navbar left side */}
        <div className="navLeft">
          <img src="/1.png" alt="logo" className="SocialLogo" />
          <img src="/2.png" alt="logo" className="SocialLogo" />
          <img src="/3.png" alt="logo" className="SocialLogo" />
          <img src="/4.png" alt="logo" className="SocialLogo" />
        </div>
        {/* navbar center */}
        <div className="navCenter">
          <Link to={"/"} className="pageLink">
            Home
          </Link>
          <Link to={"/about"}>
          <span className="pageLink">About</span>
          </Link>
          <Link to={"/contact"}>
          <span className="pageLink">Contact</span>
          </Link>
          <Link to={"/write"} className="pageLink">
            Write
          </Link>
          {user && (
            <span className="pageLink" onClick={handleLogout}>
              Logout
            </span>
          )}
        </div>

        {/* navbar right side */}
        <div className="navRight">
          {user ? (
            <Link to={"/setting"} className="navRight">
              <img
                className="navProfilePic"
                src={PF + user.profilePic}
                alt=""
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
          ) : (
            <>
              <Link to={"/login"} className="pageLink">
                Login
              </Link>
              <Link
                to={"/register"}
                className="pageLink"
                style={{ marginLeft: "20px" }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
