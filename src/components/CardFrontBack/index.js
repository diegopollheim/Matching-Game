import CardGame from "../CardGame";
import "./style.css";

export default function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
        <div class="front">
            ${CardGame()}
        </div>
        <div class="back">
          ${CardGame("javascript", "Logo do JavaScript")}
        </div>       
    </article>
    `;
}
