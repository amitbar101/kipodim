import CategoryCard from "./CategoryCard";
import './Categories.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function Categories(props) {

    const categoriesList = props.categoriesList;
    const categoriesName = props.categoriesName;

  return (
    <div className="categories">
      {[...categoriesList, ...categoriesList, ...categoriesList, ...categoriesList, ...categoriesList, ...categoriesList].map((category) => (
        <Link to={`/${categoriesName}/${category.path}`}>
          <CategoryCard name={category.name} imgURL={category.imgURL} />
        </Link>
      ))}
    </div>
  );
}

export default Categories;
