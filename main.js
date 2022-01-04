import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import CardGame from "./src/components/CardGame";
import BoardGame from './src/components/objetct/BoardGame';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(3);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);