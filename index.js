const memeUrl = 'https://memegen-link-examples-upleveled.netlify.app/'; // the memepage Url

async function getStuff(url) {
  // fetch function for HTML & possibly more (the images)

  await fetch(url) // send request to parameter (a url)
    .then(
      (response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Boom! Response not okay!');
      },
      (networkError) => {
        console.log(networkError.message);
      },
    )
    .then((data) => {
      const regEx = /https:\/\/.*?\.jpg/g; // regular expression to filter all adresses starting with http and ending with .jpg

      const matches = data.match(regEx);
      console.log(matches.slice(0, 10));
    })
    .catch((error) => console.log(error.message));
}

await getStuff(memeUrl); // this await should not work but lint forces me to? :D

// fetch('https://memegen-link-examples-upleveled.netlify.app/');
