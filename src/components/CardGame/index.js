import "./style.css"

export default function CardGame (icon = "https://raw.githubusercontent.com/diegopollheim/Matching-Game/master/images/alura-pixel.png", alt = "Logo da alura" ) {
    return /*html*/`
        <article class="card-game">
            <img src="${icon}" alt="${alt}">
        </article>
    `;
}