const emailList = ["pippo@pluto.com","pippoepaperino@email.it", "giovannigiorgio@gmail.com"];
const userEmail = prompt('inserisci la tua email')

document.querySelector('h1').innerHTML = "Accesso negato"

for (let i = 0; i < emailList.length; i++) {
  const email = emailList[i];
  console.log(email)
  
  if (userEmail === email) {
    document.querySelector('h1').innerHTML = `
    Bentornato ${emailList[i]}`
  }

};
