const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/'; // the memepage Url

// fetch function for HTML & possibly more (the images)
// send request to parameter (a url)
// check if response is okay and not null return HTML in string format

async function getStuff(url) {
  await fetch(url)
    .then(
      // insert an if statement here to separate between website url and img url
      (response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Boom! Response not okay!'); // just in case the response is not okay
      }, // ,
      // (networkError) => {
      //  console.log(networkError.message);
      // },
    )
    .then((data) => {
      const regEx = /https:\/\/.*?\.jpg/g; // regular expression to filter all adresses starting with http and ending with .jpg

      const matches = data.match(regEx).slice(0, 10); // match for strings according to regex pattern but only the first 10
      console.log(matches);
    })
    .catch((error) => console.log(error.message));
}

await getStuff(memeUrl); // this await should not work but lint forces me to? :D

// fetch('https://memegen-link-examples-upleveled.netlify.app/');
