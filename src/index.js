import "./style.css";
import renderNav from "./nav";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content");
// Create nav bar content

renderNav();
const navbar = document.querySelector("nav");

const btnContent = document.createElement("div");
btnContent.setAttribute("id", "btnContent");
content.appendChild(btnContent);

home();

navbar.childNodes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "home":
        home();
        break;
      case "menu":
        menu();
        break;
      case "contact":
        contact();
        break;
    }
  });
});
