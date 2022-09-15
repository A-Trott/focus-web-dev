// Selecting HTML Elements

// getElementById()
let header = document.getElementById("header");
// console.log(header);

// querySelector
const logoImg = document.querySelector("#headerLogoImage");
// console.log(logoImg);

const wordmark = (document.querySelector(".header__logo-wordmark").innerText ="hello");
// console.log(wordmark);

const servicesSection = document.querySelector(".services");
console.log(servicesSection);

const cardTitles = document.querySelectorAll(".services-card__title");
// console.log(cardList);

const servicesCard = document.querySelectorAll(".services-card");
console.log(servicesCard);

const serviceButtons = document.querySelectorAll(".services-card__button");

const cardImages = document.querySelectorAll(".services-card__image");

// CreateElement
const newParagraph = document.createElement("p");
newParagraph.innerText = "Here is my newest paragraph";

const heading2 = document.createElement("h2");
heading2.innerText = "This is my H2";

const myDiv = document.createElement("div");
myDiv.innerHTML =
  "<h4>Multiple elements in this div</h4> <p>This is a p tag inside of a div</p>";

const myButton = document.createElement("button");
myButton.innerText = "Click Me";

const heroTitle = document.querySelector(".hero__title");

const input = document.querySelector("#changeH1");
// let inputValue = input.value;

// Event Listener

input.addEventListener("change", (inputValue) => {
  alert(inputValue);
  heroTitle.innerText = inputValue;
});

myButton.addEventListener("click", () => {
  for (i = 0; i < cardTitles.length; i++) {
    // InnerText
    cardTitles[i].innerText = "This is a service";

    // style Attribute
    servicesCard[i].style.backgroundColor = "red";

    //   appendChild nodeList
    servicesCard[i].appendChild(newParagraph.cloneNode(true));

    // Attributes
    cardImages[i].src =
      "https://technologycouncil.ca/wp-content/uploads/2021/02/head_white.png";
    cardImages[i].alt = "This is the FNTC Logo";

    // classList
    cardImages[i].classList.add("header__logo-image");
    serviceButtons[i].classList.add("services-card__button--dark");
  }
});

// appendChild
servicesSection.appendChild(heading2);
servicesSection.appendChild(myDiv);
myDiv.appendChild(myButton);

// for (i = 0; i < cardTitles.length; i++) {
//   // InnerText
//   cardTitles[i].innerText = "This is a service";

//   // style Attribute
//   servicesCard[i].style.backgroundColor = "red";

//   //   appendChild nodeList
//   servicesCard[i].appendChild(newParagraph.cloneNode(true));

//   // Attributes
//   cardImages[i].src =
//     "https://technologycouncil.ca/wp-content/uploads/2021/02/head_white.png";
//   cardImages[i].alt = "This is the FNTC Logo";

//   // classList
//   cardImages[i].classList.add("header__logo-image");
//   serviceButtons[i].classList.add("services-card__button--dark");
// }
