
import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";
import cards from "./data.js";

export default function BoardGame(amountCards) {

  //CONTEXTO PARA FUNCÃO
  window.boardGame = {};
  window.boardGame.handleClick = () => {
    console.log("Clicou");

    const $cardsVirados = document.querySelectorAll(".active");
    if ($cardsVirados.length === 2) {
      setTimeout(function () {
        $cardsVirados.forEach((card) => card.classList.remove("active"))
      }, 600);
    }
    console.log(cardsVirados.length);
  }


  const $htmlCards = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCardsList = $htmlCards.join("");

  console.log($htmlCardsList)
  return /*html*/ `
  <section class="board-game" onClick="boardGame.handleClick()">
    <div class="board-game-content">
      ${$htmlCardsList}
    </div>
  </section>  
  `;
}
