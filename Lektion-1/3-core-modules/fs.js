const fs = require('fs');

// LÄSA FILER

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err)
//     console.log(err)

//   // console.log(data.toString())
//   console.log(data)
// })
// console.log('Det här ligger efter')


// SKRIVA FILER

// skriver till en fil
// fs.writeFile('./mapp/text.txt', 'Ny text.', () => {
//   console.log('Ändrade på texten')
// })

// lägger till i en fil
// fs.appendFile('./mapp/text.txt', ' Det här är text som vi har lagt till', () => {
//   console.log('la till text')
// })

// skriva till en ny fil
// fs.writeFile('./mapp/text3.txt', 'En ny fil.', () => {
//   console.log('skrev till filen');
// })


// DÖPA OM EN FIL
fs.rename('./mapp/text3.txt', './mapp/text2.txt', err => {
  if(err)
    console.log(err);

  console.log('Bytte namn på filen');
})