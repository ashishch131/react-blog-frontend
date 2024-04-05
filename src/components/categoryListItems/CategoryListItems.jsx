import { Link } from "react-router-dom"
import "./categoryListitems.css"


const CategoryListItems = ({ title, logo }) => {

return (
    <ul className="catLists">
      <li className="catListItems">
        <Link className="catLink" to={`/?cat=${title}`}>
      <div className="iconContainer">
      {logo}
      </div>
              <span className="catText">{title }</span>
        </Link>
          </li>

  </ul>
  )
}

export default CategoryListItems