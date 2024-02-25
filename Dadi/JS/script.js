const userName = prompt('Come ti chiami?');
const btnPlay = document.getElementById('press-to-play');
const imgPlayer = document.getElementById('img-player');
const imgComputer = document.getElementById('img-computer');
let playerScore = 0;
let computerScore = 0;
const audioDice = new Audio('audio/dice-142528.mp3');
const audioWin = new Audio('audio/mixkit-animated-small-group-applause-523.wav')
const audioLose = new Audio('audio/mixkit-horror-lose-2028.wav')

let playerCoins = 1000;
let cpuCoins = 1000;

document.getElementById('player-name').innerHTML = `
${userName}

`


btnPlay.addEventListener("click", function(){
  let playerBet = +document.getElementById('player-bet').value;
  const cpuBet = playerBet;
  const totalBet = cpuBet + playerBet;
  console.log(playerBet, cpuBet, totalBet)
  
    if (playerBet > 0 && playerCoins > 0 && playerBet <= playerCoins && cpuCoins > 0 && cpuBet <= cpuCoins ) {
      
      imgPlayer.setAttribute('src',`img/dice-game.gif` )
      imgComputer.setAttribute('src',`img/dice-game.gif` )
      audioDice.play()
      setTimeout(shuffle, 900);
      playerCoins = playerCoins - playerBet;
      cpuCoins = cpuCoins - playerBet;
      console.log(playerCoins, cpuCoins)
      document.getElementById('player-coins').innerHTML = `Le tue monete: ${playerCoins}`
      document.getElementById('cpu-coins').innerHTML = `Le monete del computer: ${cpuCoins}`
      document.getElementById('total-bet').innerHTML = `Posta in palio : ${totalBet}`
      document.getElementById('result').innerHTML = ""
  
  
      function shuffle() {
        const userNumber = Math.floor(Math.random() * 6) + 1;
        const cpuNumber = Math.floor(Math.random() * 6) + 1;
        console.log(userNumber, cpuNumber)
        imgPlayer.setAttribute('src',`img/${userNumber}.png` )
        imgComputer.setAttribute('src',`img/${cpuNumber}.png` )
        
        document.getElementById('user-dice').innerHTML = `
        Punteggio ${userName}: <b>${userNumber}</b>  `
    
        document.getElementById('computer-dice').innerHTML = `
        Punteggio Computer: <b>${cpuNumber}</b> `
    
        if(userNumber > cpuNumber && cpuCoins == 0){
          document.getElementById('result').innerHTML = `
          Complimenti ${userName}, hai vinto ${totalBet} monete!
          <img class="emoji" src="https://media.tenor.com/JMzBeLgNaSoAAAAi/banana-dance.gif" alt=""> `
  
          playerScore++
          document.getElementById('player-score').innerHTML = `${playerScore}`
          playerCoins = playerCoins + totalBet;
          document.getElementById('player-coins').innerHTML = `Le tue monete: ${playerCoins}`
          audioWin.play();
          setTimeout(message, 500);
          function message(){
            alert("Complimenti hai vinto! Ricarica la pagina per giocare di nuovo")

          }
          
        }else if(userNumber > cpuNumber) {
          document.getElementById('result').innerHTML = `
          Complimenti ${userName}, hai vinto ${totalBet} monete!
          <img class="emoji" src="https://media.tenor.com/JMzBeLgNaSoAAAAi/banana-dance.gif" alt=""> `
  
          playerScore++
          document.getElementById('player-score').innerHTML = `${playerScore}`
          playerCoins = playerCoins + totalBet;
          document.getElementById('player-coins').innerHTML = `Le tue monete: ${playerCoins}`
  
          console.log(playerCoins)
          
    
        }else if(userNumber < cpuNumber && playerCoins == 0){
          document.getElementById('result').innerHTML = `
          Ci dispiace ${userName}, il Computer vince ${totalBet} monete!
          <img class="emoji" src="https://media.tenor.com/P0SmYCRubbAAAAAj/sad.gif" alt=""> `
  
          computerScore++
          document.getElementById('computer-score').innerHTML = `${computerScore}`
          cpuCoins = cpuCoins + totalBet;
          document.getElementById('cpu-coins').innerHTML = `Le monete del computer: ${cpuCoins}`
          audioLose.play();
          setTimeout(message, 500);
          function message(){
            alert("Hai perso! Ricarica la pagina per giocare di nuovo")

          }

          console.log(cpuCoins)
        }else if(userNumber < cpuNumber) {
          document.getElementById('result').innerHTML = `
          Ci dispiace ${userName}, il Computer vince ${totalBet} monete!
          <img class="emoji" src="https://media.tenor.com/P0SmYCRubbAAAAAj/sad.gif" alt=""> `
  
          computerScore++
          document.getElementById('computer-score').innerHTML = `${computerScore}`
          cpuCoins = cpuCoins + totalBet;
          document.getElementById('cpu-coins').innerHTML = `Le monete del computer: ${cpuCoins}`
  
          console.log(cpuCoins)
  
        } else {
          document.getElementById('result').innerHTML = `
          C\'eri quasi ${userName}!
          La partita termina con un pareggio
          <img class="emoji" src="https://media.tenor.com/znj8eBpcBcgAAAAi/banana-yellow.gif" alt=""> `
  
          cpuCoins = cpuCoins + (totalBet / 2);
          document.getElementById('cpu-coins').innerHTML = `Le monete del computer: ${cpuCoins}`
        
          playerCoins = playerCoins + (totalBet / 2);
          document.getElementById('player-coins').innerHTML = `Le tue monete: ${playerCoins}`
  
          console.log(playerCoins, cpuCoins)
        }
       
        
      }
      
    }else if(cpuCoins == 0){
      alert("Il computer ha finito le monete ed è stato sconfitto! Ricarica la pagina per giocare di nuovo");

    }else if ( playerCoins == 0){
      alert("Sembra che tu abbia finito le monete! Ricarica la pagina per giocare di nuovo");
  
    }else if (playerBet > playerCoins){
      alert("Sembra che tu non abbia abbastanza monete, inserisci una scommessa valida per giocare! ");
  
    }else if(cpuBet > cpuCoins){
      alert("Il computer non ha abbastanza monete, inserisci una scommessa valida per giocare!");
  
    }else{
      alert("Inserire una scommessa valida per giocare!");
  
    }
})   
  
  

