import "./Cards.css";
import Card from "./Card";

function Cards(props) {
  return (
    <div className="cards-gallery">
      {props.itemsList.map((item) => (
        <Card name={item.name} price={item.price} imgURL={item.imgURL} />
      ))}
    </div>
  );
}

export default Cards;
