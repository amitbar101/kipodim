import "./ItemsPage.css";
import Items from "../Items";
import { myHash } from "./ItemsInfo";


const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)

function ItemsPage() {

    const thePath = (getLastItem(window.location.href));
  return (
    <div>
      <h1 className="items-header">{myHash[thePath].header}</h1>
      <p className="items-info">
        {myHash[thePath].info}
      </p>
      <Items type={thePath}/>
    </div>
  );
}

export default ItemsPage;
