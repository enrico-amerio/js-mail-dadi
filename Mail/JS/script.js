const emailList = ["pippo@pluto.com","pippoepaperino@email.it", "giovannigiorgio@gmail.com"];
const userEmail = prompt('inserisci la tua email')


for (let i = 0; i < emailList.length; i++) {
  const email = emailList[i];
  console.log(email)
  
  if (userEmail === email) {
    document.querySelector('h1').innerHTML = `
    Bentornato ${emailList[i]}`
  }else{
    console.log('ciaone')
    document.querySelector('h1').innerHTML = `
    Sembra che tu non sia iscritto!
    <button>Clicca per iscriverti</button>
    `
  }

};
