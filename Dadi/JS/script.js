
const userName = prompt('Come ti chiami?')
const btnPlay = document.getElementById('press-to-play')

document.querySelector('h1').innerHTML = `
    Benvenuto ${userName}!
    
    `



btnPlay.addEventListener("click", function() {
  const userNumber = Math.floor(Math.random() * 6) + 1;
  const cpuNumber = Math.floor(Math.random() * 6) + 1;
  console.log(userNumber, cpuNumber)
  
  document.getElementById('userDice').innerHTML = `
  Il numero estratto per ${userName} è <b>${userNumber}</b>
  
  
  `
  document.getElementById('computerDice').innerHTML = `
  Il numero estratto per Computer è <b>${cpuNumber}</b>
  
  
  `
  if (userNumber > cpuNumber) {
    document.getElementById('result').innerHTML = `
    Complimenti ${userName}, hai vinto contro il Computer!
    <img class="emoji" src="https://static.wixstatic.com/media/e6f56d_a2b47380e8504300bfb2844e4a8a5159~mv2.gif" alt="">

    
    `
  }else if(userNumber < cpuNumber) {
    document.getElementById('result').innerHTML = `
    Ci dispiace ${userName}, questa volta ha vinto il Computer!
    <img class="emoji" src="https://media1.tenor.com/m/nRcjFCeXtPIAAAAC/sad-banana.gif" alt="">

    `
  } else {
    document.getElementById('result').innerHTML = `
    C\'eri quasi ${userName}!
    La partita termina con un pareggio
    <img class="emoji" src="https://media1.tenor.com/m/xsvqUaK8Z2AAAAAC/sport-exercise.gif" alt="">

    `
  }
  btnPlay.innerText = "Gioca Ancora"
  
});