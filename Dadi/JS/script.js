
const userName = prompt('come ti chiami?')

const userNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, cpuNumber)

document.querySelector('h1').innerHTML = `
    Benvenuto ${userName}!
    
    `
document.getElementById('userDice').innerHTML = `
Il numero scelto per ${userName} è ${cpuNumber}


`
document.getElementById('computerDice').innerHTML = `
Il numero scelto per Computer è ${userNumber}


`
if (userNumber > cpuNumber) {
  document.getElementById('result').innerHTML = `
    Complimenti ${userName}, hai vinto contro il computer!
    
    `
}else if(cpuNumber > userNumber) {
  document.getElementById('result').innerHTML = `
    Ci dispiace ${userName}, questa volta ha vinto il computer!
    
    `
} else {
  document.getElementById('result').innerHTML = `
    C\'eri quasi ${userName}!
    La partita termina con un pareggio
    
    `
}