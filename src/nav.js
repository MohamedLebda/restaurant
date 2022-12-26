const content = document.querySelector("#content");

function renderNav() {
  const navbar = document.createElement("nav");

  const addNavContent = (name, id) => {
    const button = document.createElement("button");
    button.setAttribute("id", id);
    button.textContent = name;

    navbar.appendChild(button);
    content.appendChild(navbar);
  };

  const navContent = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Contact Us", id: "contact" },
  ];

  for (let btn of navContent) {
    addNavContent(btn.name, btn.id);
  }
}

export default renderNav;
