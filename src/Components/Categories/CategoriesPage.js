import Categories from "./Categories";
import { myHash } from "./CategoriesList";

const getLastItem = (thePath) =>
  thePath.substring(thePath.lastIndexOf("/") + 1);

function CategoriesPage() {
  const thePath = getLastItem(window.location.href);
  return (
    <div>
      <p className="category-info">{myHash[thePath].header}</p>
      <Categories
        categoriesList={myHash[thePath].categories}
        categoriesName={thePath}
      />
    </div>
  );
}

export default CategoriesPage;
