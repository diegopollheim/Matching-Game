import Placar from "../../components/Placar";
import PlayerName from "../../components/PlayerName";
import SetaPlacar from "../../components/SetaPlacar";

import "./style.css";

export default function ScoreBoard(ptPlayer1, ptPlayer2) {

console.log("SCORE BOARD: ", ptPlayer1)
  return /*html*/ `
  ${SetaPlacar(1)}
    <header class="score-board">
        ${PlayerName("Player1")}
        ${Placar(ptPlayer1 )}
        <p class="vs">vs</p>
        ${Placar(ptPlayer2)}
        ${PlayerName("Player2")}
    </header>
    `;
}
