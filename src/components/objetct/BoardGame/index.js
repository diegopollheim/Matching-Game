import CardGame from "../../CardGame"

export default function BoardGame(amountCards){

    
    const $htmlBoardGame = CardGame();
    const $htmlCardGame = $htmlBoardGame.repeat(amountCards) // Qtd de cards que mostrará na tela
    
    return $htmlCardGame
}