import "./Categories.css";

function CategoryCard(props) {
  return (
    <div className="category-card">
      <img
        className="category-img"
        src={process.env.PUBLIC_URL + `${props.imgURL}`}
        alt="category card"
      />
      <div className="category-name">{props.name}</div>
    </div>
  );
}

export default CategoryCard;
