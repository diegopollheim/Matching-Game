
import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";
import cards from "./data.js";
import SetaPlacar from "../../components/SetaPlacar";

export default function BoardGame(amountCards) {

  //CONTEXTO PARA FUNCÃO
  window.boardGame = {};
  window.boardGame.handleClick = () => {

    // ELEMENTO DA SETA
    const $setaPlayer = document.querySelector(".seta-point");

    // CARDS VIRADOS
    const $cardsVirados = document.querySelectorAll(".active");

    const HideCards = () => {
      $cardsVirados.forEach((card) => card.classList.remove("active"));
    }
    
    const AlteraSetaPlacar = () =>{
      const currentPlayer = $setaPlayer.getAttribute("data-currentplayer");
      $setaPlayer.setAttribute("data-currentplayer", currentPlayer === "1" ? "2" : 1)
    }

    if ($cardsVirados.length === 2) {
      setTimeout(function () {
        
        // VIRA E DESVIRA AS CARTAS
        HideCards();

        // ALTERA A SETA ENTRE OS PLAYERS
       AlteraSetaPlacar()
      }, 600);

    }
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
