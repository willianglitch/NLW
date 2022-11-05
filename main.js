function createGame(player01, hour, player02){
  return `
  <li>
    <img src="./assets/icon-${player01}.svg" alt="bandeira do ${player01}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player02}.svg" alt="bandeira de ${player02}">
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games){
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
   "22/11",
   "terça",
    createGame("France", "16:00", "Australia")) +

  createCard(
   "24/11",
   "quinta",
    createGame("brazil", "16:00", "serbia")) +

  createCard(
   "25/11", 
   "sexta",
   createGame("england", "16:00", "unitedStates")) +

  createCard(
   "28/11",
   "segunda",
    createGame("brazil", "13:00", "switzerland")) +

  createCard(
   "02/12",
   "sexta",
    createGame("cameroon", "16:00", "brazil"))





