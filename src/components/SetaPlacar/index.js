import "./style.css";

export default function SetaPlacar(currentPlayer = 1) {
    return /*html*/`
        <div class="seta">
            <div class="seta-point" data-currentPlayer=${currentPlayer}>
                <img src="/images/SetaPoint.png"/>
            </div>
        </div>
`;
}
