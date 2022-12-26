import { Ele } from "./home";

const contact = () => {
  btnContent.textContent = "";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactInfo = new Ele("div", "info", ``);
  const anchor = new Ele("a", "anchor", "");

  const ourNumber = contactInfo.create();
  ourNumber.textContent = "call us on   ";

  const aNum = anchor.create();
  aNum.textContent = "19277";
  aNum.setAttribute("href", "tel:****");

  ourNumber.appendChild(aNum);
  contactContainer.appendChild(ourNumber);

  const ourEmail = contactInfo.create();
  ourEmail.textContent = "or email us on ";

  const aEmail = anchor.create();
  aEmail.textContent = "pizzaria@pizza.com";
  aEmail.setAttribute("href", "mailto:pizzaria@pizza.com");

  ourEmail.appendChild(aEmail);
  contactContainer.appendChild(ourEmail);
  btnContent.appendChild(contactContainer);
};

export default contact;
