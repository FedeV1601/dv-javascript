const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

function startGame(event) {
  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;  
 

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);

  // Mostrar resultado
  playerChoiceElement.setAttribute("class", "animate__animated animate__backInUp");
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);
  mostrarContador();


  resultElement.textContent = winner;
}

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}
// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {
  console.log("playerChoice", playerChoice);
  console.log("computerChoice", computerChoice);
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      
      contPlayerWins++;
      mostrarContadorPartidas();
      return document.querySelector("#result").innerHTML = `You won with ${playerChoice} against ${computerChoice}`;
    } else if (playerChoice === computerChoice) {
      
      contDraws++;
      return document.querySelector("#result").innerHTML = `You draw with ${playerChoice} against ${computerChoice}`;
    } else {
      contPcWins++;
      mostrarContadorPartidas();
      return document.querySelector("#result").innerHTML = `You lost with ${playerChoice} against ${computerChoice}`;
    }
  }
  let contPlayerWins=0;
  let contPcWins=0;
  let contDraws=0;
  
  function mostrarContador(){
    
    return document.querySelector("#counter").innerHTML = `You won ${contPlayerWins} times, draw ${contDraws} and lost ${contPcWins}`;
  }
  
  let contPartidasGanadasPl=0;
  let contPartidasGanadasPC=0;
  
  function mostrarContadorPartidas(){
    
    if(contPlayerWins ==3){
        alert("Ganaste un set de 3 Partidas!!!");
        contPartidasGanadasPl++;
        contPlayerWins=0;
        contPcWins=0;
        contDraws=0;
        
      }
      if(contPcWins==3){
        alert("Ganaste un set de 3 Partidas!!!");
        contPartidasGanadasPC++;
        contPcWins=0;
        contPlayerWins=0;
        contDraws=0;
       
      }
      return document.querySelector("#winnerCounter").innerHTML = `Sets Won: You ${contPartidasGanadasPl} PC: ${contPartidasGanadasPC}`;
    }
  

  
