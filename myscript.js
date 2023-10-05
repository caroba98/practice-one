console.log("this is connected")

const card = document.querySelector(".column")
card.addEventListener ("click", () => {flipCard()})
// card.addEventListener ("click", () => {flipCardReverse()})

function flipCard() {
  // if card has the class "flip-card", we remove the class
  // else we add the class
  // if (condition) {

  // } else {
  //   card.classList.add("flip-card")
  // }
  card.classList.toggle("flip-card")
  console.log("Test")
}

// function flipCardReverse () {
//   card.classList.add("flip-card")
//   console.log("Test")
// }
