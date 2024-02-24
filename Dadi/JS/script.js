const userName = prompt('Come ti chiami?');
const btnPlay = document.getElementById('press-to-play');
const imgPlayer = document.getElementById('img-player');
const imgComputer = document.getElementById('img-computer');
let playerScore = 0;
let computerScore = 0;
const audio = new Audio('audio/dice-142528.mp3');

document.getElementById('player-name').innerHTML = `
${userName}

`


btnPlay.addEventListener("click", function() {
  imgPlayer.setAttribute('src',`img/dice-game.gif` )
  imgComputer.setAttribute('src',`img/dice-game.gif` )
  audio.play()
   
  
  setTimeout(shuffle, 900);
  function shuffle() {
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const cpuNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber, cpuNumber)
    imgPlayer.setAttribute('src',`img/${userNumber}.png` )
    imgComputer.setAttribute('src',`img/${cpuNumber}.png` )
  
    document.getElementById('user-dice').innerHTML = `
    Punteggio ${userName}: <b>${userNumber}</b>

    `

    document.getElementById('computer-dice').innerHTML = `
    Punteggio Computer: <b>${cpuNumber}</b>

    `

    if (userNumber > cpuNumber) {
      document.getElementById('result').innerHTML = `
      Complimenti ${userName}, hai vinto contro il Computer!
      <img class="emoji" src="https://media.tenor.com/JMzBeLgNaSoAAAAi/banana-dance.gif" alt="">
      
      `
      playerScore++
      document.getElementById('player-score').innerHTML = `${playerScore}`
      

    }else if(userNumber < cpuNumber) {
      document.getElementById('result').innerHTML = `
      Ci dispiace ${userName}, questa volta ha vinto il Computer!
      <img class="emoji" src="https://media.tenor.com/P0SmYCRubbAAAAAj/sad.gif" alt="">
      
      `
      computerScore++
      document.getElementById('computer-score').innerHTML = `${computerScore}`
      
    } else {
      document.getElementById('result').innerHTML = `
      C\'eri quasi ${userName}!
      La partita termina con un pareggio
      <img class="emoji" src="https://media.tenor.com/znj8eBpcBcgAAAAi/banana-yellow.gif" alt="">
      
      `
    }
    btnPlay.innerText = "Gioca Ancora"
    
  }
  
});