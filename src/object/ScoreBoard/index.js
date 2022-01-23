import Placar from "../../components/Placar";
import PlayerName from "../../components/PlayerName";
import SetaPlacar from "../../components/SetaPlacar";

import "./style.css";

export default function ScoreBoard() {


  return /*html*/ `
  ${SetaPlacar(1)}
    <header class="score-board">
        ${PlayerName("Player1")}
        ${Placar()}
        <p class="vs">vs</p>
        ${Placar()}
        ${ PlayerName("Player2") }
    </header >
    `;
}