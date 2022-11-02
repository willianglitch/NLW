function createCard(date, day){
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      <li>
        <img src="./assets/icon-brazil.svg" alt="">
        <strong>08:00</strong>
        <img src="./assets/icon-cameroon.svg" alt="">
      </li>
      <li>
        <img src="./assets/icon-brazil.svg" alt="">
        <strong>08:00</strong>
        <img src="./assets/icon-cameroon.svg" alt="">
      </li>
    </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="">
        </header>

        <main id="cards">
            ${createCard("24/11","quinta")}
            ${createCard("28/11","segunda")}
            ${createCard("02/11","sexta")}
        </main>
`

