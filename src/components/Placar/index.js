import "./style.css"

export default function Placar(points = 0) {
    return /*html*/`
    <div class="placar">
        <div class="placar-row" data-points=${points}>
            <div class="pointer"></div>
            <div class="pointer"></div>
            <div class="pointer"></div>
        </div>
    </div>
`;
}