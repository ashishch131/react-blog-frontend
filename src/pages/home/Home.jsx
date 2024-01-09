import Featured from "../../components/featured/Featured";
import Categories from "../../components/categories/Categories";
import Posts from "../../components/posts/Post";
import Sidebar from "../../components/sidebar/SideBar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Categories />
      <div className="homeContainer">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
