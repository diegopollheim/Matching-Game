import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  window.handleClick = (event) => {
    const $origin = event.target;
    const $cardPai = $origin.closest(".card-front-back");

    $cardPai.classList.toggle("active"); // Aplica e remove classe na tag 

  };

  return /*html*/ `
    <article class="card-front-back" onClick="handleClick(event)">
        <div class="front">
            ${CardGame()}
        </div>
        <div class="back">
          ${CardGame("javascript", "Logo do JavaScript")}
        </div>       
    </article>
    `;
}

export default CardFrontBack;
