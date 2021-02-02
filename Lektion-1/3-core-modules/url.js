const url = require('url');

const myUrl = new URL('http://www.minsida.se:5000/about.html?id=1234vbwdq&loggedIn=true');

// console.log(myUrl);

// console.log(myUrl.href);
// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.searchParams);
myUrl.searchParams.append('key', 'value');
// console.log(myUrl.searchParams);

myUrl.searchParams.forEach((val, key) => {
  console.log(`${key}: ${val}`)
})
