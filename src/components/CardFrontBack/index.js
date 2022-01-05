import CardGame from "../CardGame";

export default function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      ${CardGame()}
      ${CardGame()}
    </article>
    `;
}
