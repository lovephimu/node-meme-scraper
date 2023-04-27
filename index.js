import fs from 'node:fs'; // import fs module to read or write files
import client from 'node:https';

const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/'; // the memepage Url
const folderPath = './memes';

// fetch function for HTML & possibly more (the images)
// translating response into text and saving it in responseText

const response = await fetch(memeUrl);
const responseText = await response.text();

// defining function declaration for filtering the responseText for image urls by using regex

function filterImageUrls(data) {
  const regEx = /https:\/\/.*?\.jpg/g; // regular expression for images urls

  const matches = data.match(regEx).slice(0, 10); // match according to regEx pattern
  return matches;
}

// defining function declaration for downloading images

function saveImage(urls, filepath) {
  client.get(urls, (res) => {
    res.pipe(fs.createWriteStream(filepath));
  });
}

// saving filtered image urls to an array

const filteredUrls = await filterImageUrls(responseText);

// looping through images and assigning download location and

let counter = 1;
const dec = 0;

for (let i = 0; i < filteredUrls.length; i++) {
  // console.log(filteredUrls[i]);
  counter = i + 1;

  if (i < 9) {
    saveImage(filteredUrls[i], folderPath + `/${dec}${counter}.jpg`);
  } else {
    saveImage(filteredUrls[i], folderPath + `/${counter}.jpg`);
  }
}

// async function getStuff(url) {
//   await fetch(url)
//     .then(
//       // insert an if statement here to separate between website url and img url
//       (response) => {
//         if (response.ok) {
//           return response.text();
//         }
//         throw new Error('Boom! Response not okay!'); // just in case the response is not okay
//       },
//     )
//     .then((data) => {
//       const regEx = /https:\/\/.*?\.jpg/g; // regular expression for images urls

//       const matches = data.match(regEx).slice(0, 10); // match according to regEx pattern
//       console.log(matches);
//       return matches;
//     })
//     .catch((error) => console.log(error.message));
// }

// console.log(await getStuff(memeUrl));

// fetch('https://memegen-link-examples-upleveled.netlify.app/');

// await fetch('https://api.memegen.link/images/keanu.jpg').then((result) =>
//   console.log(result),
// );
