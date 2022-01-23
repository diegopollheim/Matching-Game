import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack(icon, altIcon, id) {
  window.handleClick = (event) => {
    const $origin = event.target;
    const $cardPai = $origin.closest(".card-front-back");

    $cardPai.classList.toggle("active"); // Aplica e remove classe na tag 
    // $cardPai.classList.toggle("enable"); // Aplica e remove classe na tag 

    $cardPai.setAttribute("id", "cardVirado")
  
  };

  return /*html*/ `
    <article class="card-front-back" onClick="handleClick(event)">
        <div class="front">
            ${CardGame()}
        </div>
        <div class="back">
          ${CardGame(icon, altIcon)}
        </div>       
    </article>
    `;
}

export default CardFrontBack;
