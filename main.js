import "./src/styles/settings/colors.css";
import "./src/styles/elements/global.css";
import BoardGame from "./src/object/BoardGame";

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "beforeend",
  `

${BoardGame(6)}

`
);
