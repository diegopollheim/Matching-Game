import "./style.css";

export default function SetaPlacar(currentPlayer = 1) {
    return /*html*/`
        <div  class="seta">
            <div id="seta" class="seta-point" data-currentPlayer=${currentPlayer}>
                <img src="/images/SetaPoint.png"/>
            </div>
        </div>
`;
}
