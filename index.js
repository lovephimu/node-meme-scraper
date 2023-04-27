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
