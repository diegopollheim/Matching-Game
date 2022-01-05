
import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";

export default function BoardGame(amountCards) {

  const $htmlFrontBack = CardFrontBack();
  const $htmlContent = $htmlFrontBack.repeat(amountCards); // Qtd de cards que mostrará na tela

  return /*html*/ `
  <section class="board-game">
  ${$htmlContent}
  </section>
  
  `;
}
