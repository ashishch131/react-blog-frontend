import "./singlepage.css";
import SideBar from "../../components/sidebar/SideBar";
import Singlepost from "../../components/singlepost/Singlepost";

const Singlepage = () => {
  return (
    <div className="singlepage">
      <Singlepost />
      <SideBar/>
    </div>
  )
}

export default Singlepage