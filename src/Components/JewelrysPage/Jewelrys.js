import "./JewelrysPage.css";
import React, { useState, useEffect } from "react";

const demoDataJewelrys = [
  {
    name: "jew1",
    imgUrl: "j1.jpg",
    price: 245,
  },
  {
    name: "jew2",
    imgUrl: "j2.jpg",
    price: 322,
  },
  {
    name: "jew3",
    imgUrl: "j3.jpg",
    price: 12323,
  },
  {
    name: "jew4",
    imgUrl: "j4.jpg",
    price: 12323,
  },
  {
    name: "jew5",
    imgUrl: "j5.jpg",
    price: 12323,
  },
  {
    name: "jew6",
    imgUrl: "j6.jpg",
    price: 12323,
  },
];

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function Jewelrys() {
  const [jewelrys, setJewelrys] = useState(null);

  useEffect(() => {
    const myAsyncFunction = async () => {
      await sleep(1000);
      setJewelrys(demoDataJewelrys);
    };
    myAsyncFunction();
  }, []);

  if (!jewelrys) {
    return <div>Loading...</div>;
  }

  return (
    <div className="jewelrys-container">
      {jewelrys.map(({ name, imgUrl, price }, index) => {
          setTimeout(() => {
            document.getElementById(name).style.opacity = 1;
          }, (Math.abs(Math.sin(index * 1000) * 1000)))
          return (
        <div id={name} className="jewlery-card">
          <div>{name}</div>
          <img
            className="jewlery-img"
            src={process.env.PUBLIC_URL + `${imgUrl}`}
            alt={name}
          />
          <div>{price}</div>
        </div>
      )})}
    </div>
  );
}

export default Jewelrys;
