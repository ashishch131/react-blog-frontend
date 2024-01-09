import { Link } from "react-router-dom"
import "./postitem.css"

const Postitem = ({ item }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="postItem">
      <div className="postImgCont">
      
      <img
        src={PF + item.photo}
        alt=""
        className="postImg"
      />
     
        <div className="postImgInfo">
          <div className="postImgCat">
        
          <span className="postCategory">{item.categories}</span>
          

          </div>

          <div className="postImgDate">
        <span className="postDate">{new Date(item.createdAt).toDateString()} </span>
     </div>
            
      </div>
      </div>
      <Link to={`/post/${item._id}`} >
        <h1 className="postTitle">{item.title }</h1>
      </Link>
      <p className="postDesc">{item.desc}
        
      </p>
        
    </div>
  )
}

export default Postitem