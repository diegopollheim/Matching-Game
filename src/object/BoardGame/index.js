
import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";
import cards from "./data.js";
import ScoreBoard from "../ScoreBoard";
import Winner from "../../components/Winner";

export default function BoardGame() {


  // Funcao que embaralha as cartas
  function randonSort(oldCards) {
        var newCards = []
    while (newCards.length !== oldCards.length) {
      var i = Math.floor(Math.random() * oldCards.length)
     
      if (newCards.indexOf(oldCards[i]) < 0){
        newCards.push(oldCards[i])
      }
    }
    return newCards
    
  }

  // Cartas embaralahadas
  const cartas = randonSort(cards)

  var ptsPlayer1 = 0;
  var ptsPlayer2 = 0;


  //CONTEXTO PARA FUNCÃO
  window.boardGame = {};
  window.boardGame.handleClick = () => {

    let card1, card2
    function VerificaJogada() {

      card1 = $cardsVirados[0]
      card1 = card1.children[1]
      card1 = card1.children[0]
      card1 = card1.children[0]
      card1 = card1.getAttribute("alt")

      card2 = $cardsVirados[1]
      card2 = card2.children[1]
      card2 = card2.children[0]
      card2 = card2.children[0]
      card2 = card2.getAttribute("alt")

      if (card1 === card2) {
        return true
      }
      else {
        return false
      }
    }

    var players = document.querySelectorAll('#pts-player');
    var player1 = players[0]
    var player2 = players[1]

    // SORETEIA UM NUMARO ALEATORIO DE 0 - 5
    const numeroSorteado = Math.floor(Math.random() * cards.length);

    // CARDS VIRADOS
    let $cardsVirados = document.querySelectorAll("#cardVirado");
    // var cardsViradosArray = Array.prototype.slice.call($cardsVirados);
    // console.log("teste", cardsViradosArray)

    const HideCards = () => {

      $cardsVirados.forEach((card) => card.classList.remove("active"));
    }

    // ELEMENTO DA SETA
    const $setaPlayer = document.querySelector(".seta-point");

    const AlteraSetaPlacar = () => {
      const currentPlayer = $setaPlayer.getAttribute("data-currentplayer");
      $setaPlayer.setAttribute("data-currentplayer", currentPlayer === "1" ? "2" : 1)
    }

    //SOMA PONTUAÇÂO 
    const SomaPontos = () => {

      //DESABILITA CLICK NOS CARDS VIRADOS
      $cardsVirados[0].removeAttribute("onclick")
      $cardsVirados[1].removeAttribute("onclick")

      const currentPlayer = $setaPlayer.getAttribute("data-currentplayer");
      if (currentPlayer === "1") {

        ptsPlayer1++
        player1.setAttribute("data-points", ptsPlayer1)
        if (ptsPlayer1 >= 2 && currentPlayer === "1") {
          $setaPlayer.style.transform = "translateX(-42px)";
        }
        if (ptsPlayer1 >= 3 && currentPlayer === "1") {
          $setaPlayer.style.transform = "translateX(-27px)";
        }

      }

      if (currentPlayer === "2") {

        ptsPlayer2++
        player2.setAttribute("data-points", ptsPlayer2)
        if (ptsPlayer2 >= 2 && currentPlayer === "2") {
          $setaPlayer.style.transform = "translateX(42px)";
        }
        if (ptsPlayer2 >= 3 && currentPlayer === "2") {
          $setaPlayer.style.transform = "translateX(57px)";
        }
      }
    }

    if ($cardsVirados.length === 2) {
      setTimeout(function () {

        // VERIFICA A JOGADA ATUAL

        if (VerificaJogada()) {
          SomaPontos()

        }
        else {
          // TROCA JOAGADOR E DESVIRA AS CARTAS
          HideCards();
          AlteraSetaPlacar()
        }

        //REMOVE OS IDS PARA BUSCAR APENAS IDS "cardsVirados" na próxima jogada
        $cardsVirados[0].setAttribute("id", "")
        $cardsVirados[1].setAttribute("id", "")

      }, 450);
    }

    // Qtd de acertos
    var jogadas = document.querySelectorAll('.active')

    // Se o numero de cards ativos for igual a 6 existe um vencedor e encerra a partida
    if (jogadas.length == 6) {
      setTimeout(() => {
        var boardVencedor = document.getElementsByClassName('board-winner');
        boardVencedor[0].classList.add('vencedor');

      }, 600);
    };
  }

  const $winnerRestart = Winner(ptsPlayer1 > ptsPlayer2 ? "Player 1" : "Player 2")  
  const $htmlCards = cartas.map((card) => CardFrontBack(card.icon, card.altIcon));
 
 
  const $htmlCardsList = $htmlCards.join("");
  document.documentElement.style.overflow = 'hidden';
  document.body.scrool = "no;"

  return /*html*/ `
  ${ScoreBoard(ptsPlayer1, ptsPlayer2)}
  <section class="board-game" onClick="boardGame.handleClick()">
    <div class="board-game-content">
      ${$htmlCardsList}   
    </div>
    </section>

  <section class="board-winner">
    ${0 == 0 && $winnerRestart}  
  </section>  
  `;
}
