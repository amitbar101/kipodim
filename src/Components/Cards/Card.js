import "./Cards.css";

function Card(props) {
  return (
    <div className="card">
      <img
        className="img"
        src={`/${props.imgURL}`}
        alt="item-card"
      />
      <h4 className="name">{props.name}</h4>
      <h4 className="price">₪{props.price}</h4>
    </div>
  );
}

export default Card;
