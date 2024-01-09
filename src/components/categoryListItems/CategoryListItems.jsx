import { Link } from "react-router-dom"
import "./categoryListitems.css"
import { useEffect } from "react"

const CategoryListItems = ({ title, logo }) => {

return (
    <ul className="catLists">
      <li className="catListItems">
        <Link to={`/?cat=${title}`}>
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