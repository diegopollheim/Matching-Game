import "./style.css"

export default function Winner(props) {

  return /*html*/ `
  <div class="wrapper-winner">
    <div class="card-winner">
     <div class="content">
     <h1>${props}</h1>
     <h2>Winner!!!</h2>
     <div class="trofeu">
       <img src="/images/trofeu.png" />
     </div>
     </div>
     <button onClick="window.location.reload()" >restart</button>
    </div>
  </div>`;
}