import CategoryListItems from "../categoryListItems/CategoryListItems";
import "./categories.css";
import { categories } from "../../dummyData";


const Categories = () => {
  return (
    <div className="category">
      <div className="categoryWrapper">
        {categories.map((item) => (
          <CategoryListItems key={item.id} title={item.title} logo={item.logo} />
           ))}
   </div>
    </div>
  );
};

export default Categories;
