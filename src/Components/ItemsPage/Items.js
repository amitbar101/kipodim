
import React, { useState, useEffect } from "react";
import Cards from '../Cards/Cards';
import {getItems} from '../../api'


function Items(props) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    getFromServer();
  }, []);

  const getFromServer = async () => {
    const itemsFromServer = await getItems(props.type);
    setItems(itemsFromServer);
  };

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="items-container">
      <Cards itemsList={items}/>
    </div>
  );
}

export default Items;
