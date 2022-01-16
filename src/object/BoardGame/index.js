
import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";
import cards from "./data.js";
import SetaPlacar from "../../components/SetaPlacar";
import ScoreBoard from "../ScoreBoard";

export default function BoardGame(amountCards) {



  //CONTEXTO PARA FUNCÃO
  window.boardGame = {};
  window.boardGame.handleClick = () => {


    // CARDS VIRADOS
    const $cardsVirados = document.querySelectorAll(".active");

    const HideCards = () => {
      $cardsVirados.forEach((card) => card.classList.remove("active"));

    }
    // ELEMENTO DA SETA
    const $setaPlayer = document.querySelector(".seta-point");

    const AlteraSetaPlacar = () => {
      const currentPlayer = $setaPlayer.getAttribute("data-currentplayer");
      $setaPlayer.setAttribute("data-currentplayer", currentPlayer === "1" ? "2" : 1)
    }

    if ($cardsVirados.length === 2) {
      setTimeout(function () {

        // VIRA E DESVIRA AS CARTAS
        HideCards();
        console.log("Board Game: ", ptsPlayer1)
        ptsPlayer1++
        console.log("Board Game: ", ptsPlayer1)


        // ALTERA A SETA ENTRE OS PLAYERS
        AlteraSetaPlacar()
      }, 600);

    }
  }


  var ptsPlayer1 = 3;
  var ptsPlayer2 = 2;

  const $htmlCards = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCardsList = $htmlCards.join("");

  return /*html*/ `
  ${ScoreBoard(ptsPlayer1, ptsPlayer2)}
  <section class="board-game" onClick="boardGame.handleClick()">
    <div class="board-game-content">
      ${$htmlCardsList}
    </div>
  </section>  
  `;
}
