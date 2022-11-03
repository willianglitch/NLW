function createGame(player01, hour, player02){
  return `
  <li>
    <img src="./assets/icon-${player01}.svg" alt="bandeira do ${player01}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player02}.svg" alt="bandeira de ${player02}">
  </li>
  `
}

function createCard(date, day, games){
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
        <header>
            <img src="./assets/logo.svg" alt="">
        </header>

        <main id="cards">
            ${createCard(
              "24/11",
              "quinta",
              createGame("brazil", "04:00", "cameroon")
            )}
            ${createCard(
              "28/11",
              "segunda",
              createGame("brazil", "04:00", "cameroon")
            )}
            ${createCard(
              "02/11",
              "sexta",
              createGame("brazil", "04:00", "cameroon")
            )}
        </main>
`

