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
// fs.rename('./mapp/text3.txt', './mapp/text2.txt', err => {
//   if(err)
//     console.log(err);

//   console.log('Bytte namn på filen');
// })


// MAPPAR
// if(!fs.existsSync('./NyMapp')) {
//   fs.mkdir('./NyMapp', err => {
//     if (err)
//       console.log(err);

//     console.log('mapp skapad');
//   })
// } else {
//   fs.rmdir('./NyMapp', err => {
//     if (err)
//       console.log(err);

//     console.log('Mappen fanns redan så jag tar bort den..');
//   })
// }


// TA BORT FILER

// if(fs.existsSync('./mapp/text2.txt')) {

//   fs.unlink('./mapp/text2.txt', err => {
//     if (err)
//       console.log(err);
      
//     console.log('Tar bort filen');  
//   })

// }

const path = require('path');

// console.log(__dirname);
// fs.appendFile(path.join(__dirname, 'mapp', 'text.txt'), ' Nu lägger vi till text.... igen...', () => {
//   console.log('la till text.. igen..')
// })


// LÄSA / SKRIVA STORA FILER / STREAMS

const readStream = fs.createReadStream(path.join(__dirname, 'mapp', 'stor.txt'), { encoding: 'utf8' });
const writeStream = fs.createWriteStream(path.join(__dirname, 'mapp', 'stor2.txt'));


// readStream.on('data', buffer => {
//   // console.log('-------------------------------------------------------- NY DATA ------------------------------------------------------');
//   // console.log(buffer.toString());
//   // console.log(buffer);

//   writeStream.write('\n ----------------------------------------------------- NY DATA ------------------------------------------------------ \n');
//   writeStream.write(buffer);
//   console.log('skrev en blit till filen');
// })

// readStream.pipe(writeStream);