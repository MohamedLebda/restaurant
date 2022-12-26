import Bg from "./bg-pizza.jpg";
import menu from "./menu";

const pizzaBg = new Image();
pizzaBg.src = Bg;

const home = () => {
  btnContent.textContent = "";
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("homeContainer");

  const homeContent = new Ele(
    "div",
    "home-content",
    `worlds best pizza napoletana`
  );
  homeContainer.appendChild(homeContent.create());

  const seeMenu = new Ele("button", "see-menu", "see menu");
  const seeMenuBtn = seeMenu.create();
  homeContainer.appendChild(seeMenuBtn);

  btnContent.appendChild(homeContainer);

  seeMenuBtn.addEventListener("click", () => {
    menu();
  });
};

class Ele {
  constructor(type, className, content) {
    this.type = type;
    this.className = className;
    this.content = content;
  }
  create() {
    const ele = document.createElement(`${this.type}`);
    ele.classList.add(`${this.className}`);
    ele.textContent = `${this.content}`;
    return ele;
  }
}

export default home;
export { Ele };
