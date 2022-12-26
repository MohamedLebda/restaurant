import { Ele } from "./home";
import Original from "./original-pizza.jpg";
import Pepperoni from "./pepperoni-pizza.jpg";

const originalPizza = new Image();
originalPizza.classList.add("original");
originalPizza.src = Original;

const pepperoniPizza = new Image();
pepperoniPizza.classList.add("pepperoni");
pepperoniPizza.src = Pepperoni;

const menu = () => {
  btnContent.textContent = "";
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const pizza = new Ele("div", "pizza", ``);
  const description = new Ele("div", "dis", ``);

  const pizzaOne = pizza.create();
  const descriptionOne = description.create();
  descriptionOne.textContent = `our original pizza`;
  pizzaOne.appendChild(descriptionOne);

  pizzaOne.appendChild(originalPizza);
  menuContainer.appendChild(pizzaOne);

  const pizzaTwo = pizza.create();
  const descriptionTwo = description.create();
  descriptionTwo.textContent = `pepperoni pizza`;
  pizzaTwo.appendChild(descriptionTwo);

  pizzaTwo.appendChild(pepperoniPizza);
  menuContainer.appendChild(pizzaTwo);

  btnContent.appendChild(menuContainer);
};

export default menu;
