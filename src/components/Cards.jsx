import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [items, setItems] = useState(
    [
      { id: 1, img: "./img/html.png", state: "" },
      { id: 1, img: "./img/html.png", state: "" },
      { id: 2, img: "./img/css.png", state: "" },
      { id: 2, img: "./img/css.png", state: "" },
      { id: 3, img: "./img/js.png", state: "" },
      { id: 3, img: "./img/js.png", state: "" },
      { id: 4, img: "./img/scss.png", state: "" },
      { id: 4, img: "./img/scss.png", state: "" },
      { id: 5, img: "./img/react.png", state: "" },
      { id: 5, img: "./img/react.png", state: "" },
      { id: 6, img: "./img/vue.png", state: "" },
      { id: 6, img: "./img/vue.png", state: "" },
      { id: 7, img: "./img/angular.png", state: "" },
      { id: 7, img: "./img/angular.png", state: "" },
      { id: 8, img: "./img/nodejs.png", state: "" },
      { id: 8, img: "./img/nodejs.png", state: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [msg, setMsg] = useState("");

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].state = "correct";
      items[prev].state = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].state = "wrong";
      items[prev].state = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].state = "";
        items[prev].state = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    // items[id].state = "active";
    // setItems([...items]);
    if (prev === -1) {
      items[id].state = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <>
      <div className="container">
        {items.map((item, index) => (
          <Card item={item} key={index} id={index} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default Cards;
