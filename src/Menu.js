import React, { useState } from "react";
import list from "./list";
import Category from "./Category";
const allCategories = ["all", ...new Set(list.map((food) => food.category))];
export default function Menu() {
  const [menu, setMenu] = useState(list);
  const [category, setCategory] = useState(allCategories);
  const filterCategory = (category) => {
    if (category === "all") {
      setMenu(list);
      return;
    }
    const newList = list.filter((food) => food.category === category);
    return setMenu(newList);
  };
  return (
    <div>
      <Category category={category} filterCategory={filterCategory} />
      {menu.map((food) => {
        return (
          <article key={food.id} className="container">
            <img src={food.img} alt="food" className="images" />
            <div className="content">
              <h1 className="heading">{food.title}</h1>
              <p className="desc">{food.desc}</p>
            </div>
            <p className="price">$ {food.price}</p>
          </article>
        );
      })}
    </div>
  );
}
